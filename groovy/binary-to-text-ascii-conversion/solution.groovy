// https://www.codewars.com/kata/5583d268479559400d000064

class Kata {
    static def binaryToString(binary) {
        binary.replaceAll(/.{1,8}/, { s -> (char) Integer.parseInt(s, 2) })
    }
}

