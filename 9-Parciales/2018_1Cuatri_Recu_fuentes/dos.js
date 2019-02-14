function mostrar()
{
	var precio;
	var precioDescuento;
	var precioFinal;

	precio = prompt("Ingrese precio del producto");
	precio = parseInt(precio);

	precioDescuento = precio - (precio * 10/100);
	precioFinal = precioDescuento - (precioDescuento * 21/100);

	alert("Tu compra es de $"+precio+" tenes un descuento del 10% queda en $"+precioDescuento+" mas el iva es $"+precioFinal);
}
