
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
    
   // fetch!!! vamos que puedo!! trabaja de forma asincronica

        fetch("./data.json")
        .then(Response=>Response.json())
        .then (data=>console.log(data))
        