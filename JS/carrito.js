var selectedRow = null

function onFormSubmit(){
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
            resetForm();
    }
} 


function readFormData() {
    var formData = {};
    formData["producto"] = document.getElementById("producto").value;
    formData["cantidad"] = document.getElementById("cantidad").value;
    return formData;
}
let detalle =[]
let montoTotal = 0
function insertNewRecord(data) {
    var table = document.getElementById("stockList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var valores = document.getElementById("producto").value;
    var separar = valores.split(",");
    var nombre = separar[0];
    var precio = separar[1];
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = '$'+precio.toLocaleString();
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cantidad;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = '$'+(precio * data.cantidad).toLocaleString();
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<button onClick="onDelete(this)" type="button" class="btn btn-danger"> Eliminar </button>';
    montoTotal = montoTotal + (precio * data.cantidad);
    let compra = "Producto:  "+nombre+" Valor: "+'$'+precio.toLocaleString()+" Cantidad: "+data.cantidad+" valor total: "+'$'+(precio * data.cantidad).toLocaleString()
    detalle.push(compra);
    return montoTotal
}

function pagar(){
    const lista = document.getElementById("lista");
    detalle.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    lista.appendChild(li);    
    });
    document.getElementById("valorTotal").value = ' $ '+montoTotal.toLocaleString();
    document.getElementById("valorNeto").value = ' $ '+Math.round(montoTotal * 0.81).toLocaleString();
    document.getElementById("iva").value = ' $ '+Math.round(montoTotal * 0.19).toLocaleString();
    document.getElementById("mostrarBoleta").classList.add('hide');
    document.getElementById("agregar").classList.add('hide');
    
    }
 

function resetForm(){
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    selectedRow = null
}





function onDelete(td) {
    if (confirm('Estas seguro de eliminar este Producto?')){
        row = td.parentElement.parentElement;
        document.getElementById("stockList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate(){
    isValid = true;
    if (document.getElementById("producto").value==""){
        isValid=false;
        document.getElementById("productoValidationError").classList.remove("hide");
    } else if (document.getElementById("cantidad").value==""){
        isValid=false;
        document.getElementById("cantidadValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("productoValidationError").classList.contains("hide"))
        document.getElementById("productoValidationError").classList.add("hide")
        document.getElementById("cantidadValidationError").classList.add("hide");
    }
    return isValid;
}

