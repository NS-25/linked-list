class Node {
    constructor(data) {
        // a Node starts with a given data property
        this.data = data
        // a Node also has a .next property initialized as null
        this.next = null
    }
}

//example....
// class firstNode = new Node(10);
// class secondNode = new Node(5);
// firstNode.next = secondNode;
// console.log(firstNode.next.next);

class LinkedList {
    constructor() {
        // a Linked List starts with a "head" property intialized as null
        this.head = null
    }
    appendNode(data) {
        //creates a new node with the given data and 
        const node = new Node(data)
        // console.log(node);
        //adds it to back of the list
        // if(!this.head) return this.head = node // one way to write 
        // second way
        if (!this.head) {
            this.head = node;
            return this;
        }
        ///////////////
        let walker = this.head

        while (walker.next) {
            walker = walker.next;
        }

        walker.next = node;
        return this;
        //////////////////
    }
    ///////
    prependNode(data) {
        // creates a new node with the given data and
        const node = new Node(data);
        // adds it to the front of the list
        if (!this.head) {
            this.head = node;
            return this;
        }
        let oldHead = this.head;
        node.next = oldHead;
        this.head = node;
        return this;

    }
    ////
     pop(){
         // removes the last node from the list and returns it
         if(!this.head) return null

         if(!this.head.next){
            let poppedNode = this.head;
            this.head = null;
            return poppedNode;
         }

         let walker = this.walker;
         while(walker.next.next){
                walker = walker.next
         }
         let poppedNode = walker.next;
         walker.next = null;
         return poppedNode;
     }

     print(){
        console.log(this);
        return;
     }


}



const myPlayList = new LinkedList();
myPlayList.appendNode("Fireflies");
myPlayList.appendNode("Changes");
myPlayList.appendNode("why");
myPlayList.appendNode("FML");
myPlayList.print();

console.log(myPlayList);








// appendNode(data){
//     // creates a new node with the given data and adds it to back of the list
// }
// prependNode(data){
//     // creates a new node with the given data and adds it to the front of the list
// }
// pop(){
//     // removes the last node from the list and returns it
// }
// removeFromFront(){
//     // remove the head node from the list and return it
//     // the next node in the list is the new head node
// }
// insertAt(X, data){
//     // insert a new node into the list with the given data
//     // place it after X nodes in the list
//     // if X exceeds the bounds of the list, put the node at the end
//     // insertAt(0, 7) would add the new node as the head
// }
// removeAt(X){
//     // remove the Xth node from the list, considering 0 to be the first node
//     // return the node that has been removed
// }
// search(data){
//     // searches the list for a node with the given data
//     // if it is found, return the "index" of the node, considering 0 to be the first node
//     // if not, return false
// }
// sort(){
//     // sort the Linked List in ascending order of data values
// }

module.exports = {
    Node,
    LinkedList
}