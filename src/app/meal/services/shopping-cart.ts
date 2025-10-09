import { Injectable,signal } from '@angular/core';

const loadFromLocalStorage = () => {
  const data = localStorage.getItem('cartItems');
  return data ? JSON.parse(data) : [];
};

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
    cartItems = signal<any[]>(loadFromLocalStorage());

  addToCart(producto: any) {
      const items = this.cartItems();// obtiene los items actuales
     const id = producto.id || producto.id;//busca id del producto
     const idx = items.findIndex(item => (item.id || item.id) === id);// busca si ya existe en el carrito
 if (idx > -1) {
    // Ya existe, incrementa cantidad
    items[idx].cantidad = (items[idx].cantidad || 1) + 1;
    this.cartItems.set([...items]);
  } else {
    // Nuevo producto, cantidad 1
    this.cartItems.set([...items, { ...producto, cantidad: 1 }]);
  }
    this.saveToLocalStorage();
  }

  removeFromCart(id: string) {
    this.cartItems.set(this.cartItems().filter(item => item.id !== id && item.id !== id));
    this.saveToLocalStorage();
  }

  clearCart() {
    this.cartItems.set([]);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems()));
  }

  removeOneFromCart(producto: any) {
  const items = this.cartItems();
  const id = producto.id || producto.id;
  const idx = items.findIndex(item => (item.id || item.id) === id);

  if (idx > -1) {
    if (items[idx].cantidad > 1) {
      items[idx].cantidad -= 1;
      this.cartItems.set([...items]);
    } else {
      // Elimina el producto si la cantidad llega a 0
      items.splice(idx, 1);
      this.cartItems.set([...items]);
    }
    this.saveToLocalStorage();
  }
}
}
