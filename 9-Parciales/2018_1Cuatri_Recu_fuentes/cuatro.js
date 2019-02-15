function mostrar()
{
	var cantPersonas;
	var precio;
	var precioFinal;
	var precioConPropina;
	var precioConIva;

	precio = prompt("Ingrese precio de la comida:");
	cantAmigos = prompt("Ingrese cantidad de personas:");
	
	precio = parseInt(precio);	
	cantAmigos = parseInt(cantAmigos);
	
	precioConIva = (precio + precio * 21/100);
	precioConPropina = (precioConIva + precioConIva * 10/100);
	precioFinal = precioConPropina / cantAmigos;

	alert("El precio de la comida ingresado fue: $"+precio+" + Iva: $"+precioConIva+" + propina: $"+precioConPropina+" Cada persona tiene que abonar: $"+precioFinal);

}