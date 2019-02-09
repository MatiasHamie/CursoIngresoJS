/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var ingreseSueldo;
	var mostrarResultado;
	
	ingreseSueldo = sueldo.value;
	ingreseSueldo = parseInt(ingreseSueldo);
	
	mostrarResultado = ingreseSueldo * (1 + 10/100);

	resultado.value = mostrarResultado;
	
	
}
