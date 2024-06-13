export class CartModel{
    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get unitPrice() {
        return this._unitPrice;
    }

    set unitPrice(value) {
        this._unitPrice = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get totalPrice() {
        return this._totalPrice;
    }

    set totalPrice(value) {
        this._totalPrice = value;
    }
    constructor(itemCode,name,unitPrice,qty,totalPrice) {
        this._itemCode = itemCode;
        this._name = name;
        this._unitPrice = unitPrice;
        this._qty = qty;
        this._totalPrice = totalPrice;
    }

}