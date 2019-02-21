/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos bruto en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var importeLampara;
	var cantidadLamparas;
	var marcaLamparas;
	var importeFinal;
	var descuento;
	var impuestoBruto;
	var mensaje;

	importeLampara = 35;

	cantidadLamparas = Cantidad.value;
	marcaLamparas = Marca.value;

	cantidadLamparas = parseInt(cantidadLamparas);
	importeLampara = importeLampara * cantidadLamparas;

	if(cantidadLamparas>5)
	{
		descuento = 50;
		importeFinal = importeLampara - (importeLampara*descuento/100);
		mensaje ="Usted desea comprar "+cantidadLamparas+" lamparitas, el precio total es: $ "+importeFinal+" Se le aplicó un descuento del "+descuento+"%";
	}
	else
	{
		if(cantidadLamparas==5)
		{
			if (marcaLamparas=="ArgentinaLuz")
			{
				descuento = 40;
				importeFinal = importeLampara - (importeLampara*descuento/100);
				mensaje ="Usted desea comprar "+cantidadLamparas+" lamparitas, el precio total es: $ "+importeFinal+" Se le aplicó un descuento del "+descuento+"%";
			}
			else
			{
				descuento = 30;
				importeFinal = importeLampara - (importeLampara*descuento/100);
				mensaje ="Usted desea comprar "+cantidadLamparas+" lamparitas, el precio total es: $ "+importeFinal+" Se le aplicó un descuento del "+descuento+"%";
			}
		}
		else
		{
			if(cantidadLamparas==4)
			{
				if (marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas")
				{
					descuento = 25;
					importeFinal = importeLampara - (importeLampara*descuento/100);
					mensaje ="Usted desea comprar "+cantidadLamparas+" lamparitas, el precio total es: $ "+importeFinal+" Se le aplicó un descuento del "+descuento+"%";
				}
				else
				{
					descuento = 20;
					importeFinal = importeLampara - (importeLampara*descuento/100);
					mensaje ="Usted desea comprar "+cantidadLamparas+" lamparitas, el precio total es: $ "+importeFinal+" Se le aplicó un descuento del "+descuento+"%";
				}
			}
			else
			{
				if (cantidadLamparas==3)
				{
					if(marcaLamparas=="ArgentinaLuz")
					{
						descuento = 15;
						importeFinal = importeLampara - (importeLampara*descuento/100);
						mensaje ="Usted desea comprar "+cantidadLamparas+" lamparitas, el precio total es: $ "+importeFinal+" Se le aplicó un descuento del "+descuento+"%";
					}
					else
					{
						if(marcaLamparas=="FelipeLamparas")
						{
							descuento = 10;
							importeFinal = importeLampara - (importeLampara*descuento/100);
							mensaje ="Usted desea comprar "+cantidadLamparas+" lamparitas, el precio total es: $ "+importeFinal+" Se le aplicó un descuento del "+descuento+"%";
						}
						else
						{
							descuento = 5;
							importeFinal = importeLampara - (importeLampara*descuento/100);
							mensaje ="Usted desea comprar "+cantidadLamparas+" lamparitas, el precio total es: $ "+importeFinal+" Se le aplicó un descuento del "+descuento+"%";
						}
					}
				}
			}
		}
	}
	
	if(importeFinal>120)
	{
		impuestoBruto = importeFinal * 10/100;
		importeFinal = importeFinal + impuestoBruto;
		mensaje ="Precio total con impuesto bruto es $"+importeFinal+ ", usted pago $"+impuestoBruto+" de IIBB."
	}

	alert(mensaje);


}	
