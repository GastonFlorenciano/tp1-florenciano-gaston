import { Equipo } from "./models/Equipo.js";
import { Jugador } from "./models/Jugador.js";

const j1 = new Jugador("1", "Messi", 36, "Delantero");
const j2 = new Jugador("2", "Mascherano", 39);

const equipo1 = new Equipo("Los Leones");
equipo1.agregarJugador(j1);
equipo1.agregarJugador(j2);

console.log(equipo1.toString());
console.log(`Cantidad de jugadores en ${equipo1.nombre}: ${equipo1.cantidad}`);
