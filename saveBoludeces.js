var fs = require('fs');

let name = 'TestName';
let otherData = 'TestOtherData';

fs.writeFile('./data.txt',
   `Name: ${name}\nOtherData: ${otherData}`
,()=>{
  console.log('Successfully saved');
})