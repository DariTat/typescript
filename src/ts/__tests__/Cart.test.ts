import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});
test('test add', () => {
  const cart = new Cart();
  cart.add({
    id: 13,
    name: 'test',
    price: 1300,
  });
  const expected = [{
    id: 13,
    name: 'test',
    price: 1300,
  }];
  expect(cart.items).toEqual(expected);
});
test('test sum', () => {
  const cart = new Cart();
  cart.add({
    id: 1,
    name: 'test',
    price: 1300,
  });
  cart.add({
    id: 2,
    name: 'test',
    price: 1500,
  });
  expect(cart.sum()).toBe(2800);
});
test('test with discount', () => {
  const cart = new Cart();
  cart.add({
    id: 1,
    name: 'test',
    price: 1300,

  });
  cart.add({
    id: 2,
    name: 'test',
    price: 1500,
  });
  expect(cart.discountedAmount(5)).toBe(2660);
});
test('test delete', () => {
  const cart = new Cart();
  cart.add({
    id: 1,
    name: 'test',
    price: 1300,

  });
  cart.add({
    id: 2,
    name: 'test',
    price: 1500,
  });
  cart.add({
    id: 3,
    name: 'test',
    price: 2500,
  });
  const expected = [{
    id: 1,
    name: 'test',
    price: 1300,
    },
    {
      id: 3,
      name: 'test',
      price: 2500,
    },
  ];
  expect(cart.delete(2)).toEqual(expected);
});
