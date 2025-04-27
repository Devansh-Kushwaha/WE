class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    append(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head=this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode
        }
        this.length++
    }
    remove(value){
        let temp=this.head
        if(temp.value==value){
            this.head=temp.next
            this.length--
        }
        else{
            while (temp.next && temp.next.value !== value) {
                temp = temp.next;
            }
        
            if (temp.next) {
                temp.next = temp.next.next;
                if (!temp.next) this.tail = temp;
                this.length--;
            }
        }
    }
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
    
    
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

list.remove(20);
list.print();