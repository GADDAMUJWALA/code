function fizzBuzz(phoneNumber) {
  const sum = [...phoneNumber.toString()].reduce((acc, digit) => acc + parseInt(digit), 0);
  let output = '';
  for (let i = 1; i <= sum; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
      output += 'FizzBuzz ';
    } else if (i % 4 === 0) {
      output += 'Fizz ';
    } else if (i % 5 === 0) {
      output += 'Buzz ';
    } else {
      output += i + ' ';
    }
  }
  console.log(output.trim());
}
fizzBuzz('9390496934');
output:1 2 3 Fizz Buzz 6 7 Fizz 9 Buzz 11 Fizz 13 14 Buzz Fizz 17 18 19 FizzBuzz 21 22 23 Fizz Buzz 26 27 Fizz 29 Buzz 31 Fizz 33 34 Buzz Fizz 37 38 39 FizzBuzz 41 42 43 Fizz Buzz 46 47 Fizz 49 Buzz 51 Fizz 53 54 Buzz Fizz
