/* Eventos, efectos y registros index */



$(document).on('ready',main);

function main(){

//Funcion que se encarga de poner en accion nuestor pligin cycle

$('#contslider').cycle({ 
    fx:     'scrollLeft', 
    easing: 'easeOutBounce', 
    delay:  -2000 
});

}//Fin