/*
</br>Realizar el algoritmo que permita iterar el ingreso de dos datos,
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
 </br>a)
La cantidad de números pares.
 </br>b)
La cantidad de números impares.
 </br>c)
La cantidad de ceros.
 </br>d)
El promedio de todos los números positivos ingresados.
 </br>e)
La suma de todos los números negativos.
 </br>f)
El número y la letra del máximo y el mínimo.
</h3>
*/

function mostrar()
{
	var respuesta;
	var contadorNumero;
	var datoLetra;
	var datoNumero;
	var contadorPar;
	var contadorImpar;
	var contadorCeros;
	var promedioPositivos;
	var contadorPositivos;
	var acumuladorPositivos;
	var acumuladorNegativos;
	var letraMaximo;
	var letraMinimo;
	var numeroMaximo;
	var numeroMinimo;

	contadorPositivos=0;
	contadorPar=0;
	contadorImpar=0;
	contadorNumero=0;
	respuesta="si";
	contadorCeros=0;
	acumuladorPositivos=0;
	acumuladorNegativos=0;

	while(respuesta=="si")
	{
		//Pido una letra
		datoLetra=prompt("Por favor ingrese una letra");

		while(datoLetra=="")
		{
			datoLetra=prompt("Error, por favor ingrese una letra");
		}

		//Pido un número
		datoNumero=prompt("Por favor ingrese un número entre '-100' y '100'");
		datoNumero=parseInt(datoNumero);

		//Valido el rango del numero
		while(datoNumero<-100 || datoNumero>100)
		{
			datoNumero=prompt("Número no valido, por favor ingrese un número entre '-100' y '100'");
		}

		//Verifico si es positivo, 0 o negativo y lo guardo en su respectivo acumulador
		if(datoNumero==0)
		{
			contadorCeros=contadorCeros+1;
		}
		else if(datoNumero<0)
		{
			acumuladorNegativos=acumuladorNegativos+datoNumero;
		}
		else
		{
			acumuladorPositivos=acumuladorPositivos+datoNumero;
			contadorPositivos=contadorPositivos+1;

		}
		
		//Verifico si es par o impar e incremento sus respectivos contadores
		if(datoNumero%2==0)
		{
			contadorPar=contadorPar+1;
		}
		else
		{
			contadorImpar=contadorImpar+1;
		}

		//Verifico si el numero es maximo o minimo con su respectivo sexo
		if(contadorNumero==0)
		{
			numeroMinimo=datoNumero;
			numeroMaximo=datoNumero;
			letraMinimo=datoLetra;
			letraMaximo=datoLetra;
			contadorNumero=contadorNumero+1;
		}
		else if (datoNumero<numeroMinimo)
		{
			numeroMinimo=datoNumero;
			letraMinimo=datoLetra;
		}
		else if(datoNumero>numeroMaximo)
		{
			numeroMaximo=datoNumero;
			letraMaximo=datoLetra;
		}

		respuesta=prompt("Ingrese 'si' para continuar");
	}

	promedioPositivos=acumuladorPositivos/contadorPositivos;

	document.write( "La cantidad de números pares: "+contadorPar+
					"<br>La cantidad de números impares: "+contadorImpar+
					"<br>La cantidad de ceros: "+contadorCeros+
					"<br>El promedio de todos los números positivos ingresados: "+promedioPositivos+
					"<br>La suma de todos los números negativos: "+acumuladorNegativos+
					"<br>El número y la letra del máximo: "+numeroMaximo+" "+letraMaximo+
					"<br>El número y la letra del mínimo: "+numeroMinimo+" "+letraMinimo);
}
