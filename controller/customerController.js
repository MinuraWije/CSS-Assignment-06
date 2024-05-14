import {customers} from "../db/db.js";
import {CustomerModel} from "../model/customerModel.js";

let idCounter = 1
let clickedIndex;

$('#btnAddCustomer').on('click',() =>{
    let customerId = getCustomerId();
    let customerName = $("#customerName").val();
    let customerEmail = $("#customerEmail").val();
    let customerAddress = $("#customerAddress").val();
    let customerPhone = $("#customerPhone").val();

    let customer = new CustomerModel(customerId(),customerName,customerEmail,customerAddress,customerPhone);
    customers.push(customer)
    console.log(customers)
    clearCustomer()
    loadTable()
});

function  getCustomerId(){
    return function (){
        let customerId = String(idCounter).padStart(3,'0')
        let id = "C"+customerId;
        idCounter++
        return id;
    }
}
function clearCustomer() {
    $("#customerName").val("")
    $("#customerEmail").val("")
    $("#customerAddress").val("")
    $("#customerPhone").val("")

    $("#customerIdUpdate").text("");
    $("#customerNameUpdate").val("");
    $("#customerAddressUpdate").val("");
    $("#customerPhoneUpdate").val("");
}

function loadTable(){
    $("#customer-table-tbody").append().empty()
    customers.map((item,index)=>{
        var record =
            `<tr>
        <td class="customerId">${item.customerId}</td>
        <td class = "customerName">${item.customerName}</td>
        <td class = "customerEmail">${item.customerEmail}</td>
        <td class = "customerAddress">${item.customerAddress}</td>
        <td class = "customerPhone">${item.customerPhone}</td>
            </tr>`
        $("#customer-table-tbody").append(record);
    })
}

$("#customer-table-tbody").on('click','tr', function (){
    let index = $(this).index();
    clickedIndex = index;
    let customerId = $(this).find(".customerId").text()
    let customerName = $(this).find(".customerName").text()
    let customerEmail = $(this).find(".customerEmail").text()
    let customerAddress = $(this).find(".customerAddress").text()
    let customerPhone = $(this).find(".customerPhone").text()


    $("#updateCustomerbtn").click()
    $("#customerIdUpdate").text(customerId);
    $("#customerNameUpdate").val(customerName);
    $("#customerEmailUpdate").val(customerEmail);
    $("#customerAddressUpdate").val(customerAddress);
    $("#customerPhoneUpdate").val(customerPhone);

})

$("#btnUpdateCustomer").on('click',()=>{

    let customerIdUpdated = $("#customerIdUpdate").text();
    let customerNameUpdated = $("#customerNameUpdate").val();
    let customerEmailUpdated = $("#customerEmailUpdate").val();
    let customerAddressUpdated = $("#customerAddressUpdate").val();
    let customerPhoneUpdated = $("#customerPhoneUpdate").val();

    let customerObject = customers[clickedIndex];

    customerObject.customerId =customerIdUpdated
    customerObject.customerName = customerNameUpdated
    customerObject.customerEmail = customerEmailUpdated
    customerObject.customerAddress = customerAddressUpdated
    customerObject.customerPhone = customerPhoneUpdated

    clearCustomer()
    loadTable()
})

$("#btnDeleteCustomer").on('click',()=>{
    customers.splice(clickedIndex,1)
    loadTable()
    clearCustomer()
})