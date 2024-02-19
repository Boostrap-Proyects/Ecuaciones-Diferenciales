const error = document.querySelector('.error')
const correct = document.querySelector('.correct')

function paso1Colecta() {
    const tiempoI = parseFloat(document.getElementById('tiempoI').value);
    const poblacionI = parseFloat(document.getElementById('poblacionI').value);
    const potenciaI = parseFloat(document.getElementById('potenciaI').value);
    const tiempoF = parseFloat(document.getElementById('tiempoF').value);
    const poblacionF = parseFloat(document.getElementById('poblacionF').value);
    const potenciaF = parseFloat(document.getElementById('potenciaF').value);

    const mensajes = [];
    //Validar nulos y numéricos
    if (
        tiempoI === "" || poblacionI === "" || potenciaI === "" ||
        tiempoF === "" || poblacionF === "" || potenciaF === "" ||
        isNaN(tiempoI) || isNaN(poblacionI) || isNaN(potenciaI) ||
        isNaN(tiempoF) || isNaN(poblacionF) || isNaN(potenciaF)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar los tiempos
    if (tiempoI !== 0 || tiempoF !== 10) {
        mensajes.push("* El tiempo es incorrecto");
    }
    // Validar las poblaciones
    if (poblacionI !== 25000 || poblacionF !== 30000) {
        mensajes.push("* La población es incorrecta");
    }
    // Validar las potencias
    if (potenciaI !== 0 || potenciaF !== 10) {
        mensajes.push("* La potencia t es incorrecta");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, ahora las C se igualan (c = c) y enseguida se despeja la constante e. Favor de completar el despeje:",true);

        document.getElementById("c1").textContent = "c = 250000";
        var c2Content = "c = 30000 / e<sup>10k</sup>";
        document.getElementById("c2").innerHTML = c2Content;

        var igualacion = "25000 = 30000 / e<sup>10k</sup>";
        document.getElementById("c=c").innerHTML = igualacion;
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
    const P1 = parseFloat(document.getElementById('P1').value);
    const P2 = parseFloat(document.getElementById('P2').value);

    const mensajes = [];
    //Validar nulos y numéricos
    if (
        P1 === "" || P2 === "" ||
        isNaN(P1) || isNaN(P2)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar las poblaciones
    if (P1 !== 30000 || P2 !== 25000) {
        mensajes.push("* El despeje es icorrecto");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, ahora se aplica ln() en ambos lados para eliminar la e. Favor de completar el despeje:",true);

        var ultimos1 = "ln(e<sup>10k</sup>) = ln(6/5)";
        document.getElementById("ultimos1").innerHTML = ultimos1;
        var ultimos2 = "10k = ln(6/5)";
        document.getElementById("ultimos2").innerHTML = ultimos2;
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
    const PP1 = document.getElementById('PP1').value;
    const PP2 = parseFloat(document.getElementById('PP2').value);

    const mensajes = [];
    //Validar nulos
    if (
        PP1 === "" || PP2 === ""
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar Despeje
    if (PP1 !== "ln(6/5)" || PP2 !== 10) {
        mensajes.push("* El despeje es incorrecto");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Correcto!, el despeje de la tasa k es 0.0182. Ahora contesta las siguientes preguntas del problema:",true);
        document.getElementById("equivalent").textContent = "≈ 0.0182";
        document.getElementById("pregunta1").textContent = "¿Que población puede esperar el planificador de la ciudad para el 2000?";
        document.getElementById("pregunta2").textContent = "¿Que población puede esperar el planificador de la ciudad para el 2023?";
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





function paso4Colecta() {
    const tPregunta1 = parseFloat(document.getElementById('tPregunta1').value);
    const ptPregunta1 = parseFloat(document.getElementById('ptPregunta1').value);
    const k1 = parseFloat(document.getElementById('k1').value);
    const t1 = parseFloat(document.getElementById('t1').value);
    
    const tPregunta2 = parseFloat(document.getElementById('tPregunta2').value);
    const ptPregunta2 = parseFloat(document.getElementById('ptPregunta2').value);
    const k2 = parseFloat(document.getElementById('k2').value);
    const t2 = parseFloat(document.getElementById('t2').value);

    const mensajes = [];
    //Validar nulos
    if (
        isNaN(tPregunta1) || isNaN(ptPregunta1) || isNaN(k1) || isNaN(t1) ||
        isNaN(tPregunta2) || isNaN(ptPregunta2) || isNaN(k2) || isNaN(t2)
    ) {
        mensajes.push("* Favor de llenar todos los campos");
    }
    // Validar Tiempo
    if (tPregunta1 !== 40 || tPregunta2 !== 63) {
        mensajes.push("* El tiempo es incorrecto");
    }
    // Validar expresionP(t)
    if (ptPregunta1 !== 40 || ptPregunta2 !== 63) {
        mensajes.push("* La expresion P(t) es incorrecta");
    }
    // Validar exponente k
    if (k1 !== 0.0182 || k2 !== 0.0182) {
        mensajes.push("* El exponente k es incorrecto");
    }
    // Validar Tiempo
    if (t1 !== 40 || t2 !== 63) {
        mensajes.push("* El exponente t es incorrecto");
    }
    // Todo correcto
    if (mensajes.length === 0) {
        mensajes.push("Felicidades!, has resuelto un problema de crecimiento poblacional de condiciones iniciales",true);
        document.getElementById("habitantesP1").textContent = "≈ 51773 habitantes";
        document.getElementById("habitantesP2").textContent = "≈ 78686 habitantes";
    }
    return mensajes;
}

function paso4Mensaje(mensajes) {
    const mensajes4 = document.getElementById('mensajes4');
    mensajes4.innerHTML = '';

    if (mensajes.includes(true)) {
        mensajes4.classList.remove("error");
        mensajes4.classList.add("correct"); 
        mensajes4.innerHTML = mensajes[0];

      } else {
        mensajes4.classList.remove("correct");
        mensajes4.classList.add("error")

        const lista = document.createElement('ul');
        mensajes.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.innerText = error;
            lista.appendChild(errorItem);
        });
        mensajes4.appendChild(lista);
      }

    mensajes4.style.display = "block";
}

function paso4Ejecucion() {
    const mensajes = paso4Colecta();
    paso4Mensaje(mensajes);
}