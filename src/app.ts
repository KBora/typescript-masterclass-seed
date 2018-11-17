class MyClass {
    myMethod() {
        const foo = 123;
        console.log('1', this);
        setTimeout(() => {
            console.log(this);
        }, 0);
    }
}

const myInstance = new MyClass();
myInstance.myMethod();
