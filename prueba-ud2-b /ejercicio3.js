

/* =====================================================================
   Prueba UD2 · Versión B · Ejercicio 3 · Escribe una función
   Coste de un aparcamiento
   ---------------------------------------------------------------------
   Nombre y apellidos: Pablo Barrena Brito

   Escribe aquí la función costeAparcamiento(minutos, vehiculo) y el
   programa que la usa, según el enunciado. Documenta la función con JSDoc.
   ===================================================================== */




'use strict';
if (typeof prompt === 'undefined') { require('./_node-prompt.js'); } // solo actúa en Node

// ----- FUNCIÓN -----------------------------------------------------------

const Tarifas_vehiculos = ['coche', 'moto', 'furgoneta'];


/**
 * 
 * @param {number} minutos 
 * @param {string} vehiculo 
 * @returns  {number|null}
 */

function costeAparcamiento(minutos, vehiculo){

if (typeof minutos !== 'number' || Number.isNaN (minutos) || minutos < 0 || minutos > 1440) {
return null;
}
if (typeof vehiculo !== 'string' ) {
   return null
}
const vehiculoLimpio = vehiculo.trim().toLowerCase();
if (!Tarifas_vehiculos.includes(vehiculoLimpio)){

return null; 
}
let costeBase;
if (minutos <= 15){
   costeBase = 0;
}
else if (minutos <= 60) {
   costeBase = 1.5;
}
else if (minutos <= 180) {
   costeBase = 1.5 + 0.04 * (minutos -60);
}
else {
costeBase = 7;
}

let multiplicador;
switch (vehiculoLimpio ) {
   case 'coche':
      multiplicador = 1;
      break
   case 'moto':
      multiplicador = 0,5;
      break
   case 'furgoneta':
      multiplicador = 1.5;
      break;
      default:
         null
}

   return costeBase * multiplicador

}

// ----- PROGRAMA ----------------------------------------------------------
const minutosTexto = prompt ("minutos de estancia")
const vehiculoTexto = prompt ("Vehiculo (coche, moto o furgoneta):")

const minutos = 
   minutosTexto == null || minutosTexto.trim() == ""? NaN: Number(minutosTexto);

const coste = costeAparcamiento( minutos, vehiculoTexto);

const mensaje = coste == null;



console.log(mensaje);


/* ---------------------------------------------------------------------
   CASOS DE PRUEBA (rellena la columna «obtenido» tras ejecutar)
   minutos | vehiculo     | esperado | obtenido
   --------|--------------|----------|---------
   10      | coche        | 0.00     |
   60      | ' Moto '     | 0.75     |
   90      | coche        | 2.70     |
   200     | furgoneta    | 10.50    |
   1500    | coche        | null     |
   30      | bici         | null     |
   --------------------------------------------------------------------- */
