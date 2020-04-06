// Primera forma de cambio:

var friend1 = 'Amigo';

var pasoAMinuscula = friend1.toLowerCase();

// test

document.write(pasoAMinuscula);

// Segunda forma de cambio:

var friend2 = 'Amigo';

var reemplazo = friend2.replace('A', 'a');

// test

document.write(reemplazo);

// Tercera forma de cambio:

var friend3 = 'Amigo';

var extraigo = friend3.slice(1, 5);

var inserto = 'a' + extraigo;

// test

document.write(inserto);