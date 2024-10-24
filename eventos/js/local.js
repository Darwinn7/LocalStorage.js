document.addEventListener('DOMContentLoaded', (event) => {
    // Capturar datos formulario
    const minombre = document.getElementById(`nombre`);
    const btnGuardar = document.getElementById(`btnGuardar`);
    const btnActualizar = document.getElementById(`btnActualizar`);
    const btnEliminar = document.getElementById(`btnEliminar`);
    const mimensaje = document.getElementById(`mensaje`);

    // Cargar el nombre desde localStorage al cargar la página
    const nombreGuardado = localStorage.getItem('nombreUs');
    if (nombreGuardado) {
        minombre.value = nombreGuardado; // Mostrar el nombre en el campo de entrada
        mimensaje.textContent = `Te llamas ${nombreGuardado}`; // Mostrar mensaje
    }

    // Función para guardar el nombre en localStorage
    function guardar() {
        const nombreCapturado = minombre.value; // Cambiar nombre a minombre
        localStorage.setItem(`nombreUs`, nombreCapturado); // Corregir setItem
        mimensaje.textContent = `Te llamas ${nombreCapturado}`;
    }

    // Función para actualizar la página
    function actualizar() {
        location.reload(); // Recargar la página
    }

    // Función para eliminar el nombre de localStorage
    function eliminar() {
        localStorage.removeItem(`nombreUs`);
        minombre.value = ''; // Limpiar el campo de entrada
        mimensaje.textContent = `El nombre ha sido eliminado`;
    }

    // Agregar eventos a los botones
    btnGuardar.addEventListener('click', guardar);
    btnActualizar.addEventListener('click', actualizar);
    btnEliminar.addEventListener('click', eliminar);
});