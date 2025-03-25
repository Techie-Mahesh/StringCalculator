This project is a JavaScript-based String Calculator, built following the Test-Driven Development (TDD) Kata approach. It includes a function that:

-- Accepts a string of numbers separated by commas, new lines (\n), or custom delimiters
-- Computes the sum of numbers and returns an integer
-- Throws an error for negative numbers
-- Supports custom delimiters in the format "//[delimiter]\n[numbers]"
-- Fully tested using Jest

Features

-- Handles empty input: "" → 0
-- Supports multiple numbers: "1,2,3" → 6
-- Handles newline delimiters: "1\n2,3" → 6
-- Supports custom delimiters: "//;\n1;2" → 3
-- Throws error for negative numbers: "-1,2" → "Negative numbers not allowed: -1"
-- Fully tested using Jest (TDD approach)
