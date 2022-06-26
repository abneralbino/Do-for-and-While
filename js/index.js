let pesoFinal = 0;
let cantidadDeseada = parseInt(prompt("Cuantos gramos de helado vas a querer?"))
let cantSabores = parseInt(prompt("Ingrese la cantidad de sabores:"));

for (let i=0; i<cantSabores; i++) {
    let sabor = prompt("Ingrese un sabor de helado");
    let pesoDeCadaSabor = parseFloat(prompt("Cantidad en Gr de helado de " + sabor));
    pesoFinal += pesoDeCadaSabor;
    let mensaje = "Pediste "+ pesoDeCadaSabor + " gramos de helado de " + sabor;
    alert(mensaje);
    console.log(mensaje);

    if (pesoFinal >= cantidadDeseada) {
        alert("Ya alcanzaste la cantidad deseada");
        break;
    }

    else if (pesoFinal < cantidadDeseada) {
        alert("Todavía no alcanzaste el total de "+ cantidadDeseada + "gr. Te faltan " + (cantidadDeseada - pesoFinal) + "gr. Seguí agregando.")
    }

    
}

alert("Compraste "+ pesoFinal + " gramos de helado por un total de AR$" + pesoFinal * 0.8);




