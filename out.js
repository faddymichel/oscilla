export default ( $, actor ) => {

$ = $ .Scenario;

$ ( 'engine', new Context () );
$ ( 'note', {} );
$ ( 'loudness', {} );

$ ( 'tuning', 'scale', 'forEach', key => {

$ ( 'loudness', key, $ ( 'engine', 'createGain' ) );
$ ( 'loudness', key, 'gain', 'setValueAtTime', .1, $ ( 'engine', 'currentTime' ) );

$ ( 'loudness', key, 'connect', $ ( 'engine', 'destination' ) );

};
