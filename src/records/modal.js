import { Record } from 'immutable';

const defaultValue = {
  visible: false,
  childComponent: null,
};

export default class ModalRecord extends Record(defaultValue) {
}
