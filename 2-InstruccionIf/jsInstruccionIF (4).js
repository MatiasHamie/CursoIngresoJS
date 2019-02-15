function mostrar()
{
//tomo la edad  
	var edadIngresada;
	var mensaje;

	edadIngresada = edad.value;

	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada>12 && edadIngresada<18)
	{
		mensaje = "La persona es adolescente"
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN