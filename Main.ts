import { Persona, Color, Genero } from "./Persona";
import { Direccion } from "./Direccion";
import { Telefono, TelefonoEnum } from "./Telefono";
import { Mail, TipoMail } from "./Mail";

console.log ("------------- Iniciamos ejecución del programa -------------------\n");
console.log ("------------- Listado datos originales -------------------\n");

let personas: Persona[] = new Array();

let direccionEstudiante: Direccion = new Direccion();
direccionEstudiante.setDireccion("Calle Canónigo Valiño", "58", "3", "B", "46650", "Canals", "Valencia");
let direccionesEstudiante: Direccion[] = new Array();
direccionesEstudiante.push(direccionEstudiante);
let telefonoEstudiante: Telefono = new Telefono();
telefonoEstudiante.setTelefono(TelefonoEnum.movil, "+34-633212772");
let telefonosEstudiante: Telefono[] = new Array();
telefonosEstudiante.push(telefonoEstudiante);
let mailEstudiante: Mail = new Mail();
mailEstudiante.setMail("universidad", "iciar.moreno@upv.es");
let mailsEstudiante: Mail[] = new Array();
mailsEstudiante.push(mailEstudiante);
let notasEstudiante: string[] = ["Soy la estudiante", "de Valencia"];
let estudiante: Persona = new Persona();
estudiante.setPersona("Iciar", "Moreno Castro", "23", "51008351D", new Date("12/20"), "amarillo", "femenino", direccionesEstudiante,
telefonosEstudiante, mailsEstudiante, notasEstudiante);
personas.push(estudiante);

let direccionTrabajador: Direccion = new Direccion();
direccionTrabajador.setDireccion("Calle Rio Segura", "21", "6", "D", "31486", "Egüés", "Navarra");
let direccionesTrabajador: Direccion[] = new Array();
direccionesTrabajador.push(direccionTrabajador);
let telefonoTrabajador: Telefono = new Telefono();
telefonoTrabajador.setTelefono(TelefonoEnum.trabajo, "+34-791755417");
let telefonosTrabajador: Telefono[] = new Array();
telefonosTrabajador.push(telefonoTrabajador);
let mailTrabajador: Mail = new Mail();
mailTrabajador.setMail("trabajo", "iker.lbalenziaga@empresa.com");
let mailsTrabajador: Mail[] = new Array();
mailsTrabajador.push(mailTrabajador);
let notasTrabajador: string[] = ["Soy el trabajador", "de Navarra"];
let trabajador: Persona = new Persona();
trabajador.setPersona("Iker", "Lekue Balenziaga", "40", "34758631L", new Date("05/12"), "rojo", "masculino", direccionesTrabajador,
telefonosTrabajador, mailsTrabajador, notasTrabajador);
personas.push(trabajador);

let direccionCliente: Direccion = new Direccion();
direccionCliente.setDireccion("Calle Eras", "35", "-", "-", "28750", "San Agustín De Guadalix", "Madrid");
let direccionesCliente: Direccion[] = new Array();
direccionesCliente.push(direccionCliente);
let telefonoCliente: Telefono = new Telefono();
telefonoCliente.setTelefono(TelefonoEnum.fijo, "+34-916950131");
let telefonosCliente: Telefono[] = new Array();
telefonosCliente.push(telefonoCliente);
let mailCliente: Mail = new Mail();
mailCliente.setMail("personal", "eduardo.poncequintana@gmail.com");
let mailsCliente: Mail[] = new Array();
mailsCliente.push(mailCliente);
let notasCliente: string[] = ["Soy el cliente", "Madrileño"];
let cliente: Persona = new Persona();
cliente.setPersona("Eduardo", "Ponce Quintana", "32", "12345678Z", new Date("07/16"), "azul", "masculino", direccionesCliente,
telefonosCliente, mailsCliente, notasCliente);
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
console.log ("------------- Finalizamos ejecución del programa -------------------");
