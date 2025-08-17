type Product = {
  name: string;
  category: number;
  image: string;
  description: string;
  price: number;
  discauntprice?: number;
  sizes?: string[];
};

type CartItem = {
  product: Product;
  size: string;
  count: number;
};

export function addToCart(product: Product, size: string) {
  const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const idx = cart.findIndex(
    item => item.product && item.product.name === product.name && item.size === size
  );
  if (idx > -1) {
    cart[idx].count += 1;
  } else {
    cart.push({ product, size, count: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function getCart(): CartItem[] {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

export function removeFromCart(index: number) {
  const cart = getCart();
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function changeCount(index: number, delta: number) {
  const cart = getCart();
  cart[index].count = Math.max(1, cart[index].count + delta);
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function clearCart() {
  localStorage.setItem('cart', '[]');
}