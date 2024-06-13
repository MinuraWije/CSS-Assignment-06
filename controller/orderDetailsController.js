import {customers, orders} from "../db/db.js";
import {OrderModel} from "../model/orderModel.js";
import {order_details} from "../db/db.js";
import {orderModel} from "../model/orderDetailsModel.js";

let searchField=$('#orderDetails-searchBar');

searchField.on('input', function () {
    let search_term = searchField.val();

    let results = orders.filter((item) =>

        item.orderDate.toLowerCase().startsWith(search_term.toLowerCase()) || item.orderId.toLowerCase().startsWith(search_term.toLowerCase()) ||
        item.customerId.toLowerCase().startsWith(search_term.toLowerCase())

    );

    $('#order-details-table-tbody').eq(0).empty();
    results.map((orderDetails, index) => {
        let tbl_row = `<tr>
                <th scope="row">${orderDetails.orderId}</th>
                <td>${orderDetails.orderDate}</td>
                <td>${orderDetails.customerId}</td>
                <td>${orderDetails.total}</td>
                <td>${orderDetails.discount}</td>
                <td>${calculateSubtotal(orderDetails.total, orderDetails.discount)}</td>
                <td>${orderDetails.cash}</td>
                <td>${calculateBalance(orderDetails.cash, orderDetails.total, orderDetails.discount)}</td>                
            </tr>`;
        $('#order-details-table-tbody').eq(0).append(tbl_row);
    });

});

function populateTableOrderDetails() {
    $('#order-details-table-tbody').eq(0).empty();
    orders.map((orderDetails) => {
        $('#order-details-table-tbody').eq(0).append(
            `<tr>
                <th scope="row">${orderDetails.orderId}</th>
                <td>${orderDetails.orderDate}</td>
                <td>${orderDetails.customerId}</td>
                <td>${orderDetails.total}</td>
                <td>${orderDetails.discount}</td>
                <td>${calculateSubtotal(orderDetails.total, orderDetails.discount)}</td>
                <td>${orderDetails.cash}</td>
                <td>${calculateBalance(orderDetails.cash, orderDetails.total, orderDetails.discount)}</td>                
            </tr>`
        );
    });
}

// Helper function to calculate subtotal based on total and discount
function calculateSubtotal(total, discount) {
    const discountValue = parseFloat(discount) || 0;
    const subtotal = total - (total * (discountValue / 100));
    return subtotal.toFixed(2); // Assuming you want two decimal places
}

// Helper function to calculate balance based on cash, total, and discount
function calculateBalance(cash, total, discount) {
    const discountValue = parseFloat(discount) || 0;
    const subtotal = calculateSubtotal(total, discount);
    const balance = cash - parseFloat(subtotal);
    return balance.toFixed(2); // Assuming you want two decimal places
}

$('#nav-order-details').on('click', function() {
    populateTableOrderDetails();
});


/*$("#orderDetailsSearchButton").on('click', () => {
    const searchQuery = $("#orderDetails-searchBar").val().trim().toLowerCase();
    const searchResults = [];


    orders.forEach(order => {
        if (
            order.orderId.toLowerCase() === searchQuery ||
            order.orderDate.toLowerCase().includes(searchQuery) ||
            order.customerId.toLowerCase().includes(searchQuery) ||
            order.total.toLowerCase().includes(searchQuery) ||
            order.discount.toLowerCase().includes(searchQuery) ||
            order.cash.toLowerCase() === searchQuery
        ) {
            searchResults.push(order);
        }
    });

    $("#order-details-table-tbody").empty();


    searchResults.forEach(order => {
        $("#order-details-table-tbody").append(`
            <tr>
                <td>${order.customerId}</td>
                <td>${order.customerName}</td>
                <td>${order.customerEmail}</td>
                <td>${order.customerAddress}</td>
                <td>${order.customerPhone}</td>
            </tr>
        `);
    });


    if (searchResults.length === 0) {
        $("#customer-table-tbody").html("<tr><td colspan='4'>No matching customers were found.</td></tr>");
    }
});*/
