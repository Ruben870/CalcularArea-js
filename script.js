function Figura() {
    const figuraConfirmacion = document.getElementById("inputFigura").value;
    if (figuraConfirmacion == 1) {
        document.getElementById('labelBase').style.display = "block";
        document.getElementById('inputBase').style.display = "block";
        document.getElementById('labelAltura').style.display = "none";
        document.getElementById('inputAltura').style.display = "none";
    } else if (figuraConfirmacion == 2) {
        document.getElementById('labelBase').style.display = "block";
        document.getElementById('inputBase').style.display = "block";
        document.getElementById('labelAltura').style.display = "block";
        document.getElementById('inputAltura').style.display = "block";
    } else if (figuraConfirmacion == 3) {
        document.getElementById('labelBase').style.display = "block";
        document.getElementById('inputBase').style.display = "block";
        document.getElementById('labelAltura').style.display = "block";
        document.getElementById('inputAltura').style.display = "block";
    }
}

function area() {
    const figuraConfirmacion = document.getElementById("inputFigura").value;
    const aBase = document.getElementById("inputBase").value;
    const aAltura = document.getElementById("inputAltura").value;

    if (figuraConfirmacion == 1) {
        console.log(aBase * aBase);
        limpiar();
    } else if (figuraConfirmacion == 2) {
        console.log(aBase * aAltura);
        limpiar();
    } else if (figuraConfirmacion == 3) {
        console.log((aBase * aAltura) / 2);
        limpiar();
    }

}

const limpiar = () => {
    document.getElementById('inputFigura').value = "";
    document.getElementById('inputBase').value = "";
    document.getElementById('inputAltura').value = "";
}
