import {
  list, save, clear, listen,
} from './utils';

const get = (id) => list().find((product) => product.id === id);

const exists = (id) => !!get(id);

const isCalcable = (product) => (product && product.price && product.quantity);

const isCallback = (cb) => cb && typeof cb === 'function';

const isValid = (product) => product.id && product.price;

const update = (id, field, value) => (
  save(list().map((product) => (product.id === id ? ({ ...product, [field]: value }) : product)))
);

const subtotal = (product) => (isCalcable(product) ? (product.price * product.quantity) : 0);

const add = (product, quantity) => {
  if (isValid(product)) {
    if (exists(product.id)) {
      update(product.id, 'quantity', get(product.id).quantity + (quantity || 1));
    } else {
      save(list().concat({ ...product, quantity: quantity || 1 }));
    }
  } else {
    return null;
  }
  return true;
};

const remove = (id) => save(list().filter((product) => product.id !== id));

const quantity = (id, diff) => (
  exists(id) && get(id).quantity + diff > 0 ? update(id, 'quantity', get(id).quantity + diff) : remove(id)
);

const total = (cb) => list().reduce((sum, product) => {
  if (isCallback(cb)) {
    cb(sum, product);
  } else {
    sum += subtotal(product);
  }
  return sum;
}, 0);

const destroy = () => clear();

const onChange = (cb) => (isCallback(cb) ? listen(cb) : {});

export {
  list, get, add, remove, update, quantity, total, destroy, exists, subtotal, onChange,
};
