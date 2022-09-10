let menuVisible=false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible= false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}



function seleccionar(){
    //ocultar el menu una vez que seleccione una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;

}

//funcion que aplica las animacion de las habilidades
function efectoHabilidades(){
    var skills= document.getElementById("skills");
    var distancia_skills=window.innerHeight-skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        let habiliades = document.getElementsByClassName("progreso");
        habiliades[0].classList.add("javascript");
        habiliades[1].classList.add("htmlcss");
        habiliades[2].classList.add("photoshop");
        habiliades[3].classList.add("wordpress");
        habiliades[4].classList.add("drupal");
        habiliades[5].classList.add("comunicacion");
        habiliades[6].classList.add("trabajo");
        habiliades[7].classList.add("creatividad");
        habiliades[8].classList.add("dedicacion");
        habiliades[9].classList.add("proyect");

    }
}



//decto el scrolling para aplicar la animacion de la barra de habilidades 
window.onscroll= function(){
    efectoHabilidades();
}