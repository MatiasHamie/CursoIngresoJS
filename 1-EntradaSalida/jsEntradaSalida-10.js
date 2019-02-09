/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var tomarImporte;
	var calculoDescuento;

	tomarImporte = importe.value;
	tomarImporte = parseInt(tomarImporte);

	calculoDescuento = tomarImporte * (1 - 25/100);

	resultado.value = calculoDescuento;
}
