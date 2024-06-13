export class OrderModel{
    constructor(order_date,order_id,customer_id,total,discount,cash) {
        this.orderDate=order_date;
        this.orderId=order_id;
        this.customerId=customer_id;
        this.total=total;
        this.discount=discount;
        this.cash=cash;
    }

}