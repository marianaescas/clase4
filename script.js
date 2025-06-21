alert("hola!!!")

//var nombre = prompt("ingresa tu nombre")
//var edad = prompt("ingre tu edad")
//var lugar_nacimiento = prompt("ingresa tu lugar de nacimiento")

//alert("hola"+ nombre+ " tienes "+ edad + " y naciste en" + lugar_nacimiento)
              
//personajes = [1,2,3,4]

//document.write("hola "+ nombre+ "tienes "+ edad + "y naciste en " + lugar_nacimiento)

 
// var a = prompt("Valor a")
// var b = prompt("valor b")

// if (a > b){
//    alert("el número: "+ a+" es mayor que "+b)
// } else {
//    alert("el número: "+ a+" es menor que "+ b) 
// }

var comidas = ["hamburguesa", "pan", "pastas", "pizza"]

// for(i =0; i< comidas.length; i++){
//          alert(comidas[i])
//}
//i=0
//while(i < comidas.length){
  //  alert(comidas[i])
    //i++
//}

opcion = prompt("seleccione su opcion 1:perro 2: mute 3:helado")

switch(opcion){
    case 1:
        alert("aqui tiene su perro")
             break;

             case 2:
         alert("aqui tiene su mute")
             break;
             
             case 3:
                alert("aqui tiene su helado")
                break;
                default:
                    alert("esa opcion no existe")
                    break;
}