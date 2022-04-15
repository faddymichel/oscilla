export default function establishment ( scene ) {

const script = this;
const { previous } = scene;
const module = scene .module = previous ?.module ? previous .module .target : script .module;

if ( ! module )
return;

};
