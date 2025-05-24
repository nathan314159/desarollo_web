// Referencias a los elementos del formulario
const provinciaSelect = document.getElementById('provincia');
const cantonSelect = document.getElementById('canton');
const tipoParroquia = document.getElementById('tipoParroquia');
const parroquiaSelect = document.getElementById('parroquia');

// Objeto de datos con provincias, cantones y parroquias
const data = {
  Imbabura: {
    Ibarra: {
      urbanas: ["Caranqui", "San Francisco", "El Sagrario", "Alpachaca", "La Dolorosa del Priorato"],
      rurales: ["Ambuquí", "Angochagua", "Carolina", "La Esperanza", "Lita", "Salinas", "San Antonio de Ibarra"]
    },
    Otavalo: {
      urbanas: ["San Luis", "El Jordán"],
      rurales: ["Eugenio Espejo", "San Pablo del Lago"]
    }
  },
  Carchi: {
    Tulcán: {
      urbanas: ["Tulcán Centro"],
      rurales: ["Julio Andrade", "El Carmelo"]
    }
  }
};

// Evento que se activa cuando se elige una provincia
provinciaSelect.addEventListener('change', () => {
  const provincia = provinciaSelect.value;

  // Limpiar los selects dependientes
  cantonSelect.innerHTML = '<option value="">Seleccione</option>';
  parroquiaSelect.innerHTML = '';
  tipoParroquia.value = '';

  // Si hay provincia seleccionada, llenar los cantones
  if (provincia && data[provincia]) {
    const cantones = Object.keys(data[provincia]);
    cantones.forEach(canton => {
      const option = document.createElement('option');
      option.value = canton;
      option.textContent = canton;
      cantonSelect.appendChild(option);
    });
  }
});

// Evento cuando se elige urbana o rural
tipoParroquia.addEventListener('change', () => {
  const provincia = provinciaSelect.value;
  const canton = cantonSelect.value;
  const tipo = tipoParroquia.value;

  // Limpiar el select de parroquias
  parroquiaSelect.innerHTML = '<option value="">Seleccione</option>';

  // Si todo está seleccionado correctamente, cargar parroquias
  if (provincia && canton && tipo && data[provincia][canton][tipo]) {
    const parroquias = data[provincia][canton][tipo];
    parroquias.forEach(p => {
      const option = document.createElement('option');
      option.value = p;
      option.textContent = p;
      parroquiaSelect.appendChild(option);
    });
  }
});
