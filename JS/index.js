const id1 = document.getElementById("id1");

      function changeColor() {
        const r = Math.floor(Math.random() * 256); // Valor aleatorio para el canal rojo
        const g = Math.floor(Math.random() * 256); // Valor aleatorio para el canal verde
        const b = Math.floor(Math.random() * 256); // Valor aleatorio para el canal azul
        id1.style.color = `rgb(${r},${g},${b})`; // Cambia el color del texto
        setTimeout(changeColor, 1000); // Llama a la función de nuevo después de 1 segundo
      }

      changeColor(); // Llama a la función por primera vez