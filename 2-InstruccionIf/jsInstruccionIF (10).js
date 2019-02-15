function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaExamen;
	var mensaje;

	notaExamen = Math.floor((Math.random()*10)+1);

	if(notaExamen>8)
	{
		mensaje = "La nota del examen es: "+notaExamen+", EXCELENTE";
	}
	else
	{
		if (notaExamen>3)
		{
			mensaje = "La nota del examen es: "+notaExamen+", APROBÓ";
		}
		else
		{
			mensaje = "La nota del examen es: "+notaExamen+", Vamos, la próxima se puede";
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN