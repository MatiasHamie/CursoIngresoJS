function mostrar()
{
	var nroHabitacion;
	var paquete;
	var tipoDePago;
	var descuento;
	var precioHabitacion;
	var importeFinal;
	var noches;
	var mensaje;

	precioHabitacion = prompt("Ingrese el precio de la habitación");
	paquete = prompt("En el caso de haber contratado un paquete ingrese el nombre del mismo (todoIncluido o soloDesayunos)");
	tipoDePago = prompt("Ingrese el tipo de pago");
	noches = prompt("Ingrese la cantidad de noches que se hospedará");


	nroHabitacion = parseInt(nroHabitacion);

	switch(tipoDePago)
	{
		case "visa":
		case "mercadoPago":
			descuento = 0.90;
			break;
		case "paypal":
			switch(paquete)
			{
				case "todoIncluido":
					descuento = 0.75;
					break;
				default:
					descuento = 0.85;
			}
		case "efectivo":
			switch(paquete)
			{
				case "soloDesayunos":
					descuento = 0.70;
					break;
				case "todoIncluido":
					descuento = 0.65;
					break;
				default:
					descuento = 0.80;
			}
			break;
		default:
			descuento = 0.95;
	}

	importeFinal = precioHabitacion * descuento;
	mensaje = "El monto final a abonar es $"+importeFinal;

	alert(mensaje);

}
