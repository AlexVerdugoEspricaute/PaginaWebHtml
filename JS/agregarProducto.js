const form = document.querySelector('form');
const stockList = document.querySelector('#stockList tbody');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  onFormSubmit();
});

function onFormSubmit() {
  const producto = document.querySelector('#producto').value;
  const categoria = document.querySelector('#categoria').value;
  const precio = document.querySelector('#precio').value;
  const cantidad = document.querySelector('#cantidad').value;

  if (validateForm(producto, categoria, precio, cantidad)) {
    addProduct(producto, categoria, precio, cantidad);
    clearForm();
  }
}

function validateForm(producto, categoria, precio, cantidad) {
  let isValid = true;

  if (producto.trim() === '') {
    isValid = false;
    document.querySelector('#productoValidationError').textContent = '';
    document.querySelector('#productoValidationError').classList.remove('hide');
  } else {
    document.querySelector('#productoValidationError').classList.add('hide');
  }

  if (categoria.trim() === '') {
    isValid = false;
    document.querySelector('#categoriaValidationError').textContent = '';
    document.querySelector('#categoriaValidationError').classList.remove('hide');
  } else {
    document.querySelector('#categoriaValidationError').classList.add('hide');
  }

  if (precio.trim() === '') {
    isValid = false;
    document.querySelector('#precioValidationError').textContent = '';
    document.querySelector('#precioValidationError').classList.remove('hide');
  } else {
    document.querySelector('#precioValidationError').classList.add('hide');
  }

  if (cantidad.trim() === '') {
    isValid = false;
    document.querySelector('#cantidadValidationError').textContent = '';
    document.querySelector('#cantidadValidationError').classList.remove('hide');
  } else {
    document.querySelector('#cantidadValidationError').classList.add('hide');
  }

  return isValid;
}

function addProduct(producto, categoria, precio, cantidad) {
  const row = document.createElement('tr');
  const productoCell = document.createElement('td');
  const categoriaCell = document.createElement('td');
  const precioCell = document.createElement('td');
  const cantidadCell = document.createElement('td');
  const deleteCell = document.createElement('td');

  productoCell.innerHTML = '<input class="form-control" type="text" min="1" value='+producto+'>'
  categoriaCell.innerHTML = '<input class="form-control" type="text" min="1" value='+categoria+'>';
  precioCell.innerHTML = '<input class="form-control" type="number" min="1" value='+precio+'>';
  cantidadCell.innerHTML = '<input class="form-control" type="number" min="1" value='+cantidad+'>';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
  deleteButton.addEventListener('click', () => {
    row.remove();
  });

  deleteCell.appendChild(deleteButton);

  row.appendChild(productoCell);
  row.appendChild(categoriaCell);
  row.appendChild(precioCell);
  row.appendChild(cantidadCell);
  row.appendChild(deleteCell);

  stockList.appendChild(row);
}

function clearForm() {
  document.querySelector('#producto').value = '';
  document.querySelector('#categoria').value = '';
  document.querySelector('#precio').value = '';
  document.querySelector('#cantidad').value = '';
}