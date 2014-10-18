```javascript
var self = this
```
Variable: `count`
Value: `this`

```javascript
var decimalMark = .
```
Variable: `decimalMark`
Value: `.`

```javascript
(button == decimalMark && self.display().indexOf(decimalMark) > -1)
```
Operations: `==`, `&&`, `>`
Variable: `decimalMark` and `self.display().indexof(decimalMark)` greater that `-1`

```javascript
var sum = 0
```
Variable: `sum`
Value: 0

```javascript
var a = this
```
Variable: `a`
Value: `this`

```javascript
  a.display = ko.observable("0");
```
Operations: `=`
Variable: 'a.display' gets ko.observable

```javascript
var b = this
```
Variable: `b`
Value: `this`

```javascript
 b += parseFloat(a.display(), 10);
```
Operations: `+=`
Variable:` b` += parseFloat(a.display(), 10)

```javascript
b *= parseFloat(a.display(), 10);
```
Operations: `*=`
Variable: `b` += parseFloat(a.display(), 10)

```javascript
b /= parseFloat(a.display(), 10);
```
Operations: `/=`
Variable: `b` /= parseFloat(a.display(),10)

```javascript
var PUBNUB = ('../pubnub.js')
```
Symbol: var
  Type: Keyword
  Name: 'var'
  Meaning: Create and identifier
  Operands: PUBNUB
Symbol: PUBNUB
  Type: identifier
  Name: 'Variable PUBNUB'
  Meaning: Variable to hold a value
Symbol: =
  Type: Operator
  Name: 'is assigned'
  Meaning: Store the value to right in the identifier on the left
  Operands: PUBNUB and string ../pubnub.js
Symbol: '../pubnub.js'
  Type: string
  Value: path to file
  Meaning: Create a literal String value containing the file path
```javascript
var pubnub = PUBNUB({
    publish_key   : "demo",
});
```
Symbol: var
  Type: keyword
  Name: 'var'
  Meaning: Create an identifier
  Operands: pubnub
Symbol: pubnub
  Type: identifier
  Name: 'variable pubnub'
  Meaning: Variable to hold a value in
Symbol: =
  Type: Operator
  Name: 'is assigned'
  Meaning: Store the value to the right in the identifier on the left
  Operands: pubnub and PUBNUB
Symbol: PUBNUB
  Type: callback variable
  Name: 'variable PUBNUB'
  Meaning: pubnub gets the variable PUBNUB
Symbol: publish_key
  Type: dictionary key
  Name: publish_key in the dictonary PUBNUB
  Meaning: mapping string demo to publish_key word
```javascript
function add_messages()  
```
Symbol: function
  Type: Keyword
  Name: 'function'
  Meaning: object action
Symbol: add_messages()
  Type: function name
  Name: add_messages()
  Meaning: function called add_messages
```javascript
 network.detailedHistory
 ```
Symbol: network
  Type: dictionary
  Name: network
  Meaning: look up dictionary network
Symbol: .
  Type: period
  Meaning: lookup to the left of the period
  Name: dot notation
Symbol: detailedHistory
  Type: key
  Name: key detailedHistory
  Meaning: find the key named detailedHistoy
```javascript
 var msgs = messages[0]
 ```
Symbol: var
  Type: Keyword
  Name: variable
  Meaning: create an identifier
  Operands: msgs
Symbol: msgs
  Type: identifier
  Name: variable msgs
  Meaning: variable to hold a value in
Symbol: =
  Type: operator
  Name: 'is assigned'
  Meaning: store the value to the right in the identifier on the left
  Operands: msgs and messages
Symbol: messages[0]
  Type: messages array sub index 0
  Name: messages variable sub index 0
  Meaning: assign messages sub index 0 to variable msgs
```javascript
if (!msgs.length) return callback(history);
```
Symbol: if
  Type: keyword
  Name: if statement
  Meaning: comparison method
Symbol: !msgs
  Type: comparison statement
  Name: not msgs
  Meaning: if not msgs
Symbol: .length
  Type: function
  Name: dot length
  Meaning: look at the variables length to the left
```javascript
process.argv.forEach(function (val, index, array)
```
Symbol: process
  Type: dictionary
  Name: the process dictionary
Symbol: argv
  Type: key
  Meaning: in the process dictionary find the key argv
  Name: key argv
Symbol: forEach
  Type: function
  Meaning: do something for each value in the key argv
  Name: for each value
Symbol: function
  Type: Keyword
  Name: 'function'
  Meaning: object action
Symbol: val
  Type: keyword
  Name: value
  Meaning: find the value in the dictionary for each key
Symbol: index
  Type: keyword
  Name: 'index'
  Meaning: find the index in the dictionary for each key
Symbol: array
  Type: keyword
  Name: array
  Meaning: find the array in the dictionary for each key
```javascript
function publish_expected_fail()
```
Symbol: function
  Type: keyword
  Name: 'function'
  Meaning: do something when this is called
Symbol: publish_expected_fail()
  Type: function name
  Name: 'publish_expected_fail'
  Meaning: do this function when the name is called
Symbol: ()
  Type: brackets
  Name: paramater value
  Meaning: invoke the function
```javascript
if (success) console.log( "Success!", response )
```
Symbol: if
  Type: keyword
  Name: if statment
  Meaning: conditional test
Symbol: success
  Type: parameter
  Name: 'success variable'
  Meaning: if success is true
Symbol: 'Success!'
  Type: type literal
  Name: 'string Success!'
  Meaning: Create a literal string value containing 'Success'
Symbol: response
  Type: function variable
  Name: 'response'
  Meaning: response function called if true
```javascript
var createListener = function(channel)
```
Symbol: var
  Type: keyword
  Name: 'var'
  Meaning: create an identifier
  Operands: createListener
Symbol: createListener
  Type: identifier
  Name: 'variable createListener'
  Meaning: Variable to hold a value
Symbol: =
  Type: Operator
  Name: 'is assigned'
  Meaning: Store the value to the right in the identifier on the left
  Operands: createListener and function
Symbol: function
  Type: keyword
  Name: function
  Meaning: action do something when this is called
Symbol: channel
  Type: paramater variable
  Name: 'channel'
  Meaning: take the value of channel and do something in the function
```javascript
callback : function(message)
```
Symbol: callback
  Type: keyword dictionary
  Name: 'callback'
  Meaning: setting a function called callback in the dictionary
Symbol: ':'
  Type: spacer
  Name: 'colon'
  Meaning: separating the key from the value
Symbol: function
  Type: keyword
  Name: 'function'
  Meaning: perform and action when called
Symbol: message
  Type: parameter variable
  Name: 'message'
  Meaning: when the callback is called take the message value and do something
```javascript
for ( var i = 2; i < process.argv.length; i += 1)
```
Symbol: for
  Type: keyword
  Name: for loop statment
  Meaning: start at an iteration test a condition and repet
Symbol: var
  Type: keyword
  Name: 'var'
  Meaning: create an identifier
  Operands: i
Symbol: i
  Type: identifier
  Name: variable i
  Meaning: Variable to hold a value
Symbol: =
  Type: Operator
  Name: is  assigned
  Meaning: store the value to the right in the identifier on the left
  Operands: 2 and i
Symbol: <
  Type: comparison
  Name: less than
  Meaning compares the value on the left to the value on the right
  Operands: i and process.argv.length
