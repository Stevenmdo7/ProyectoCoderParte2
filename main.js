const pacientes = []

function agregarPaciente(nombre, apellido, edad, direccion, diagnostico) {
  pacientes.push({
    nombre,
    apellido,
    edad,
    direccion,
    diagnostico
  })
}

function eliminarPaciente() {
  let listaPacientes = "Lista de pacientes ingresados:\n"
  pacientes.forEach((paciente, index) => {
    listaPacientes += `${index + 1}. ${paciente.nombre} ${paciente.apellido}\n`
  })

  const eliminator = prompt(listaPacientes + "\nIngrese el numero del paciente que desea eliminar:")

  if (isNaN(eliminator) || eliminator < 1 || eliminator > pacientes.length) {
    alert("Numero de paciente invalido.")
  } else {
    pacientes.splice(eliminator - 1, 1)
    alert("Paciente eliminado con exito.")
  }
}

function mostrarPropiedades() {
    let propiedadesDisponibles = "Propiedades disponibles para mostrar:\n" +
    "1. Nombre\n" +
    "2. Apellido\n" +
    "3. Edad\n" +
    "4. Dirección\n" +
    "5. Diagnóstico\n"

  const seleccion = prompt(propiedadesDisponibles + "\nIngrese el numero de la propiedad que desea ver (separe con comas para multiples propiedades):")
  const propiedadesSeleccionadas = seleccion.split(",").map(Number)

  let pacientesMostrados = "Pacientes:\n"

  pacientes.forEach((paciente) => {
    const propiedadesAMostrar = []
    propiedadesSeleccionadas.forEach((opcion) => {
      switch (opcion) {
        case 1:
          propiedadesAMostrar.push(paciente.nombre)
          break
        case 2:
          propiedadesAMostrar.push(paciente.apellido)
          break
        case 3:
          propiedadesAMostrar.push(paciente.edad)
          break
        case 4:
          propiedadesAMostrar.push(paciente.direccion)
          break
        case 5:
          propiedadesAMostrar.push(paciente.diagnostico)
          break
        default:
          break
      }
    });
    pacientesMostrados += propiedadesAMostrar.join(", ") + "\n"
  })

  alert(pacientesMostrados)
}

agregarPaciente("Homero J.", "Simpson", 36, "Calle siempreviva 742", "Crayon en el cerebro")
agregarPaciente("Peter", "Parker", 16, "69th Road, en Forest Hills", "Delirios de poderes por picadura de araña radioactiva")
agregarPaciente("Bruce", "Wayne", 40, "Mansion Wayne", "quiroptofobia.")


while (true) {
  const opcion = prompt("Seleccione una opcion:\n1. Agregar paciente\n2. Eliminar paciente\n3. Mostrar propiedades de pacientes\n4. Salir");

  if (opcion === "1") {
    const nombre = prompt("Ingrese el nombre del paciente:")
    const apellido = prompt("Ingrese el apellido del paciente:")
    const edad = parseInt(prompt("Ingrese la edad del paciente:"))
    const direccion = prompt("Ingrese la dirección del paciente:")
    const diagnostico = prompt("Ingrese el diagnóstico del paciente:")
    agregarPaciente(nombre, apellido, edad, direccion, diagnostico)
    alert("Paciente agregado con éxito.")
  } else if (opcion === "2") {
    eliminarPaciente();
  } else if (opcion === "3") {
    mostrarPropiedades();
  } else if (opcion === "4") {
    break;
  } else {
    alert("TOSCO TENIAS QUE SER! Opcion invalida! Por favor, seleccione una opcion valida.")
  }
}
