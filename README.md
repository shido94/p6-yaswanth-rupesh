## Call

The call method binds the 'this' value to the function and executes the function. It takes the this value and a list of arguments as parameters. Then, it returns the value returned by the function, which is called using the call method.

```Javascript
function test(arg1, arg2){
  console.log(this.num, arg1, arg2); // 100, 10, 20
}

test.call({num: 100}, 10, 20);
```

## Apply

The apply method binds the this value to the function and executes the function. It takes the this value and a single array object as parameters, and it returns the value returned by the function, which is called using the apply method.

```Javascript
function test(...arguments){
  console.log(this.num, arguments);//100, [1,2,3]
}

test.apply({num: 100}, [1,2,3]);
```

## Bind

The bind method binds the this value to the function and returns a new function. However, we still need to separately invoke the returned function.

```Javascript
function test(arg){
 console.log(this.number, arg);
}

let bindedFn = test.bind({number: 99}, "argument");

bindedFn(); // 99, "argument"
```

# Summary

1. call: binds the this value, invokes the function, and allows you to pass a list of arguments.

2. apply: binds the this value, invokes the function, and allows you to pass arguments as an array.

3. bind: binds the this value, returns a new function, and allows you to pass in a list of arguments.
