import debug from 'debug';

debug.enable('JAICO:*');

export default function debuggerCreator(label) {
  return debug(`JAICO:${label}`);
}
