// class product title price img description 
// class productList list of product and render method ,instans of product class
// class productItem for preview single  product , handelEventAddToCart, instans of product class
// class shopingCart to render the total or amount and button to order now (add product  to cart  method ) ,
// class shop  combin productList and  shopingCart: render to (create instance of shopingCart and render it and instance of productList to render it)
//: reference of div document where to render the result it and append the shopingCart and productList
// class app : contain static method init for (create instance from shop class and call render method) 
// : app.init() that execut all project 

class ElementAttr {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
// create element and add css calss and attributes , append this element to the root element page and return it 
class componenet {
    constructor(rootId) {
        this.rootId = rootId;
        // this.render();
    }
    render(){}
    createRootElement(tag, className, attributes) {
        const rootElement = document.createElement(tag);


        if (className) rootElement.classList.add(className);
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
                console.log(rootElement);
            }
        }
        document.getElementById(this.rootId).append(rootElement);
        return rootElement;

    }
}

// class product title price img description 
class Product {
    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

// class productItem for preview single  product , handelEventAddToCart, instans of product class
class ProductItem extends componenet {
    constructor(product, rootId) {
        super(rootId)
        this.product = product;
        this.render();
    }
    addToCart() {
        App.add(this.product);
    }
    render() {
        let li = this.createRootElement('li', 'product-item');
        li.innerHTML = `
          <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        `;
        const addCartButton = li.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this))
    }
}

// class productList list of product and render method ,instans of product class
class ProductList extends componenet {
    products = [
        new Product(
            'A Pillow',
            'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
            'A soft pillow!',
            19.99
        ),
        new Product(
            'A Carpet',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
            'A carpet which you might like - or not.',
            89.99
        )
    ];

    constructor(rootId) {
        super(rootId);
        this.render()
    }
    render() {

        this.createRootElement('ul', 'product-list', [new ElementAttr('id', 'prodList')]);

        for (const product of this.products) {
            new ProductItem(product, 'prodList')
            //  .render();
        }

    }
}

class ShopingCart extends componenet {
    _items = [];
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    constructor(rootId) {
        super(rootId);
        this.render();
    }
    get totalAmount() {
        return this.items.reduce((pre, el) => pre + el.price, 0)
    }
   

    addProduct(product) {
        this.items.push(product);
        this.total.innerHTML = ` <h2>Total\$ ${this.totalAmount.toFixed(2)} </h2>`;
    }
 order=()=>{
     console.log(this.items);
     
 }
    render() {
    
        let cart = this.createRootElement('section', 'cart');
        cart.innerHTML = `
         <h2>Total\$ ${0} </h2>
         <button>Order Now</button>
        `;
        const orderBtn=cart.querySelector('button');
        orderBtn.addEventListener('click',this.order)
      //  orderBtn.addEventListener('click',this.order.bind(this))
        this.total = cart.querySelector('h2');

    }
}

//render ProductList and shopingCart and append to the page
class Shop {
    constructor(){
       this.render();
    }
    render() {
        this.shopingCart = new ShopingCart('app');
      //   this.shopingCart
        //  .render();
        new ProductList('app')
        //  .render();
        
    }
}

class App {
    static init() {
        let shop = new Shop();
        // shop.render();
        this.cart = shop.shopingCart;
    }
    static add(product) {
        this.cart.addProduct(product);
    }
}

App.init();