class Event {
  constructor(nombre, tipo, fecha, lugar, cupos) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.fecha = fecha;
    this.lugar = lugar;
    this.cupos = cupos;
  }
}

class Ticket {
  constructor(evento, nombreComprador, correoComprador) {
    this.event = evento;
    this.nombreComprador = nombreComprador;
    this.correoComprador = correoComprador;
  }
}

eventos = [
  new Event("Concierto de Rock", "Concierto", "31 de octubre de 2026", "Estadio Nacional", 100),
  new Event("Festival de Jazz", "Festival", "1 de noviembre de 2026", "Parque Central", 50),
  new Event("Obra de Teatro", "Teatro", "17 de septiembre de 2026", "Teatro Municipal", 30),
  new Event("Concierto de Pop", "Concierto", "17 de octubre de 2026", "Arena Lima", 80)
];