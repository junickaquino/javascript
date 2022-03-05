/*
    SUMMARY: 
    Closure is "when you have a function defined inside of another function,
    that inner function has access to the variables and scope of the outer function
    even if the outer function finishes executing and those variables are no longer
    accessible outside of that function."

*/

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const newFunction = outerFunction("Marco is outside");
newFunction("Junick is inside");

/*

1. The outerFunction('outside') is called immediately when it is assigned to the 
    variable "newFunction". (That's how it works when a function is assigned to a 
    variable with (), if you didn't know this part, you would very confused).


2. Upon being called, outerFunction returns the function "innerFunction(innerVariable")
    which re-reassigns our variable "newFunction" to be InnerFunction(innerVariable)
    instead of outerFunction(outerVariable).


3. Then by calling our variable as newFunction('inside') we are calling 
    innerFunction('inside') which runs the console.log code. The closure
    is that innerFunction remembers and has access to the outerVariable
    parameter we originally set with outerFunction('outside'). Thus it 
    is able to console.log both 'outside' and 'inside' even though it 
    was called with just 'inside'. 

*/
