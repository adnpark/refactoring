export class Order {
  #data;
  constructor(aRecord) {
    this.#data = aRecord;
  }

  get quantity() {
    return this.data.quantity;
  }
  get itemPrice() {
    return this.data.itemPrice;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get shipping() {
    return Math.min(this.basePrice * 0.1, 100);
  }

  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping;
  }
}
