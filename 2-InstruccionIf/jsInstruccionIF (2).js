function mostrar()
{
//tomo la edad  
	var edadIngresada;
	var mensaje;

	edadIngresada = edad.value;

	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada>17)
	{
		mensaje = "La persona es mayor de edad";
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN