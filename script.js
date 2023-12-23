let carrito = [];
let cuponValido = false;

const productoRemera = {
  nombre: "Remera",
  precio: 1500,
  id: 1,
};

const productoPantalon = {
  nombre: "Pantalón",
  precio: 2500,
  id: 2,
};

const productoMedias = {
  nombre: "Medias",
  precio: 500,
  id: 3,
};

const productoZapatillas = {
  nombre: "Zapatillas",
  precio: 3000,
  id: 4,
};

let opcion = -1;
const opcionesValidas = ["1", "2", "3", "4", "5", "6", "7"];

const nombreUsuario = prompt("Ingrese su Nombre.");
alert("Bienvenido " + nombreUsuario + "!");

while (opcion != 7) {
  opcion = prompt(
    "Elija una opción: \n\n1- Remera | $" +
      productoRemera.precio +
      ".\n" +
      "2- Pantalón | $" +
      productoPantalon.precio +
      ".\n" +
      "3- Medias | $" +
      productoMedias.precio +
      ".\n" +
      "4- Zapatillas | $" +
      productoZapatillas.precio +
      ".\n" +
      "5- Ver mi Carrito. \n6- Agregar Cupón de Descuento. \n7- Terminar Compra."
  );

  switch (opcion) {
    case "1":
      agregarItemAlCarrito(productoRemera);
      break;
    case "2":
      agregarItemAlCarrito(productoPantalon);
      break;
    case "3":
      agregarItemAlCarrito(productoMedias);
      break;
    case "4":
      agregarItemAlCarrito(productoZapatillas);
      break;
    case "5":
      verCarrito();
      break;
    case "6":
      inrgesarCupon();
      break;
    case "7":
      verCarrito();
      alert("¡Gracias por tu compra " + nombreUsuario + "!");
      break;
    default:
      alert("Opción invalida.");
      opcion = -1;
      break;
  }
}

function agregarItemAlCarrito(item) {
  carrito.push(item);
  alert("Se agregó " + item.nombre + " al carrito.");
}

function verCarrito() {
  let totalCarrito = 0;

  if (cuponValido) {
    totalCarrito = "$ " + obtenerTotalConDescuento();
  } else {
    totalCarrito = "$ " + obtenerTotal();
  }

  alert(
    "Remera " +
      contarProducto(1) +
      "\nPantalón " +
      contarProducto(2) +
      "\nMedias " +
      contarProducto(3) +
      "\nZapatillas " +
      contarProducto(4) +
      "\n\n" +
      "total: " +
      totalCarrito
  );
}

function inrgesarCupon() {
  const promptCupon = prompt("Ingresar cupón de descuento:");

  if (promptCupon.toLowerCase() == "20descuento") {
    alert("Cupón Valido - 20% de descuento aplicado.");
    cuponValido = true;
  } else {
    alert("Cupón invalido.");
  }
}

function contarProducto(id) {
  const productosCarrito = carrito.filter((item) => item.id == id);
  return productosCarrito.length;
}

function obtenerTotal() {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  return total;
}

function obtenerTotalConDescuento() {
  let total = obtenerTotal();
  let descuento = total * 0.2;
  let totalConDescuento = total - descuento;
  return totalConDescuento;
}
