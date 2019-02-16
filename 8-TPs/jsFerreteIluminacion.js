/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precioLamparas;
 	var cantLamparas;
 	var descuento;
 	var marcaEmpresa;
 	var mensaje;

 	precioLamparas = 35;
 	descuento = 50;
 	cantLamparas = Cantidad.value;
 	cantLamparas = parseInt(cantLamparas);

 	marcaEmpresa = Marca.value;

 	if(cantLamparas>5)
 	{
 		precioLamparas = 6 * (precioLamparas - (precioLamparas * descuento/100));
 		mensaje = "El precio de 6 lamparas es: $"+precioLamparas
 	}
 	else
 	{
 		if(cantLamparas==5)
 		{
 			switch(marcaEmpresa)
 			{
 				case "ArgentinaLuz":
 					descuento = 40;
 					precioLamparas = 5 * (precioLamparas - (precioLamparas * descuento/100));
 					mensaje =  "El precio de 5 lamparas es: $"+precioLamparas
 					break;
 					
 				case "FelipeLamparas":
 					descuento = 30;
 					precioLamparas = 5 * (precioLamparas - (precioLamparas * descuento/100));
 					mensaje =  "El precio de 5 lamparas es: $"+precioLamparas
 					break;
 			}
 		}
 	}

 	alert(mensaje);

}
