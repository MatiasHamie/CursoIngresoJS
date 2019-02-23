/*
Al presionar el bot&oacute;n pedir  n&uacute;meros  hasta que el usuario quiera, mostrar:</br>
1-Suma de los negativos. 
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
*/

function mostrar()
{

	var respuesta;
	var numeroIngresado;
	var acumuladorNegativos;
	var acumuladorPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPosNeg;

	respuesta = "si";
	acumuladorNegativos=0;
	acumuladorPositivos=0;
	contadorPositivos=0;
	contadorNegativos=0;
	contadorCeros=0;
	contadorPares=0;

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado==0)
		{
			contadorCeros=contadorCeros+1;
		}
		else if (numeroIngresado<0)
			{
				contadorNegativos=contadorNegativos+1;
				acumuladorNegativos=acumuladorNegativos+numeroIngresado;
			}
			else
			{
				contadorPositivos=contadorPositivos+1;
				acumuladorPositivos=acumuladorPositivos+numeroIngresado;
			}
		
		if(numeroIngresado%2==0)
		{
			contadorPares=contadorPares+1;
		}

		respuesta=prompt("Ingrese 'si' para continuar");
	}

	promedioPositivos=acumuladorPositivos/contadorPositivos;
	promedioNegativos=acumuladorNegativos/contadorNegativos;
	diferenciaPosNeg=acumuladorPositivos+acumuladorNegativos;

	document.write(
					"1-Suma de los negativos => "+acumuladorNegativos+"<br>"+
					"2-Suma de los positivos => "+acumuladorPositivos+"<br>"+
					"3-Cantidad de positivos => "+contadorPositivos+"<br>"+
					"4-Cantidad de negativos => "+contadorNegativos+"<br>"+
					"5-Cantidad de ceros => "+contadorCeros+"<br>"+
					"6-Cantidad de números pares => "+contadorPares+"<br>"+
					"7-Promedio de positivos => "+promedioPositivos+"<br>"+
					"8-Promedios de negativos => "+promedioNegativos+"<br>"+
					"9-Diferencia entre positivos y negativos => "+diferenciaPosNeg+"<br>");



				

}//FIN DE LA FUNCIÓN