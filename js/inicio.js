document.getElementById("nueva-palabra").style.display="none";
document.getElementById("juego").style.display="none";

let listado =  [
    {
        palabra: "alura",
        pista: "Plataforma de aprendizaje de tecnología."
    },
    {
        palabra: "frodo",
        pista: "Personaje de la novela El señor de los anillos."
    },
    {
        palabra: "robocop",
        pista: "Cyborg policía."
    },
    {
        palabra: "pitanga",
        pista: "Ñangapiry."
    },
    {
        palabra: "frutilla",
        pista: "Fruta con alto contenido de vitamina C."
    },
    {
        palabra: "javascript",
        pista: "Lenguaje de programación que se ejecuta en el lado del cliente."
    },
    {
        palabra: "praga",
        pista: "Capital de República Checa."
    },
    {
        palabra: "kubrick",
        pista: "Apellido del director de la película El resplandor."
    },
    {
        palabra: "absenta",
        pista: "Bebida apodada el Diablo Verde."
    },
    {
        palabra: "ron",
        pista: "Bebida alcohólica, elaborada a partir de la fermentación y destilación de la melaza o el jugo de la caña de azúcar."
    },
    {
        palabra: "booleano",
        pista: "Tipo de dato que puede tener dos valores: verdadero o falso."
    },
    {
        palabra: "cicuta",
        pista: "Bebida con la que murió Sócrates."
    },
    {
        palabra: "ares",
        pista: "Dios olímpico de la guerra."
    },
    {
        palabra: "dionisio",
        pista: "Antiguo dios griego del vino, la diversión, y el teatro."
    },
    {
        palabra: "amazonas",
        pista: "Río más largo del mundo."
    },
   
] 
function ir(){
    document.getElementById("nueva-palabra").style.display="block";
    document.getElementById("container").style.display="none";
}
function crearPalabraSecreta(){
   // JSON.parse(localStorage.getItem("listado")); 
    var  agregar =  document.getElementById("nuevaPalabra").value;
    var pista = document.getElementById("pista").value;
    var palabraModif = agregar.normalize('NFD').replace(/([\u0300-\u036f]|[^a-zA-Z])/g, '');
    var palabra = palabraModif.toLowerCase();
    //ocalStorage.getItem("listado", JSON.stringify(listado)); 
    JSON.parse(localStorage.getItem("listado"));
    listado.push({palabra,pista});
    localStorage.setItem("listado", JSON.stringify(listado));
   
   // listado = JSON.parse(localStorage.getItem("listaNueva"));
  ///// JSON.parse(localStorage.getItem("listado"));
    console.log(listado); 
   
    document.getElementById("nueva-palabra").style.display="none";
    document.getElementById("container").style.display="block";
    
   
}

//CANCELAR GUARDAR PALABRA
function cancelar(){
    document.getElementById("nuevaPalabra").value="";
    document.getElementById("pista").value="";
}

//JUEGO

const inputs = document.querySelector(".inputs"),
    resetBtn = document.querySelector(".reset-btn"),
    pistaTag = document.querySelector(".pista span"),
    posibilRestantes = document.querySelector(".posibilidades span"),
    letraEquivocada = document.querySelector(".letrasErroneas span"),
    typingInput = document.querySelector(".typing-input")
   
// Variables de alcance limitado a un bloque    
let palabra, maxSuposiciones, letrasCorrectas = [], letrasIncorrectas = [];

//





//

// Selección aleatoria de la palabra a adivinar
        function palabraAleatoria() {
            document.getElementById("container").style.display="none";
            document.getElementById("juego").style.display="block";
           // localStorage.getItem("listado"), JSON.stringify(listado);
           
         
         ////////  listado = JSON.parse(localStorage.getItem("listado"));
           console.log(listado);
            //
            let pantalla = document.querySelector('canvas');
           let contexto = pantalla.getContext('2d');
            contexto.clearRect(0,0,pantalla.width, pantalla.height);
            intentos=0;
            contexto.fillStyle= "#e9edfa"; //propiedad o caracteristica
            contexto.fillRect(0,0,355,354); // es una funcion
           
            
        
        
            // Definimos para conseguir un item aleatorio
            
            let itemAleatorio = listado[Math.floor(Math.random() * listado.length)];
        
            palabra = itemAleatorio.palabra;
            maxSuposiciones = palabra.length >= 3 ? 7 : 6;
            letrasCorrectas = []; letrasIncorrectas = [];
            pistaTag.innerText = itemAleatorio.pista;
            posibilRestantes.innerText = maxSuposiciones;
            letraEquivocada.innerText = letrasIncorrectas;
            
            
            
            // Cuadrados para escribir el texto
            let html = "";
            for (let i = 0; i < palabra.length; i++) {
                html += `<input type="text" disabled>`;
                inputs.innerHTML = html;
                
            }
            
            
            
        
            
        }
    
    //palabraAleatoria();



        // Inicio del juego

        function initGame(e) {
            //convertimos a minúsculas el valor
            let key = e.target.value.toLowerCase();
            // Hacemos que se escriban solo letras y comparamos si son correctas o incorrectas
            if (key.match(/^[A-Za-z]+$/) && !letrasIncorrectas.includes(` ${key}`) && !letrasCorrectas.includes(key)) {
                // Letras correctas
                if (palabra.includes(key)) {
                    for (let i = 0; i < palabra.length; i++) {
                        if (palabra[i] == key) {
                            letrasCorrectas += key;
                            inputs.querySelectorAll("input")[i].value = key;
                        }
                    }
                } else {
                    // Letras incorrectas
                    maxSuposiciones--;
                    letrasIncorrectas.push(` ${key}`);
                    intentos=intentos+1;
                    
                    dibujarHorca();
                    
                }
                posibilRestantes.innerText = maxSuposiciones;
                letraEquivocada.innerText = letrasIncorrectas;
            }
            typingInput.value = "";
            
            // Resultados posibles

            setTimeout(() => {
                if (letrasCorrectas.length === palabra.length) {
                
                    swal.fire({
                        title: "GANASTE",
                        text: "Felicidades",
                        color: '#00BB2D',
                        icon: "success",
                        buttons: true,
                        
                    })
                    // Volvemos a seleccionar una palabra de la lista
                    return palabraAleatoria();
                }
                else if (maxSuposiciones < 1) {
                    
                    
                
                        swal.fire({
                            title: "PERDISTE",
                            text: "Fin del juego. Intentalo de vuelta",
                            color: '#CB3234',
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                        })
                    
                    
                    for (let i = 0; i < palabra.length; i++) {
                        // Mostramos la palabra oculta
                        inputs.querySelectorAll("input")[i].value = palabra[i];
                        
                        
                    
                    }
                }
            }, 100);
            
        } 

// Llamadas

typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
resetBtn.addEventListener("click", palabraAleatoria);

