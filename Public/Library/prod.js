export default class Product{
    Name = "";
    Price = 0;
    Qty = 0;
    Total() {
        return this.Qty * this.Price;
    }
    Print() {
        return `Name = ${this.Name} <br> Price = ${this.Price} <br> Quantity = ${this.Qty}`;
    }
}