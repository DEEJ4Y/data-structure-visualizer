const stackCodeExamples = [
  {
    langLabel: "C",
    langKey: "c",
    operations: {
      code: `#include <limits.h>
#include <stdio.h>
#include <stdlib.h>

// A structure to represent a stack
struct Stack {
  int top;
  unsigned capacity;
  int* array;
};

// function to create a stack of given capacity. It initializes size of
// stack as 0
struct Stack* createStack(unsigned capacity)
{
  struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));
  stack->capacity = capacity;
  stack->top = -1;
  stack->array = (int*)malloc(stack->capacity * sizeof(int));
  return stack;
}

// Function to add an item to stack.  It increases top by 1
void push(struct Stack* stack, int item)
{
  if (isFull(stack))
      return;
  stack->array[++stack->top] = item;
  printf("%d pushed to stack\n", item);
}

// Function to remove an item from stack.  It decreases top by 1
int pop(struct Stack* stack)
{
  if (isEmpty(stack))
      return INT_MIN;
  return stack->array[stack->top--];
}

// Function to remove all items from stack.  Top becomes -1
int empty(struct Stack* stack)
{
  stack->top = -1;
  return stack->array = (int*) malloc(capacity * sizeof(int));
}`,
      push: `// Function to add an item to stack.  It increases top by 1
void push(struct Stack* stack, int item)
{
  if (isFull(stack))
      return;
  stack->array[++stack->top] = item;
  printf("%d pushed to stack\n", item);
}`,
      pop: `// Function to remove an item from stack.  It decreases top by 1
int pop(struct Stack* stack)
{
  if (isEmpty(stack))
      return INT_MIN;
  return stack->array[stack->top--];
}`,
      empty: `// Function to remove all items from stack.  Top becomes -1
int empty(struct Stack* stack)
{
  stack->top = -1;
  return stack->array = (int*) malloc(capacity * sizeof(int));
}`,
    },
  },
  {
    langLabel: "C++",
    langKey: "cpp",
    operations: {
      code: `#include <bits/stdc++.h> 
using namespace std; 
#define MAX 1000
 
class Stack {
    int top;
 
public:
    int a[MAX]; // Maximum size of Stack
 
    Stack() { top = -1; }
    bool push(int x);
    int pop();
    bool empty();
};
 
bool Stack::push(int x)
{
    if (top >= (MAX - 1)) {
        cout << "Stack Overflow";
        return false;
    }
    else {
        a[++top] = x;
        cout << x << " pushed into stack\n";
        return true;
    }
}
 
int Stack::pop()
{
    if (top < 0) {
        cout << "Stack Underflow";
        return 0;
    }
    else {
        int x = a[top--];
        return x;
    }
}

void Stack::empty(){
  top = -1;
}`,
      push: `bool Stack::push(int x)
{
    if (top >= (MAX - 1)) {
        cout << "Stack Overflow";
        return false;
    }
    else {
        a[++top] = x;
        cout << x << " pushed into stack\n";
        return true;
    }
}`,
      pop: `int Stack::pop()
{
    if (top < 0) {
        cout << "Stack Underflow";
        return 0;
    }
    else {
        int x = a[top--];
        return x;
    }
}`,
      empty: `void Stack::empty(){
  top = -1;
}`,
    },
  },
  {
    langLabel: "Javascript",
    langKey: "javascript",
    operations: {
      code: `class Stack {
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
   * Function add an element to the top of the stack.
   *
   * @param {any} value Value of the element to be pushed into the stack.
   */
  push(value) {
    this.array.push(value);
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
   * Function for remove all the elements in the stack.
   */
  clear() {
    this.array = [];
  }
}
      `,
      push: `/**
  * Function add an element to the top of the stack.
  *
  * @param {any} value Value of the element to be pushed into the stack.
  */
push(value) {
  this.array.push(value);
}
  `,
      pop: `/**
  * Function removing the top element in the stack.
  *
  * @returns The popped element.
  */
pop() {
  return this.array.pop();
}
  `,
      empty: `/**
  * Function for remove all the elements in the stack.
  */
empty() {
  this.array = [];
}
  `,
    },
  },
  {
    langLabel: "Python 3",
    langKey: "python",
    operations: {
      code: `# Used to return -infinite when stack is empty
from sys import maxsize
 
# Function to create a stack. It initializes size of stack as 0
def createStack():
    stack = []
    return stack
 
# Function to add an item to stack. It increases size by 1
def push(stack, item):
    stack.append(item)
    print(item + " pushed to stack ")
     
# Function to remove an item from stack. It decreases size by 1
def pop(stack):
    if (isEmpty(stack)):
        return str(-maxsize -1) # return minus infinite
     
    return stack.pop()
    
# Reset stack to 0
def empty(stack):
    stack = []
    return stack`,
      push: `# Function to add an item to stack. It increases size by 1
def push(stack, item):
    stack.append(item)
    print(item + " pushed to stack ")`,
      pop: `# Function to remove an item from stack. It decreases size by 1
def pop(stack):
    if (isEmpty(stack)):
        return str(-maxsize -1) # return minus infinite
     
    return stack.pop()`,
      empty: `# Reset stack to 0
def empty(stack):
    stack = []
    return stack`,
    },
  },
  {
    langLabel: "Java",
    langKey: "java",
    operations: {
      code: `class Stack {
    static final int MAX = 1000;
    int top;
    int a[] = new int[MAX]; // Maximum size of Stack
 
    boolean isEmpty()
    {
        return (top < 0);
    }
    Stack()
    {
        top = -1;
    }
 
    boolean push(int x)
    {
        if (top >= (MAX - 1)) {
            System.out.println("Stack Overflow");
            return false;
        }
        else {
            a[++top] = x;
            System.out.println(x + " pushed into stack");
            return true;
        }
    }
 
    int pop()
    {
        if (top < 0) {
            System.out.println("Stack Underflow");
            return 0;
        }
        else {
            int x = a[top--];
            return x;
        }
    }

    void empty(){
      top = -1;
    }
  }
}`,
      push: `boolean push(int x)
{
    if (top >= (MAX - 1)) {
        System.out.println("Stack Overflow");
        return false;
    }
    else {
        a[++top] = x;
        System.out.println(x + " pushed into stack");
        return true;
    }
}`,
      pop: `int pop()
{
    if (top < 0) {
        System.out.println("Stack Underflow");
        return 0;
    }
    else {
        int x = a[top--];
        return x;
    }
}`,
      empty: `void empty(){
  top = -1;
}`,
    },
  },
];

export default stackCodeExamples;
