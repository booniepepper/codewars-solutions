// https://www.codewars.com/kata/55dd5386575839a74f0000a9

function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  if (!head || !head.next) {
    throw "Can only split a list of Node with length >= 2";
  }
  
  var context = new Context(head, head.next);
  var nodes = [context.first, context.second];
  var i = 0;
  head = head.next;
  while (head) {
    head = head.next;
    if (head == null) {
      nodes[0].next = null;
      nodes[1].next = null;
    }
    else {
      nodes[i].next = head;
      nodes[i] = nodes[i].next;
    }
    i = (i + 1) % 2;
  }
  
  return context;
}

