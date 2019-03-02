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

	combustibleTipoLiqContador=0;
	contadorVehiculo=0;
	velocidadAcumulador=0;

	while(contadorVehiculo<5)
	{
		velocidadIngresada=prompt("Ingresar velocidad entre 0 y 250 KM/H");
		velocidadIngresada=parseInt(velocidadIngresada);

		while(velocidadIngresada<0 || velocidadIngresada>250)
		{
			velocidadIngresada=prompt("Velocidad INVALIDA, Ingresar velocidad entre 0 y 250 KM/H");			
		}

		combustibleTipo=prompt("Ingresar (en minúscula) tipo de combustible, 's' para solido, 'l' para liquido");

		while(combustibleTipo!="s" && combustibleTipo!="l")
		{
			combustibleTipo=prompt("ERROR, Ingresar (en minúscula) tipo de combustible, 's' para solido, 'l' para liquido");			
		}

		if(contadorVehiculo==0)
		{
			combustibleTipoAlta=combustibleTipo;
			combustibleTipoBaja=combustibleTipo;
			velocidadBaja=velocidadIngresada;
			if(combustibleTipo=="s")
			{
				velocidadAltaSolido=velocidadIngresada;	
			}
		}
		else
		{
			if(velocidadIngresada<velocidadBaja)
			{
				combustibleTipoBaja=combustibleTipo;
				velocidadBaja=velocidadIngresada;				
			}
		}

		if(combustibleTipo=="l" && velocidadIngresada>100)
		{
			combustibleTipoLiqContador=combustibleTipoLiqContador+1;
		}

		if(combustibleTipo=="s" && velocidadIngresada>velocidadAltaSolido)
		{
			velocidadAltaSolido=velocidadIngresada;
		}

		velocidadAcumulador=velocidadAcumulador+velocidadIngresada;

		contadorVehiculo++;
	}

	velocidadPromedio=velocidadAcumulador/contadorVehiculo;

	alert("\n1- El promedio de las velocidades totales: "+velocidadPromedio+
		  "\n2- Velocidad mas baja "+velocidadBaja+" km/h, tipo de combustible del vehiculo: "+combustibleTipoBaja+
		  "\n3- Cantidad de combustibles líquidos que su velocidad supere los 100 km/h: "+combustibleTipoLiqContador+
		  "\n4- la velocidad más alta de los de combustible sólido: "+velocidadAltaSolido);
}
