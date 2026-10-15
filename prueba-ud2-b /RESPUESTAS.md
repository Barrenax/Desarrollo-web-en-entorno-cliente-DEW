
# Prueba UD2 · Versión B · Respuestas del ejercicio 1

**Nombre y apellidos:**
Pablo Barrena Brito

Rellena la tabla con lo que muestra la consola (o el error que da) y una justificación de una línea con el concepto de la unidad (hoisting, zona muerta temporal, ámbito de bloque, sombreado, coerción, *falsy*, `??`…).

| Fragmento | Salida de la consola (o error) | Justificación |
|-----------|--------------------------------|---------------|
| F1 |3 y luego salta un error | var se ejecuta como funcion y la i sigue existiendo como un bucle ylet luego se ejecuta como bloque por lo que j solo existe dentro del for |
| F2 | da error| |
| F3 | alto y luego salta el error| debido a que "bajo" esta dentro del bloque y no afecta a lo que haya fuera, y luego cuando se intenta reasignar "medio" da error |
| F4 | 12, 345, 75| El prmer resulado se da asi debido a que se ejecuta con los numeros entrecomillados. El segundo resultado, concatena los 3 numeros 3 , 4 , 5. Y en el Ultimo se suman el 3 y 4 y luego se le concatena el 5 dando como resultado 75 |
| F5 |anónimo (linea vacia) anónimo | El Primero usa || que significa que al menos uno es truthy y por eso imprime anónimo.  El segundo usa ?? y como no es null, no se puede imprimir. El último usa ?? que solo puede usar valores null y por eso se imprime |
