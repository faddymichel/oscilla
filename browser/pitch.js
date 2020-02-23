export const pitch = [];
const scale = 'sedrfjikolp;';

for ( let i = 0; i < 12; i++ ) {

pitch [ scale .charAt ( i ) ] = 440 * 2 ** ( i / 12 );

}

pitch [ ' ' ] = 0;
