// 1. Criação do array "cores" contendo Vermelho, Verde, Azul
let cores = ["Vermelho", "Verde", "Azul"];

// 1. Adiciona as cores Amarelo e Roxo ao final do array
cores.push("Amarelo", "Roxo");

// 2. Remove a última cor (Roxo)
cores.pop();

// 3. Remove "Verde" e adiciona "Laranja" e "Marrom" em seu lugar
let indexVerde = cores.indexOf("Verde");
if (indexVerde !== -1) {
    cores.splice(indexVerde, 1, "Laranja", "Marrom");
}

// 4. Cria um novo array chamado novasCores contendo as primeiras duas cores
let novasCores = cores.slice(0, 2);

// 5. Usa o método join para criar uma string com todas as cores, separadas por vírgula
let coresString = cores.join(", ");

// 6. Inverte a ordem dos elementos no array "cores"
cores.reverse();

// 7. Exibe os arrays "cores" e "novasCores", e a string resultante no console
console.log("Array cores (invertido):", cores);
console.log("Array novasCores:", novasCores);
console.log("String de cores:", coresString);
