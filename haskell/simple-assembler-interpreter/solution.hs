-- https://www.codewars.com/kata/58e24788e24ddee28e000053/train/haskell
module SimpleAssembler (simpleAssembler) where

import Data.Map.Strict (Map, adjust, insert, empty, (!))

type Register = String
type Registers = Map Register Int

numericString :: String -> Bool
numericString = all $ (flip elem) ('-':['0'..'9'])

data Value
  = Constant Int
  | FromRegister Register
  deriving (Eq, Show)

value :: String -> Value
value val
  | numericString val = Constant (read val :: Int)
  | otherwise = FromRegister val

getValue :: Registers -> Value -> Int
getValue regs val = case val of
  Constant n -> n
  FromRegister r -> regs ! r

data Operation
  = Move Register Value
  | Increment Register
  | Decrement Register
  | JumpIfNotZero Value Value
  deriving (Eq, Show)

operation :: [String] -> Operation
operation ("mov":r:val:[]) = Move r (value val)
operation ("inc":r:[]) = Increment r
operation ("dec":r:[]) = Decrement r
operation ("jnz":cond:steps:[]) = JumpIfNotZero (value cond) (value steps)
operation _ = undefined

operations :: [String] -> [Operation]
operations = map (operation . words)

setRegister :: Registers -> Register -> Value -> Registers
setRegister regs r val = insert r (getValue regs val) regs

incRegister :: Registers -> Register -> Registers
incRegister regs r = adjust succ r regs

decRegister :: Registers -> Register -> Registers
decRegister regs r = adjust pred r regs

data Step = Next | Jump Int
  deriving (Eq, Show)

nextLine :: Int -> Step -> Int
nextLine line step = case step of
  Next -> line + 1
  Jump n -> line + n

data ExecutionResult = ExecutionResult { registers :: Registers, step :: Step }
  deriving (Eq, Show)

resultOf :: Registers -> Step -> ExecutionResult
resultOf regs s = ExecutionResult { registers = regs, step = s }

execute :: Operation -> Registers -> ExecutionResult
execute (Move r val) regs = resultOf (setRegister regs r val) Next
execute (Increment r) regs = resultOf (incRegister regs r) Next
execute (Decrement r) regs = resultOf (decRegister regs r) Next
execute (JumpIfNotZero cond steps) regs = case getValue regs cond of
  0 -> resultOf regs Next
  otherwise -> resultOf regs (Jump (getValue regs steps))

run :: [Operation] -> Int -> Registers -> Registers
run allOps line regs = go indexedOps regs
  where
    indexedOps = zip [0..] allOps
    go :: [(Int, Operation)] -> Registers -> Registers
    go ops regs =
      case ops of
      [] -> regs
      (op:remOps) ->
        let result = execute (snd op) regs
        in case step result of
        Next -> go remOps (registers result)
        Jump n -> go (drop (fst op + n) indexedOps) (registers result)

simpleAssembler :: [String] -> Registers
simpleAssembler code = run ops 0 empty
  where ops = operations code

