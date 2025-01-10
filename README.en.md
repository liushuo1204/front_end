# JavaScript

Front-end learning materials, including JavaScript basics, advanced JavaScript, ES6 syntax, regular expressions,
front-end frameworks, and more.

# Interview Questions

## Ⅰ. HTML+CSS

### 1. What are block-level elements, inline-block elements, and inline elements?

1. Block-level elements:

   - h1 - h6: Heading tags
   - p: Paragraph tag
   - hr: Horizontal rule tag
   - ul + li: Unordered list
   - ol + li: Ordered list
   - dl + dt / dd: Definition list
   - div: Layout container
   - table: Table
   - form: Form

2. Inline-block elements:

   - input: Form element
   - img: Image tag

3. Inline elements:

   - a: Anchor tag
   - span: Text decoration tag
   - strong or b: Bold text
   - em or i: Italic text
   - ins or u: Underline text
   - del or s: Strikethrough text
   - label: Form element
   - sub: Subscript
   - sup: Superscript

### 2. What is the difference between src and href?

1. href indicates the location of a resource, used in link and a tags. href references content that is related to the
   page.
2. src indicates the location of a resource, used in img and script tags.

### 3. What are the common selectors? What is the difference between id and class? Explain CSS priority.

1. Common selectors: tag selector, class selector, id selector, universal selector, pseudo-class selector, intersection
   selector, union selector, child selector, descendant selector, adjacent sibling selector.
2. id is unique, only one id per page; class is not unique, multiple tags can use the same class name, and a tag can
   have multiple class names.
3. Inline style > Embedded style > Linked style; Different types of selectors: !important > id selector > class
   selector > tag selector.

### 4. Which CSS properties are inheritable?

1. Font color is inheritable.
2. Properties starting with font are inheritable.
3. Properties starting with text are inheritable.
4. Properties starting with line are inheritable.

### 5. What is the box model? What are its components?

The box model consists of, from outside to inside, margin, border, padding, and content width and height.

### 6. What are the methods to clear floats?

1. Directly add height to the parent element.
2. Use the clearfix method, but it is not recommended as it generates extra code.
3. Use overflow:hidden.
4. Use a common class with pseudo-elements to clear floats.

```css
.classname:after {
   content: "";
   display: block;
   clear: both;
}
```

### 7. If a div does not have a set height and contains an image, the box height will automatically expand, but the div will have a 2-4px discrepancy. How to solve it?

1. Inline-block elements' vertical alignment baseline causes a 2-4px discrepancy, as they are not absolutely vertically
   centered.
2. Solutions:
   - Change the vertical alignment method of the inline-block element.
   - Change its display to block.

### 8. How to display two divs with 50% width and 1px border side by side (quirky box model)?

Change the outer border to inner border using box-sizing:border-box.

### 9. List four ways to achieve horizontal and vertical centering.

1. Set absolute positioning with all four properties set to zero, margin:auto.
2. Set left:50%; margin-left: negative half of the width; top:50%; margin-top: negative half of the height.
3. Set absolute positioning, left:50%; top:50%; transform:translate(-50%,-50%).
4. Use flexbox:

```css
 {
   display: flex
;
   justify-content: center
;
   align-items: center
;
}
```

### 10. What are the types of positioning? What are the differences?

1. Relative positioning, absolute positioning, fixed positioning.
2. Differences:
   - Relative positioning: relative to itself, does not leave the document flow, original position is retained.
   - Absolute positioning: relative to the nearest positioned ancestor, leaves the document flow, original position is
     not retained.
   - Fixed positioning: relative to the browser window, leaves the document flow, original position is not retained.

### 11. How to create a triangle using CSS?

```css
width:

0
;
height:

0
;
border:

20
px solid

;
border-color: transparent transparent pink transparent

;
```

Set width and height to 0, set border to 20px solid, and set three borders to transparent and one to a color to create a
triangle.

### 12. What is your understanding of line-height?

Line-height is the distance between lines of text. It is mainly used for single-line text centering by setting the
height equal to the line-height. For multi-line text centering, it is used with padding.

### 13. How do you handle browser compatibility?

1. Add browser prefixes when writing styles:
   - -moz- for Firefox
   - -webkit- for Chrome
   - -o- for Opera
   - -ms- for IE
2. Use fallback methods (use a simpler method if the current one is not supported).
3. Use JavaScript logic to handle compatibility.

### 14. What are the new features of HTML5?

1. New semantic elements.
2. New form features.
3. Local storage.
4. SVG.
5. Canvas.
6. Geolocation.

### 15. What are the new features of CSS3?

New form elements, properties, adjacent sibling selectors, background gradients, box shadows, borders, transitions,
transforms, animations, 3D transformations, etc.

### 16. What are reflow and repaint? How to avoid performance issues caused by reflow and repaint?

1. Reflow: When an element changes its size, layout, visibility, or content structure, causing the page to be rebuilt.
   Repaint: When an element's appearance changes without affecting the layout, such as changing background color or
   visibility.
2. Solutions:
   - Minimize DOM operations, especially for frequently operated elements.
   - Avoid using recursion, use loops instead.
   - Use caching to avoid repeated calculations.
   - Use CSS3 animations and transitions instead of JavaScript for animations.
   - Use relative positioning instead of absolute positioning.
   - Use lightweight elements like div and span instead of heavyweight elements like table and form.
   - When manipulating the DOM in JavaScript, avoid excessive DOM operations, especially for frequently operated
     elements.

### 17. What is the delay time for click events on mobile devices? What causes it? How to solve it?

The 300ms delay is due to the double-tap zoom feature designed for better user experience on early web pages. If no
other action occurs within 300ms after a single tap, it is considered a single tap; otherwise, it is considered a
double-tap zoom.

Set user-scalable=no to disable zooming, and set the viewport width to device-width.

```html

<meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
/>
```

### 18. How to achieve 0.5px on mobile devices?

1. Add a pseudo-element (before or after) to the target element, set absolute positioning, add a 1px border to the
   pseudo-element, set its width and height to twice the target element's size, scale it down by 0.5, and use border-box
   to include the border.
2. Add a background gradient to the element, set 50% to color and 50% to transparent, and set the height to 1px.

### ^1. What is JavaScript? Is JavaScript single-threaded or multi-threaded?

Simply put, JavaScript is an interpreted language that runs in the browser, a scripting language, and it is
single-threaded.

### ^2. What are the data types? How to determine the data type?

1. Basic data types:

① String: string

② Number: number

③ Boolean: boolean

2. Composite reference data types:

① Object: object

② Array: array

③ Function: function

3. Special data types:

① Null: null

② Undefined: undefined

③ Not a Number: NaN

4. Methods to detect data types:

① Detect data types except for arrays: typeof

② Detect array data type: Array.isArray()

③ Detect if it is not a number: isNaN

### ^3. What is the difference between =, ==, and === in JavaScript?

1. =: Assignment operator

2. ==: Compares values without considering data types

3. ===: Compares both values and data types

### ^4. What is the difference between i++ and ++i?

1. i++: Returns the value of i first, then increments i by 1 (post-increment)

2. ++i: Increments i by 1 first, then returns the value of i (pre-increment)

### ^5. What is the difference between while and do while?

1. while: Executes the loop as long as the condition is true

2. do while: Executes the loop once before checking the condition

### ^6. What is the difference between break and continue?

1. break: Terminates the current loop

2. continue: Skips the current iteration and continues with the next iteration

### ^7. Multiplication table

```javascript
for (let i = 1; i < 9; i++) {
   for (let j = 1; j < i; j++) {
      document.write(i + "*" + j + "=" + i * j + " ");
   }
}
```

### ^8. Do you know recursive functions? Do you use them often? What are the drawbacks of recursive functions?

1. A recursive function is a function that calls itself.

2. The company explicitly prohibits the use of recursive functions.

3. Recursive functions must wait for the last result to complete the logic execution, which violates the memory
   management mechanism.

### ^9. Have you used closure functions? What is a closure function? What are the advantages and disadvantages of closure functions? What is memory leak and JavaScript garbage collection mechanism?

1. A closure is a function that can read variables inside another function, defined inside that function.

2. Advantages: Can reuse variables globally without causing variable pollution.

3. Disadvantages: Closures can easily cause memory leaks and consume a lot of memory, leading to browser lag.

4. Memory leak: A block of allocated memory that is neither used nor released until the browser process ends.

5. JavaScript garbage collection mechanism: JavaScript's garbage collection mechanism is simple: find unused variables
   and release their occupied memory. The most common garbage collection method in JavaScript is mark-and-sweep. For
   example, declaring a variable in a function marks it as "entered the environment." Logically, memory occupied by
   variables that have entered the environment can never be released because they might be used as long as the execution
   flow enters the corresponding environment. When variables leave the environment, they are marked as "left the
   environment."

### ^10. How to avoid memory leaks caused by closures? What operations can cause memory leaks?

1. How to avoid memory leaks caused by closures?

① Pay attention to program logic to avoid infinite loops

② Reduce unnecessary global variables, and assign unused variables to null at the end of the function

③ Avoid creating too many objects

2. What operations can cause memory leaks?

① Unexpected global variables

② References to detached DOM elements

③ Unremoved timers

④ Closure functions

⑤ console.log

### ^11. What is a named function? Anonymous function? Recursive function? Callback function? Function expression?

1. Named function: A function with a name

2. Anonymous function: A function without a name

3. \*Recursive function: A function that calls itself

4. \*Callback function: A function passed as an argument to another function and can access variables inside the other
   function

5. Function expression: A function assigned to a variable and called using the variable

6. \*Constructor function: A function called with the new keyword

7. \*Closure function: A function that can read variables inside another function, defined inside that function

### ^12. What is the difference between for and forEach?

forEach cannot use break, and forEach has no return value. The return value is undefined.

### ^13. What is a global variable? What is a local variable?

1. Global variable: A variable declared outside the function body is a global variable. Variables declared without var
   are also global variables. Global variables can be used inside and outside the function body.

2. Local variable: A variable declared inside the function body is a local variable and can only be used inside the
   function body.

### ^14. What is hoisting?

In hoisting, variable declarations are moved to the top of their scope. Function declarations are moved to the top of
their function scope.

### ^15. What are the common array methods?

1. push(): Adds elements to the end of the array

2. splice(): Removes elements from the array and adds new elements at the same position

3. String(), toString(): Converts an array to a string

4. join(): Joins array elements into a string with a specified separator

5. split(): Converts a string to an array

6. shift(): Removes the first element of the array

7. pop(): Removes the last element of the array

8. unshift(): Adds elements to the beginning of the array

9. sort(): Sorts the array in ascending order

10. concat(): Merges arrays

11. reverse(): Reverses the array

12. indexOf(): Returns the first index of a specified element in the array, or -1 if not found

### ^16. What are the methods to get DOM elements?

1. \*document.getElementById("id selector"): Gets a single element

2. document.getElementsByTagName("tag name"): Gets a collection of elements (HTMLCollection)

3. document.getElementsByName("name attribute"): Gets a collection of elements (NodeList)

4. document.getElementsByClassName("class name"): Gets a collection of elements (HTMLCollection)

5. \*document.querySelector("selector"): Gets the first matching element

6. \*document.querySelectorAll("selector"): Gets all matching elements (NodeList)

7. parentNode: Parent node

8. children: Child nodes

9. Sibling nodes, event delegation, etc.

### ^17. What are the DOM manipulation methods?

1. appendChild: Adds a node to the end

2. insertBefore: Inserts a node before a specified node

3. removeChild: Removes a child node

4. replaceChild: Replaces a child node

5. cloneNode: Clones a node

### ^18. What are the methods to get or set class names?

1. \*className: Gets or sets the class name. Setting the class name will overwrite the original class name, so include
   the previous class name when setting.

2. .classList.add("class name"): Adds a class name

3. .classList.remove("class name"): Removes a class name

### ^19. What is the difference between innerHTML and innerText?

1. Similarities: Both can get or set content

2. Differences:

① innerHTML: Sets/gets content as HTML code

② innerText: Sets/gets content as plain text

### ^20. What are the methods to get or set attributes in JavaScript?

1. Get or set attributes through DOM: dom.attribute

2. getAttribute(): Gets custom attributes

3. setAttribute(): Sets custom attributes

### ^21. How to improve browser loading speed?

1. External file inclusion

2. Reduce redundant code and encapsulate code

3. Use event delegation instead of DOM manipulation to reduce DOM operations

4. Lazy loading of images

5. Compress files

### ^22. What is event bubbling? How to stop event bubbling?

1. When two divs are nested, and both have click events, clicking the inner div will also trigger the outer div's event.

2. Methods to stop event bubbling: e.stopPropagation() in JavaScript; return false in jQuery

### ^23. Methods to bind and unbind events

1. addEventListener: Binds an event

2. removeEventListener: Unbinds an event

### ^24. What is the window object? What is the document object?

1. The window object, also known as BOM (Browser Object Model), encapsulates the window title, toolbar buttons, address
   bar, status bar, etc. It is a member object of the window. (window is BOM, i.e., the browser)

2. The document object, also known as DOM (Document Object Model), represents the entire HTML document and can be used
   to access all elements on the webpage. DOM is part of the window object. (document is DOM, i.e., the webpage)

### ^25. What is the difference between for in and for of? Why does for of throw an error when iterating over an object?

1. for in iterates over an array and returns the index, iterates over an object and returns the property, and cannot
   iterate over a Map object; for of iterates over an array and returns the value, and throws an error when iterating
   over an object.

2. Because iterable is not introduced, you need to use Object.keys() or Object.values() to iterate over an object.

### ^Twenty-six, Explain your understanding of `this`:

1. In the browser, in the global scope, `this` refers to `window`.
2. In a regular function, `this` refers to the caller.
3. In a constructor function, `this` refers to the new object created by `new`.
4. In `call`, `apply`, and `bind`, `this` is explicitly bound to the specified object.
5. In an arrow function, `this` refers to the enclosing lexical context, not the object that called the function. Arrow
   functions do not have their own `this`; they inherit it from the parent scope.

### ^Twenty-seven, Have you used deep copy and shallow copy? What is the difference between deep copy and shallow copy? How to implement deep copy and shallow copy? What are the drawbacks of JSON deep copy and how to solve them?

1. Deep copy: When `b` is a copy of `a`, modifying `a` does not affect `b`. It has independent memory. All nested
   objects are copied, so changes to the copied data do not affect the original data.
2. Shallow copy: When `b` is a copy of `a`, modifying `a` does not affect the top-level properties of `b`, but nested
   objects are still linked. Only the first level is copied, deeper levels are still references.
3. Methods for shallow copy:
   - `slice`
   - `concat`
   - ES6 spread operator
4. Methods for deep copy:
   - `JSON.parse(JSON.stringify())`
   - jQuery's `extend` method
   - Recursive copying of all levels
5. Drawbacks of JSON deep copy:
   - Date objects become strings.
   - RegExp and Error objects become empty objects.
   - Functions and `undefined` are lost.
   - `NaN`, `Infinity`, and `-Infinity` become `null`.
   - Only enumerable own properties are copied.
   - Constructor information is lost.
   - Circular references cause errors.
6. Solution: Implement deep copy using recursion.

### ^Twenty-eight, What is object-oriented programming? What are the characteristics of object-oriented programming?

1. Object-oriented programming (OOP) is a programming paradigm based on the concept of objects, which contain data and
   methods.
2. Characteristics of OOP: Encapsulation, Inheritance, Polymorphism.

### ^Twenty-nine, What is a constructor function? What two things does a constructor function do for us?

1. A constructor function is a function called with the `new` keyword.
2. It does two things:
   - Creates an empty object.
   - Returns the object.

### Thirty, Methods of inheritance in object-oriented programming:

1. Using `call` or `apply`.
2. Prototype chain (`prototype`).
3. Using an empty object as an intermediary.

### ^Thirty-one, What is asynchronous? What is synchronous?

1. Synchronous: Tasks are executed one after another, waiting for each task to complete before moving on to the next. It
   has a blocking nature.
2. Asynchronous: Tasks are executed independently, without waiting for previous tasks to complete. It does not block the
   execution.

### ^Thirty-two, Do you know about the `Promise` object? What are the states of a `Promise`? When does it enter

`catch`? Have you wrapped an interface with `Promise`?

1. The `Promise` object is used to handle asynchronous operations, converting them to synchronous execution.
   - `pending`: Initial state.
   - `fulfilled`: Operation completed successfully.
   - `rejected`: Operation failed.
2. When the state is `fulfilled`, it enters `then`; when the state is `rejected`, it enters `catch`.

### ^Thirty-three, Definition of HTTP? What is the three-way handshake in HTTP?

1. HTTP is a network protocol used by browsers to request resources from servers.
2. Three-way handshake:
   - Client sends a request to the server.
   - Server acknowledges the request and sends a response back.
   - Client acknowledges the server's response, establishing a connection.

### ^Thirty-four, What are the request methods? What is the difference between `POST` and `GET`?

1. Methods: `DELETE`, `PUT`, `POST`, `GET`, etc.
2. Differences:
   - Security: `GET` parameters are visible in the URL; `POST` parameters are not.
   - Data transmission: `GET` has length limitations; `POST` does not.
   - Caching: `GET` requests can be cached; `POST` requests cannot.

### Thirty-five, Common status codes:

1. `200`: Request succeeded.
2. `301`: Resource permanently moved.
3. `400`: Bad request.
4. `401`: Unauthorized.
5. `403`: Forbidden.
6. `404`: Not found.
7. `500`: Internal server error.
8. `502`: Bad gateway.
9. `503`: Service unavailable.

### Thirty-six, Steps to create an AJAX request:

1. Create an `XMLHttpRequest` object.
2. Open a connection with the specified method.
3. Send the request.
4. Handle the response.

### ^Thirty-seven, Difference between `mouseover` and `mouseenter`:

1. `mouseover`: Triggered when the mouse pointer is over the selected element or its descendants, causing event
   bubbling.
2. `mouseenter`: Triggered when the mouse pointer is over the selected element, without event bubbling.

### ^Thirty-eight, What is debouncing? What is throttling?

1. Debouncing: Ensures a function is only called once after a specified delay. Implemented using a timer.
2. Throttling: Ensures a function is called at most once in a specified period. Implemented using a timer or timestamp.

### ^Thirty-nine, Differences between `sessionStorage`, `localStorage`, and `cookie`:

1. `sessionStorage`: Data is cleared when the window or tab is closed.
2. `localStorage`: Data persists until explicitly deleted.
3. `cookie`: Data is sent with every HTTP request, has an expiration date, and is limited to 4KB.

### ^Forty, Differences between `var`, `let`, and `const`:

1. `var`: Global scope, can be redeclared, hoisted.
2. `let`: Block scope, cannot be redeclared, no hoisting.
3. `const`: Block scope, cannot be reassigned, must be initialized.

### ^Forty-one, Why can `const` modify objects or arrays?

1. `const` prevents reassignment of the variable itself, but the contents of the object or array can be modified.

### ^Forty-two, How to achieve array deduplication in ES6?

1. Use `new Set(array)` to remove duplicates.

### Forty-three, How to convert a pseudo-array to an array?

1. Use `Array.from` or the spread operator to convert a pseudo-array to an array.

### Forty-four, New features of ES6:

1. New declaration methods.
2. Destructuring assignment, spread operator.
3. Array methods like `for of`, `find`.
4. Arrow functions.
5. `Symbol`, `Set` for deduplication, `Map`, template literals, `Promise`, modules.
6. `class`, `extends`, `super`.

### Forty-five, Discuss the usage and scenarios of `async/await`:

1. `async` modifies a function to return a `Promise`.
2. `await` pauses the execution of an `async` function until the `Promise` resolves, converting it to synchronous
   behavior.

### Forty-six, What is the purpose of arrow functions and their practical applications?

1. Arrow functions:
   - Provide a concise syntax.
   - Solve `this` binding issues by inheriting `this` from the parent scope.
2. Use cases:
   - Simple function expressions without `this` references.
   - Ensuring `this` points to the correct context, such as in Vue components.

### ^Forty-seven, How to implement inheritance with `class`? Provide a simple implementation.

1. Child class inherits from the parent class using `extends`.
2. Use `super` in the child class constructor to call the parent class constructor.

### Forty-eight, What is cross-origin? How to solve cross-origin issues?

1. Cross-origin: Accessing resources from a different domain, protocol, or port.
2. Solutions:
   - Set up a proxy in `vue.config.js`.
   - Use JSONP.
   - Handle it on the server-side.
   - Use CORS.

### ^Forty-nine, Event loop mechanism:

1. JavaScript is single-threaded, executing tasks one at a time.
2. Synchronous tasks run on the main thread, while asynchronous tasks are placed in an event queue.
3. When the main thread is free, it processes tasks from the event queue, creating an event loop.

### Fifty, Macro tasks and micro tasks:

1. Macro tasks: Main tasks like timers, event listeners, AJAX calls.
2. Micro tasks: Smaller tasks like `Promise`, `async/await`, `process.nextTick`.

### Fifty-one, Lazy loading of images:

1. Lazy loading delays the loading of images until they are needed, reducing server load and improving performance.

### Fifty-two, Principles of lazy loading:

1. Images are not loaded until they enter the viewport.
2. Initially, `img` tags do not have `src` attributes.
3. When images enter the viewport, `src` attributes are set, triggering the load.

### Fifty-three, Steps to implement lazy loading:

1. Load a placeholder image.
2. Determine which images need to be loaded.
3. Load the actual image in the background.
4. Replace the placeholder with the actual image.

### Fifty-four, Common methods:

1. Convert to number: `Number()`.
2. Convert to string: `toString()`, `String()`.
3. Keep two decimal places: `toFixed()`.
4. Convert array to string: `String()`, `toString()`, `join()`.
5. Convert string to array: `split()`.
6. Substring: `substring()`, `substr()`.
7. Replace string: `replace()`.
8. Convert JSON string to object: `JSON.parse()`.
9. Convert JSON object to string: `JSON.stringify()`.
10. Check string start: `startsWith()`.
11. Check string end: `endsWith()`.
12. Pad string start: `padStart()`.
13. Pad string end: `padEnd()`.

## Ⅲ、Vue

### 1. What is MVVM and MVC?

1. MVVM

   - M stands for Model: Refers to the data passed from the backend.
   - V stands for View: Refers to the view, which is the page you see.
   - VM stands for ViewModel: The bridge connecting the view and the model, mainly handling business logic.

2. MVC

   - M stands for Model
   - V stands for View
   - C stands for Controller, which handles logic.

### 2. Features and Functions of Vue

1. Data-driven
2. Two-way data binding
3. Component-based development

### 3. The principle of Vue's two-way binding, Vue's reactive principle, and data reactivity?

Vue uses a data hijacking combined with a publisher-subscriber pattern. It uses `Object.defineProperty()` to hijack the
`get` and `set` methods. When the data changes, it notifies the subscribers and triggers the reactive callback.

### 4. Responsive Design of the Page

Media queries to detect screen size and perform specific actions accordingly.

### 5. Other methods for two-way binding in Vue besides Object?

Use `addEventListener` to add an input event to the element and perform corresponding operations when the data changes.

### 6. The underlying principle of v-model:

It actually uses `v-bind` to bind the value and `v-on` to bind the input standard event. This event listens for changes
in the input field content to perform some actions.

### 7. v-model is used for two-way data binding in forms. It essentially performs two operations:

1. `v-bind` binds the value attribute.
2. `v-on` directive binds the input event.

### 8. What are the modifiers in Vue?

1. `.stop`: Stops event propagation
2. `.prevent`: Prevents default event behavior
3. `.number`: Converts to a number
4. `.enter`: Triggers on Enter key press
5. `.lazy`: Triggers on blur
6. `.trim`: Trims whitespace
7. `.once`: Triggers only once

### 9. Methods to stop event propagation in Vue?

1. Native JavaScript method: `e.stopPropagation()`
2. Vue modifier: `.stop`

### 10. Methods to prevent default events in Vue?

1. Native JavaScript method: `e.preventDefault()`
2. Vue modifier: `.prevent`

### 11. What is a lifecycle (hook function)? What is the purpose of the lifecycle? What are the lifecycle hooks? Which lifecycle hooks are triggered when the page is loaded for the first time?

1. The lifecycle is the process from the creation to the destruction of a Vue instance.
2. The lifecycle helps us perform specific actions at different stages.
3. There are 8 lifecycle hooks:
   - `beforeCreate`: Before the Vue instance is created
   - `created`: After the Vue instance is created
   - `beforeMount`: Before the DOM is mounted
   - `mounted`: After the DOM is mounted
   - `beforeUpdate`: Before the data is updated
   - `updated`: After the data is updated
   - `beforeDestroy`: Before the Vue instance is destroyed
   - `destroyed`: After the Vue instance is destroyed
4. The first time the page loads, four lifecycle hooks are triggered:
   - `beforeCreate`: Before the Vue instance is created (can add loading animation here)
   - `created`: After the Vue instance is created (can end loading animation here)
   - `beforeMount`: Before the DOM is mounted
   - `mounted`: After the DOM is mounted

### 12. What is a computed property? What is a watcher? Differences and use cases?

1. Computed Property:
   - A computed property is a value derived from other data, provided by Vue.
2. Watcher:
   - A watcher is a Vue feature that performs actions when a specific data changes.
3. Differences:
   - Computed properties support caching and do not support asynchronous operations.
   - Watchers do not support caching, support asynchronous operations, and can listen to data changes.
4. Use Cases:
   - Computed properties: Calculating the total price in a shopping cart.
   - Watchers: Listening to route changes or ID changes to call an API.

### 13. What is a filter?

1. A filter processes data before displaying it on the page without changing the original data.
2. Use Case: Processing timestamps.

### 14. What to do if Vue cannot detect data changes?

1. First case: Directly modifying the value of an array or object.
   - Solution: `this.$set(array/object, index/property, value)`
2. Second case: Array length is 0, clearing data.
   - Solution: Directly assign to empty or use `splice` to delete.

### 15. How to pass data from parent to child and child to parent in Vue? (Component communication methods)

1. Parent to Child: Bind a custom attribute to the child component tag and receive it in the child component using
   `props`.
2. Child to Parent: Use `this.$emit` in the child component to send data, and bind a custom method to the child
   component tag to receive the data.
3. Ancestor to Descendant:
   - Bind `$attrs` and `$listeners` in the descendant component.
4. Descendant to Ancestor:
   - Use `provide` in the ancestor component to send data.
   - Use `inject` in the descendant component to receive data.

### 16. Why do Vue components need to return a variable? Why is data a function?

1. Without returning the data, it becomes globally visible and causes variable pollution. Returning the data makes it
   only accessible within the current component.
2. Data is a function to ensure that each instance has its own data, preventing mutual interference.

### 17. Parent and child component loading order?

1. Components are called in the order of parent first, then child. Rendering is done in the order of child first, then
   parent.
2. Components are destroyed in the order of parent first, then child. Destruction is completed in the order of child
   first, then parent.

### 18. Advantages and disadvantages of single-page and multi-page development?

1. Single-page development: The entire website consists of a single page.
2. Multi-page development: The website consists of multiple pages.
3. Single-page development:
   - Advantages: All functionalities are presented on one page, better user experience, fewer server requests, lower
     maintenance cost.
   - Disadvantages: Complex functionalities, difficult optimization, complex construction.
4. Multi-page development:
   - Advantages: Clear structure, easy implementation, low development cost.
   - Disadvantages: Slow page transitions, high maintenance cost.

### 19. How to solve component style pollution?

Add `scoped` to the CSS and use `::v-deep` or `/deep/` for deep listening.

### 20. Why do we need to penetrate scoped?

To modify the styles of third-party components locally without removing the `scoped` attribute, which would cause global
style pollution.

```css
<
style scoped >
outer >>> third-party-component {
   styles
}

<
/
style >
```

Use `>>>` to penetrate `scoped` and modify other component styles. For Vue 3, use `::v-deep`.

### 21. Vue-router has two modes: hash and history.

1. History mode: No `#` in the URL. Commonly used but has a bug (404 error on page refresh when deployed).
2. Hash mode: `#` in the URL (no 404 error on refresh but less aesthetically pleasing).

### 22. Non-parent-child communication methods in Vue?

1. Add `$observer` to Vue's prototype in `main.js`, use `this.$observer.$emit` to send data, and `this.$observer.$on` to
   receive data.
2. Vuex

### 23. Difference between $router and $route?

1. `$router` is the global router instance with many methods like `push`, `go`, `back`.
2. `$route` is the current route information, including URL, path, and parameters.

### 24. Route navigation methods and passing parameters. Differences between params and query?

1. Route navigation methods:
   - `router-link` with `to`
   - `this.$router.push({path})` in event functions
2. Passing parameters:
   - `params`: Use route name, receive with `this.$route.params`
   - `query`: Use route path, receive with `this.$route.query`
3. Differences:
   - `params`: Not shown in the URL, data lost on refresh (solution: cache locally).
   - `query`: Shown in the URL, data not lost on refresh.

### 25. What is a route guard? Types of route guards? Route hook functions?

1. Route guard: Also known as navigation guard, it refers to hook functions during route transitions.
   - Global guards:
      - `beforeEach`: Before entering the route, e.g., login validation.
      - `afterEach`: After entering the route.
   - Component guards:
      - `beforeRouteEnter`: Before entering the route, cannot access `this` directly.
      - `beforeRouteLeave`: Before leaving the route, can access `this`.
      - `beforeRouteUpdate`: Before updating the route.
   - Route-specific guards:
      - `beforeEnter`: Before entering the route.

### 26. How to implement caching in Vue? How to keep the list position when navigating back from a detail page?

1. Use `keep-alive` to cache components, with the `include` attribute specifying the components to cache.
2. Cached components have two lifecycle hooks: triggered when the component is opened and when it is left.

### 27. What is Vue mixin?

Vue mixin extracts reusable code from multiple Vue files into a single JS file and calls it where needed.

### 28. Do you know Vuex? What are the states in Vuex? What are their functions?

1. Vuex is a state management pattern for Vue applications.
2. There are five states:
   - `state`: Stores common state or data.
   - `actions`: Handles asynchronous data.
   - `mutations`: Handles synchronous data.
   - `getters`: Computed properties.
   - `modules`: Imports Vuex submodules.
3. Example usage: Left navigation menu.

### 29. Vuex workflow

When a component wants to modify the state, it calls `this.$store.dispatch` to trigger an action. The action returns two
parameters: `commit` and the passed value. The action then calls `commit` to trigger a mutation, which modifies the
state. The state change is then stored in the state.

### 30. How to add a property to data in Vue?

1. For a few new properties, use `Vue.set()`.
2. For multiple new properties, use `Object.assign()` to create a new object.
3. If unsure, use `$forceUpdate()` to force a refresh.

### 31. What is Vue virtual DOM?

Vue creates an `Object` to simulate the real DOM structure, including `tag`, `attrs`, and `children`. The `render()`
function compiles the virtual DOM into the real DOM, which is then added to the page using `appendChild()`. The virtual
DOM reduces performance consumption caused by frequent DOM operations.

## Ⅳ. WeChat Mini Program

### 1. Have you used a mini program? What problem stumped you?

Yes, I have used it. There were some issues I forgot because when working on mini-program projects, I mostly referred to
the WeChat developer documentation. The framework has too many features to remember all at once.

### 2. Mini Program Lifecycle

- `onLoad`: Triggered when the page is loaded (accepts a parameter), which is the parameter carried when the route jumps
  over. This parameter is an object.
- `onShow`: Monitor page display.
- `onHide`: Monitor page hiding.
- `onPullDownRefresh`: Monitor user pull-down actions.
- `onReachBottom`: Handle the page reaching the bottom event.
- `onShareAppMessage`: User clicks the top right corner to share.
- `onUnload`: Monitor page unloading.
- `onReady`: Monitor the initial rendering completion of the page.

### 3. Mini Program Navigation

- `wx.navigateTo()`: Navigate to an inner page.
- `wx.switchTab()`: Navigate to a tabbar page.

### 4. Get Data Variables

- `this.data.variableName`

To modify data variables and reassign values:

- `this.setData({variableName: 'newValue'})`

- `bindtap="functionName"`

To prevent event bubbling: `catchtap`

- `data-parameterName`

Will be passed into the event object: `e.currentTarget.dataset.parameterName`

### 5. Difference between `wx:if` and `hidden` (similar to `v-if`/`v-show` in Vue)

- `wx:if`: Determines whether to load, which can reduce browser pressure by loading when needed.
- `hidden`: Whether to hide, `hidden` only changes the display/hidden style of `display`.

### 6. Remember the Next Login in WeChat Mini Program

In the global app, get the user's appid, then use the appid to get user information. Use local data caching to store the
obtained information. When needed, retrieve it and determine if there is data in the cache to decide whether to navigate
to the homepage or the login page.

### 7. How to Implement Payment in Mini Program?

1. Register a mini program, apply for a WeChat public account and payment function as a company.
2. Bind the merchant number and fill in the legal domain in the mini program.
3. Use `wx.login` to get the user's temporary login credential code, send it to the backend server to exchange for
   `openId`, then use the token for login judgment. If not authorized, prompt for authorization and store it in the
   cache. If authorized, directly use the cache.
4. When placing an order, the mini program needs to send the product ID, quantity, and user's `openId` to the server.
5. Call the WeChat payment API, `wx.requestPayment()`, to initiate WeChat payment, wake up the payment workstation, and
   fill in the corresponding signature and other information to get the successful callback to complete the payment.

### 8. Mini Program Release Process (Development Process)

1. Register a WeChat mini program account.
2. Get the AppID of the WeChat mini program.
3. Configure the domain in the WeChat public account.
4. Create a demo project.
5. Upload the code.
6. Submit for review.
7. Release the mini program.

## Ⅴ. uni-app

### 1. Briefly Describe uni-app

uni-app is a framework for developing all front-end applications using Vue.js. Developers write a set of code that can
be published to iOS, Android, H5, and various mini-program platforms (WeChat/Alipay/Baidu/ByteDance/QQ/DingTalk).

### 2. uni-app Lifecycle

1. uni-app Application Lifecycle:

   - `onLaunch`: Triggered when initialization is complete, only triggered once globally.
   - `onShow`: Triggered when uni-app starts or enters the foreground from the background.
   - `onHide`: Triggered when uni-app enters the background from the foreground.
   - `onError`: Triggered when uni-app reports an error.

2. uni-app Page Lifecycle:
   - `onLoad`: Monitor page loading, the parameter is the parameter passed from the previous page, and the type is an
     object.
   - `onReady`: Monitor the initial rendering completion of the page.
   - `onShow`: Monitor page display.
   - `onHide`: Monitor page hiding.
   - `onUnload`: Monitor page unloading.
   - `onPullDownRefresh`: Monitor user pull-down actions, generally used for pull-down refresh.
   - `onReachBottom`: Handle the page reaching the bottom event, used for pull-up loading.

### 3. Advantages and Disadvantages of uni-app

1. Advantages:

   - One set of code can generate multiple ends.
   - Low learning cost, the syntax is Vue's, and the components are from mini-programs.
   - Strong expansion capability.
   - Developed using HBuilderX, supports Vue syntax.
   - Breaks the system's limitation on H5 calling native capabilities.

2. Disadvantages:
   - Short time on the market, many areas are not perfect.
   - Small community.
   - Official feedback on issues is not timely.
   - Performance on Android is worse than WeChat mini-programs and iOS.
   - File naming restrictions.

### 4. Local Data Storage and Retrieval in Mini Program and uni-app

1. WeChat Mini Program:

   - Storage: Use `wx.setStorage`/`wx.setStorageSync` to write data to the cache.
   - Retrieval: Use `wx.getStorage`/`wx.getStorageSync` to read local cache.

2. uni-app:
   - Storage: `uni.setStorage({key: "propertyName", data: "value"})`
   - Retrieval: `uni.getStorage({key: "propertyName", success(res){res.data}})`

### 5. Differences between `rpx`, `px`, `em`, `rem`, `%`, `vh`, `vw`

1. `rpx`: Equivalent to dividing the screen into 750 parts, 1 part is 1rpx, 100rpx = 50px.
2. `px`: Absolute unit, the page is displayed in precise pixels.
3. `em`: Relative unit, calculated relative to the font size of its parent node.
4. `rem`: Relative unit, calculated relative to the font size of the root node `html`.
5. `%`: Generally relative to the parent element.
6. `vh`: Viewport height, 1vh equals 1% of the viewport height.
7. `vw`: Viewport width, 1vw equals 1% of the viewport width.

### 6. Differences in Page Parameter Passing Methods in JS, Vue, uni-app, and Mini Program

1. JS Parameter Passing:

   - Pass parameters by appending them to the URL.
   - Retrieve using `location.href`.

2. Vue Parameter Passing:

   - Pass parameters using the `router-link` tag.
   - Pass parameters using `this.$router.push({})` in events, with two methods: `params` and `query`.
   - Retrieve using `this.$route.params`, `this.$route.query`.

3. Mini Program Parameter Passing:
   - Pass parameters by appending them to the jump path.

### 7. Solving Cross-End Compatibility Issues in uni-app

```html
<!-- #ifdef H5 -->
Code only displayed on H5
<!-- #endif -->

<!-- #ifdef MP-WEIXIN -->
Code only displayed on WeChat Mini Program
<!-- #endif -->
```

### 8. Adapting to Notch Screens in uni-app

Refer to: https://www.cnblogs.com/moranjl/p/15739275.html

## VI. Vue 3.0

### 1. Vue 3.0 Reactive Principle

Vue 3 uses ES6's `Proxy` to turn the target object into a proxy object, and then uses `Reflect` to return the value,
making the data reactive.

### 2. Vue 3 Lifecycle Hooks

Vue 2 has eight lifecycle hooks, while Vue 3 has six. In Vue 3, `beforeCreate` and `created` are replaced by `setup`.

### 3. Composition API Methods

1. `ref`: Defines a reactive primitive data type.
2. `reactive`: Defines a reactive complex composite data type.
3. `watch`: Data watcher.
4. `computed`: Computed properties.
5. `toRefs`: Converts all properties of a reactive object into individual reactive data, turning the object into a plain
   object with linked values.
6. `toRef`: Converts a property of a reactive object into a `ref` object.

### 4. Advantages of Vue 3.0

1. Faster speed: Vue 3 rewrites the virtual DOM implementation, optimizes template compilation, and improves component
   initialization efficiency.
2. Smaller size: Flexible logic combination and reuse, such as `ref`, `reactive`, `computed`, etc., are only packaged
   when used, removing unused modules.
3. Easier maintenance: Flexible logic combination and reuse, better TypeScript support, multiple root nodes, Teleport,
   etc.

### 5. Differences Between Vue 2.0 and 3.0

1. Lifecycle hooks: `beforeCreate` and `created` are merged into `setup`.
2. Multiple root nodes: Internally wrapped in a `Fragment` virtual element.
3. Composition API: Enhances code readability, cohesion, and reusability.
4. Suspense: Allows rendering while waiting for asynchronous components to load.
5. Teleport: Moves part of the DOM outside the Vue app.
6. Reactive principle: Vue 2 uses `Object.defineProperty`, Vue 3 uses `Proxy`.
7. TypeScript support.

### 6. Differences Between Composition API and Options API

1. Better maintenance and encapsulation.
2. Vue 2 organizes code by data, methods, computed, watch, etc., while Vue 3 organizes code by logic.
3. `setup` replaces `beforeCreate` and `created`.
4. `onUnmounted` replaces `beforeDestroy`.
5. `unmounted` replaces `destroyed`.

### 7. Understanding Hook Functions

Similar to mixins in Vue 2, used to encapsulate common code.

### 8. Changes in `v-if` and `v-for` in Vue 3.0

1. Avoid using `v-if` and `v-for` on the same element.
2. In Vue 3.0, `v-if` has higher priority than `v-for`, while in Vue 2.0, `v-for` has higher priority than `v-if`.

## VII. TypeScript

### 1. Data Types in TypeScript

`string`, `number`, `undefined`, `null`, `boolean`, `any`, `tuple`, `enum`, `void`, `object`.

### 2. Key Concepts in TypeScript

1. Union Types: Combine multiple types using `|`.
2. Any: Represents any type.
3. Tuple: Allows representing an array with a known number of elements and types.
4. Enum: Basic data type in TypeScript, includes numeric, string, and heterogeneous enums.
5. Interface: Adds type annotations to objects to constrain their structure.
6. Generics: Define functions or interfaces without specifying types in advance, types are specified when used.

## VIII. Project Essentials

### 1. Project Introduction

Describe the project using the six elements of a narrative: time, characters, place, cause, process, and result. Include
development cycle, team members, responsibilities, project background, user benefits, main technologies, duration,
current status, and highlights.

### 2. Challenges and Solutions

Refer to resources like CSDN, technical blogs, forums, and Juejin for solutions.

### 3. Design Tools and Project Management

Design tools: Blue Lake or MockingBot for downloading UI designs.
Project management tools: ZenTao for bug submission, Git for version control.

### 4. Basic Git Commands and Conflict Resolution

Commands: `git clone`, `git pull`, `git add .`, `git commit -m "message"`, `git push`, `git checkout -b branch`,
`git push origin branch`, `git branch -a`, `git checkout branch`.
Conflict resolution: Use visual tools like TortoiseGit/SVN, merge branches, and resolve conflicts by selecting the
correct code block.

### 5. Implementing Login Functionality

Use JWT for token-based authentication. Store the token in Vuex or browser storage. Use axios interceptors to add the
token to request headers and handle token expiration by redirecting to the login page.

### 6. Using Axios in Projects

Create an axios instance with global configuration in `src/utils/request.js`. Use axios interceptors for loading
indicators, token authentication, and handling token expiration. Encapsulate API interfaces in `src/api`.

### 7. Project Workflow

1. Project initiation.
2. BA gathers requirements and sets project timeline.
3. Requirement review meeting.
4. Backend designs database, UI designs prototypes.
5. UI review.
6. Frontend develops static pages, backend creates APIs, testers write test cases.
7. Frontend-backend integration.
8. Testing.
9. Project launch.
