
var contenedor = document.getElementById('container');

var listaAlumnos = ["Angie", "Day", "Ricky", "Lucas", "Lechuga", "Tomas", "Alma"];
var listaMentores = ["Fer", "Ivan", "Valentina"];

var orderList = document.createElement('ol');
var orderList2 = document.createElement('ul');

var divM = document.createElement('div');
var divA = document.createElement('div');
divM.id = "div-mentores";
divA.id = "div-alumnos";

contenedor.append(divM, divA);

divM.append(orderList);
divA.append(orderList2);

var encabezadoAlumnos = document.createElement('h2');
var encabezadoMentores = document.createElement('h2');

agregarLista(listaMentores, orderList);
agregarLista(listaAlumnos, orderList2);
agregaListaNombre(orderList, ".lista", "Valentina");
agregarTituloALista(encabezadoMentores, "Mentores", divM);
agregarTituloALista(encabezadoAlumnos, "Alumnos", divA);


function agregarLista(arreglo, listaOl){ 
    arreglo.sort();   
    for(var i = 0; i < arreglo.length; i++){
        var li = document.createElement('li');
        li.className = "lista";
        li.textContent = arreglo[i];
        listaOl.append(li);
    }
    
}

function agregarTituloALista(elemento, titulo, padre){
    elemento.textContent = titulo;
    padre.prepend(elemento);
}

function agregaListaNombre(lista, nombreClase, nombreTutor){
    var listado = lista.querySelectorAll(nombreClase);
    for(var i = 0; i < listado.length; i++){
        var span = document.createElement('span');
        span.className = "text-bold";
        if(listado[i].textContent == nombreTutor){
            span.textContent = "Tutora: ";
        }
        else{
            span.textContent = "Mentor: ";
        }
        listado[i].prepend(span);
    }
}

function agregarPersonas(array){
    var person;
    do {
        person = prompt("Ingrese persona");
        if(person !== "" && person !== null){
            array.push(person);
        }
        
    } while (person !== null);
    console.log(array)
}



