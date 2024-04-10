function filtrarProductos() {
    const filtro = document.getElementById("filtro").value.toLowerCase();
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = "";

    productos.forEach(producto => {
        if (producto.nombre.toLowerCase().includes(filtro) || producto.categoria.toLowerCase().includes(filtro)) {
            const elemento = document.createElement("p");
            elemento.textContent = `${producto.nombre} - ${producto.categoria}`;
            resultados.appendChild(elemento);
        }
    });
}
