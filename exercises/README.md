<!-- BEGIN TITLE -->
# Document and Pass
<!-- END TITLE -->

<!-- BEGIN TOC -->

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
7/12/2020, 11:38:20 AM

Started
......


2 specs, 0 failures
Finished in 0.009 seconds

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
Started
.....................



7 specs, 0 failures
Finished in 0.009 seconds


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
Started
.....................


7 specs, 0 failures
Finished in 0.006 seconds

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
Started
..................

6 specs, 0 failures


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
Started
...........................


9 specs, 0 failures
Finished in 0.009 seconds

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
7/12/2020, 11:38:21 AM

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
Started
..................


6 specs, 0 failures
Finished in 0.004 seconds

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
Started
...............


5 specs, 0 failures
Finished in 0.006 seconds

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
Started
.....................


7 specs, 0 failures
Finished in 0.008 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-find-the-oldest](./3-find-the-oldest)

<a name="findTheOldest"></a>

## findTheOldest()

**Test Report**
```
7/12/2020, 11:38:21 AM

Started
.F..F..F.

Failures:
1) findTheOldest finds the oldest person!
.    TypeError: Cannot read property 'forEach' of undefined.

2) findTheOldest finds the oldest person if someone is still living
.    TypeError: Cannot read property 'forEach' of undefined.

3) findTheOldest finds the oldest person if the OLDEST is still living
.    TypeError: Cannot read property 'forEach' of undefined.

3 specs, 3 failures

Finished in 0.004 seconds


```

[TOP](#Document-and-Pass)


---

## [./3-pig-latin](./3-pig-latin)

<a name="translate"></a>

## translate()

**Test Report**
```
7/12/2020, 11:38:21 AM

Started
.F..F..F..F..F..F..F..F..F.

Failures:
1) #translate translates a word beginning with a vowel
.    Expected undefined to equal 'appleay'..

2) #translate translates a word beginning with a consonant
.    Expected undefined to equal 'ananabay'..

3) #translate translates a word beginning with two consonants
.    Expected undefined to equal 'errychay'..

4) #translate translates two words
.    Expected undefined to equal 'eatay iepay'..

5) #translate translates a word beginning with three consonants
.    Expected undefined to equal 'eethray'..

6) #translate counts "sch" as a single phoneme
.    Expected undefined to equal 'oolschay'..

7) #translate counts "qu" as a single phoneme
.    Expected undefined to equal 'ietquay'..

8) #translate counts "qu" as a consonant even when its preceded by a consonant
.    Expected undefined to equal 'aresquay'..

9) #translate translates many words
.    Expected undefined to equal 'ethay ickquay ownbray oxfay'..

9 specs, 9 failures

Finished in 0.008 seconds


```

[TOP](#Document-and-Pass)


---

## [./3-snake-case](./3-snake-case)

<a name="snakeCase"></a>

## snakeCase()

**Test Report**
```
7/12/2020, 11:38:21 AM

Started
.F..F..F..F..F..F.

Failures:
1) snakeCase works with simple lowercased phrases
.    Expected undefined to equal 'hello_world'..

2) snakeCase works with Caps and punctuation
.    Expected undefined to equal 'hello_world'..

3) snakeCase works with longer phrases
.    Expected undefined to equal 'this_is_the_song_that_never_ends'..

4) snakeCase works with camel case
.    Expected undefined to equal 'snake_case'..

5) snakeCase works with kebab case
.    Expected undefined to equal 'snake_case'..

6) snakeCase works with WTF case
.    Expected undefined to equal 'snake_case_is_awesome'..

6 specs, 6 failures
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)

<!-- END DOCS -->
