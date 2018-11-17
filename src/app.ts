// Object
const myObj = {
  myMethod() {
    console.log('Object', this);
  }  
};
myObj.myMethod()

// Function
function myFunction(text: string, arg2: string) {
    console.log('Function', this, text, arg2);
}
myFunction('ABC', 'DEF');
myFunction.call(myObj, 'ABC', 'DEF');

