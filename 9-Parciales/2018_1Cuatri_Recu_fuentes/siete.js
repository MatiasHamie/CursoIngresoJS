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
	var contadorNota;
	var contadorAlumnos;
	var valorNota;
	var sexo;
	var acumuladorNotas;
	var promedioNotas;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var contadorVarones;

	contadorNota=0;
	contadorAlumnos=0;
	acumuladorNotas=0;
	contadorVarones=0;

	while(contadorAlumnos<5)
		{	
			contadorNota=contadorNota+1;
			valorNota=prompt("Ingrese la "+contadorNota+"# nota, con un valor entre 0 y 10");
			valorNota=parseInt(valorNota);
			
			//Verificacion nota válida:	
			while(valorNota<0 || valorNota>10)
			{
				valorNota=prompt("Error, ingrese un valor entre 0 y 10");
				console.log(valorNota+"<- valorNota");
			}
			
			acumuladorNotas=acumuladorNotas+valorNota;
			console.log(acumuladorNotas+"<- acumuladorNotas");

			sexo=prompt("Ingrese el sexo del alumno 'f' o 'm'");

			//Verificacion nota válida:	
			while(sexo!="f" && sexo!="m")
			{
				valorNota=prompt("Error, ingrese un sexo con las letras 'f' o 'm'");
				console.log(sexo+"<- Sexo");
			}
			
			//Verificacion si la nota es la primera en ser ingresada
			if(contadorAlumnos==0)
			{
				notaMasBaja=valorNota;
				sexoNotaMasBaja=sexo;
			}
			//Verificacion si la nota es menor a la ingresada anteriormente
			else
			{
			 	if(valorNota<notaMasBaja)
				{
				notaMasBaja=valorNota;
				sexoNotaMasBaja=sexo;
				console.log(notaMasBaja+"<-notaMasBaja");
				console.log(sexoNotaMasBaja+"<-sexoNotaMasBaja");
				}			
			}

			if(sexo=="m" && valorNota>5)
			{
				contadorVarones=contadorVarones+1;
			}

			contadorAlumnos=contadorAlumnos+1;
		}

		promedioNotas=acumuladorNotas/contadorAlumnos;

		alert("El promedio de las notas totales: "+promedioNotas+
				"\nLa nota más baja: "+notaMasBaja+
				"\nEl sexo de esa persona: "+sexoNotaMasBaja+
				"\nLa cantidad de varones nota mayor o igual a '6': "+contadorVarones
			 );
	}

















