import { Equipo } from "./Equipo.js";

export abstract class Deporte {
    constructor(
        public nombre: string,
        public maxPorEquipo: number
    ) { }

    abstract validar(equipo: Equipo): boolean;
}