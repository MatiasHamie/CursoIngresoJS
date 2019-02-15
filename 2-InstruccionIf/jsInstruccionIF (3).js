function mostrar()
{
//tomo la edad  
	var edadIngresada;

	edadIngresada = edad.value;

	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada>=18)
	{
		alert("La persona es mayor de edad");
	}
	if (edadIngresada<18)
	{
		alert("La persona es menor de edad");
	}
		
}//FIN DE LA FUNCIÓN