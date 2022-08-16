const inputHTML = document.getElementById("inputHTML");
const btn = document.getElementById("btn");
const listaHTML = document.getElementById("listaHTML");


btn.addEventListener("click", () =>{
    nuevaTarea = recuperarTarea();
    agregarTarea(nuevaTarea);
    inputHTML.value = "";
});

const recuperarTarea = () =>{
    const tareaValue = inputHTML.value;
    return tareaValue;
}

const agregarTarea = (tarea) =>{
    if(inputHTML.value === ""){
        alert("No puedes agregar una tarea vacía!");
    }
    else{
        li = document.createElement("li");
        li.innerHTML = `${tarea}`;
        li.addEventListener("click", (e) =>{
            completarTarea(e.target);
        })
        btnEliminar = crearBtnEliminar();
        li.appendChild(btnEliminar);
        listaHTML.appendChild(li);
    }
}

const crearBtnEliminar = () =>{
    btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "Eliminar";
    btnEliminar.addEventListener("click", (e) => {
        eliminarTarea(e.target.parentElement);
    })
    return btnEliminar;
}

const eliminarTarea = (elemento) =>{
    listaHTML.removeChild(elemento);
}

const completarTarea = (elemento =>{
    elemento.classList.toggle("tarea-completada");
})