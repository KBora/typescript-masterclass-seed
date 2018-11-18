class MyClass {
    myMethod() {
        const foo = 123;
        console.log('1', this);
        setTimeout(() => {
            console.log('2', this);
        }, 0);
    }
}

const myInstance = new MyClass();
myInstance.myMethod();


const elem = document.querySelector('.click');

function handleClick(this: HTMLAnchorElement, event: Event) {
    event.preventDefault();
    console.log(this);
}

elem.addEventListener('click', handleClick, false);

