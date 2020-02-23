export const Scenarist = function Scenarist () {

const scenarist = this;

EventTarget .call ( scenarist );

Object .keys ( scenarist ) .forEach ( ( property ) => {

const descriptor = Object .getOwnPropertyDescriptor ( scenarist, property );
descriptor .enumerable = false;
Object .defineProperty ( scenarist, property, descriptor );

} );
