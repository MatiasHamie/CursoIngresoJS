function mostrar()
{
//tomo la edad  
	var edadIngresada;
	var mensaje;

	edadIngresada = edad.value;

	edadIngresada = parseInt(edadIngresada);

	/*
	Solucion con 2 if
	if (edadIngresada>17)
	{
		mensaje = "La persona es mayor de edad";
	}
	
	if (edadIngresada<18)
	{
		mensaje = "La persona es menor de edad";
	}
	*/

	/*
	Solucion con if negado
	esta solucion utiliza 3 veces el
	microprocesador, por lo cual no se 
	la recomienda

	if (edadIngresada>17)
	{
		mensaje = "La persona es mayor de edad";
	}
	
	if (!(edadIngresada<18))
	{
		mensaje = "La persona es menor de edad";
	}
	*/

	if (edadIngresada>17)
	{
		mensaje = "La persona es mayor de edad";
	}
	else
	{
		mensaje = "La persona es menor de edad";
	}


	alert(mensaje);


}//FIN DE LA FUNCIÓN