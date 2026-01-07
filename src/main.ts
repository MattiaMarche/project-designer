import Engine from './Engine';

let engine: Engine = null;

setTimeout( () => {
    engine = new Engine();
}, 3000 );
