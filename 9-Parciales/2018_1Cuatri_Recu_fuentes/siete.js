/*	Bienvenidos.
	
	</br>Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo
	(validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
	</br>a)
	El promedio de las notas totales.
	</br>b)
	La nota más baja y el sexo de esa persona.
	</br>c)
	La cantidad de varones que su nota haya sido mayor o igual a 6.
	</h3>
*/

function mostrar()
{
	//Declaración de variables
	var contadorAlumno;
	var contadorNotas;
	var notaAlumno;
	var sexoAlumno;
	var acumuladorNotas;
	var promedioNotas;
	var notaBaja;
	var sexoNotaBaja;
	var contadorVarones;
	var NotaAltaVarones;

	//Inicializo acumuladores y contadores
	contadorAlumno=0;
	contadorNotas=0;
	contadorVarones=0;
	acumuladorNotas=0;

	while(contadorAlumno<5)
	{
		//Contador solamente para el mensaje prompt
		contadorNotas=contadorNotas+1;
		
		//Petición de nota
		notaAlumno=prompt("Por favor, ingrese la #"+contadorNotas+" nota");
		notaAlumno=parseInt(notaAlumno);

		//Validacion nota entre 0 y 10
		while(notaAlumno<0 || notaAlumno>10)
		{
			notaAlumno=prompt("Nota errónea, por favor, ingrese la #"+contadorNotas+" nota, entre 0 y 10");
		}

		//Nota validada, la ingreso al acumulador
		acumuladorNotas=acumuladorNotas+notaAlumno;
		
		//Solicito sexo
		sexoAlumno=prompt("Por favor, ingrese el sexo del alumno");

		//Validacion del sexo 'f' o 'm'
		while(sexoAlumno!="f" && sexoAlumno!="m")
		{
			sexoAlumno=prompt("Sexo incorrecto, por favor, ingrese el sexo del alumno");
		}

		//Verificacion nota mas baja y el sexo del alumno
		if(contadorAlumno==0)
		{
			notaBaja=notaAlumno;
			sexoNotaBaja=sexoAlumno;
		}
		else if(notaAlumno<notaBaja)
		{
			notaBaja=notaAlumno;
			sexoNotaBaja=sexoAlumno;
		}

		//Verificacion nota >5 del sexo 'm' y cantidad de varones
		if(notaAlumno>5 && sexoAlumno=="m")
		{
			contadorVarones=contadorVarones+1;
		}
		//Incremento contador alumno hasta llegar a 5
		contadorAlumno=contadorAlumno+1;
	}

	promedioNotas=acumuladorNotas/contadorAlumno;

	alert("Promedio de las notas totales: "+promedioNotas+
		"\nLa nota más baja: "+notaBaja+
		"\nEl sexo del alumno con nota mas baja: "+sexoNotaBaja+
		"\nCantidad de varones con nota >5: "+contadorVarones);
}
