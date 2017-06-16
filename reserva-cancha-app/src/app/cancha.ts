export class Cancha {
  constructor(
    public id?: number,
    public tamano?: string,
    public preciohora?: number,
    public jugadores?: number,
    public estado?: string,
    public nombre?: string
  ) {  }
}

export var CANCHAS: Cancha[] =[
  {nombre: 'Pequeña', id: 1, tamano: '24x15', preciohora: 250, jugadores: 12, estado: 'Libre'},
  {nombre: 'Grande', id: 2, tamano: '95x45', preciohora: 750, jugadores: 22, estado: 'Ocupado'},
  {nombre: 'Amigos', id: 3, tamano: '35x17', preciohora: 350, jugadores: 14, estado: 'Libre'},
  {nombre: 'Personal', id: 99, tamano: '19x7', preciohora: 120, jugadores: 8, estado: 'Reparaciones'},
];
