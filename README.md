```Javascript
function createIncrement() {
    let count=0;

    function increment() {
        count++;
    }
    let message=`Count is ${count}`;

    function log() {
        console.log(message);
    }

    return [increment,log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?
```

## Output

Count is 0

## Solution

const [increment, log] = createIncrement();
In this step, when we are creating a new instance,
The value of count is 0, so the message is already set as
let message = Count is 0

1. increment();
   When we are calling the increment(), we are increasing the value of count
   after calling 3 time, the value of count is - 3

2. log();
   Here the trick is that, if we'll calling log(), we are calling message, which was already assigned at the time of initialization,
   So the output will be still 0
