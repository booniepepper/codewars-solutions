// https://www.codewars.com/kata/54a6b43e478d8ee14c000a5d

import java.util.function.Function;

public class FunctionalProgramming {
  // Couldn't use Predicate type?
  public static Function<Student, Boolean> f = student -> 
    student.studentNumber == "js123" && student.getFullName().equals("John Smith");
}

