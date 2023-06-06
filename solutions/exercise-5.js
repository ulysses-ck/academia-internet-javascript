class Persona {
	nombre;
	apellido;
	edad;

	/**
	 *
	 * @param {string} nombre
	 * @param {string} apellido
	 * @param {number} edad
	 */
	constructor(nombre, apellido, edad) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
	}

	getDetalles() {
		console.log(`Me llamo ${this.nombre}, tengo ${this.edad} anios.`);
	}
}

class Jugador extends Persona {
	posicion;

	/**
	 *
	 * @param {string} nombre
	 * @param {string} apellido
	 * @param {number} edad
	 * @param {string} posicion
	 */
	constructor(nombre, apellido, edad, posicion) {
		super(nombre, apellido, edad);
		this.posicion = posicion;
	}

	getDetalles() {
		console.log(
			`Me llamo ${this.nombre}, tengo ${this.edad} anios y juego en la posicion de ${this.posicion}.`
		);
	}
}

class Entrenador extends Persona {
	aniosExperiencia;
	idFederacion;

	/**
	 *
	 * @param {string} nombre
	 * @param {string} apellido
	 * @param {number} edad
	 * @param {number} aniosExperiencia
	 * @param {number} idFederacion
	 */
	constructor(nombre, apellido, edad, aniosExperiencia, idFederacion) {
		super(nombre, apellido, edad);
		this.aniosExperiencia = aniosExperiencia;
		if (idFederacion !== undefined) {
			this.idFederacion = idFederacion;
		} else {
			this.idFederacion = Math.floor(Math.random() * 100000);
		}
	}

	getDetalles() {
		console.log(
			`Me llamo ${this.nombre}, tengo ${this.edad} anios. Llevo ${this.aniosExperiencia} años de experiencia y pertenezco a la federación ${this.idFederacion}`
		);
	}
}

class Equipo {
	entrenador;
	equipo;

	/**
	 *
	 * @param {Entrenador} director
	 * @param {Jugador[]} equipo
	 */
	constructor(director, equipo) {
		this.director = director;
		this.equipo = equipo;
	}

	getDetalles() {
		console.log("El entrenador de este equipo:");
		this.director.getDetalles();
		console.log("Los jugadores de este equipo:");
		this.equipo.forEach((jugador) => {
			jugador.getDetalles();
		});
	}
}
const jugadores = [
	new Jugador("Marcos", "Perez", 23, "Portero"),
	new Jugador("Luis", "Aurelio", 18, "Defensa"),
	new Jugador("Juan", "Garcia", 26, "Medio"),
	new Jugador("Ismael", "Sanchez", 30, "Delantero"),
];

const entrenador = new Entrenador("Pepe", "Martinez", 48, 15);
const equipoDeFutbol = new Equipo(entrenador, jugadores);

equipoDeFutbol.getDetalles();
