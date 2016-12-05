import { Record } from 'immutable';


export const ModalState = {
  HIDE: 'hide',
  SHOW: 'show',
  FADEOUT: 'fadeOut',
  FADEIN: 'fadeIn',
};

const defaultValue = {
  visible: ModalState.HIDE,
  childComponent: null,
};

export default class ModalRecord extends Record(defaultValue) {
}
