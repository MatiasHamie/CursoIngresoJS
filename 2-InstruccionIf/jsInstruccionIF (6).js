function mostrar()
{
//tomo la edad  

	var edadIngresada;
	var mensaje;

	edadIngresada = edad.value;

	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		mensaje = "La persona es mayor de edad";
	}
	else
	{
		if(edadIngresada>12 && edadIngresada<18)
		{
			mensaje = "La persona es adolescente";
		}
		else
		{
			mensaje = "La persona es un niño";
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN