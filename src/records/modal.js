import { Record } from 'immutable';
import KeyMirror from 'keymirror-symbol';

export const ModalState = KeyMirror({
  HIDE: null,
  SHOW: null,
  FADEOUT: null,
  FADEIN: null,
});

const defaultValue = {
  visible: ModalState.HIDE,
  childComponent: null,
};

export default class ModalRecord extends Record(defaultValue) {
}
