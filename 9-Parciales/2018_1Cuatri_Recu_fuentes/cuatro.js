function mostrar()
{
	var cantPersonas;
	var precio;
	var precioFinal;
	var precioConPropina;
	var precioConIva;

	cantAmigos = prompt("Ingrese cantidad de personas:");
	precio = prompt("Ingrese precio de la comida:");	

	cantAmigos = parseInt(cantAmigos);
	precio = parseInt(precio);

	precioConPropina = (precio + precio * 10/100);
	precioConIva = (precio + precio * 21/100)
	precioFinal =  (precioConPropina+precioConIva) / cantAmigos;

	alert("Cantidad de personas: "+cantAmigos+", el precio de la comida es: $"+precio+", con una propina del 10% $"+precioConPropina+" y el precio con Iva es de $"+precioConIva+"Precio Total $"+precioFinal+", cada uno debe pagar: $"+precioConDescuento);
}
