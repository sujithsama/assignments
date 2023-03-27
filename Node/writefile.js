function arithmetic_expression()
{
  // ((9+10)/5/2-(8*3))**2%6
  // replace __ with the final value of the above expression.
  //  let ari=((9+10)/5/2-(8*3))**2%6;
  return 1;
}

function logical_expression()
{
  let a = true;
  let b = false;
  let c = true;
  //(a && b) || (!a && c)
  // replace __ with either true or false by evaluating the above expression.
  //  let logical=(a && b) || (!a && c);
  return false;
}

function relational_expression()
{
  let a = 5;
  let b = 10;
  let c = 5;
  // (a < b) && (a <= c) || (a == c) && (a !== b)
  // replace __ with either true or false by evaluating the above expression.
   // let rel=(a < b) && (a <= c) || (a == c) && (a !== b);
  return true;
}

function ternary_expression()
{
  // (9+15>=23+1)?100:200;
  // replace __ with the value of the above expression.
   // let ter=(9+15>=23+1)?100:200;
  return 100;
}
console.log(arithmetic_expression());
console.log(logical_expression());
console.log(relational_expression());
console.log(ternary_expression());