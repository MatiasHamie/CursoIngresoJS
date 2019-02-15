function mostrar()
{
//tomo la edad  
	var edadIngresada;
	var mensaje;

	edadIngresada = edad.value;

	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada<13 || edadIngresada>17)
	{
		mensaje = "La persona no es adolescente";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN