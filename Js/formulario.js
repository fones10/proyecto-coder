
let miformulario = document.getElementById("formGarantias");
miformulario.addEventListener("submit", validar);

function validar(elemento){
    elemento.preventDefault();
    let formulario = elemento.target 
    
    for(let indice=1; indice<=formulario.length; indice++){
        if(formulario[1].value == ""){
            alert("el campo nombre no puede estar vacio");
        }
        else{
            console.log(formulario[1].value)
        }
        if(formulario[2].value == ""){
            alert("el campo apellido no puede estar vacio");
        }
        else{
            console.log(formulario[2].value)
        }
        if(formulario[3].value == ""){
            alert("el campo numero de cedula no puede estar vacio");
        }
        else{
            console.log(formulario[3].value)
        }
        if(formulario[4].value == ""){
            alert("el campo correo electronico no puede estar vacio");
        }
        else{
            console.log(formulario[4].value)
        }
        if(formulario[5].value == ""){
            alert("el campo marca de celular no puede estar vacio");
        }
        else{
            console.log(formulario[5].value)
        }
        if(formulario[7].value == ""){
            alert("no se registro ningun comentario");
        }
        else{
            console.log(formulario[7].value)
        }
        console.log(formulario[8].value)
        indice= formulario[8]+1;
    }
}
