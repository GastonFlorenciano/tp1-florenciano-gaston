import type { Partido } from './Partido.js';

export class Torneo {
  constructor(
    public id: number,
    public nombre: string,
    private listaPartidos: Partido[] = []
  ) {}

  programarPartido(partido: Partido): void {
    this.listaPartidos.push(partido);
  }

  listarPartidos(): Partido[] {
    return this.listaPartidos;
  }

  buscarPartido(partido: Partido): boolean {
    return this.listaPartidos.includes(partido);
  }
}
