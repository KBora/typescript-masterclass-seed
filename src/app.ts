// Function
function myFunction() {
    console.log('Function', this);
}
myFunction();

// Object
const myObj = {
  myMethod() {
    console.log('Object', this);
  }  
};

myObj.myMethod()

// Classes
 class MyClass {
     myMethod() {
         console.log('Class', this);
     }
 }

let aClass = new MyClass;
aClass.myMethod();