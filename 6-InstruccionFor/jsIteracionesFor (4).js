function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var numeroRecorrido;

	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroRecorrido=numeroIngresado-1;numeroRecorrido>1;numeroRecorrido--)
	{
		for(numeroAnterior=numeroRecorrido;numeroAnterior>1;numeroAnterior--)
		{
			if(numeroRecorrido%numeroAnterior==0)
			{
				break;
			}
		}
	
		if(numeroAnterior==1)
		{
			console.log("Es PRIMO "+numeroRecorrido);
		}
	}
}//FIN DE LA FUNCIÓN