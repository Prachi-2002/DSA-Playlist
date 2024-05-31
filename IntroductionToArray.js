// How Do Arrays Work Internally?


// Arrays are fundamental data structures used in various programming languages to store collections of elements. Understanding how arrays work internally can help you write more efficient code and make informed design decisions. Here are some key points to grasp:

// a) Contiguous Memory Allocation: One of the core characteristics of arrays is their use of contiguous memory allocation. This means that when you create an array, it allocates memory in a continuous, uninterrupted manner. For example, if you have an array of 10 integers, all 10 of these integers are stored consecutively in memory. The advantage of this approach is that accessing an element in the array can be done in constant time, denoted as O(1). This efficiency arises from the fact that if you know the memory address of the first element and the size of each element, you can directly compute the address of any element without the need to check every element individually.

// b) Fixed Size: Traditional arrays, such as those found in languages like C and C++, have a fixed size. Once you define the size of an array, it cannot be changed. This stands in contrast to dynamic arrays or array lists, as seen in languages like Java or JavaScript. Dynamic arrays can resize themselves, but this often involves creating a new array and copying over the elements. Fixed-size arrays are straightforward in terms of memory management but lack flexibility, especially when you don't know the required size in advance.

// c) Indexing: Arrays typically use zero-based indexing, meaning that the first element is accessed with an index of 0, the second with an index of 1, and so on. To locate an element in memory, you can use the following formula: base_address + (element_size * index). This indexing scheme contributes to the speed of array access.

// d) Dynamic Arrays: Languages like JavaScript employ dynamic arrays, which means that the array can grow or shrink as needed. When the array exceeds its current allocation size, a new, larger block of memory is allocated. The elements from the old array are then copied to this new block, and the old memory segment is freed. While this operation incurs a cost, it doesn't occur every time you add an element; rather, it happens when the current allocation is exhausted. To optimize this process, dynamic arrays often double in size each time they fill up, ensuring that, on average, adding an element takes constant time. This concept is known as "amortized constant time."

// e) Internals in JavaScript: JavaScript arrays are more flexible than arrays in many other languages. They can hold elements of different types and can dynamically grow or shrink. Under the hood, JavaScript engines like V8 (used in Chrome and Node.js) don't always implement arrays as flat, contiguous blocks of memory, especially when arrays are used as associative arrays or have non-numeric keys. Instead, they can switch representations based on what's most efficient for the current data. While simple, densely-packed numeric arrays might be stored as true arrays in memory, other arrays could be implemented as hash tables or other data structures. This adaptability enables JavaScript arrays to handle diverse data scenarios efficiently.

// Some Helpful functions of arrays :

let arr = [1, 2,4,5,67,8];
arr.shift(); //Removes the element from start
console.log(arr, 'Arr');
arr.unshift(88); // Adds the element in the start
console.log(arr, 'Arrays ')