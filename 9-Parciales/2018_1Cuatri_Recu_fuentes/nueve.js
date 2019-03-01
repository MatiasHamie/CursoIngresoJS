/*
Enunciado práctica en clase:
Ingresar marca celular
Ingresar tamaño (numero)
Ingresar precio
1) Mayor precio y "marca" del precio mayor
2) Promedio precios
3) Cantidad de celulares
4) Celular: marca y tamaño del mas caro
5) IDEM mas barato
6) El primer celular que sale $1000
7) Precio del ultimo celular "LG"

Probar con:
----------------
Marca   T Precio
----------------
lg      3 3000
samsung 5 5000
iphone  4 8000
samsung 4 1000
lg      5 1000

*/
function mostrar()
{

	var ingresaPrecio;
	var ingresaMarca;
	var ingresaTamaño;
	var contadorCelulares;
	var acumuladorPrecios;
	var precioMayor;
	var precioMenor;
	var precioMenorMarca;
	var precioMayorMarca;
	var tamañoMayor;
	var tamañoMenor;
	var precioUltimoLG;
	var respuesta;
	var precioPromedio;
	var contadorCeluMayorDosMil;
	var marcaMil;

	acumuladorPrecios=0;
	precioUltimoLG=0;
	contadorCeluMayorDosMil=0;
	contadorCelulares=0;
	precioMayor=0;
	respuesta="si";

	while(respuesta=="si")
	{
		ingresaMarca=prompt("Ingrese la marca del celular con letra minúscula");

		ingresaTamaño=prompt("Ingrese el tamaño del celular");
		ingresaTamaño=parseInt(ingresaTamaño);

		//Valido tamaño
		while(ingresaTamaño<0)
		{
			ingresaTamaño=prompt("tamaño menor a 0, ingrese un tamaño valido");
		}

		ingresaPrecio=prompt("Ingrese precio del celular");
		ingresaPrecio=parseInt(ingresaPrecio);

		//Valido precio
		while(ingresaPrecio<0 || ingresaPrecio>50000)
		{
			ingresaPrecio=prompt("PRECIO ERRONEO, ingrese precio mayor a $0 o menor a $50.000");
		}

		//Acumulo el precio del primer LG
		if(ingresaMarca=="lg")
		{
			precioUltimoLG=ingresaPrecio;
		}
		
		if(contadorCelulares==0)
		{
			//Si es >1000 lo guardo como LG
			if(ingresaPrecio>1000)
			{
				marcaMil=ingresaMarca;
			}

			precioMayorMarca=ingresaMarca;
			precioMenorMarca=ingresaMarca;
			precioMenor=ingresaPrecio;
			precioMayor=ingresaPrecio;
			tamañoMenor=ingresaTamaño;
			tamañoMayor=ingresaTamaño;
		}
		else
		{
			if(ingresaPrecio>precioMayor)
			{
				precioMayor=ingresaPrecio;
				precioMayorMarca=ingresaMarca;
				tamañoMayor=ingresaTamaño;
			}	
		}

		if(ingresaPrecio<precioMenor)
		{
			precioMenor=ingresaPrecio;
			precioMenorMarca=ingresaMarca;
			tamañoMenor=ingresaTamaño;
		}

		if(ingresaPrecio>2000)
		{
			contadorCeluMayorDosMil++;
		}

		contadorCelulares++;
		acumuladorPrecios=acumuladorPrecios+ingresaPrecio;
		console.log("llega esto");

		respuesta=prompt("Ingrese 'si' para continuar");
	}

	precioPromedio=acumuladorPrecios/contadorCelulares;

	alert(  "\nMarca del celular mas caro: "+precioMayorMarca+
			"\nMayor precio: "+precioMayor+
			"\nTamaño del celular mas caro: "+tamañoMayor+
			"\nMarca del celular mas Barato: "+precioMenorMarca+
			"\nMenor precio: "+precioMenor+
			"\nTamaño del celular mas barato: "+tamañoMenor+
			"\nPromedio total precios: "+precioPromedio+
			"\nCantidad Celus que valen mas que $2000: "+contadorCeluMayorDosMil+
			"\nPrimer celular que sale $1000: "+marcaMil+
			"\nPrecio último LG "+precioUltimoLG);

}
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


/*
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
*/

