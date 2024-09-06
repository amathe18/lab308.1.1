// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

const divideBy5(n1 % 5) == 2 (n2 % 5) ==3 (n3 % 5) ==4 (n4 % 5) ==1

const n1Biggest(n1 > n4)

(n1-n2) == -5 (-5 * n3) == -100 (-100/n4) == -25




  //part2

const Distance = 1500
const Budget =175
const PPGallon = 3
const speed1 = 55
const speed2 = 60 
const speed3 = 75
const MPG1 = 30
const MPG2 = 28
const MPG3 = 23

Distance / MPG1 == 50 
Distance / MPG2 == 54 
Distance / MPG3 == 65 

PPGallon * 50 == 150  < Budget
PPGallon * 54 == 172 < Budget
PPGallon * 65 == 195  > Budget

Distance / speed1 == 27.3
Distance / speed2 == 25
Distance / speed3 == 20

//1500 miles at 60mph makes the most sense



