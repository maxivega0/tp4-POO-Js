//* Con el siguiente array de objetos, crear una funcion que permita dibujar una tabla con las columnas Producto - categoria - precio. Realizar las siguientes tareas:

//* Mostrar la tabla completa

//* filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.

//* Buscar un producto serum y mostrarlo por pantalla,

//* Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto no existe en el array.
let position = [];
let listaProductos = [
  {
    nombreProducto: "Hidratante facial",
    precio: 3500,
    categoria: "Hidratante",
  },
  { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
  {
    nombreProducto: "Protector solar factor 50",
    precio: 3300,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar toque seco factor 50",
    precio: 4100,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar con color factor 50",
    precio: 3850.5,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Gel de limpieza facial",
    precio: 1740.99,
    categoria: "Limpieza",
  },
  { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
  { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
  {
    nombreProducto: "Exfoliante de azúcar cherry",
    precio: 1200,
    categoria: "Labios",
  },
  {
    nombreProducto: "Pads de hidrogel para contorno de ojos",
    precio: 2800,
    categoria: "Ojos",
  },
  {
    nombreProducto: "Mascarilla facial",
    precio: 3250.99,
    categoria: "Mascaras",
  },
  { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
  { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
  { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
  {
    nombreProducto: "Protector solar en barra",
    precio: 3800,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Mascara de hidratación y reparación",
    precio: 1200,
    categoria: "Mascaras",
  },
  { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];

function mostrarTabla() {
  document.write(`<h1>Tabla de productos </h1>
<table class="table-bordered border-primary-subtle"><thead>
<tr>
<th>Producto</th>
<th>Precio</th>
<th>Categoria</th>
</tr>
</thead>
<tbody>`);
  listaProductos.forEach((element) => {
    document.write(
      `<tr>
      <td>${element.nombreProducto}</td>
      <td>${element.categoria}</td>
      <td>${element.precio}</td></tr>`
    );
  });
  document.write(`</tr></tbody>
</table> <hr>`);
}
mostrarTabla();

function filtrarProtectores() {
  document.write(
    `<h2>Tabla filtrada Protectores Solares </h2>
<table class="table-bordered border-warning-subtle"><thead>
<tr>
<th>Producto</th>
<th>Precio</th>
<th>Categoria</th>
</tr>
</thead>
<tbody>`
  );
  listaProductos.forEach((element) => {
    element.nombreProducto.includes(`Protector solar`)
      ? document.write(
          `<tr>
          <td>${element.nombreProducto}</td>
          <td>${element.categoria}</td>
          <td>${element.precio}</td></tr>`
        )
      : false;
  });
  document.write(`</tbody></table><hr>`);
}
filtrarProtectores();

function buscarSerum() {
  document.write(
    `<h2>Tabla filtrada Serum </h2>
<table class="table-bordered border-warning-subtle"><thead>
<tr>
<th>Producto</th>
<th>Precio</th>
<th>Categoria</th>
</tr>
</thead>
<tbody>`
  );
  listaProductos.forEach((element) => {
    element.categoria.includes(`Sérum`)
      ? document.write(
          `<tr><td>${element.nombreProducto}</td><td>${element.categoria}</td><td>${element.precio}</td></tr>`
        )
      : false;
  });
  document.write(`</tbody></table>`);
}
buscarSerum();

function buscarBruma() {
  let productoBuscado = false;
  document.write(
    `<h2>Tabla filtrada Bruma </h2>
<table class="table-bordered border-warning-subtle"><thead>
<tr>
<th>Producto</th>
<th>Precio</th>
<th>Categoria</th>
</tr>
</thead>
<tbody>`
  );
  listaProductos.forEach((element) => {
    element.categoria.includes(`Bruma`)
      ? ((productoBuscado = true),
        document.write(
          `<tr><td>${element.nombreProducto}</td><td>${element.categoria}</td><td>${element.precio}</td></tr>`
        ))
      : productoBuscado = false;
  });
  productoBuscado ? true : alert(`El producto buscado 'Bruma', no existe.`)
  document.write(`</tbody></table>`);
}
buscarBruma();