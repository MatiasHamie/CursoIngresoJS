/*  Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico,
	el peso el cual debe ser entre 1 y 1000  y 
	la temperatura del hábitat (entre -30 y 30)  hasta que el
	usuario quiera e informar al terminar el ingreso por document.write:
	<br>a)
	La cantidad de temperaturas pares.
	<br>b)
	El nombre y temperatura del animal más pesado
	<br>c)
	La cantidad de animales que viven a menos de 0 grados.
	<br>d)
	El promedio del peso de todos los animales.				
	<br>f)
	El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
*/

function mostrar()
{

	var respuesta;
	var contadorAnimales;
	var animalnombre;
	var animalPeso;
	var temperatura;
	var contadorTempPar;
	var nombrePesado;
	var temperaturaPesado;
	var contadorTempBajoCero;
	var acumuladorPesos;
	var promedioPesos;
	var pesoMaximo;
	var pesoMaximoBajoCero;
	var pesoMinimoBajoCero;

	contadorAnimales=0;
	respuesta="si";
	contadorTempPar=0;
	contadorTempBajoCero=0;
	acumuladorPesos=0;

	while(respuesta=="si")
	{
		//Pido nombre
		animalnombre=prompt("Ingrese nombre del animal");
		
		//Pido peso
		animalPeso=prompt("Ingrese el peso del animal entre '1' y '1000'Kg");
		animalPeso=parseInt(animalPeso);

		//Valido peso
		while(animalPeso<1 || animalPeso>1000)
		{
			animalPeso=prompt("Peso ingresado inválido, ingrese el peso del animal entre '1' y '1000'Kg");
		}

		//Una vez validado, acumulo pesos
		acumuladorPesos=acumuladorPesos+animalPeso;

		//Pido temperatura
		temperatura=prompt("Ingrese valor de temperatura del habitat entre '-30' y '30' °C");
		temperatura=parseInt(temperatura);

		//Valido temperatura
		while(temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("Temperatura inválida, ingrese valor de temperatura del habitat entre '-30' y '30' °C");
		}

		//Verifico temperatura par
		if(temperatura%2==0)
		{
			contadorTempPar=contadorTempPar+1;
		}

		//Verifico nombre y temperatura del animal mas pesado
		if(contadorAnimales==0)
		{
			pesoMaximo=animalPeso;
			temperaturaPesado=temperatura;
		}
		else if(animalPeso>pesoMaximo)
		{
			pesoMaximo=animalPeso;
			temperaturaPesado=temperatura;
		}

		//Verifico peso de animales de habitat < 0°C
		if(temperatura<0)
		{
			if(contadorAnimales==0)
			{
				pesoMaximoBajoCero=animalPeso;
				pesoMinimoBajoCero=animalPeso;
			}
			else
			{
				contadorTempBajoCero=contadorTempBajoCero+1;
			}
		}
		else if(animalPeso>pesoMaximoBajoCero)
		{
			pesoMaximoBajoCero=animalPeso;			
		}
		else if(animalPeso<pesoMinimoBajoCero)
		{
			pesoMinimoBajoCero=animalPeso;
		}

		//Incremento en 1 el contador de animales tempBajoCero

		
		//Incremento en 1 el contador animales
		contadorAnimales=contadorAnimales+1

		//Verifico si se desea continuar
		respuesta=prompt("Ingrese 'si' para continuar");
	}
	
	promedioPesos=acumuladorPesos/contadorAnimales;

	document.write("a) Cantidad de temperaturas pares: "+contadorTempPar+
	"<br>b)	El nombre y temperatura del animal más pesado: "+pesoMaximo+
	"<br>c)	La cantidad de animales que viven a menos de 0 grados: "+contadorTempBajoCero+
	"<br>d)	El promedio del peso de todos los animales: "+promedioPesos+			
	"<br>f)	El peso máximo de todos los animales cuyas temperaturas son bajo cero: "+pesoMaximoBajoCero+
	"<br>f)	El peso minimo de todos los animales cuyas temperaturas son bajo cero: "+pesoMinimoBajoCero);

}