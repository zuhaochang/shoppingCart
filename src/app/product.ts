export class Product {
    constructor(
        public name: string = null,
        public price: number = null,
        public amount: number = null,
        public isEdit: boolean =false) {

    }
    toString() {
        return this.name + ' | ' + this.price + ' ^ ' + this.amount;
    }
}
