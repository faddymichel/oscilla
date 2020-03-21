export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function play ( event ) {

const scenarist = this;
const { scenario } = scenarist;

const role = scenario .character [ event .key ];

if ( role ) {

const { action } = scenario .character [ role ];
action .call (
Object .assign ( scenario .setting, { scenarist } ),
event
);

}

};
