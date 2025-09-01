import { Jugador } from './models/Jugador.js';
import { Equipo } from './models/Equipo.js';
import { Basquet } from './models/Basquet.js';
import { Partido } from './models/Partido.js';
import { Futbol } from './models/Futbol.js';
import { Torneo } from './models/Torneo.js';

console.log('--- Creación de jugadores ---');

const jugador1 = new Jugador('1', 'Lionel Messi', 36, 'Delantero');
const jugador2 = new Jugador('2', 'Cristiano Ronaldo', 38, 'Delantero');

console.log(jugador1.toString());
console.log(jugador2.toString());

const equipoA = new Equipo('Equipo A');
equipoA.agregarJugador(jugador1);
equipoA.agregarJugador(jugador2);
equipoA.agregarJugador(new Jugador('5', 'Luka Modrić', 37, 'Centrocampista'));
equipoA.agregarJugador(new Jugador('6', 'Sergio Ramos', 37, 'Defensor'));
equipoA.agregarJugador(new Jugador('7', 'Manuel Neuer', 37, 'Portero'));
equipoA.agregarJugador(new Jugador('8', 'Kevin De Bruyne', 32, 'Centrocampista'));
equipoA.agregarJugador(new Jugador('9', 'Virgil van Dijk', 33, 'Defensor'));
equipoA.agregarJugador(new Jugador('10', 'Robert Lewandowski', 35, 'Delantero'));
equipoA.agregarJugador(new Jugador('11', 'Kylian Mbappé', 25, 'Delantero'));
equipoA.agregarJugador(new Jugador('12', 'Neymar Jr', 31, 'Delantero'));
equipoA.agregarJugador(new Jugador('13', 'Sadio Mané', 31, 'Delantero'));

console.log('\n--- Creación de equipos ---');
console.log(equipoA.toString());
console.log(`Cantidad de integrantes: ${equipoA.cantidad}`);

const equipoB = new Equipo('Equipo B');
equipoB.agregarJugador(new Jugador('3', 'Neymar Jr', 31, 'Delantero'));
equipoB.agregarJugador(new Jugador('4', 'Kylian Mbappé', 25, 'Delantero'));
equipoB.agregarJugador(new Jugador('14', 'Luka Modrić', 37, 'Centrocampista'));
equipoB.agregarJugador(new Jugador('15', 'Sergio Ramos', 37, 'Defensor'));
equipoB.agregarJugador(new Jugador('16', 'Manuel Neuer', 37, 'Portero'));
equipoB.agregarJugador(new Jugador('17', 'Kevin De Bruyne', 32, 'Centrocampista'));
equipoB.agregarJugador(new Jugador('18', 'Virgil van Dijk', 33, 'Defensor'));
equipoB.agregarJugador(new Jugador('19', 'Robert Lewandowski', 35, 'Delantero'));
equipoB.agregarJugador(new Jugador('20', 'Kylian Mbappé', 25, 'Delantero'));
equipoB.agregarJugador(new Jugador('21', 'Neymar Jr', 31, 'Delantero'));
equipoB.agregarJugador(new Jugador('22', 'Sadio Mané', 31, 'Delantero'));

console.log(equipoB.toString());
console.log(`Cantidad de integrantes: ${equipoB.cantidad}`);

const futbol = new Futbol();
const basquet = new Basquet();

console.log('\n--- Validaciones de deporte (polimorfismo) ---');
console.log(`Equipo A válido para fútbol? ${futbol.validar(equipoA)}`);
console.log(`Equipo A válido para básquet? ${basquet.validar(equipoA)}`);
console.log(`Equipo B válido para fútbol? ${futbol.validar(equipoB)}`);
console.log(`Equipo B válido para básquet? ${basquet.validar(equipoB)}`);

console.log('\n--- Partido de Fútbol ---');
const partidoFutbol = new Partido(1, equipoA, equipoB, futbol);
const resultadoFutbol = partidoFutbol.jugar();
console.log(resultadoFutbol.toString());

const equipoC = new Equipo('Equipo C');
equipoC.agregarJugador(new Jugador('23', 'LeBron James', 38, 'Alero'));
equipoC.agregarJugador(new Jugador('24', 'Stephen Curry', 36, 'Base'));
equipoC.agregarJugador(new Jugador('25', 'Kevin Durant', 35, 'Ala-pívot'));
equipoC.agregarJugador(new Jugador('26', 'Giannis Antetokounmpo', 28, 'Ala-pívot'));
equipoC.agregarJugador(new Jugador('27', 'Kawhi Leonard', 33, 'Alero'));

const equipoD = new Equipo('Equipo D');
equipoD.agregarJugador(new Jugador('28', 'James Harden', 34, 'Escolta'));
equipoD.agregarJugador(new Jugador('29', 'Anthony Davis', 32, 'Pívot'));
equipoD.agregarJugador(new Jugador('30', 'Damian Lillard', 34, 'Base'));
equipoD.agregarJugador(new Jugador('31', 'Chris Paul', 38, 'Base'));
equipoD.agregarJugador(new Jugador('32', 'Jimmy Butler', 33, 'Alero'));

console.log('\n--- Partido de Básquet ---');
const partidoBasquet = new Partido(2, equipoC, equipoD, basquet);
const resultadoBasquet = partidoBasquet.jugar();
console.log(resultadoBasquet.toString());

const torneo = new Torneo("1", 'Torneo Internacional');
torneo.programarPartido(partidoFutbol);
torneo.programarPartido(partidoBasquet);

console.log('\n--- Lista de partidos del Torneo ---');
console.log(torneo.listarPartidos());
console.log(`¿El partido de fútbol está en el torneo? ${torneo.buscarPartido(partidoFutbol)}`);
