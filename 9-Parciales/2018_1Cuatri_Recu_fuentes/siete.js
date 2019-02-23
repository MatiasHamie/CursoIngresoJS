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
	var nota;
	var sexo;
	var minimo;
	var notaAltaVarones;
	var contadorAlumnos;
	var contadorNotas;
	var acumuladorNotas;
	var promedio;
	var contadorVarones;
	var sexoNotaBaja;

	contadorNotas=0;
	contadorAlumnos=0;
	contadorVarones=0;
	acumuladorNotas=0;

	while(contadorAlumnos<5)
	{
		contadorAlumnos=contadorAlumnos+1;
		
		nota=prompt("Ingrese nota");
		nota=parseInt(nota);
		
		sexo=prompt("Ingrese sexo del/la alumno/a -> f o -> m");

		acumuladorNotas=acumuladorNotas+nota;

		if(nota>5 && sexo=="m");
		{
			contadorVarones=contadorVarones+1;
		}

		if(contadorNotas==0)
		{
			minimo=nota;
			contadorNotas=contadorNotas+1;
		}
		else
		{
			if(nota<minimo)
			{
				if(sexo="f")
				{
					minimo=nota;
					sexoNotaBaja="f";
				}
				else
				{
					minimo=nota;
					sexoNotaBaja="m";
				}
			}
		}
	}
	
	promedio = acumuladorNotas/contadorAlumnos;
	alert("El promedio de las notas totales: "+promedio+", La nota mas baja del sexo "+sexoNotaBaja+" fue de: "+minimo+", la cantidad de varones que su nota haya sido mayor o igual a 6. es de: "+contadorVarones);

}
