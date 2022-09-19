document.getElementById("nueva-palabra").style.display="none";

//TRANSFORMA INPUT A MAYUSCULAS
document.getElementById('nuevaPalabra').addEventListener('keyup', function(){
    this.value = this.value.toUpperCase()
    });