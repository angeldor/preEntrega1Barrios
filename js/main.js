//Voy a crear un algoritmo que identifique los numeros primos entre 0 y un numero ingresado por un prompt
function esPrimo(numero){//verificador de numero primo
    if(numero <= 1){
        return false;
    }

//Compruebo si el numero es divisible por algun valor desde dos hasta la raiz cuadrada del mismo
    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i === 0){
            return false;
        }
    }
    return true;
}
//Hago una funcion para armas un array de numeros primos
function encontrarPrimosHasta(numeroLimite){
    const numerosPrimos = [];

    for(let i = 2; i <= numeroLimite; i++){
        if(esPrimo(i)){
            numerosPrimos.push(i);
        }
    }
    return numerosPrimos;
}

function principal(){
    const numeroLimite = parseInt(prompt("Ingresa un numero para encontrar los numeros primos hasta ese limite: "));
    
    const primosEncontrados = encontrarPrimosHasta(numeroLimite);

    if(primosEncontrados.length > 0){
        alert("Los números primos hasta "+ numeroLimite + " son: " + primosEncontrados.join(", "));
    } else{
        alert ("No se encontraron números primos hasta "+ numeroLimite + ".");
    }
}

principal();