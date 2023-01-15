import { Flag } from './Flag/flag';

export class Joke {
  'category': string;
  'type': string;
  'setup': string;
  'delivery': string;
  'flags': Flag;
  'id': number;
  'joke': string;
  'error': boolean;
  'background':string;

  constructor(args?: any) {
    if(typeof args !== 'undefined' && typeof args === 'object') {
        Object.assign(this, args);
    }
  }
}
