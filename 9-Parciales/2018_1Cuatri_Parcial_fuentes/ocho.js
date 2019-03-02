function mostrar()
{

	var paisIngresado;
	var superficieIngresada;
	var contadorPaises;
	var contadorSuperficieImpar;
	var contadorSuperficieMenorCien;
	var contadorSuperficieIgualCien;
	var paisMayorCienSuperficie;
	var acumuladorSuperficies;
	var promedioSuperficies;
	var paisMenorSuperficie;
	var paisMenorNombre;
	var respuesta;
	var contadorPaisesMayorCien;

	contadorPaisesMayorCien=0;
	respuesta="si";
	contadorPaises=0;
	contadorSuperficieImpar=0;
	contadorSuperficieIgualCien=0;
	contadorSuperficieMenorCien=0;
	acumuladorSuperficies=0;

	while(respuesta=="si")
	{
		//Pido Nombre pais
		paisIngresado=prompt("Ingrese nombre de pais");

		//Pido Superficie pais
		superficieIngresada=prompt("Ingrese superficie");
		superficieIngresada=parseInt(superficieIngresada);

		//Valido Superficie pais
		while(superficieIngresada<0)
		{
			superficieIngresada=prompt("ERROR, Ingrese superficie mayor a cero");
			superficieIngresada=parseInt(superficieIngresada);		
		}
		//si no hay paises ingresados
		//pongo el nombre del pais en una variable, y su superficie en otra variable
		if(contadorPaises==0)
		{
			paisMenorNombre=paisIngresado;
			paisMenorSuperficie=superficieIngresada;

		}
		else
		{
			//si el contador no es 0, piso las varibles en el paso anterior
			if(superficieIngresada<paisMenorSuperficie)
			{
				paisMenorNombre=superficieIngresada;
				paisMenorSuperficie=superficieIngresada;	
			}
		}

		//si la superficie tiene resto != 0 con 2, contador impar +1
		if(superficieIngresada%2!=0)
		{
			contadorSuperficieImpar++;
		}

		//si la superficie menor a 100, contador superficies menores a 100 +1
		if(superficieIngresada<100)
		{
			contadorSuperficieMenorCien++;
		}
		else
		{
			if(superficieIngresada>100 && contadorPaisesMayorCien==0)
			{
				//si es mayor a 100, guardo el nombre de ese pais
				paisMayorCienSuperficie=paisIngresado;		
				contadorPaisesMayorCien++;		
			}
			//si la superficie es = a 100, contador superficies mayores a 100 +1
			if(superficieIngresada==100)
			{
				contadorSuperficieIgualCien++;
			}
		}

	contadorPaises++;

	acumuladorSuperficies=acumuladorSuperficies+superficieIngresada;
	
	respuesta=prompt("Ingrese 'si' para continuar");
	}

	promedioSuperficies=acumuladorSuperficies/contadorPaises;

	document.write("1-La cantidad de países con superficie impar: "+contadorSuperficieImpar+
		"<br>2-La cantidad de países con superficie menor a 100: "+contadorSuperficieMenorCien+
		"<br>3-La cantidad de países con superficie igual a 100: "+contadorSuperficieIgualCien+
		"<br>4-El nombre del primer país que superó los 100 de superficie: "+paisMayorCienSuperficie+
		"<br>5-El promedio de kilómetros ingresados: "+promedioSuperficies+
		"<br>6-El nombre del que menos territorio tiene: "+paisMenorNombre);



}
