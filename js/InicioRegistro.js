export class InicioRegistro {

    static obtenerUsuarios() {
        return JSON.parse(localStorage.getItem("usuarios")) || [];
    }

    static guardarUsuario(usuario) {
        const usuarios = this.obtenerUsuarios();

        const existe = usuarios.some(
            u => u.email === usuario.email
        );

        if (existe) {
            throw new Error("El email ya está registrado");
        }

        usuarios.push(usuario);

        /* crea un espacio en local storage llamado usuarios, despues convierte al array usuarios en string con stringify*/
        localStorage.setItem("usuarios", JSON.stringify(usuarios)
        );
    }

    static login(email, contrasenia) {

        const usuarios = this.obtenerUsuarios();

        const usuario = usuarios.find(
            u =>
                u.email === email &&
                u.contrasenia === contrasenia
        );

        if (!usuario) {
            throw new Error("Usuario o contraseña incorrectos");
        }

        localStorage.setItem(
            "usuarioLogueado",
            JSON.stringify(usuario)
        );

        return usuario;
    }

    static logout() {
        localStorage.removeItem(
            "usuarioLogueado"
        );
    }

    static usuarioLogueado() {
        return JSON.parse(
            localStorage.getItem("usuarioLogueado")
        );
    }
}