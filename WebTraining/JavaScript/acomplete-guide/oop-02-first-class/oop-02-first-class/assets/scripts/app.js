class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput = `<h2>Total: \$${1}</h2>`;
  }

  fun_renderCart() {
    const sec_cart = document.createElement('section');
    sec_cart.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    sec_cart.className = 'cart';
    this.totalOutput = sec_cart.querySelector('h2');
    return sec_cart;
  }
}

class Create_li {
  constructor(product) {
    this.product = product;
  }

  fun_addToCart() {
    console.log(this.product);
  }

  fun_create_li() {
    const li_prod = document.createElement('li');
    li_prod.className = 'product-item';
    li_prod.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addCartButton = li_prod.querySelector('button');
    addCartButton.addEventListener('click', this.fun_addToCart.bind(this));
    return li_prod;
  }
}

class ProductList {
  arr_products = [
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
    ),
  ];

  constructor() {}

  fun_renderList() {
    const ul_prodList = document.createElement('ul');
    ul_prodList.className = 'product-list';
    for (const prod of this.arr_products) {
      const obj_create_li = new Create_li(prod);
      const li_prod = obj_create_li.fun_create_li();
      ul_prodList.append(li_prod);
    }
    return ul_prodList;
  }
}

class Shop {
  fun_render() {
    const dom_renderHook = document.getElementById('app');
    const cart = new ShoppingCart();
    const sec_cart = cart.fun_renderCart();
    const productList = new ProductList();
    const ul_prodList = productList.fun_renderList();

    dom_renderHook.append(sec_cart);
    dom_renderHook.append(ul_prodList);
  }
}

const shop = new Shop();
shop.fun_render();
