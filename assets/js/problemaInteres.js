const error = document.querySelector('.error')
const correct = document.querySelector('.correct')

function paso1Colecta() {
    const tiempo1 = parseFloat(document.getElementById('tiempo1').value);
    const cantidad1 = parseFloat(document.getElementById('cantidad1').value);
    const potenciaT1 = parseFloat(document.getElementById('potenciaT1').value);
    const interes = parseFloat(document.getElementById('interes').value);

    const mensajes = [];
    //Validar nulos y numéricos
    if (
        isNaN(tiempo1) || isNaN(cantidad1) || isNaN(potenciaT1) || isNaN(interes)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar los tiempos
    if (tiempo1 !== 0) {
        mensajes.push("* El tiempo es incorrecto");
    }
    // Validar las cantidades
    if (cantidad1 !== 30) {
        mensajes.push("* La cantidad es incorrecta");
    }
    // Validar las potencias
    if (potenciaT1 !== 0) {
        mensajes.push("* La potencia t es incorrecta");
    }
    // Validar las potencias
    if (interes !== 0.05) {
        mensajes.push("* El interes es inconrrecto");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, ahora se sustituyen los valores en la solución. Favor de construir la fórmula para el pago:",true);
        document.getElementById("cIn").textContent = "c = 30";
    }
    return mensajes;
}

function paso1Mensaje(mensajes) {
    const mensajes1 = document.getElementById('mensajes1');
    const show2nd = document.getElementById('show2nd');
    mensajes1.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes1.classList.remove("error");
        mensajes1.classList.add("correct"); 
        mensajes1.innerHTML = mensajes[0];
        show2nd.style.display = "block";

      } else {
        mensajes1.classList.remove("correct");
        mensajes1.classList.add("error")

        const lista = document.createElement('ul');
        mensajes.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.innerText = error;
            lista.appendChild(errorItem);
        });
        mensajes1.appendChild(lista);
      }

    mensajes1.style.display = "block";
}

function paso1Ejecucion() {
    const mensajes = paso1Colecta();
    paso1Mensaje(mensajes);
}





function paso2Colecta() {
    const cantidad2 = parseFloat(document.getElementById('cantidad2').value);
    const interes2 = parseFloat(document.getElementById('interes2').value);

    const mensajes = [];
    //Validar nulos y numéricos
    if (
        isNaN(cantidad2) || isNaN(interes2)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar la cantidad
    if (cantidad2 !== 30) {
        mensajes.push("* La cantidad es icorrecta");
    }
    // Validar el interes
    if (interes2 !== 0.05) {
        mensajes.push("* El interes es icorrecto");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, esta fórmula nos ayudara a encontrar el pago total por multa. Favor de utilizar la fórmula respecto a t:",true); 
        var formulaAt = "<strong>A(t) = 30e<sup>0.05t</sup></strong>";
        document.getElementById("formulaAt").innerHTML = formulaAt;
    }
    return mensajes;
}

function paso2Mensaje(mensajes) {
    const mensajes2 = document.getElementById('mensajes2');
    const show3th = document.getElementById('show3th');
    mensajes2.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes2.classList.remove("error");
        mensajes2.classList.add("correct"); 
        mensajes2.innerHTML = mensajes[0];
        show3th.style.display = "block";

      } else {
        mensajes2.classList.remove("correct");
        mensajes2.classList.add("error")

        const lista = document.createElement('ul');
        mensajes.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.innerText = error;
            lista.appendChild(errorItem);
        });
        mensajes2.appendChild(lista);
      }

    mensajes2.style.display = "block";
}

function paso2Ejecucion() {
    const mensajes = paso2Colecta();
    paso2Mensaje(mensajes);
}





function paso3Colecta() {
    const tiempoPasado1 = parseFloat(document.getElementById('tiempoPasado1').value);
    const cantidad3 = parseFloat(document.getElementById('cantidad3').value);
    const interes3 = parseFloat(document.getElementById('interes3').value);
    const tiempoPasado2 = parseFloat(document.getElementById('tiempoPasado2').value);

    const mensajes = [];
    //Validar nulos
    if (
        isNaN(tiempoPasado1) || isNaN(cantidad3) || isNaN(interes3) || isNaN(tiempoPasado2)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar tiempos
    if (tiempoPasado1 !== 100 || tiempoPasado2 !== 100) {
        mensajes.push("* El tiempo es incorrecto");
    }
    // Validar cantidad
    if (cantidad3 !== 30) {
        mensajes.push("* La cantidad es incorrecta");
    }
    // Validar interes
    if (interes3 !== 0.05) {
        mensajes.push("* El interes es incorrecto");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, El pago despúes de 100 años sería ¢4452.39  ∴  USD$44.5239",true);
        document.getElementById("centavos").textContent = " = ¢4452.39 centavos";
    }
    return mensajes;
}

function paso3Mensaje(mensajes) {
    const mensajes3 = document.getElementById('mensajes3');
    const show4th = document.getElementById('show4th');
    mensajes3.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes3.classList.remove("error");
        mensajes3.classList.add("correct"); 
        mensajes3.innerHTML = mensajes[0];
        show4th.style.display = "block";

      } else {
        mensajes3.classList.remove("correct");
        mensajes3.classList.add("error")

        const lista = document.createElement('ul');
        mensajes.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.innerText = error;
            lista.appendChild(errorItem);
        });
        mensajes3.appendChild(lista);
      }

    mensajes3.style.display = "block";
}

function paso3Ejecucion() {
    const mensajes = paso3Colecta();
    paso3Mensaje(mensajes);
}
