function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	contador = 0;
	acumulador = 0;

	while(1)
	{
		contador = contador+1;
		numero=prompt("Ingrese número "+contador+"#: ");
		numero=parseInt(numero);
		//no voy a saber el valor del acumulador, pero si del contador, esa es la diferencia.
		//acumulador = acumulador+numero;

		if(numero>0)
		{
			positivo=positivo+numero;
		}
		else
		{
			negativo=negativo*numero;
		}

		respuesta = prompt("=>si, para continuar");
		
		if (respuesta!="si")
		{
			break;
		}
	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN