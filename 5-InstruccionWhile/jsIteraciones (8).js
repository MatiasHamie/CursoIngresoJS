function mostrar()
{
	var respuesta;
	var contadorNumero;
	var numero;
	var acumuladorPositivo;
	var productoNegativo;
	var numeroNegativo;

	respuesta="si";
	contadorNumero=0;
	acumuladorPositivo=0;
	productoNegativo=1;

	while(respuesta=="si")
	{
		contadorNumero=contadorNumero+1;
		numero=prompt("Por favor, ingresar el #"+contadorNumero+" número");
		numero=parseInt(numero);

		if (numero>0)
		{
			acumuladorPositivo=acumuladorPositivo+numero;
		}
		else
		{
			productoNegativo=productoNegativo*numero;
		}

		respuesta=prompt("Ingrese 'si' para continuar");
	}

	document.getElementById('suma').value=acumuladorPositivo;
	document.getElementById('producto').value=productoNegativo;	




}//FIN DE LA FUNCIÓN