function reloj () {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

   document.getElementById("horas").innerHTML = hr;
   document.getElementById("minutos").innerHTML = min;
   document.getElementById("segundos").innerHTML = sec;
}
setInterval(reloj, 10);

function modoOscuro (){
    document.body.classList.toggle("dark-mode")
}
document.getElementById("btn").addEventListener("click", modoOscuro)