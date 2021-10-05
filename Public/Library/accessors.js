export default class Product{
    UserName;
    Password;
    StatusMsg;
    _productName;

    get ProductName(){
        return this._productName;
    }

    set ProductName(newName){
        if(this.UserName == 'jhon' && this.Password == 'admin'){
            this._productName = newName;
        }else{
            this.StatusMsg = "You are not Authorized to set ProductName";
        }
    }
}