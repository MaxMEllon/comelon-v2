import _ from 'lodash';

const isMethod = (key, obj) => obj !== 'constructor' && _.isFunction(obj[key]);

export default function autoBind(instance) {
  const self = instance;
  Object.getOwnPropertyNames(Object.getPrototypeOf(self)).forEach((key) => {
    if (isMethod(key, self)) {
      self[key] = self[key].bind(self);
    }
  });
}
