/**
 * 单个链表节点
 */
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

/**
 * 链表结构
 */
class LinkedList {
  constructor(value = null) {
    this.head = null;  // 链表指针
    this.length = 0;  // 链表长度
    if (value) {
      this.head = new Node(value);
      this.length = 1;
    }
  }

  append(value) { // 添加节点
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while(currentNode.next) { // next 为空
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length += 1;
  }

  removeAt(position) { // 删除指定节点
    if (this.length <= position && position < 0) return null;
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let index = 0;
      let prev = null;
      while (index < position) {
        prev = current;
        current = current.next
        index += 1
      }
      prev.next = current.next;
    }
    this.length -= 1;
    return current.val;
  }
}

const linked = new LinkedList('bosc');

