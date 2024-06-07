
const guardarDatos = []
const botonEnviar = document.getElementById("button");
botonEnviar.addEventListener("click", registrarproveedores);

function registrarproveedores() {
    const formulario = document.getElementById("formulario");
    const datosProveedores = {
        nombre: formulario.nombre.value,
        celular: formulario.celular.value,
        email: formulario.email.value,
        direccion: formulario.direccion.value,
        actividad: formulario.actividad.value,
        tema: formulario.tema.value,
        extra: formulario.extra.value,
    };

    const DatosJason = JSON.stringify(datosProveedores);

    localStorage.setItem("proveedor", DatosJason);
    
    
    }

    function GuardarArray() {
        const TomarDatos = localStorage.getItem("proveedor");
        ;
        if(TomarDatos){
            const datosProveedores = JSON.parse(TomarDatos);
            
            guardarDatos.push(datosProveedores);
            console.log(guardarDatos);
        }
        }
    GuardarArray()
    




