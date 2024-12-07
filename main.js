
let gatti_tot = 106;

let gatti_in_fila = 10;

let file = Math.floor(gatti_tot / gatti_in_fila);

let gatti_extra = gatti_tot % gatti_in_fila;

let gatti_mancanti = gatti_in_fila - gatti_extra;


console.log( `Gatti totali ${gatti_tot}, gatti per fila ${gatti_in_fila}` );


console.log(`Ci sono ${file} file di gatti e ne mancano ${gatti_mancanti} per una nuova fila, con un avanzo di ${gatti_extra} gatti`);
