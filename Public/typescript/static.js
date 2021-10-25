var Demo = /** @class */ (function () {
    function Demo() {
        this.n = 0;
        Demo.s = Demo.s + 1;
        this.n = this.n + 1;
    }
    Demo.prototype.Print = function () {
        console.log("s = " + Demo.s + " n = " + this.n);
    };
    Demo.s = 0;
    return Demo;
}());
var obj1 = new Demo;
obj1.Print();
var obj2 = new Demo;
obj2.Print();
var obj3 = new Demo;
obj3.Print();
