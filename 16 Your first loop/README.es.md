16 Your First Loop
Los bucles e iteraciones te permiten repetir un proceso rápida y eficientemente.

Las dos formas más utilizadas son los bucles for y while.

Un bucle for se ve así:
for (expresionInicial; condicional; expresionIncremental) {
    ...declaraciones;
}
Aquí hay un ejemplo de la declaración for:

// Un bucle "for"
for (let i = 0; i < 10; i++) {
    console.log("Hello!")
}
Los bucles while tienen una naturaleza similar. Se ven así:
expresionInicial;
while (condicional) {
    ...declaraciones;
    expresionIncremental;
}
Y aquí hay un ejemplo:

// un bucle "while" 
let i = 0;
while (i < 10) {
    console.log("Goodbye!");
    i++;
}
Mientras el condicional sea true, el bucle continuará repitiéndose. Si el condicional es false, el bucle terminará. Fíjate que ambos bucles usan los mismos componentes organizados de manera diferente.

Puedes usar > (mayor que), < (menor que), >= (mayor que o igual a), <= (menor que o igual a), === (igual a), !== (distinto) en tus condicionales.

Si compilas este código verás un conteo del 0 al 99 en la consola.

📝 Instrucciones:
Arregla el código para que cuente desde el 0 hasta el 100.
🔎 Importante:
Hay una serie de ejercicios dedicados a Arrays (arreglos). Te recomendamos hacer esos ejercicios antes de continuar con este primer ejercicio de Array. Luego, regresa aquí para continuar con estos.