# https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar() {
  str=$1
  len=$(expr $(expr length $str) - 2)
  echo ${str:1:len}
}
removeChar $1

