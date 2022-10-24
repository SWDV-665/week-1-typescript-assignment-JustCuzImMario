
var Grocery = /** @class */ (function () {
    function Grocery(name, grocery_id, quantity, price) 
    {
        this.name = name;
        this.grocery_id = grocery_id;
        this.quantity = quantity;
        this.price = price;
        this.sub_total = (quantity * price);
    }
    return Grocery;
}());

/* pushing to the HTML */

var g_peanutbutter = new Grocery("Peanut Butter", 11, 4, 4.99);
var g_bread = new Grocery("Bread", 12, 3, 3.99);
var g_nutella = new Grocery("Nutella", 13, 4, 5.69);
var g_jam = new Grocery("Jam", 14, 3, 1.99);
var g_milk = new Grocery("Milk", 15, 4, 3.59)

var list_g = [];

list_g.push(g_peanutbutter);
list_g.push(g_bread);
list_g.push(g_nutella);
list_g.push(g_jam);
list_g.push(g_milk);


var table = document.getElementById('grocery');

list_g.map(function (grocery) 
{
    var name = grocery.name, grocery_id = grocery.grocery_id, quantity = grocery.quantity, price = grocery.price, sub_total = grocery.sub_total;
    var row = table.insertRow();
    
    row.innerHTML = "\n<td id=\"name\">" + name 
    + "</td>\n<td id=\"gro_id\">" + grocery_id 
    + "</td>\n<td id=\"qty\">" + quantity 
    + "</td>\n<td id=\"price\">" + price 
    + "</td>\n<td id=\"subtotal\">" + sub_total + "</td>";
}); 