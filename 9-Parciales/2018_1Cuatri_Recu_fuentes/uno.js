
function mostrar()
{
	var mascotaUno;
	var mascotaDos;
	var pesoMascotaUno;
	var pesoMascotaDos;
	var suma;

	mascotaUno = "Pepe";
	mascotaDos = "Barney";
	pesoMascotaUno = 24;
	pesoMascotaDos = 20;

	pesoMascotaUno = parseInt(pesoMascotaUno);
	pesoMascotaDos = parseInt(pesoMascotaDos);

	suma = pesoMascotaUno+pesoMascotaDos;

	alert("Tenes dos mascotas "+mascotaUno+" y "+mascotaDos+",que pesan "+pesoMascotaUno+" kilos y "+pesoMascotaDos+" kilos, la suma de los kilos es "+suma);

}
