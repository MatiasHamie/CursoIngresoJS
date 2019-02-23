function mostrar()
{
	var respuesta;
	var numero;
	var contadorNumero;
	var numeroMaximo;
	var numeroMinimo;

	respuesta="si";
	contadorNumero=0;

	while(respuesta=="si")
	{
		numero=prompt("Por favor ingrese un numero");
		numero=parseInt(numero);
		console.log(numero);
		
		if(contadorNumero==0)
		{
			numeroMaximo=numero;
			numeroMinimo=numero;
		//Saber en este instante cuanto valen el min y el max
			console.log("Nro maximo "+numeroMaximo);
			console.log("Nro minimo "+numeroMinimo);
		
		}
		else
		{
			if (numero>numeroMaximo)
				{
					numeroMaximo=numero;
					//Saber en este instante cuanto vale el max
					console.log("Nro maximo "+numeroMaximo);
				}
			else if(numero<numeroMinimo)	
				{
					numeroMinimo=numero;
					//Saber en este instante cuanto vale el min
					console.log("Nro minimo "+numeroMinimo);
				}
		}
		//Saber en este instante cuanto valen el min y el max
		console.log("Nro minimo "+numeroMinimo);
		console.log("Nro maximo "+numeroMaximo);
		contadorNumero=contadorNumero+1;
		respuesta=prompt("Ingrese 'si' para continuar");
	}

	document.getElementById('maximo').value=numeroMaximo;
	document.getElementById('minimo').value=numeroMinimo;
}
//FIN DE LA FUNCIÓN