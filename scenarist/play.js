export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function play ( event ) {

const scenarist = this;
const scenario = scenarist .scenarios [ scenarist .display ];
let role;

if ( typeof event === 'string' )
role = scenario .scenes [ event .split ( ' ' ) [ 0 ] ];

else if ( typeof event === 'object' )
role = scenario .scenes [ event .key ];

if ( role ) {

const { action } = scenario .scenes [ role ];
action .call (
Object .assign ( scenario .setting, { scenarist } ),
event
);

}

};
