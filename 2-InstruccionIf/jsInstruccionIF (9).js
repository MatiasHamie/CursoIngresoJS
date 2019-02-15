function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio;

	/*
    Si uso solamente Math.random, se genera un floating point muy largo, lo que hago es utilizar Math.floor
	cuya expresion es Math.floor(x * numero maximo inclusive) + numero minimo inclusive)
	*/

	numeroAleatorio = Math.floor((Math.random() * 10) + 1);

	alert("Numero aleatorio: "+numeroAleatorio);

}//FIN DE LA FUNCIÓN