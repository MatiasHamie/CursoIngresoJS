/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldoNeto;
	var sueldoFinal;

	sueldoNeto = sueldo.value;
	sueldoNeto = parseInt(sueldoNeto);

	sueldoFinal = sueldoNeto + (sueldoNeto * 10/100);

	resultado.value = sueldoFinal;
}
