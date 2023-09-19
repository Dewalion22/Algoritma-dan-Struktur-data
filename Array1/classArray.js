class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get (index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++; // indexnya akan bertambah dengan berarturan seiring dengan item yang dimasukan
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length-1]; // akan di hapus data di belakangnya
        this.length--;
        return lastItem
    }

    deleteAtIndex (index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item
    }

    shiftItems(index) {

        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]; //akan menggeser item yang ada pada array
        }
        console.log(this.data[this.length-1]);
        delete this.data[this.length - 1];
        this.length--;
    }
}
const myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
myArray.push('!');
myArray.pop();
console.log(myArray);
myArray.push('are');
myArray.push('nice');
console.log(myArray);
myArray.shiftItems(4);
console.log(myArray);
