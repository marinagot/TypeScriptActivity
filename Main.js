"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./Persona");
const Direccion_1 = require("./Direccion");
const Telefono_1 = require("./Telefono");
const Mail_1 = require("./Mail");
console.log("------------- Iniciamos ejecución del programa -------------------\n");
console.log("------------- Listado datos originales -------------------\n");
let personas = new Array();
let direccionEstudiante = new Direccion_1.Direccion();
direccionEstudiante.setDireccion("Calle Canónigo Valiño", "58", "3", "B", "46650", "Canals", "Valencia");
let direccionesEstudiante = new Array();
direccionesEstudiante.push(direccionEstudiante);
let telefonoEstudiante = new Telefono_1.Telefono();
telefonoEstudiante.setTelefono(Telefono_1.TelefonoEnum.movil, "+34-633212772");
let telefonosEstudiante = new Array();
telefonosEstudiante.push(telefonoEstudiante);
let mailEstudiante = new Mail_1.Mail();
mailEstudiante.setMail("universidad", "iciar.moreno@upv.es");
let mailsEstudiante = new Array();
mailsEstudiante.push(mailEstudiante);
let notasEstudiante = ["Soy la estudiante", "de Valencia"];
let estudiante = new Persona_1.Persona();
estudiante.setPersona("Iciar", "Moreno Castro", "23", "51008351D", new Date("12/20"), "amarillo", "femenino", direccionesEstudiante, telefonosEstudiante, mailsEstudiante, notasEstudiante);
personas.push(estudiante);
let direccionTrabajador = new Direccion_1.Direccion();
direccionTrabajador.setDireccion("Calle Rio Segura", "21", "6", "D", "31486", "Egüés", "Navarra");
let direccionesTrabajador = new Array();
direccionesTrabajador.push(direccionTrabajador);
let telefonoTrabajador = new Telefono_1.Telefono();
telefonoTrabajador.setTelefono(Telefono_1.TelefonoEnum.trabajo, "+34-791755417");
let telefonosTrabajador = new Array();
telefonosTrabajador.push(telefonoTrabajador);
let mailTrabajador = new Mail_1.Mail();
mailTrabajador.setMail("trabajo", "iker.lbalenziaga@empresa.com");
let mailsTrabajador = new Array();
mailsTrabajador.push(mailTrabajador);
let notasTrabajador = ["Soy el trabajador", "de Navarra"];
let trabajador = new Persona_1.Persona();
trabajador.setPersona("Iker", "Lekue Balenziaga", "40", "34758631L", new Date("05/12"), "rojo", "masculino", direccionesTrabajador, telefonosTrabajador, mailsTrabajador, notasTrabajador);
personas.push(trabajador);
let direccionCliente = new Direccion_1.Direccion();
direccionCliente.setDireccion("Calle Eras", "35", "-", "-", "28750", "San Agustín De Guadalix", "Madrid");
let direccionesCliente = new Array();
direccionesCliente.push(direccionCliente);
let telefonoCliente = new Telefono_1.Telefono();
telefonoCliente.setTelefono(Telefono_1.TelefonoEnum.fijo, "+34-916950131");
let telefonosCliente = new Array();
telefonosCliente.push(telefonoCliente);
let mailCliente = new Mail_1.Mail();
mailCliente.setMail("personal", "eduardo.poncequintana@gmail.com");
let mailsCliente = new Array();
mailsCliente.push(mailCliente);
let notasCliente = ["Soy el cliente", "Madrileño"];
let cliente = new Persona_1.Persona();
cliente.setPersona("Eduardo", "Ponce Quintana", "32", "12345678Z", new Date("07/16"), "azul", "masculino", direccionesCliente, telefonosCliente, mailsCliente, notasCliente);
personas.push(cliente);
for (const personaOriginal of personas) {
    personaOriginal.mostrarDatosPersona();
    if (personaOriginal.getDNI().match("12345678Z")) {
        console.log("------------- Modificamos registro -------------------");
        personaOriginal.cambiarRegistro();
    }
}
console.log("\n------------- Listado personas tras modificar registro -------------------\n");
for (const personaTrasCambiarRegistro of personas) {
    personaTrasCambiarRegistro.mostrarDatosPersona();
}
console.log("------------- Finalizamos ejecución del programa -------------------");
//# sourceMappingURL=Main.js.map