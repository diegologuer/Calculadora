//Calculadora

//Traemos a los elementos de index
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnPunto = document.getElementById("btnPunto");
let btnIgual = document.getElementById("btnIgual");
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");
let btnMultiplica  = document.getElementById("btnMultiplica");
let btnDivide = document.getElementById("btnDivide");
let btnC = document.getElementById("btnC");

//resultado principal
let txtResultado = document.getElementById("txtResultado");
//historial de operaciones
let lblDatos = document.getElementById("lblDatos");

//Variables

//historial de calculos
let historial = 0;

//si ya se uso punto dentro del input actual
let punto = false;

//si se acaba de presionar el botón de una operación
let operacion = false;

//
let resultado = "";

//indica cual operación es la siguiente
let sigOperacion = "";



//Presentamos a los botones con sus eventos (click)
btn0.addEventListener("click", function(event){
    event.preventDefault();

    if(operacion == true){
        txtResultado.value = "";
        operacion = false;
    }

    if(txtResultado.value != 0 | txtResultado.value == ""){
        txtResultado.value += "0";  
        resultado = txtResultado.value;
    }
    
});
btn1.addEventListener("click", function(event){
    event.preventDefault();
    if(operacion == true){
        txtResultado.value = "";
        operacion = false;
    }
    txtResultado.value += "1";   
    resultado = txtResultado.value;
});
btn2.addEventListener("click", function(event){
    event.preventDefault();
    if(operacion == true){
        txtResultado.value = "";
        operacion = false;
    }
    txtResultado.value += "2";   
    resultado = txtResultado.value;
});
btn3.addEventListener("click", function(event){
    event.preventDefault();
    if(operacion == true){
        txtResultado.value = "";
        operacion = false;
    }
    txtResultado.value += "3";   
    resultado = txtResultado.value;
});
btn4.addEventListener("click", function(event){
    event.preventDefault();
    if(operacion == true){
        txtResultado.value = "";
        operacion = false;
    }
    txtResultado.value += "4";  
    resultado = txtResultado.value; 
});
btn5.addEventListener("click", function(event){
    event.preventDefault();
    if(operacion == true){
        txtResultado.value = "";
        operacion = false;
    }
    txtResultado.value += "5";  
    resultado = txtResultado.value; 
});
btn6.addEventListener("click", function(event){
    event.preventDefault();
    if(operacion == true){
        txtResultado.value = "";
        operacion = false;
    }
    txtResultado.value += "6";   
    resultado = txtResultado.value;
});
btn7.addEventListener("click", function(event){
    event.preventDefault();
    if(operacion == true){
        txtResultado.value = "";
        operacion = false;
    }
    txtResultado.value += "7";   
    resultado = txtResultado.value;
});
btn8.addEventListener("click", function(event){
    event.preventDefault();
    if(operacion == true){
        txtResultado.value = "";
        operacion = false;
    }
    txtResultado.value += "8";   
    resultado = txtResultado.value;
});
btn9.addEventListener("click", function(event){
    event.preventDefault();
    if(operacion == true){
        txtResultado.value = "";
        operacion = false;
    }
    txtResultado.value += "9";
    resultado = txtResultado.value;
});
btnPunto.addEventListener("click", function(event){
    event.preventDefault();
    if(operacion == true){
        txtResultado.value = "";
        operacion = false;
    }
    if(punto == false)
    {
        txtResultado.value += ".";  
        punto  = true;
    }
});


//Boton C
btnC.addEventListener("click", function(event){
    event.preventDefault();
    txtResultado.value = "";
    historial = 0;
    lblDatos.innerText = "";

    sigOperacion = "";
    resultado = "";
    operacion = false;
    punto = false;
})


//Botones de operaciones
btnSuma.addEventListener("click", function(event){
    event.preventDefault();

    if(operacion==false){
        if(sigOperacion == " + "){
            historial += parseFloat(resultado);
        }
        else if (sigOperacion == " - "){
            historial -= parseFloat(resultado);
        }
        else if (sigOperacion == " x "){
            historial *= parseFloat(resultado);
        }
        else if (sigOperacion == " / "){
            historial /= parseFloat(resultado);
        }
        else if (sigOperacion == ""){
            historial += parseFloat(resultado);
        }
        else if (sigOperacion == " = "){
            historial = parseFloat(resultado);
        }
    }

    
    resultado = historial;
    lblDatos.innerText = historial + " + ";

    operacion = true;
    sigOperacion = " + ";

});

btnResta.addEventListener("click", function(event){
    event.preventDefault();

    if(operacion==false){
        if(sigOperacion == " + "){
            historial += parseFloat(resultado);
        }
        else if (sigOperacion == " - "){
            historial -= parseFloat(resultado);
        }
        else if (sigOperacion == " x "){
            historial *= parseFloat(resultado);
        }
        else if (sigOperacion == " / "){
            historial /= parseFloat(resultado);
        }
        else if (sigOperacion == ""){
            historial += parseFloat(resultado);
        }
        else if (sigOperacion == " = "){
            historial = parseFloat(resultado);
        }
    }

    txtResultado.value = historial;
    lblDatos.innerText = historial + " - ";

    operacion = true;
    sigOperacion = " - ";

});

btnMultiplica.addEventListener("click", function(event){
    event.preventDefault();

    if(operacion==false){
        if(sigOperacion == " + "){
            historial += parseFloat(resultado);
        }
        else if (sigOperacion == " - "){
            historial -= parseFloat(resultado);
        }
        else if (sigOperacion == " x "){
            historial *= parseFloat(resultado);
        }
        else if (sigOperacion == " / "){
            historial /= parseFloat(resultado);
        }
        else if (sigOperacion == ""){
            historial += parseFloat(resultado);
        }
        else if (sigOperacion == " = "){
            historial = parseFloat(resultado);
        }
    }

    txtResultado.value = historial;
    lblDatos.innerText = historial + " x ";
    operacion = true;
    sigOperacion = " x ";

});

btnDivide.addEventListener("click", function(event){
    event.preventDefault();

    if(operacion==false){
        if(sigOperacion == " + "){
            historial += parseFloat(resultado);
        }
        else if (sigOperacion == " - "){
            historial -= parseFloat(resultado);
        }
        else if (sigOperacion == " x "){
            historial *= parseFloat(resultado);
        }
        else if (sigOperacion == " / "){
            historial /= parseFloat(resultado);
        }
        else if (sigOperacion == ""){
            historial += parseFloat(resultado);
        }
        else if (sigOperacion == " = "){
            historial = parseFloat(resultado);
        }
    }

    txtResultado.value = historial;
    lblDatos.innerText = historial + " / ";
    operacion = true;
    sigOperacion = " / ";

});

btnIgual.addEventListener("click", function(event){
    event.preventDefault();


    if(sigOperacion == " + "){
        historial += parseFloat(txtResultado.value);
        lblDatos.innerText += " " + txtResultado.value + " = " ;
        txtResultado.value = (parseFloat(lblDatos.innerText)+parseFloat(txtResultado.value));
    }
    else if (sigOperacion == " - "){
        historial -= parseFloat(txtResultado.value);
        lblDatos.innerText += " " + txtResultado.value + " = " ;
        txtResultado.value = (parseFloat(lblDatos.innerText)-parseFloat(txtResultado.value));
    }
    else if (sigOperacion == " x "){
        historial *= parseFloat(txtResultado.value);
        lblDatos.innerText += " " + txtResultado.value + " = " ;
        txtResultado.value = (parseFloat(lblDatos.innerText)*parseFloat(txtResultado.value));
    }
    else if (sigOperacion == " / "){
        historial /= parseFloat(txtResultado.value);
        lblDatos.innerText += " " + txtResultado.value + " = " ;
        txtResultado.value = (parseFloat(lblDatos.innerText)/parseFloat(txtResultado.value));
    }
    else if (sigOperacion == ""){
        historial = parseFloat(txtResultado.value);
        lblDatos.innerText += " " + txtResultado.value + " = " ;
    
    }
    else if (sigOperacion == " = "){
        historial = parseFloat(txtResultado.value);
    }
    

    

    operacion=true;
    sigOperacion = " = ";

})

