# Arrays

## Mutator Methods

### Array.prototype.copyWithin()
copies the sequence of array elements within the array to the position starting at the target.
```javascript
arr.copyWithin(target, start[, end = this.length])
[1,2,3,4,5].copyWithin(0,3)
// [4,5,3,4,5]
```

### Array.prototype.fill()
fills all the elements of an array from a start to an end index with a static value.
```javascript
arr.fill(value[, start = 0[, end = this.length]])
[1, 2, 3].fill(4) // [4, 4, 4]
```

### Array.prototype.pop
removes the last element from an array and returns that element.
```javascript
arr.pop()
var x = [1,2,3,4,5];
x.pop() //5
x === [1,2,3,4];
```

### Array.prototype.push()
adds one or more elements to the end of an array and returns the new length of the array.
```javascript
arr.push(element1,element2,...elementX)
var x = [1,2,3,4,5];
x.push(6) // 6
x === [1,2,3,4,5,6];
```

### Array.prototype.reverse()
reverses the order of an array ie first becomes last and last becomes first.
```javascript
arr.reverse()
var x = [1,2,3,4,5,6];
x.reverse() //6,5,4,3,2,1
x === [6,5,4,3,2,1];
```

### Array.prototype.shift()
removes the first element in the array and returns it, changes the length of the array.
```javascript
arr.shift()
var x = [6,5,4,3,2,1];
x.shift() // takes away first element
x === [5,4,3,2,1];
```

### Array.prototype.sort()
sorts the objects in an array by unicode code points.
```javascript
arr.sort([compareFunction])
var x = [5,4,3,2,1];
x.sort() // 1-5
x === [1,2,3,4,5];
```

### Array.prototype.splice()
changes the content of an array adding new elements and removing old elements.
```javascript
array.splice(index, howMany[, element1[, ...[, elementN]]]) array.splice(index)
var x = [1,2,3,4,5];
x.splice(0,2) // 1 and 3
x === [2,4,5];
```

### Array.prototype.unshift()
adds one or more elements to the beginning of an array and returns the new length of the array.
```javascript
arr.unshift([element1[,element2[, element3]]])
var x = [3,4,5];
x.unshift(1,2); // adds to the front
x === [1,2,3,4,5]
```
## Accessor Methods

### Array.prototype.concat()
returns a new array of the two arrays that are joined.
```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
var x = ['hello'];
var y = ['there'];
var z = x.concat(y)// adds them together
z === ['hello' 'there'];

```

### Array.prototype.contains()
determines whether an array contains a certain element returning true or false
```javascript
arr.contains(searchElement[, fromIndex])
```

### Array.prototype.join()
puts all elements of an array into a string.
```javascript
str = arr.join([separator = ','])
var x === ['hello','there'];
x = x.join();
x === ['hellothere'];
```

### Array.prototype.slice()
returns a portion of an array into a new array object
```javascript
arr.slice([begin[,end]])
var x = [1,2,3,4,5,6];
x.slice(0,2) // 1,2
x === [1,4,5,6];
```

### Array.prototype.toSource()
returns a string representing the source code of the array.
```javascript
arr.toSource
```

### Array.prototype.toString()
returns a string representing the specified array of its elements
```javascript
arr.toString
var x = [1,2,3,4,5,6];
x.toString()//'1,2,3,4,5,6'
x === [1,2,3,4,5,6];
```

### Array.prototype.toLocaleString()
returns a string representing the elements of the array using the locale string method.
```javascript
arr.toLocaleString()
```

### Array.prototype.indexOf()
returns the first index at which a given element can be found in the array or -1 if its not in the array.
```javascript
arr.indexOf(searchElement[, fromIndex = 0])
var x = ['beer','food','name'];
x.indexOf('food')//2
x === ['beer', 'food', 'name']
```

### Array.prototype.lastIndexOf()
returns the last index at which a given element can be found in the array or -1 if its not in the array.
```javascript
arr.lastIndexOf(searchElement[, fromIndex = arr.length])
var x = ['beer','food','name'];
x.lastIndexOf('name')//2
x === ['beer', 'food', 'name'];
```

## Iteration Methods

### Array.prototype.forEach()
executes a provided function once per array element
```javascript
arr.forEach(callBack[, thisArg])
var count = 0;
var x = ['beer','food','name'];
x.forEach(function(index){
  if(index === 'food')
  count++;
  return cound;
})
console.log(count) // 1
```

### Array.prototype.entries()
returns a new array Iteration object that contains the key/value pairs for each index in the array.
```javascript
arr.entries
```

### Array.prototype.every()
test whether all elements in the array pass the test implement by the provided function.
```javascript
arr.every(callback[, thisArg])
var THRESHOLD = 4;
var test;
var x = [1,2,3,4,5];

test = x.every(function(element,index,array){
  console.log('element:', element);
  if (element <= THRESHOLD){
    return true;
  }
  return false;
})
console.log('test:', test)//element:1, element:2, element:3, element:4, element:5, test:false
```

### Array.prototype.some()
test whether some element in the array passes the test implement by the provided function.
```javascript
arr.some(callback[, thisArg])
```

### Array.prototype.filter()
creates a new array with all elements that pass the test implement by the provided function.
```javascript
arr.filter(callback[, thisArg])
var THRESHOLD = 3;
var test;
var x = [1,2,3,4,5];
test = x.filter(function(element,index, array){
  if(element <= THRESHOLD){
    return true;
  }
  return false;
});
console.log('test', test)// [1,2,3]
```

### Array.prototype.find()
returns a value in the array if its not found undefined is return
```javascript
arr.find(callback[, thisArg])
```

### Array.prototype.findIndex()
returns an index in the array if not found -1 is return
```javascript
arr.findIndex(callback[, thisArg])
```

### Array.prototype.keys()
returns a new array Iteration that contains the keys for each index in the array.
```javascript
arr.keys
```

### Array.prototype.map()
creates a new array with the results of calling a provided function on every element in the array.
```javascript
arr.map(callback[,thisArg])
var num = [11,29,2014];
var dates = num.map(function(numm){
  return numm + 60;
});
console.log(num) // 11,29,2014
console.log(dates) // 71,89,2074
```

### Array.prototype.reduce()
applies a function against an accumulator and each value of the array from left to right has been reduced to a single value.
```javascript
arr.reduce(callback[, initialValue])
var num = [11,29,2014].reduce(function(a,b){
  return a/b;
});
console.log(num) //0.000188843037
```

### Array.prototype.reduceRight()
applies a function against an accumulator and each value of the array from right to left has been reduced to a single value.
```javascript
arr.reduceRigh(callback[,initialValue])
var num = [11,29,2013].reduce(function(a,b){
  return a/b;
});
console.log(num) //6.3102448275
```
### Generic Methods
Array-like objects ex argument and strings and do not inherit from Array.prototype
```javascript
var a ={'0':'a', '1':'b', '2':'c', length:3};
Array.prototype.join.call(a,'+')// a+b+c
