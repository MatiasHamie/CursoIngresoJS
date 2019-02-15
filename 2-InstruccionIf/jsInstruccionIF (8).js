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

	}
	else
	{
		if(edadIngresada>17 && estCivil=="Soltero")
		{
			mensaje = "Es soltero y no es menor.";
		}	
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN