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

	var contador;
	var acumulador;
	var numero;
	var respuesta;
	var positivo;
	var negativo;
	var acumuladorNegativos;
	var acumuladorPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var cantCeros;
	var promedioPositivos;
	var promedioNegativos;
	var difPosNeg;

	acumuladorPositivos=0;
	acumuladorNegativos=0;
	contador = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares=0;
	acumulador = 0;
	respuesta = "si";

	while(respuesta=="si")
	{
		contador = contador + 1;
		numero = prompt("Ingrese número:"+contador+" #");
		numero = parseInt(numero);

		if(numero<0)
		{
			contadorNegativos = contadorNegativos+1;
			acumuladorNegativos = acumuladorNegativos+numero;
		}
		else
		{
			if(numero>0)
			{
				contadorPositivos = contadorPositivos+1;
				acumuladorPositivos = acumuladorPositivos+numero;
			}
			else
			{
				contadorCeros=contadorCeros+1;
			}
		} 
		
		if(numero%2==0)
			{
				contadorPares=contadorPares+1;
			}
		respuesta = prompt("Si desea continuar ingresando numeros ingrese ->si");
	}

	promedioNegativos = acumuladorNegativos/contadorNegativos;
	promedioPositivos = acumuladorPositivos/contadorPositivos;
	difPosNeg = acumuladorPositivos-acumuladorNegativos;

	document.write("1-Suma de los negativos. "+acumuladorNegativos+"<br>"+
					"2-Suma de los positivos. "+acumuladorPositivos+"<br>"+
					"3-Cantidad de positivos. "+contadorPositivos+"<br>"+
					"4-Cantidad de negativos. "+contadorNegativos+"<br>"+
					"5-Cantidad de ceros. "+contadorCeros+"<br>"+
					"6-Cantidad de números pares. "+contadorPares+"<br>"+
					"7-Promedio de positivos. "+promedioPositivos+"<br>"+
					"8-Promedios de negativos. "+promedioNegativos+"<br>"+
					"9-Diferencia entre positivos y negativos, (positvos-negativos). "+difPosNeg+"<br>");
				

}//FIN DE LA FUNCIÓN