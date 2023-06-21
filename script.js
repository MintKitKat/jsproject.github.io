function final() {
    // Obtener los valores 
    let nombre = document.getElementById('name').value;
    let edad = parseInt(age.value);
    let stat = parseInt(document.getElementById("status").value);


    let respuesta1 = 'Hola ' + nombre;



    if(job.checked){
        respuesta2 = "parece que estás en paro ";
    }
    else{
        respuesta2 = "suerte que tienes trabajo con la que está cayendo "
    }

    if (edad > 16 && edad < 65) {
        respuesta3 = 'pues estás en edad de trabajar';
    }
    else {
        respuesta3 = 'pero con la edad que tienes no deberías trabajar';
    }
    
    switch (stat) {
        case 1:
            respuesta4 = 'Cuando llegues, aprovecha para jugar a la play';
            break;
        case 2:
            respuesta4 = 'Cuando llegues a casa, mira una peli con tu pareja.';
            break;
        case 3:
            respuesta4 = 'Cuando llegues a casa, saluda a quién encuentres.';
            break;
        default:
            alert('Opción inválida');
    }
    
      // Mostrar la respuesta final
    final_output.innerHTML = respuesta1 + ', ' + respuesta2 + ', ' + respuesta3 + '. ' + respuesta4 + '.';
    }

