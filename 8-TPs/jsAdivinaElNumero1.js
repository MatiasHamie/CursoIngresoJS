/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor((Math.random() * 100) + 10);
	contadorIntentos = 0;
	console.log(numeroSecreto);
	//alert(numeroSecreto);
}

function verificar()
{
	var numeroIngresado;
	var mensaje;

	contadorIntentos = contadorIntentos + 1;

	numeroIngresado = numero.value;
	intentos.value = contadorIntentos;


	//alert(numeroIngresado);

	if(numeroIngresado==numeroSecreto)
	{		
		switch(contadorIntentos)
		{
			case 1:
				mensaje = "De primera campeon!";
				break;
			case 2:
				mensaje = "Casi perfecto!";
				break;
			case 3:
				mensaje = "La tercera es la vencida!";
				break;
			case 4:
				mensaje = "Bien! intenta mejorar!";
				break;
			case 5:
				mensaje = "Casi que tenes que dedicarte a otra cosa!";
				break;
			case 6:
				mensaje = "Hagamos de cuenta que no paso nada y volver a jugar!";
				break;
			default:
				mensaje = "No te estreses! vos podes!"
		}
	}
	else
	{
		if(numeroIngresado<numeroSecreto)
		{
			mensaje = "Falta";
		}
		else
		{
			mensaje = "Te pasaste";
		}
	}

	alert(mensaje);
}