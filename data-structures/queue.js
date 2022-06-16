const queueCodeExamples = [
  //   {
  //     langLabel: "C",
  //     langKey: "c",
  //     operations: {
  //       code: `#include <limits.h>
  // #include <stdio.h>
  // #include <stdlib.h>

  // // A structure to represent a queue
  // struct Queue {
  //   int top;
  //   unsigned capacity;
  //   int* array;
  // };

  // // function to create a queue of given capacity. It initializes size of
  // // queue as 0
  // struct Queue* createQueue(unsigned capacity)
  // {
  //   struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));
  //   queue->capacity = capacity;
  //   queue->top = -1;
  //   queue->array = (int*)malloc(queue->capacity * sizeof(int));
  //   return queue;
  // }

  // // Function to add an item to queue.  It increases top by 1
  // void push(struct Queue* queue, int item)
  // {
  //   if (isFull(queue))
  //       return;
  //   queue->array[++queue->top] = item;
  //   printf("%d pushed to queue\n", item);
  // }

  // // Function to remove an item from queue.  It decreases top by 1
  // int pop(struct Queue* queue)
  // {
  //   if (isEmpty(queue))
  //       return INT_MIN;
  //   return queue->array[queue->top--];
  // }

  // // Function to remove all items from queue.  Top becomes -1
  // int empty(struct Queue* queue)
  // {
  //   queue->top = -1;
  //   return queue->array = (int*) malloc(capacity * sizeof(int));
  // }`,
  //       push: `// Function to add an item to queue.  It increases top by 1
  // void push(struct Queue* queue, int item)
  // {
  //   if (isFull(queue))
  //       return;
  //   queue->array[++queue->top] = item;
  //   printf("%d pushed to queue\n", item);
  // }`,
  //       pop: `// Function to remove an item from queue.  It decreases top by 1
  // int pop(struct Queue* queue)
  // {
  //   if (isEmpty(queue))
  //       return INT_MIN;
  //   return queue->array[queue->top--];
  // }`,
  //       empty: `// Function to remove all items from queue.  Top becomes -1
  // int empty(struct Queue* queue)
  // {
  //   queue->top = -1;
  //   return queue->array = (int*) malloc(capacity * sizeof(int));
  // }`,
  //     },
  //   },
  {
    langLabel: "C++",
    langKey: "cpp",
    operations: {
      code: `// CPP program for array
// implementation of queue
#include <bits/stdc++.h>
using namespace std;
 
// A structure to represent a queue
class Queue {
public:
    int front, rear, size;
    unsigned capacity;
    int* array;
};
 
// function to create a queue
// of given capacity.
// It initializes size of queue as 0
Queue* createQueue(unsigned capacity)
{
    Queue* queue = new Queue();
    queue->capacity = capacity;
    queue->front = queue->size = 0;
 
    // This is important, see the enqueue
    queue->rear = capacity - 1;
    queue->array = new int[queue->capacity];
    return queue;
}
 
// Queue is full when size
// becomes equal to the capacity
int isFull(Queue* queue)
{
    return (queue->size == queue->capacity);
}
 
// Queue is empty when size is 0
int isEmpty(Queue* queue)
{
    return (queue->size == 0);
}
 
// Function to add an item to the queue.
// It changes rear and size
void enqueue(Queue* queue, int item)
{
    if (isFull(queue))
        return;
    queue->rear = (queue->rear + 1)
                  % queue->capacity;
    queue->array[queue->rear] = item;
    queue->size = queue->size + 1;
    cout << item << " enqueued to queue\n";
}
 
// Function to remove an item from queue.
// It changes front and size
int dequeue(Queue* queue)
{
    if (isEmpty(queue))
        return INT_MIN;
    int item = queue->array[queue->front];
    queue->front = (queue->front + 1)
                   % queue->capacity;
    queue->size = queue->size - 1;
    return item;
}
 
// Function to get front of queue
int front(Queue* queue)
{
    if (isEmpty(queue))
        return INT_MIN;
    return queue->array[queue->front];
}
 
// Function to get rear of queue
int rear(Queue* queue)
{
    if (isEmpty(queue))
        return INT_MIN;
    return queue->array[queue->rear];
}
 
// Driver code
int main()
{
    Queue* queue = createQueue(1000);
 
    enqueue(queue, 10);
    enqueue(queue, 20);
    enqueue(queue, 30);
    enqueue(queue, 40);
 
    cout << dequeue(queue)
         << " dequeued from queue\n";
 
    cout << "Front item is "
         << front(queue) << endl;
    cout << "Rear item is "
         << rear(queue) << endl;
 
    return 0;
}`,
      enqueue: `// Function to add an item to the queue.
// It changes rear and size
void enqueue(Queue* queue, int item)
{
    if (isFull(queue))
        return;
    queue->rear = (queue->rear + 1)
                  % queue->capacity;
    queue->array[queue->rear] = item;
    queue->size = queue->size + 1;
    cout << item << " enqueued to queue\n";
}`,
      dequeue: `// Function to remove an item from queue.
// It changes front and size
int dequeue(Queue* queue)
{
    if (isEmpty(queue))
        return INT_MIN;
    int item = queue->array[queue->front];
    queue->front = (queue->front + 1)
                   % queue->capacity;
    queue->size = queue->size - 1;
    return item;
}`,
    },
  },
  //   {
  //     langLabel: "Javascript",
  //     langKey: "javascript",
  //     operations: {
  //       code: `class Queue {
  //   /**
  //    * Constructor: Creates an instance of a queue.
  //    *
  //    * @param {array} array Instance of an array object to be mutated.
  //    */
  //   constructor(array) {
  //     this.array = [];
  //     if (array) {
  //       this.array = array;
  //     }
  //   }

  //   /**
  //    * Function add an element to the top of the queue.
  //    *
  //    * @param {any} value Value of the element to be pushed into the queue.
  //    */
  //   push(value) {
  //     this.array.push(value);
  //   }

  //   /**
  //    * Function removing the top element in the queue.
  //    *
  //    * @returns The popped element.
  //    */
  //   pop() {
  //     return this.array.pop();
  //   }

  //   /**
  //    * Function for remove all the elements in the queue.
  //    */
  //   clear() {
  //     this.array = [];
  //   }
  // }
  //       `,
  //       push: `/**
  //   * Function add an element to the top of the queue.
  //   *
  //   * @param {any} value Value of the element to be pushed into the queue.
  //   */
  // push(value) {
  //   this.array.push(value);
  // }
  //   `,
  //       pop: `/**
  //   * Function removing the top element in the queue.
  //   *
  //   * @returns The popped element.
  //   */
  // pop() {
  //   return this.array.pop();
  // }
  //   `,
  //       empty: `/**
  //   * Function for remove all the elements in the queue.
  //   */
  // empty() {
  //   this.array = [];
  // }
  //   `,
  //     },
  //   },
  //   {
  //     langLabel: "Python 3",
  //     langKey: "python",
  //     operations: {
  //       code: `# Used to return -infinite when queue is empty
  // from sys import maxsize

  // # Function to create a queue. It initializes size of queue as 0
  // def createQueue():
  //     queue = []
  //     return queue

  // # Function to add an item to queue. It increases size by 1
  // def push(queue, item):
  //     queue.append(item)
  //     print(item + " pushed to queue ")

  // # Function to remove an item from queue. It decreases size by 1
  // def pop(queue):
  //     if (isEmpty(queue)):
  //         return str(-maxsize -1) # return minus infinite

  //     return queue.pop()

  // # Reset queue to 0
  // def empty(queue):
  //     queue = []
  //     return queue`,
  //       push: `# Function to add an item to queue. It increases size by 1
  // def push(queue, item):
  //     queue.append(item)
  //     print(item + " pushed to queue ")`,
  //       pop: `# Function to remove an item from queue. It decreases size by 1
  // def pop(queue):
  //     if (isEmpty(queue)):
  //         return str(-maxsize -1) # return minus infinite

  //     return queue.pop()`,
  //       empty: `# Reset queue to 0
  // def empty(queue):
  //     queue = []
  //     return queue`,
  //     },
  //   },
  //   {
  //     langLabel: "Java",
  //     langKey: "java",
  //     operations: {
  //       code: `class Queue {
  //     static final int MAX = 1000;
  //     int top;
  //     int a[] = new int[MAX]; // Maximum size of Queue

  //     boolean isEmpty()
  //     {
  //         return (top < 0);
  //     }
  //     Queue()
  //     {
  //         top = -1;
  //     }

  //     boolean push(int x)
  //     {
  //         if (top >= (MAX - 1)) {
  //             System.out.println("Queue Overflow");
  //             return false;
  //         }
  //         else {
  //             a[++top] = x;
  //             System.out.println(x + " pushed into queue");
  //             return true;
  //         }
  //     }

  //     int pop()
  //     {
  //         if (top < 0) {
  //             System.out.println("Queue Underflow");
  //             return 0;
  //         }
  //         else {
  //             int x = a[top--];
  //             return x;
  //         }
  //     }

  //     void empty(){
  //       top = -1;
  //     }
  //   }
  // }`,
  //       push: `boolean push(int x)
  // {
  //     if (top >= (MAX - 1)) {
  //         System.out.println("Queue Overflow");
  //         return false;
  //     }
  //     else {
  //         a[++top] = x;
  //         System.out.println(x + " pushed into queue");
  //         return true;
  //     }
  // }`,
  //       pop: `int pop()
  // {
  //     if (top < 0) {
  //         System.out.println("Queue Underflow");
  //         return 0;
  //     }
  //     else {
  //         int x = a[top--];
  //         return x;
  //     }
  // }`,
  //       empty: `void empty(){
  //   top = -1;
  // }`,
  //     },
  //   },
];

export default queueCodeExamples;
