/**
 * Class for implementation of stack.
 */
class Stack {
  /**
   * Constructor: Creates an instance of a stack.
   *
   * @param {array} array Instance of an array object to be mutated.
   */
  constructor(array) {
    this.array = [];
    if (array) {
      this.array = array;
    }
  }

  /**
   * Function for retrieving the elements in the stack.
   *
   * @returns A copy of the current state of the stack.
   */
  getBuffer() {
    return this.array.slice();
  }

  /**
   * Function to check if the stack is empty.
   */
  isEmpty() {
    return this.array.length === 0;
  }

  /**
   * Function add an element to the top of the stack.
   *
   * @param {any} value Value of the element to be pushed into the stack.
   */
  push(value) {
    this.array.push(value);
  }

  /**
   * Function for retrieving the element at the top of the stack.
   */
  peek() {
    return this.array[this.array.length - 1];
  }

  /**
   * Function removing the top element in the stack.
   *
   * @returns The popped element.
   */
  pop() {
    return this.array.pop();
  }

  /**
   * Function for retrieving the number of elements in the stack.
   */
  size() {
    return this.array.length;
  }

  /**
   * Function for remove all the elements in the stack.
   */
  clear() {
    this.array = [];
  }

  /**
   * Function to access the value of a particular index in the stack.
   */
  access(index) {
    if (index < 0 || index >= this.array.length) {
      return null;
    }
    return this.array[index];
  }

  /**
   * Function for searching for an element in the stack.
   *
   * @return {number} Returns the index of the first matching element.
   * Returns -1 if not found.
   */
  search(value) {
    for (var i = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        return i;
      }
    }
    return -1;
  }
}

export default Stack;
