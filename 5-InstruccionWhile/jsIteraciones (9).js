function mostrar()
{
	var contador=0;
	var maximo;
	var minimo;
	var respuesta='si';
	//var bandera;

	//bandera="es la primera";
	contador = 0;
	acumulador = 0;

	while(respuesta=="si")
	{
		contador = contador+1;
		numero=prompt("Ingrese número "+contador+"#: ");
		numero=parseInt(numero);
		//no voy a saber el valor del acumulador, pero si del contador, esa es la diferencia.
		//acumulador = acumulador+numero;

		/*
		if(bandera=="es la primera")
		{
			maximo=numero;
			minimo=numero;
			bandera="";
		}
		*/
		if(contador==0)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if (numero>maximo)
			{
				maximo=numero;
			}

			if (numero<minimo)
			{
				minimo=numero;
			}
			
			if (numero>maximo)
			{
				maximo=numero;
			}

			if (numero<minimo)
			{
				minimo=numero;
			}
		}

		respuesta = prompt("=>si, para continuar");
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;
}


//FIN DE LA FUNCIÓN