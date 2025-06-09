let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}





const descarga = document.querySelector(".descarga");

descarga.addEventListener("click", ()=>{
    var enlace = document.createElement("a");
    enlace.href= "descargas/Curriculum.pdf";
    enlace.download = "Curriculum.pdf";
    enlace.target="_blank";
    enlace.click();
})