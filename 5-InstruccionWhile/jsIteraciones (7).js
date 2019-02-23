function mostrar()
{

	var continuar;
	var acumuladorNota;
	var contadorNota;
	var valorNota;
	var promedioNotas;
	
	contadorNota=0;
	acumuladorNota=0;
	continuar="si"

	while(continuar=="si")
	{
		contadorNota=contadorNota+1;
		valorNota=prompt("Por favor ingrese la nota número "+contadorNota+"#");
		valorNota=parseInt(valorNota);
		acumuladorNota=acumuladorNota+valorNota;

		continuar=prompt("Ingrese la palabra 'si' para continuar");
	}

	promedioNotas=acumuladorNota/contadorNota;

	document.getElementById('suma').value=acumuladorNota;
	document.getElementById('promedio').value=promedioNotas;


}//FIN DE LA FUNCIÓN