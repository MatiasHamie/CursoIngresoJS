function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaExamen;
	var mensaje;

	notaExamen = Math.floor((Math.random()*10)+1);

	if(notaExamen>9)
	{
		mensaje = "EXCELENTE";
	}
	else
	{
		if (notaExamen>4)
		{
			mensaje = "APROBÓ";
		}
		else
		{
			mensaje = "Vamos, la próxima se puede";
		}
	}

	alert("La nota del examen es: "+notaExamen+", "+mensaje);

}//FIN DE LA FUNCIÓN