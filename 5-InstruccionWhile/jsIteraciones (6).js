function mostrar()
{
	var acumulador;
	var contadorNumero;
	var numero;
	var elPromedio;

	contadorNumero=0;
	acumulador=0;

	while(contadorNumero<5)
	{
		contadorNumero=contadorNumero+1;
		numero=prompt("Por favor, ingrese el "+contadorNumero+"# número");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
	}

	elPromedio=acumulador/contadorNumero;

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=elPromedio;
	
}//FIN DE LA FUNCIÓN