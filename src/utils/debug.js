import debug from 'debug';

debug.enable('Comelon:*');

export default function debuggerCreator(label) {
  return debug(`Comelon:${label}`);
}
