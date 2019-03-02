function mostrar()
{
	var velocidadIngresada;
	var combustibleTipo;
	var contadorVehiculo;
	var velocidadAcumulador;
	var velocidadPromedio;
	var velocidadBaja;
	var velocidadAltaSolido;
	var combustibleTipoBaja;
	var combustibleTipoAlta;
	var combustibleTipoLiqContador;

	//Inicializo las variables
	combustibleTipoLiqContador=0;
	contadorVehiculo=0;
	velocidadAcumulador=0;

	while(contadorVehiculo<5)
	{
		//Ingreso velocidad
		velocidadIngresada=prompt("Ingresar velocidad entre 0 y 250 KM/H");
		velocidadIngresada=parseInt(velocidadIngresada);

		//Valido velocidad
		while(velocidadIngresada<0 || velocidadIngresada>250)
		{
			velocidadIngresada=prompt("Velocidad INVALIDA, Ingresar velocidad entre 0 y 250 KM/H");			
		}

		//Ingreso combustible
		combustibleTipo=prompt("Ingresar (en minúscula) tipo de combustible, 's' para solido, 'l' para liquido");

		//Valido combustible
		while(combustibleTipo!="s" && combustibleTipo!="l")
		{
			combustibleTipo=prompt("ERROR, Ingresar (en minúscula) tipo de combustible, 's' para solido, 'l' para liquido");			
		}

		//si es la primera vez que se ingresan datos
		//pongo el tipo de combustible en alta y baja (caro/barato)
		if(contadorVehiculo==0)
		{
			combustibleTipoAlta=combustibleTipo;
			combustibleTipoBaja=combustibleTipo;
			velocidadBaja=velocidadIngresada;
			//si el combustible es "s" (solido) la velocidad q se ingreso
			//la guardo
			if(combustibleTipo=="s")
			{
				velocidadAltaSolido=velocidadIngresada;	
			}
		}
		else
		{
			//velocidad minima
			if(velocidadIngresada<velocidadBaja)
			{
				combustibleTipoBaja=combustibleTipo;
				velocidadBaja=velocidadIngresada;				
			}
		}

		//cantidad de (combustible liquido y velocidad menor a 100)
		if(combustibleTipo=="l" && velocidadIngresada>100)
		{
			combustibleTipoLiqContador=combustibleTipoLiqContador+1;
		}

		//cantidad de [combustible solido y velocidad menor a velocidad alta (maxima)]
		if(combustibleTipo=="s" && velocidadIngresada>velocidadAltaSolido)
		{
			velocidadAltaSolido=velocidadIngresada;
		}

		//acumulo las velocidades para hacer el promedio al final
		velocidadAcumulador=velocidadAcumulador+velocidadIngresada;

		//finalizo el while incrementando el contador de vehiculos
		contadorVehiculo++;
	}

	//calculo promedios
	velocidadPromedio=velocidadAcumulador/contadorVehiculo;

	alert("\n1- El promedio de las velocidades totales: "+velocidadPromedio+
		  "\n2- Velocidad mas baja "+velocidadBaja+" km/h, tipo de combustible del vehiculo: "+combustibleTipoBaja+
		  "\n3- Cantidad de combustibles líquidos que su velocidad supere los 100 km/h: "+combustibleTipoLiqContador+
		  "\n4- la velocidad más alta de los de combustible sólido: "+velocidadAltaSolido);
}
