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

  /**
   * 向链表尾部添加元素
   * @param  {Any} value 要加入链表的节点
   */
  append(value) {
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

  /**
   * 删除指定节点
   * @param {Number} position 要删除位置
   * @return {Any} 被删除的节点
   */
  removeAt(position) {
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

  /**
   * 向链表中插入某个元素
   * @param {Number} position 插入位置
   * @param {Any} val 插入元素
   * @return {Boolean} 插入成功返回true，失败返回false
   */
  insert(position, val) {
    if (position >= this.length || position < 0) {
      return false;
    }
    const node = new Node(val);
    if (position === 0) { // 插入位置在头节点
      node.next = this.head;
      this.head = node;
    } else {
      let index = 0;
      let current = this.head;
      let prev = null;
      while (index < position) { // 遍历链表找到指定位置的节点，并记录下前一个节点和该位置原节点
        prev = current;
        current = current.next;
        index += 1;
      }
      node.next = current;
      prev.next = node;
    }
    this.length += 1;
    return true;
  }

  /**
   * 寻找某个元素在单向链表中的位置
   * @param  {Any} val 要寻找的元素
   * @param  {Number} start 起止位置
   * @return {Number} 返回值>=0则代表找到相应位置
   */
  indexOf(val, start = 0) {
    if (start >= this.length) { // 判断起始位置是否合法
      return -1;
    }
    let index = 0;
    let current = this.head;
    while (index < this.length) {
      if (current.val === val && index >= start) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  }

  /**
   * 移除给定的元素
   * @param {Any} val 要移除的元素
   * @param {Number} start 给定元素位置
   */
  remove(val, start = 0) {
    const index = this.indexOf(val, start);
    return this.removeAt(index);
  }

  /**
   * 链表长度
   */
  size() {
    return this.length;
  }

  /**
   * 链表是否为空
   */
  isEmpty() {
    return !!this.length;
  }
}

const linked = new LinkedList('bosc');

