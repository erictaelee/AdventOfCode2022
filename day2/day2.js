/**
 * 
The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors)
plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won)
What would your total score be if everything goes exactly according to your strategy guide?
 
A - Rock
B - Paper
C - Scissors

X - Rock => 1
Y - Paper => 2
Z - Scissors => 3

lose => 0
draw => 3
win => 6

A X => 1 + 3 = 4
A Y => 2 + 6 = 8
A Z => 3 + 0 = 3
B X => 1 + 0 = 1
B Y => 2 + 3 = 5
B Z => 3 + 6 = 9
C X => 1 + 6 = 7
C Y => 2 + 0 = 2
C Z => 3 + 3 = 6

**/


const { readFileSync } = require('fs');

function totalScore(input) {
  const round = readFileSync(input, 'utf-8')
  roundSplit = round.split('\n')
  
  //part 1

  let sum = 0;
  for (let i = 0; i < roundSplit.length; i++) {
    if (roundSplit[i] === 'A X') sum += 4
    if (roundSplit[i] === 'A Y') sum += 8
    if (roundSplit[i] === 'A Z') sum += 3
    if (roundSplit[i] === 'B X') sum += 1
    if (roundSplit[i] === 'B Y') sum += 5
    if (roundSplit[i] === 'B Z') sum += 9
    if (roundSplit[i] === 'C X') sum += 7
    if (roundSplit[i] === 'C Y') sum += 2
    if (roundSplit[i] === 'C Z') sum += 6
  }

  console.log(sum) //11873
}


totalScore('./input.txt');

