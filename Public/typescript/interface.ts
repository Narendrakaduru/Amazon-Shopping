interface IProduct{
    Name:string;
    Price:number;
    Stock:boolean;
    Quantity:number;
    Description?:string; // * it is Optional
}

interface ICategory{
    category:string;
}

let product:IProduct = {
    Name: "Samsung TV",
    Price: 95000.00,
    Stock: true,
    Quantity: 2
}

class Product1 implements IProduct, ICategory{
    Name: "Samsung TV";
    Price: 95000.00;
    Stock: true;
    Quantity: 2;
    category: "Electronics";
}

