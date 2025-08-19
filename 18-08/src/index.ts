
import { Dog } from './dog.js';
import { Coruja } from './coruja.js';
import { Crocodile } from './crocodile.js';

const rex = new Dog('Rex');
rex.emitirSom();

const bubu = new Coruja('Bubu');
bubu.emitirSom();
bubu.voar();

const dundee = new Crocodile('Dundee');
dundee.emitirSom();
dundee.nadar();