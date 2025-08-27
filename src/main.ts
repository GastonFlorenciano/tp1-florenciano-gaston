import { Jugador } from "./models/Jugador.js";
import { Equipo } from "./models/Equipo.js";
import { Futbol } from "./models/Futbol.js";
import { Basquet } from "./models/Basquet.js";

// 1️⃣ Crear jugadores
const j1 = new Jugador("1", "Messi", 36, "Delantero");
const j2 = new Jugador("2", "Mascherano", 39, "Defensa");
const j3 = new Jugador("3", "Di María", 35, "Volante");
const j4 = new Jugador("4", "CR7", 38, "Delantero");
const j5 = new Jugador("5", "Neymar", 31, "Delantero");
const j6 = new Jugador("6", "Mbappé", 24, "Delantero");

// 2️⃣ Crear un equipo
const equipoA = new Equipo("Equipo A");
equipoA.agregarJugador(j1);
equipoA.agregarJugador(j2);
equipoA.agregarJugador(j3);
equipoA.agregarJugador(j4);
equipoA.agregarJugador(j5);
equipoA.agregarJugador(j6);

// 3️⃣ Crear deportes
const futbol = new Futbol();
const basquet = new Basquet();

// 4️⃣ Validar equipos
console.log(`\n--- Validación Fútbol ---\n`);
futbol.validar(equipoA);

console.log(`\n--- Validación Básquet ---\n`);
basquet.validar(equipoA);

// 5️⃣ Listar integrantes
console.log(`\n--- Integrantes del equipo ---\n`);
console.log(equipoA.listarIntegrantes());
