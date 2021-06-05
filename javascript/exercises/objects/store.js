
let store = {
  items: [
  {
    id: 1,
    name: 'Whole Grain Bread',
    category: 'bread',
    price: 5.99,
    onSale: true,
    discount: .79
  },
  {
    id: 2,
    name: 'Potato Chips',
    category: 'chips',
    price: 3.99,
    onSale: false,
    discount: 0
  },
  { 
    id: 3,
    name: 'Roasted Nut Mix',
    categry: 'nuts',
    price: 7.99,
    onSale: false,
    discount: 0
  }],

  addItemToCart: function(itemId) {
    for (let i=0;i<this.items.length; ++i) {
      let item = this.items[i];
      if (item.id === itemId) {
        this.shoppingCart.items.push(item);
        break;
      }
    }
  },
  shoppingCart: {
    items: [],

    addItem(item) {
      this.items.push(item);
    },
    removeItem: function(itemId) {
      for (let i=0;i<this.items.length; ++i) {
        this.items.splice(i, 1);
        break;
      }
    },

    total: function() {
      let total = 0;
      for (let i=0; i<this.items.length; ++i) {
        total+= this.items[i].price;
      }

      return total;
    }
  }
}


 console.log(store.shoppingCart.items);
 store.addItemToCart(1);
 console.log(store.shoppingCart.items);
console.log(store.shoppingCart.total());






