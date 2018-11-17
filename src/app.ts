// Object
const myObj = {
  myMethod() {
    console.log('Object', this);
  }  
};
myObj.myMethod()

// Function
function myFunction(...text: string[] ) {
    console.log('Function', this, text);
}
myFunction('ABC', 'DEF');
myFunction.call(myObj, 'ABC', 'DEF', 'GHI');
myFunction.apply(myObj, ['ABC', 'DEF']);
