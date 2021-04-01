// https://www.codewars.com/kata/54ff3102c1bad923760001f3

using System;
using System.Linq;

public static class Kata
{
    public static int GetVowelCount(string str)
    {
        const string vowels = "aeiou";
        return str.ToLower().Count(vowels.Contains);
    }
}

