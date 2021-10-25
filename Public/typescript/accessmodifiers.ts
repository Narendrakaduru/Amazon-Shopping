class Product12 {
    public Name = "Samsung TV";
    private Price = 95000.55;
    protected Stock = true; // * in derived class using derived class onject
}

let obj = new Product12();
obj.Name;

class TV extends Product12 {
    Print(){
        let obj1 = new TV;
        obj1.Name;
        obj1.Stock;
    }
}
