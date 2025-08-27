export class Jugador {
    constructor(
        public readonly id: string,
        public nombre: string,
        public edad: number,
        public posicion?: string
    ) { }   

    listarIntegrantes(): string[] {
        return [this.nombre];
    }

    toString(): string {
        return `Jugador: ${this.nombre}, Edad: ${this.edad}, Posición: ${this.posicion ?? "No definida"}`;
    }
}