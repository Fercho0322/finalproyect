var cont =1;
var cont2 =0;
var bandera = 0;

var x = prompt("Ingresa un numero y te mostraremos todos los numeros primos hasta este numero")

while(cont <= x){
    while(cont2 < cont){
        if(cont % cont2 == 0 && cont2 != 1 && cont2 != cont){
        	bandera=1;
        }
        cont2++;
    }
    if(bandera  == 0){
    	document.write(cont2+ "<br/>");
    }
    else{
    	bandera =0;
    }

    cont ++;
    cont2 =0;

}