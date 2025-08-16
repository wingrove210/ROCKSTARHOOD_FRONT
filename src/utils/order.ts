export function saveOrderStep(step: number, data: Record<string, unknown>) {
  const order = JSON.parse(localStorage.getItem('order') || '{}');
  order[`step${step}`] = data;
  localStorage.setItem('order', JSON.stringify(order));
}

export function getOrderStep(step: number) {
  const order = JSON.parse(localStorage.getItem('order') || '{}');
  return order[`step${step}`] || {};
}

export function getFullOrder() {
  return JSON.parse(localStorage.getItem('order') || '{}');
}