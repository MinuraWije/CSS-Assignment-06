import {order_details} from "../db/db.js";
import {orderDetailsModel} from "../model/orderDetailsModel";


let clickedIndex;
$("#nav-order-details").on('click',()=>{
    loadTable()
})
function loadTable(){
    $("#order-details-table-tbody").append().empty()

    order_details.map((order, index) =>{
        var record = `
         <tr>
         <td class="order-detail-orderId">${order.OrderModel.orderId}</td>
         <td class="order-detail-custName">${order.OrderModel.customerName}</td>
         <td class="order-detail-date">${order.OrderModel.date}</td>
         <td class="order-detail-total">${order.OrderModel.total}</td>
         <td class="order-detail-discount">${order.OrderModel.discount}</td>
         <td class="order-detail-subTotal">${order.OrderModel.subtotal}</td>
            </tr>`

        $("#order-details-table-tbody").append(record)
    })
}
$("#order-details-table-tbody").on('click','tr',function (){
    let index = $(this).index();
    clickedIndex = index;

    let order = order_details[clickedIndex]

    console.log(order.item)
})

