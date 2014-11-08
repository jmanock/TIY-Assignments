/**
 * Check Writing
 */
 var expect = require('chai').expect,
 should = require('chai').should,
 assert = require('chai').assert;

 var ones = [' ', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

 var tens = [' ', 'Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

 var checkWrite = {
   toEnglish: function(value){

     value = Number(value).toFixed(2);
     var checkEnd = value.slice(-2) + '/100 dollars';
     var cash = value.slice(0,-3);
     var hundo = ' Hundred ';
     var thous = ' Thousand ';

     if(value < 20){
       return ones[cash] + ' ' + checkEnd;
     }else if(value < 100){
       if(value % 10 === 0){
         return tens[cash[0]] + ' ' + checkEnd;
       }else{
         return tens[cash[0]] + ' ' + ones[cash[1]] + ' ' + checkEnd;
       }
     }else if(value < 1000){
       if(value % 100 === 0){
         return ones[cash[0]] + hundo + checkEnd;
       }else{
         return ones[cash[0]] + hundo + 'and ' + tens[cash[1]] + ' ' + ones[cash[2]] + ' ' + checkEnd;
       }
     }else if(value < 10000){
       if(value % 1000 === 0){
         return ones[cash[0]] + thous + checkEnd;
       }else if(value[1] === '0' && value[2] === '0' && value[3] === '0'){
         return ones[cash[0]] + thous + checkEnd;
       }else if(value[1] === '0' && value[2] > '0' && value[3] === '0'){
         return ones[cash[0]] + thous + 'and ' + tens[cash[2]] + ' ' + checkEnd;
       }else{
         return ones[cash[0]] + thous + ones[cash[1]] + hundo + 'and ' + tens[cash[2]] + ' ' + ones[cash[3]] + ' ' + checkEnd;
       }
     }
   }
 };

 console.log(checkWrite.toEnglish(1125));

describe('checkWrite.toEnglish() should convert # to String', function(){
  it('Should give 14.55 as if it was written on a check', function(){
    assert.equal(checkWrite.toEnglish(14.55), 'Fourteen 55/100 dollars');
  });

  it('Should give 19.67 as if it was written on a check', function(){
    assert.equal(checkWrite.toEnglish(19.67), 'Nineteen 67/100 dollars');
  });

  it('Should give 195.67 as if it was written on a check', function(){
    assert.equal(checkWrite.toEnglish(195.67), 'One Hundred and Ninety Five 67/100 dollars');
  });

  it('Should give 1954.67 as if it was written on a check', function(){
    assert.equal(checkWrite.toEnglish(1954.67), 'One Thousand Nine Hundred and Fifty Four 67/100 dollars');
  });

  it('Should give 9954.67 as if it was written on a check', function(){
    assert.equal(checkWrite.toEnglish(9954.67), 'Nine Thousand Nine Hundred and Fifty Four 67/100 dollars');
  });
});
