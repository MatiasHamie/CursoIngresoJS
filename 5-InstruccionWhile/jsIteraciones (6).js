function mostrar()
{

	var contador;
	var acumulador;
	var numero;

	contador = 0;
	acumulador = 0;

	while(contador<5)
	{
		contador = contador+1;
		numero=prompt("Ingrese número "+contador+"#: ");
		numero=parseInt(numero);
		//no voy a saber el valor del acumulador, pero si del contador, esa es la diferencia.
		acumulador = acumulador+numero;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN