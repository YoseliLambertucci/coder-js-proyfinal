// voy a intentar hacer un ingreso de datos y almacenamiento
alert("Hola practica conmigo JS");
alert("vamos a simular que nos registramos como proveedores en una empresa x")
const cuitproveedores = [];
const nombreproveedores = [];
const apellidoproveedores = [];

function registracion() {
  
  // cuit
  console.log(cuitproveedores);
  let cuit = prompt("ingresa tu cuit");
  if (cuit != cuitproveedores) {
    cuitproveedores.push(parseInt(cuit));
    // cuitproveedores.push(parseInt (prompt("ingresa tu cuit")))
  } else {
    alert("ya estas registrado");
  }

  // aca me gustaria poner un break; para que si la persona ya esta registrada no la vuelva a registrar
  // pero cuando pongo un break; me salta error de sintaxis asi que no se que hacer
  console.log(cuitproveedores);

  //nombre
  
  console.log(nombreproveedores);

  nombreproveedores.push(prompt("ingresa tu nombre"));
  console.log(nombreproveedores);

  // apellido
  

  console.log(apellidoproveedores);

  apellidoproveedores.push(prompt("ingresa tu apellido"));
  console.log(apellidoproveedores);

  console.log("bienvenido ");
}

registracion();
//aca quiero hacer una funcion que revise el array y diga si esta un proveedor

function buscarProveedor(proveedor) {
  for (let i = 0; i < cuitproveedores.length; i++) {
    if (proveedor == cuitproveedores[i]) {
      //aca no se como hacer para que entre adentro de la funcion y busque
      console.log(i);
      alert ("ya sos proveedor, estas en la posicion de consola");
    } else{
      alert("Proveedor Inexistente");
    }
  }
}

buscarProveedor(prompt("ingresa el cuit del proveedor que queres buscar"));

// pero cuando creo algo mas fuera de la funcion no lo ejecuta en el html
