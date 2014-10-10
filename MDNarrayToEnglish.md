# Arrays

## Mutator Methods

```javascript
Array.prototype.copyWithin()
copies the sequence of array elements within the array to the position starting at the target.
arr.copyWithin(target, start[, end = this.length])
```

```javascript
Array.prototype.fill()
fills all the elements of an array from a start to an end index with a static value.
arr.fill(value[, start = 0[, end = this.length]])
```
```javascript
Array.prototype.pop()
removes the last element from an array and returns that element.
arr.pop()
```
```javascript
Array.prototype.push()
adds one or more elements to the end of an array and returns the new length of the array.
arr.push(element1,element2,...elementX)
```
```javascript
Array.prototype.reverse()
reverses the order of an array ie first becomes last and last becomes first.
arr.revers()
```
```javascript
Array.prototype.shift()
removes the first element in the array and returns it, changes the length of the array.
arr.shift()
```
```javascript
Array.prototype.sort()
sorts the objects in an array by unicode code points.
arr.sort([compareFunction])
```
```javascript
Array.prototype.splice()
changes the content of an array adding new elements and removing old elements.
array.splice(index, howMany[, element1[, ...[, elementN]]]) array.splice(index)
```
```javascript
Array.prototype.unshift()
adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift([element1[,element2[, element3]]])
```
## Accessor Methods

```javascript
Array.prototype.concat()
returns a new array of the two arrays that are joined.
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```
```javascript
Array.prototype.contains()
determines whether an array contains a certain element returning true or false
arr.contains(searchElement[, fromIndex])
```
```javascript
Array.prototype.join()
puts all elements of an array into a string.
str = arr.join([separator = ','])
```
```javascript
Array.prototype.slice()
returns a portion of an array into a new array object
arr.slice([begin[,end]])
```
```javascript
Array.prototype.toSource()
returns a string representing the source code of the array.
arr.toSource
```
```javascript
Array.prototype.toString()
returns a string representing the specified array of its elements
arr.toString
```
```javascript
Array.prototype.toLocaleString()
returns a string representing the elements of the array using the locale string method.
arr.toLocaleString()
```
```javascript
Array.prototype.indexOf()
returns the first index at which a given element can be found in the array or -1 if its not in the array.
arr.indexOf(searchElement[, fromIndex = 0])
```
```javascript
Array.prototype.lastIndexOf()
returns the last index at which a given element can be found in the array or -1 if its not in the array.
arr.lastIndexOf(searchElement[, fromIndex = arr.length])
```

## Iteration Methods
```javascript
Array.prototype.forEach()
executes a provided function once per array element
arr.forEach(callBack[, thisArg])
```
```javascript
Array.prototype.entries()
returns a new array Iteration object that contains the key/value pairs for each index in the array.
arr.entries
```
```javascript
Array.prototype.every()
test whether all elements in the array pass the test implement by the provided function.
arr.every(callback[, thisArg])
```
```javascript
Array.prototype.some()
test whether some element in the array passes the test implement by the provided function.
arr.some(callback[, thisArg])
```
```javascript
Array.prototype.filter()
creates a new array with all elements that pass the test implement by the provided function.
arr.filter(callback[, thisArg])
```
```javascript
Array.prototype.find()
returns a value in the array if its not found undefined is return
arr.find(callback[, thisArg])
```
```javascript
Array.prototype.findIndex()
returns an index in the array if not found -1 is return
arr.findIndex(callback[, thisArg])
```
```javascript
Array.prototype.keys()
returns a new array Iteration that contains the keys for each index in the array.
arr.keys
```
```javascript
Array.prototype.map()
creates a new array with the results of calling a provided function on every element in the array.
arr.map(callback[,thisArg])
```
```javascript
Array.prototype.reduce()
applies a function against an accumulator and each value of the array from left to right has been reduced to a single value.
arr.reduce(callback[, initialValue])
```
```javascript
Array.prototype.reduceRight()
applies a function against an accumulator and each value of the array from right to left has been reduced to a single value.
arr.reduceRigh(callback[,initialValue])
```
