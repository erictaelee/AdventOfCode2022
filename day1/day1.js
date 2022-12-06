const {readFileSync} = require('fs');

function mostCalories(filename) {
  const array = readFileSync(filename, 'utf-8');

  let sumArray = array.split('\n\n').map((el) => {
    return el.split('\n').reduce((a, b) => {
      return a + +b
    },0)
  })
  let sorted = sumArray.sort((a, b) => {
    return b - a
  })

  console.log(sorted[0]); //72718

}

mostCalories('./input.txt');
