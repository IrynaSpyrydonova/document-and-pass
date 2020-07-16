<!-- BEGIN TITLE -->
# Document and Pass
<!-- END TITLE -->

<!-- BEGIN TOC -->
> 7/16/2020, 4:29:49 PM

- [0-hello-world](#0-hello-world)
- [1-remove-from-array](#1-remove-from-array)
- [1-repeat-string](#1-repeat-string)
- [1-reverse-string](#1-reverse-string)
- [1-sum-all](#1-sum-all)
- [2-fibonacci](#2-fibonacci)
- [2-get-the-titles](#2-get-the-titles)
- [2-leap-years](#2-leap-years)
- [2-palindromes](#2-palindromes)
- [3-caesar](#3-caesar)
- [3-find-the-oldest](#3-find-the-oldest)
- [3-pig-latin](#3-pig-latin)
- [3-snake-case](#3-snake-case)
<!-- END TOC -->

<!-- BEGIN DOCS -->
---

## [./0-hello-world](./0-hello-world)

<a name="hello"></a>

## hello(thing) ⇒ <code>string</code>
A very simple function, it greets whatever you tell it to


**Returns**: <code>string</code> - a friendly greeting  

| Param | Type | Description |
| --- | --- | --- |
| thing | <code>string</code> | the thing to greet |

**Example**  
```js
const greeting = hello('World');
console.log(greeting); // 'Hello, World!'
```
**Test Report**
```
7/16/2020, 4:13:41 PM

Started
......


2 specs, 0 failures
Finished in 0.011 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-remove-from-array](./1-remove-from-array)

<a name="removeFromArray"></a>

## removeFromArray(arr, ...manyMoreArgs) ⇒ <code>array</code>
This function removes the arguments from the given array


**Returns**: <code>array</code> - new array, that doesn't include the arguments  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | array to remove from |
| ...manyMoreArgs | <code>array</code> | arguments that have to be removed |

**Example**  
```js
const newArr = removeFromArray([1, 2, 3, 4], 7, 2));
console.log(newArr); // [1, 3, 4]
```
**Test Report**
```
7/16/2020, 4:13:41 PM

Started
.....................


7 specs, 0 failures
Finished in 0.008 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-repeat-string](./1-repeat-string)

<a name="repeatString"></a>

## repeatString(string, num) ⇒ <code>string</code>
This function repeats the string a given number of times


**Returns**: <code>string</code> - new string, that repeats previous string given number of times  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string to repeat |
| num | <code>number</code> | how many times to repeat |

**Example**  
```js
const newString = repeatString('hey', 3);
console.log(newString); // 'heyheyhey'
```
**Test Report**
```
7/16/2020, 4:13:41 PM

Started
.....................


7 specs, 0 failures
Finished in 0.008 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-reverse-string](./1-reverse-string)

<a name="reverseString"></a>

## reverseString(string) ⇒ <code>string</code>
This function that returns its input, reversed


**Returns**: <code>string</code> - reversed given string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string to reverse |

**Example**  
```js
const stringToReverse = reverseString('hello there');
console.log(stringToReverse); // 'ereht olleh'
```
**Test Report**
```
7/16/2020, 4:13:41 PM

Started
............


4 specs, 0 failures
Finished in 0.004 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-sum-all](./1-sum-all)

<a name="sumAll"></a>

## sumAll(start, end) ⇒ <code>number</code>
This function  takes 2 integers and returns the sum of every number between(and including) them.


**Returns**: <code>number</code> - sum of all numbers between start and end  

| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> | number to start from to calculate |
| end | <code>number</code> | number to end to calculate |

**Example**  
```js
const total = sumAll(1, 4);
console.log(total); // 10
```
**Test Report**
```
7/16/2020, 4:13:41 PM

Started
..................


6 specs, 0 failures
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-fibonacci](./2-fibonacci)

<a name="fibonacci"></a>

## fibonacci(n) ⇒ <code>number</code>
This function returns a specific number of the fibonacci sequence (every number after the first two is the sum of the two preceding ones)


**Returns**: <code>number</code> - element with index n from our Fibonacci sequence array  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | index of element from Fibonacci sequence array |

**Example**  
```js
const fibSequence = fibonacci(6)
console.log(fibSequence); // 8
```
**Test Report**
```
7/16/2020, 4:13:41 PM

Started
...........................


9 specs, 0 failures
Finished in 0.011 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-get-the-titles](./2-get-the-titles)

<a name="getTheTitles"></a>

## getTheTitles(obj) ⇒ <code>array</code>
This function  takes the array of objects and returns an array of specific properties of that objects


**Returns**: <code>array</code> - array of specific properties of the objects  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>array</code> | array of objects |

**Example**  
```js
const titles = getTheTitles(books))
console.log(titles); // ['Book', 'Book2']
```
**Test Report**
```
7/16/2020, 4:13:41 PM

Started
...


1 spec, 0 failures
Finished in 0.002 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-leap-years](./2-leap-years)

<a name="leapYears"></a>

## leapYears(year) ⇒ <code>boolean</code>
Thi function determines whether or not a given year is a leap years


**Returns**: <code>boolean</code> - true or false  

| Param | Type | Description |
| --- | --- | --- |
| year | <code>number</code> | a year to check |

**Example**  
```js
const year = leapYears(1997)
console.log(year); // false
```
**Test Report**
```
7/16/2020, 4:13:41 PM

Started
..................


6 specs, 0 failures
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-palindromes](./2-palindromes)

<a name="palindromes"></a>

## palindromes(str) ⇒ <code>boolean</code>
This function determines whether or not a given string is a palindrome


**Returns**: <code>boolean</code> - true or false  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | a given string to check |

**Example**  
```js
const strToCheck = palindromes('Racecar!')
console.log(strToCheck); // true
```
**Test Report**
```
7/16/2020, 4:13:41 PM

Started
...............


5 specs, 0 failures
Finished in 0.005 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-caesar](./3-caesar)

<a name="caesar"></a>

## caesar(str, amount) ⇒ <code>string</code>
This function takes a string to be encoded and a shift factor and then returns the encoded string


**Returns**: <code>string</code> - encoded string  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | a given string to be encoded |
| amount | <code>number</code> | fixed number of positions down the alphabet |

**Example**  
```js
const strToEncode = caesar('Aaa', 1)
console.log(strToEncode); // 'Bbb'
```
**Test Report**
```
7/16/2020, 4:13:41 PM

Started
.....................


7 specs, 0 failures
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-find-the-oldest](./3-find-the-oldest)

<a name="findTheOldest"></a>

## findTheOldest(arr) ⇒ <code>string</code>
This function takes an array of objects to be checked for conditions and returns the property value, that met the given conditions.


**Returns**: <code>string</code> - property value of the object  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | a given array of objects |

**Example**  
```js
const personToFind = findTheOldest(people).name)
console.log(personToFind); // 'Ray'
```
**Test Report**
```
7/16/2020, 4:13:41 PM

Started
.........


3 specs, 0 failures
Finished in 0.005 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-pig-latin](./3-pig-latin)

<a name="translate"></a>

## translate(str) ⇒ <code>string</code>
This function takes a string to be translated according to the "pig-latin" game rules and returns the translated string


**Returns**: <code>string</code> - translated string  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | a given string to be translated |

**Example**  
```js
const strToTranslate = translate(`eat pie`)
console.log(strToTranslate); // 'eatay iepay'
```
**Test Report**
```
7/16/2020, 4:13:41 PM

Started
...........................


9 specs, 0 failures
Finished in 0.011 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-snake-case](./3-snake-case)

<a name="snakeCase"></a>

## snakeCase(str) ⇒ <code>string</code>
This function takes a string to convert phrases and words into snake case.


**Returns**: <code>string</code> - converted string  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | a given string to be converted |

**Example**  
```js
const strToConvert = snakeCase('This is the song that never ends....')
console.log(strToConvert); // 'this_is_the_song_that_never_ends'
```
**Test Report**
```
7/16/2020, 4:13:41 PM

Started
..................


6 specs, 0 failures
Finished in 0.006 seconds

```

[TOP](#Document-and-Pass)

<!-- END DOCS -->
