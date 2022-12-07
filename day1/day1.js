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
  
  //sum top 3
  let sumTop3 = 0;
  for (let i = 0; i < 3; i++) {
    sumTop3 += sorted[i];
  }
  console.log(sumTop3) //213089

}

mostCalories('./input.txt');
