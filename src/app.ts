// Object
const myObj = {
  myMethod() {
    console.log('Object', this);
  }  
};
myObj.myMethod()

// Function
function myFunction() {
    console.log('Function', this);
}
myFunction();
myFunction.call(myObj);
myFunction.call([]);

