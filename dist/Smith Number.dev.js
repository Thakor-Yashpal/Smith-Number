"use strict";

/*Input  : n = 4
Output : Yes
Prime factorization = 2, 2  and 2 + 2 = 4
Therefore, 4 is a smith number

Input  : n = 6
Output : No
Prime factorization = 2, 3  and 2 + 3 is
not 6. Therefore, 6 is not a smith number

Input   : n = 666
Output  : Yes
Prime factorization = 2, 3, 3, 37 and
2 + 3 + 3 + (3 + 7) = 6 + 6 + 6 = 18
Therefore, 666 is a smith number

Input   : n = 13
Output  : No
Prime factorization = 13 and 13 = 13,
But 13 is not a smith number as it is not
a composite number
*/
//answer 
// JavaScript program to check whether a number is
// Smith Number or not.
var MAX = 10000; // array to store all prime less than and equal to 10^6

var primes = []; // utility function for sieve of sundaram

function sieveSundaram() {
  // In general Sieve of Sundaram, produces primes smaller
  // than (2*x + 2) for a number given number x. Since
  // we want primes smaller than MAX, we reduce MAX to half
  // This array is used to separate numbers of the form
  // i+j+2ij from others where 1 <= i <= j
  var LEN = Math.floor(MAX / 2) + 100;
  var marked = [];

  for (var i = 0; i < LEN; i++) {
    marked.push(0);
  } // Main logic of Sundaram. Mark all numbers which
  // do not generate prime number by doing 2*i+1


  for (var _i = 1; _i <= Math.floor((Math.sqrt(MAX) - 1) / 2); _i++) {
    for (var j = _i * (_i + 1) << 1; j <= Math.floor(MAX / 2); j = j + 2 * _i + 1) {
      marked[j] = 1;
    }
  } // Since 2 is a prime number


  primes.push(2); // Print other primes. Remaining primes are of the
  // form 2*i + 1 such that marked[i] is false.

  for (var _i2 = 1; _i2 <= Math.floor(MAX / 2); _i2++) {
    if (marked[_i2] == 0) {
      primes.push(2 * _i2 + 1);
    }
  }
} // Returns true if n is a Smith number, else false.


function isSmith(n) {
  var original_no = n; // Find sum the digits of prime factors of n

  var pDigitSum = 0;

  for (var i = 0; primes[i] <= Math.floor(n / 2); i++) {
    while (n % primes[i] == 0) {
      // If primes[i] is a prime factor,
      // add its digits to pDigitSum.
      var p = primes[i];
      n = Math.floor(n / p);

      while (p > 0) {
        pDigitSum += p % 10;
        p = Math.floor(p / 10);
      }
    }
  } // If n!=1 then one prime factor still to be
  // summed up;


  if (n != 1 && n != original_no) {
    while (n > 0) {
      pDigitSum = pDigitSum + n % 10;
      n = Math.floor(n / 10);
    }
  } // All prime factors digits summed up
  // Now sum the original number digits


  var sumDigits = 0;

  while (original_no > 0) {
    sumDigits = sumDigits + original_no % 10;
    original_no = Math.floor(original_no / 10);
  } // If sum of digits in prime factors and sum
  // of digits in original number are same, then
  // return true. Else return false.


  return pDigitSum === sumDigits;
} // Driver code
// Finding all prime numbers before limit. These
// numbers are used to find prime factors.


{
  sieveSundaram();
  console.log("Printing first few Smith Numbers using isSmith() ");

  for (var i = 1; i < 500; i++) {
    // console.log(i);
    if (isSmith(i)) {
      console.log(i);
    }
  }
} // The code is contributed by Gautam goel (gautamgoel962)
//# sourceMappingURL=Smith Number.dev.js.map
