document.addEventListener('DOMContentLoaded', () => {
    const nombreInput = document.getElementById('nombre');
    const edadInput = document.getElementById('edad');
    const selectElement = document.getElementById('miLista');
    const botonMostrar = document.getElementById('mostrarMensaje');
    const resultadoDiv = document.getElementById('resultado');
    
  
    function mostrarMensaje() {
      // Obtén los valores de los campos de entrada
      const nombre = nombreInput.value.trim();
      const edad = edadInput.value.trim();
      const miLista = selectElement.value.trim();
  
      // Crea el mensaje a mostrar
      const mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${miLista}!`;
  
      // Muestra el mensaje en el contenedor
      resultadoDiv.textContent = mensaje;
  
      // Limpia los campos de entrada
      nombreInput.value = '';
      edadInput.value = '';
      selectElement.value = '';
    }
  
    // Agrega un evento de escucha para el botón
    botonMostrar.addEventListener('click', mostrarMensaje);
  });
  