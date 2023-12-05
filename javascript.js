const datos_mascotas=[]
function showAlert() {
    document.getElementById("alert").style.display = "block";
}

function closeAlert() {
    document.getElementById("alert").style.display = "none";
}
function registrar() {
    const nombreMascota = document.getElementById("nombre_mascota").value
    const propietario = document.getElementById("propietario").value
    const telefono = document.getElementById("telefono").value
    const tipoMascota = document.getElementById("tipoMascota").value
    const fecha = document.getElementById("fecha").value
    const hora = document.getElementById("hora").value
    const sintomas = document.getElementById("sintomas").value

    if (document.getElementById("nombre_mascota").value == "") {
        document.getElementById("alert-content").textContent = "El nombre de la mascota está vacío"
        showAlert()
    } else if (document.getElementById("propietario").value == "") {
        document.getElementById("alert-content").textContent = "El  nombre del propietario está vacío"
        showAlert()
    } else if (document.getElementById("telefono").value == "") {
        document.getElementById("alert-content").textContent = "El teléfono está vacío"
        showAlert()
    } else if (telefono.length < 10) {
        document.getElementById("alert-content").textContent = "Ingrese un número de teléfono válido"
        showAlert()
    } else if (document.getElementById("tipoMascota").value == "") {
        document.getElementById("alert-content").textContent = "Seleccione tipo de mascota"
        showAlert()
    } else if (document.getElementById("fecha").value == "") {
        document.getElementById("alert-content").textContent = "La fecha está vacía"
        showAlert()
    } else if (new Date(fecha) <= new Date()) {
        document.getElementById("alert-content").textContent = "Ingrese una fecha posterior a la actual"
        showAlert()
    }else if (document.getElementById("hora").value == "") {
        document.getElementById("alert-content").textContent = "La hora está vacía"
        showAlert()
    } else if (hora < "08:00" || hora > "18:00") {
        document.getElementById("alert-content").textContent = "Ingrese un rango de hora entre las 8:00 a.m y las 6:00 p.m"
        showAlert()
    }else if (document.getElementById("sintomas").value == "") {
        document.getElementById("alert-content").textContent = "No ingresó ningun síntoma"
        showAlert()
    }   else {
        const registro = {
            nombre_mascota: nombreMascota,
            propietario: propietario,
            telefono: telefono,
            tipo_mascota: tipoMascota,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        };
        datos_mascotas.push(registro);
        pintarCitas();
        console.log(datos_mascotas);
        cancelarAgenda();
    }
}
function cancelarAgenda() {
    const formulario = document.querySelector('.formulario');
    const informacion = document.querySelector('.informacion');
    const filtrar = document.querySelector('.filtrar');
    const cards = document.querySelector('.cards');
    formulario.style.display = 'none';
    informacion.style.display = 'block'
    filtrar.style.display = 'block'
    cards.style.display='block'

}


function Agendar() {
    const formulario = document.querySelector('.formulario');
    const informacion = document.querySelector('.informacion');
    const filtrar = document.querySelector('.filtrar');
    const cards = document.querySelector('.cards');
    formulario.style.display = 'block';
    informacion.style.display = 'none'
    filtrar.style.display = 'none'
    cards.style.display='none'
}

function pintarCitas() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";

    datos_mascotas.forEach(cita => {
        const nombreMascota = cita.nombre_mascota;
        const propietario = cita.propietario;
        const telefono = cita.telefono;
        const tipoMascota = cita.tipo_mascota;
        const fecha = cita.fecha;
        const hora = cita.hora;
        const sintomas = cita.sintomas;

        let tr = document.createElement("tr");

        let nombreMascotaTabla = document.createElement("td");
        nombreMascotaTabla.textContent = nombreMascota;

        let propietarioTabla = document.createElement("td");
        propietarioTabla.textContent = propietario;

        let telefonoTabla = document.createElement("td");
        telefonoTabla.textContent = telefono;

        let tipoMascotaTabla = document.createElement("td");
        tipoMascotaTabla.textContent = tipoMascota;

        let fechaTabla = document.createElement("td");
        fechaTabla.textContent = fecha;

        let horaTabla = document.createElement("td");
        horaTabla.textContent = hora;

        let sintomasTabla = document.createElement("td");
        sintomasTabla.textContent = sintomas;

        let editarCita = document.createElement("td");
        let editar = document.createElement("button");
        editar.textContent = "Editar";
        editar.addEventListener("click", () => {
            // Aquí puedes agregar la lógica para editar la cita
            console.log('Editar cita:', cita);
        });
        editarCita.appendChild(editar);

        tr.appendChild(nombreMascotaTabla);
        tr.appendChild(propietarioTabla);
        tr.appendChild(telefonoTabla);
        tr.appendChild(tipoMascotaTabla);
        tr.appendChild(fechaTabla);
        tr.appendChild(horaTabla);
        tr.appendChild(sintomasTabla);
        tr.appendChild(editarCita);
        cards.appendChild(tr);
    });
}
