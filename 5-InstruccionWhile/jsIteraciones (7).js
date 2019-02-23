function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";

	contador = 0;
	acumulador = 0;

	while(respuesta=="si")
	{
		contador = contador+1;
		numero=prompt("Ingrese número "+contador+"#: ");
		numero=parseInt(numero);
		//no voy a saber el valor del acumulador, pero si del contador, esa es la diferencia.
		acumulador = acumulador+numero;

		respuesta = prompt("=>si, para continuar");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN