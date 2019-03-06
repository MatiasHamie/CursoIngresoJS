/*
Realizar el algoritmo que permita el ingreso
por prompt de las notas (validar entre 0 y 10),
la edad y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
	a) El promedio de las notas totales.
	b) La nota más baja y el sexo de esa persona.
	c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
	d) El sexo y la nota del más joven.
	e) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer.
*/
function mostrar()
{
	var notaIngresada;
	var sexoIngresado;
	var edadIngresada;
	var contadorAlumnos;
	var contadorPrimerMujer;
	var edadPrimerMujer;
	var notaPrimerMujer;
	var contadorVaronesMayores;
	var notaMayorIgual6;
	var notaMaxima;
	var notaMinima;
	var sexoNotaMinima;
	var sexoMasJoven;
	var notaMasJoven;
	var acumuladorNotas;
	var promedioNotas;
	var edadMasJoven;

	contadorAlumnos=0;
	contadorVaronesMayores=0;
	contadorPrimerMujer=0;
	acumuladorNotas=0;

	while(contadorAlumnos<5)
	{
		notaIngresada=prompt("Ingrese nota");
		notaIngresada=parseInt(notaIngresada);
		
		while(notaIngresada<0 || notaIngresada>10)
		{
			notaIngresada=prompt("ERROR, Ingrese nota nuevamente");
			notaIngresada=parseInt(notaIngresada);
		}
		
		edadIngresada=prompt("Ingrese edad");
		edadIngresada=parseInt(edadIngresada);
		
		while(edadIngresada<6 || edadIngresada>19)
		{
			edadIngresada=prompt("ERROR, Ingrese edad nuevamente");
			edadIngresada=parseInt(edadIngresada);
		}
		
		sexoIngresado=prompt("Ingrese sexo del alumno 'm' o 'f'");
		
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("ERROR, Ingrese sexo del alumno 'm' o 'f' nuevamente");
			sexoIngresado=parseInt(sexoIngresado);
		}

		if(contadorAlumnos==0)
		{
			notaMinima=notaIngresada;
			sexoNotaMinima=sexoIngresado;
			sexoMasJoven=sexoIngresado;
			notaMasJoven=notaIngresada;
			edadMasJoven=edadIngresada;
		}
		else
		{
			if(notaIngresada<notaMinima)
			{
				notaMinima=notaIngresada;
				sexoNotaMinima=sexoIngresado;
			}
		}


		if(edadIngresada<edadMasJoven)
		{
			edadMasJoven=edadIngresada;
			sexoMasJoven=sexoIngresado;
			notaMasJoven=notaIngresada;
		}	

		if(sexoIngresado=="m" && notaIngresada>5 && edadIngresada>17)
		{
			contadorVaronesMayores++;
		}

		if(sexoIngresado=="f" && contadorPrimerMujer==0)
		{
			edadPrimerMujer=edadIngresada;
			notaPrimerMujer=notaIngresada;
			contadorPrimerMujer++;
		}

		if(contadorPrimerMujer==0)
		{
			edadPrimerMujer="No se ingresaron mujeres";
			notaPrimerMujer="No se ingresaron mujeres";
		}
		

		acumuladorNotas=acumuladorNotas+notaIngresada;
		contadorAlumnos++;
	}

	promedioNotas=acumuladorNotas/contadorAlumnos;

	document.write(	"<br>a) El promedio de las notas totales."+promedioNotas+
					"<br>b) La nota más baja y el sexo de esa persona."+notaMinima+sexoNotaMinima+
					"<br>c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6."+contadorVaronesMayores+
					"<br>d) El sexo y la nota del más joven."+sexoMasJoven+notaMasJoven+
					"<br>e) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer."+edadPrimerMujer+" "+notaPrimerMujer);

}