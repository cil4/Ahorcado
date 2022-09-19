const pantalla = document.querySelector('canvas');
let pincel = pantalla.getContext('2d');
pincel.fillStyle= "#e9edfa"; //propiedad o caracteristica
pincel.fillRect(0,0,355,354); // es una funcion





//BASE DE LA HORCA
function dibujaHorca(){

pincel.strokeStyle = 'darkblue';
pincel.beginPath();
pincel.moveTo(100, 50);
pincel.lineTo(100, 300);
pincel.closePath();

pincel.stroke();



pincel.moveTo(100,50);
pincel.lineTo(200,50);
pincel.closePath();
pincel.moveTo(200,50);
pincel.lineTo(200,68)
pincel.closePath();
pincel.stroke();


pincel.moveTo(60,300);
pincel.lineTo(260,300);
pincel.closePath();
pincel.stroke();
}

//CABEZA
function dibujaCabeza(){
pincel.strokeStyle = 'darkblue';
pincel.beginPath();

pincel.arc(200,100,30, 0, Math.PI * 2, true);

pincel.stroke();
}
//TRONCO
function dibujarTronco(){
pincel.strokeStyle = 'darkblue';
pincel.beginPath();
pincel.moveTo(200,130);
pincel.lineTo(200,220);
pincel.closePath();
pincel.stroke();
}

//PIERNA IZQUIERDA
function dibujarPiernaIzq(){
pincel.strokeStyle = 'darkblue';
pincel.beginPath();
pincel.moveTo(170,270);
pincel.lineTo(200,220)
pincel.closePath();
pincel.stroke();
}
//PIERNA DERECHA
function dibujarPiernaDcha(){
pincel.strokeStyle = 'darkblue';
pincel.beginPath();
pincel.moveTo(230,270);
pincel.lineTo(200,220);
pincel.closePath();
pincel.stroke();
}

//BRAZO DERECHO
function dibujarBrazoDcho(){
pincel.strokeStyle = 'darkblue';
pincel.beginPath();
pincel.moveTo(240,180);
pincel.lineTo(200,130);
pincel.closePath();
pincel.stroke();
}
//BRAZO IZQUIERDO

function dibujarBrazoIzq(){
    
pincel.strokeStyle = 'darkblue';
pincel.beginPath();
pincel.moveTo(160,180);
pincel.lineTo(200,130);
pincel.closePath();
pincel.stroke();
}
let intentos=0;
//let contexto = document.getElementById("ahorcado")

function dibujarHorca(){
   
    

   
   
        if(intentos==1){
            dibujaHorca();
        }if(intentos==2){
                dibujaCabeza();
            }
            if(intentos==3){
                dibujarTronco()
            }
            if (intentos==4){
                dibujarPiernaIzq()
            }
            if(intentos==5){
                dibujarPiernaDcha()
            }
            if(intentos==6){
                dibujarBrazoIzq()
            }
            if(intentos==7){
                dibujarBrazoDcho()
            }
        

}


