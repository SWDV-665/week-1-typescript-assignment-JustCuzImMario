class Grocery {
    name: string;
    grocery_id: number;
    quantity: number;
    price: number;
    sub_total: number;

    constructor(name: string, grocery_id: number, quantity: number, price: number) 
    {
        this.name = name;
        this.grocery_id = grocery_id;
        this.quantity = quantity;
        this.price = price;
        this.sub_total = (quantity * price);
    }
}

let g_peanutbutter = new Grocery("Peanut Butter", 11, 4, 4.99);
let g_bread = new Grocery("Bread", 12, 3, 3.99);
let g_nutella = new Grocery("Nutella", 13, 4, 5.69);
let g_jam = new Grocery("Jam", 14, 3, 1.99);
let g_milk = new Grocery("Milk", 15, 4, 3.59)

let g: Grocery[] = [];

g.push(g_peanutbutter)
g.push(g_bread)
g.push(g_nutella)
g.push(g_jam)

const table = document.getElementById('grocery') as HTMLTableElement;

g.map(grocery => 
    {
    const {name, grocery_id, quantity, price, sub_total} = grocery;
    const row = table.insertRow()
    row.innerHTML = 

            `<td id="name">${name}</td>
            <td id="gro_id">${grocery_id}</td>
            <td id="qty">${quantity}</td>
            <td id="price">${price}</td>
            <td id="subtotal">${sub_total}</td>`;
    })