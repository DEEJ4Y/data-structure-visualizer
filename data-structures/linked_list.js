/**
 * Function for creating a singly linked list node.
 */
function Node(data) {
  return {
    data: data,
    next: null,
  };
}

/**
 * Function for implementing a singly linked list.
 */
function SingleLinkedList() {
  let head = null,
    tail = null,
    length = 0;

  /**
   * Function for traversing the nodes in the list.
   *
   * @param {function} fn Function to call on every node.
   */
  function traverseList(fn) {
    let current = head;

    while (current) {
      // Store the result for short circuit evaluation.
      var result = fn(current);

      // If a null result is found break out of traversal.
      if (null === result) {
        return;
      }

      current = current.next;
    }
  }

  return {
    /**
     * Function for traversing the nodes in the list.
     *
     * The function passed in as an argument should take a node as its only
     * argument. This is not particularly useful for finding
     *
     * @param {any} data Whatever value the node should hold.
     * @return {Object} returns the node appened to the list.
     */
    append: function (data) {
      const node = Node(data);

      // First addition.
      if (!head && !tail) {
        head = node;
        tail = node;
        // Any other addition.
      } else {
        tail.next = node;
        tail = node;
      }

      length++;

      return node;
    },

    /**
     * Function for traversing the nodes in the list.
     *
     * The function passed in as an argument should take a node as its only
     * argument. This is not particularly useful for finding
     *
     * @param {any} data Whatever value the node should hold.
     * @return {Object} returns the node appened to the list.
     */
    prepend: function (data) {
      const node = Node(data);

      // First addition.
      if (!head) {
        head = node;
        tail = node;
        // Any other addition.
      } else {
        node.next = head;
        head = node;
      }

      length++;

      return node;
    },

    /**
     * Removes first node of the list and returns it.
     *
     * @return {Object|null} returns the removed node or null if no node.
     */
    removeFirst: function () {
      if (!head) {
        // If empty return null.
        return null;
      }

      let node = null;

      if (head === tail) {
        node = head;

        // If head is the only node.
        head = null;
        tail = null;
      } else {
        node = head;

        head = head.next;
      }

      length--;

      return node;
    },

    /**
     * Function for traversing the nodes in the list.
     *
     * @see traverseList above for more documentation.
     *
     * @param {function} fn Function to call on every node.
     */
    traverse: traverseList,

    /**
     * Outputs the linked list into a native array.
     *
     * @return {array} Array representation of the single linked list.
     */
    intoArray: function () {
      const array = [];

      traverseList((item) => array.push(item.data));

      return array;
    },

    /**
     * Outputs the sequence of the list from head to tail as a string.
     *
     * @return {string} String representation of the single linked list.
     */
    print: function () {
      const array = [];

      traverseList((item) => array.push(JSON.stringify(item.data)));

      return array.join(" ");
    },

    /**
     * Return length of the list.
     *
     * @return {int} Returns the length of the list.
     */
    length: function () {
      return length;
    },
  };
}

export default SingleLinkedList;
