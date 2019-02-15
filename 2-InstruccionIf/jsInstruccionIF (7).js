function mostrar()
{
//tomo la edad  
	var edadIngresada;
	var estCivil;
	var mensaje;

	edadIngresada = edad.value;
	estCivil = estadoCivil.value;

	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada<18 && estCivil!="Soltero")
	{
		mensaje = "Es muy pequeño para NO ser soltero";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN