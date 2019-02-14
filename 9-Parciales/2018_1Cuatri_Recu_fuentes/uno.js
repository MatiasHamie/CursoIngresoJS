
function mostrar()
{
	var mascotaUno;
	var mascotaDos;
	var pesoMascotaUno;
	var pesoMascotaDos;
	var suma;

	mascotaUno = prompt("Ingrese el nombre de su primer mascota");
	mascotaDos = prompt("Ingrese el nombre de su segunda mascota");
	pesoMascotaUno = prompt("Ingrese el peso de su primer mascota");
	pesoMascotaDos = prompt("Ingrese el peso de su segunda mascota");

	pesoMascotaUno = parseInt(pesoMascotaUno);
	pesoMascotaDos = parseInt(pesoMascotaDos);

	suma = pesoMascotaUno+pesoMascotaDos;

	alert("Tenes dos mascotas "+mascotaUno+" y "+mascotaDos+",que pesan "+pesoMascotaUno+" kilos y "+pesoMascotaDos+" kilos, la suma de los kilos es "+suma);

}
