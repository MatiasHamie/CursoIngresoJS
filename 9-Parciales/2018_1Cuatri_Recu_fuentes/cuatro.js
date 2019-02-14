function mostrar()
{
	var cantPersonas;
	var precio;
	var precioFinal;
	var precioConDescuento;

	cantAmigos = prompt("Ingrese cantidad de personas:");
	precio = prompt("Ingrese precio de la comida:");	

	cantAmigos = parseInt(cantAmigos);
	precio = parseInt(precio);

	precioFinal = (precio + precio * 10/100);
	precioConDescuento =  precioFinal / cantAmigos;

	alert("Cantidad de personas: "+cantAmigos+", el precio de la comida es: $"+precio+", con una propina del 10% el precio final es $"+precioFinal+", cada uno debe pagar: $"+precioConDescuento);
}
