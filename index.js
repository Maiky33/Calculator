//variables
let a = 0;
let b = 0;
let Operation = [];


//identificamos los elementos u los ubicamos
const Display = document.getElementById('display');
const Ac = document.getElementById('ac');
const Same = document.getElementById('buttonSame')

const Plus = document.getElementById('buttonPlus');
const Less = document.getElementById('buttonLess');
const Multiply = document.getElementById('multiply');
const Split = document.getElementById('split');
const Module = document.getElementById('module');

const num0 = document.getElementById('num0');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const buttonMaiky = document.getElementById('buttonMaiky');


// funciones

// la funcion limpiar, limpia el display dejandolo en un string vacio
const limpiar = () => {
    Display.textContent = "";
};


//la funcion resetar limpia el display y prestablese los valores de (a)en 0 de (b)en 0 y Operation en un string vacio para asi poder volver a asignarselo con los botones de operacion
const resetear = () => {   
    Display.textContent = '';
    a = 0;
    b = 0;
    Operation = '';
}


//La funcion resolver, Lo que hacemos es un switch y le pasamos (Operation) como parametro, y le decimos en caso de que operation sea igual a (+) este suma la variable (a) con la varible (b) y asi en todos los casos con su respectivo simbolo(+,-,*,/,%)

const resolver = () => {  
    switch (Operation) {
        case '+':
            res = parseInt(a) + parseInt(b);//usamos metodo parseInt para que tome el string como un numero entero
            break;
    
        case '-':
            res = parseInt(a) - parseInt(b);//usamos metodo parseInt para que tome el string como un numero entero
            break;
    
        case '*':
            res = parseInt(a) * parseInt(b);//usamos metodo parseInt para que tome el string como un numero entero
            break;
    
        case '/':
            res = parseInt(a) / parseInt(b);//usamos metodo parseInt para que tome el string como un numero entero
            break;
    
        case '%':
            res = parseInt(a) % parseInt(b);//usamos metodo parseInt para que tome el string como un numero entero
            break;
        
    }
    resetear(); //luego llamamos la funcion resetear para asi restableser los valores
    Display.textContent = res; // y por ultimo imprimimosen el display  el resultado que esta en los res de cada caso del switch
}



//eventos

//Imprimimos los numeros en el display cada vez que damos click 

num0.addEventListener('click', () => {
    Display.textContent = Display.textContent + '0'; //display.textContent va ser igual al (display.textContent), sumandole el numero del boton en este caso '0'
})
num1.addEventListener('click', () => {
    Display.textContent = Display.textContent + '1'; //display.textContent va ser igual al (display.textContent) sumandole el numero en este caso '1'
})
num2.addEventListener('click', () => {
    Display.textContent = Display.textContent + '2';
})
num3.addEventListener('click', () => {
    Display.textContent = Display.textContent + '3';
})
num4.addEventListener('click', () => {
    Display.textContent = Display.textContent + '4';
})
num5.addEventListener('click', () => {
    Display.textContent = Display.textContent + '5';
})
num6.addEventListener('click', () => {
    Display.textContent = Display.textContent + '6';
})
num7.addEventListener('click', () => {
    Display.textContent = Display.textContent + '7';
})
num8.addEventListener('click', () => {
        Display.textContent = Display.textContent + '8';
})
num9.addEventListener('click', () => {
    Display.textContent = Display.textContent + '9';
})

//easter egg
buttonMaiky.addEventListener('click', () => {
    Display.textContent = Display.textContent + 'Maiky'
    setTimeout(() => {
        resetear()
    },1000)
})

//reset u Ac
//le damos un evento click al boton Ac y le decimos que ejecute la funcion resetear la cual prestablese los valoresde las variables a , b y operation
Ac.addEventListener('click', () => {
    resetear();
})


//botones operacion
//Lo que hicimos fue cada vez que le dabamos click a un boton de operacion establecer los valores ( (a) seria igual ael textContent del display), luego establecimos la variable (Operation) con el simbolo de la Operacion del boton, y por ultimo limpiamos display con la funcion limpiar dejandolo con un string vacio

Plus.addEventListener('click', () => {
    a = Display.textContent; // declaramos que (a)sea igual a lo que haya en el display
    Operation = '+'; //declaramos la operacion en este caso suma
    limpiar(); //limpiamos el display 
})
Less.addEventListener('click', () => {
    a = Display.textContent;
    Operation = '-';
    limpiar();
})
Multiply.addEventListener('click', () => {
    a = Display.textContent;
    Operation = '*';
    limpiar();
})
Split.addEventListener('click', () => {
    a = Display.textContent;
    Operation = '/';
    limpiar();
})
Module.addEventListener('click', () => {
    a = Display.textContent;
    Operation = '%';
    limpiar();
})


//resultado

//damos el evento a el boton igual, le decimos que al darle click ((b) va ser igual al contenido del display, y ejecutamos la funcion resolver la cual dependiendo de el (operator) nos da el resultado)

Same.addEventListener("click", () => {
  b = Display.textContent; // declaramos que (b) sea igual a lo que haya en el display 
  resolver();//llamamos la funcion resolver la cual nos imprime el resultado en Display dependiendo del Operation, y nos resetea los valores de a,b,Operation
});










