function mostrar()
{

	var numero;

	numero = prompt("ingrese un número entre 0 y 10.");

	while(numero<0 || numero>10)
	{
		numero = prompt("Error, Ingrese un número entre 0 y 10");
	}

	alert(numero);



}//FIN DE LA FUNCIÓN