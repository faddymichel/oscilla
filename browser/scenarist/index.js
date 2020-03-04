import { descriptor as create } from './create.js';
import { descriptor as write } from './write.js';
import { descriptor as play } from './play.js';

export const scenarist = {};

Object .defineProperty ( scenarist, 'lines', {

value: []

} );
Object .defineProperty ( scenarist, 'create', create );
Object .defineProperty ( scenarist, 'write', write );
Object .defineProperty ( scenarist, 'play', play );
