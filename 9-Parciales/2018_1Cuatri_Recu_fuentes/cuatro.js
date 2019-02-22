function mostrar()
{
	
	var importe1;
	var importe2;
	var importe3;
	var importe4;
	var numeroMasAlto;
	var suma;
	var descuento;
	var importeFinal;
	var mensaje;
	var numerosIguales;

	importe1 = prompt("Ingrese el primer importe");
	importe2 = prompt("Ingrese el segundo importe");
	importe3 = prompt("Ingrese el tercer importe");
	importe4 = prompt("Ingrese el cuarto importe");

	importe1 = parseInt(importe1);
	importe2 = parseInt(importe2); 
	importe3 = parseInt(importe3);
	importe4 = parseInt(importe4);	

	suma = importe1+importe2+importe3+importe4;
	numerosIguales = suma/4;

	if(numerosIguales == importe1)
	{
		numeroMasAlto = importe1;
	}
	else
	{
		if(importe1>importe2 && importe1>importe3 && importe1>importe4)
		{
			numeroMasAlto = importe1;
		}
		else
		{
			if(importe2>importe3 && importe2>importe4)
			{
				numeroMasAlto = importe2;
			}
			else
			{
				if(importe3>importe4)
				{
					numeroMasAlto = importe3;
				}
				else
				{
					numeroMasAlto = importe4;
				}
			}
		}
	}

	if(suma>100)
	{
		descuento = 0.90;
	}
	else
	{
		if(suma>50)
		{
			descuento = 0.95;
		}
		else
		{
			if(suma<50)
			{
				descuento = 1.15;
			}
		}
	}
	
	importeFinal = suma*descuento;
	mensaje = "El importe mas alto a abonar es $"+numeroMasAlto+" y el importe total es: $"+importeFinal;
	alert(mensaje);
}