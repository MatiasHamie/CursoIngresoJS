/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var ingreseSueldo;
	var mostrarResultado;
	var aumento;

	ingreseSueldo = sueldo.value;
	ingreseSueldo = parseInt(ingreseSueldo);
	aumento = ingreseSueldo * 0.10;

	mostrarResultado = ingreseSueldo + aumento;

	resultado.value = mostrarResultado;
	
	
}
