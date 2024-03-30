document.addEventListener('DOMContentLoaded', function () {
    const registroForm = document.getElementById('registro-correo');
    const loginForm = document.getElementById('login-correo');
  
    registroForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Evitar envío predeterminado del formulario
  
      // Lógica de validación del formulario de registro...
    });
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Evitar envío predeterminado del formulario
  
      // Lógica de validación del formulario de inicio de sesión...
    });
  
    // Funciones para mostrar y ocultar mensajes de error
    function mostrarError(campo, mensaje) {
      const elementoError = document.getElementById(`${campo}-error`);
      elementoError.textContent = mensaje;
      elementoError.classList.add('visible');
    }
  
    function ocultarError(campo) {
      const elementoError = document.getElementById(`${campo}-error`);
      elementoError.textContent = '';
      elementoError.classList.remove('visible');
    }
  
    // Función para validar el formato del correo electrónico
    function validarEmail(email) {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }
  });
  