function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var numeroRecorrido;
	var acumuladorNumero;

	acumuladorNumero=0;

	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroRecorrido=numeroIngresado-1;numeroRecorrido>1;numeroRecorrido--)
	{
		for(numeroAnterior=numeroRecorrido;numeroAnterior>1;numeroAnterior--)
		{
			acumuladorNumero=acumuladorNumero+numeroIngresado;

		}
	
		if(numeroAnterior==1)
		{
			console.log("Es un centro numérico "+numeroRecorrido);
		}
	}
}//FIN DE LA FUNCIÓN