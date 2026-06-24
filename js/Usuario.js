export class Usuario {
    constructor(
        pais,
        dni,
        nombre,
        apellido,
        fechaNacimiento,
        email,
        contrasenia, 
        telefono, 
        ciudad,
    ) {
        this.pais = pais;
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.contrasenia = contrasenia;
        this.telefono = telefono;
        this.ciudad = ciudad;
    }
}