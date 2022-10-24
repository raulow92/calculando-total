// Creando formato de divisa
const chile = new Intl.NumberFormat("es-CL", { currency: "CLP", style: "currency" });

// Asignando Precio
const precio = 1259990;
let price = document.querySelector(".price");
price.innerHTML = chile.format(precio);

// Botón
let calcular = document.querySelector("#calcular");
calcular.addEventListener("click", calcularTotal);

function calcularTotal() {
    // Calculando Cantidad
    let cantidad = document.querySelector("#quantity").value;
    document.querySelector(".quantity__total__number").innerHTML = cantidad;

    // Mostrando Color
    let color = document.querySelector("#color").value;
    colorSelect = document.querySelector(".selected__color");

    switch (color) {
        case "midnight":
            colorSelect.style.backgroundImage = "none";
            colorSelect.style.backgroundColor = "#2e3642";
        break;
        
        case "starlight":
            colorSelect.style.backgroundImage = "none";
            colorSelect.style.backgroundColor = "#f0e4d3";
        break;

        case "space-gray":
            colorSelect.style.backgroundImage = "none";
            colorSelect.style.backgroundColor = "#7d7e80";
        break;

        case "silver":
            colorSelect.style.backgroundImage = "none";
            colorSelect.style.backgroundColor = "#e3e4e6";
        break;
    }

    // Calculando Total
    total = chile.format(+precio * +cantidad)
    document.querySelector(".price__total").innerHTML = total;
}

// Cambiando Imagen
function cambioImagen() {
    let color = document.getElementById("color").value;
    let image = document.querySelector("#image");
    image.src = "./assets/img/" + color + ".jpg";
}