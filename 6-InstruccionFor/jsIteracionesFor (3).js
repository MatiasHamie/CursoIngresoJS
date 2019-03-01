function mostrar()
{

//var repetciones = prompt("ingrese el número de repeticiones");
	var numeroIngresado;
	var numeroAnterior;
	var acumuladorDivisores;
	
	acumuladorDivisores=0;
	numeroIngresado=prompt("Ingrese un número");

	numeroIngresado=parseInt(numeroIngresado);

	for(numeroAnterior=numeroIngresado-1;numeroAnterior>0;numeroAnterior--)
	{
		if(numeroIngresado%numeroAnterior==0)
		{
			acumuladorDivisores=acumuladorDivisores+numeroIngresado;
			break;
		}
		console.log(numeroAnterior);
	}

	if(numeroAnterior==0)
	{
		console.log("No es perfecto");
	}
	else
	{
		if(numeroIngresado==acumuladorDivisores)
		{
		console.log("Es perfecto");	
		}
	}




}//FIN DE LA FUNCIÓN