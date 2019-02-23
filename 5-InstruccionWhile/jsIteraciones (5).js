function mostrar()
{
	var sexo;

	sexo=prompt("Por favor ingresar su sexo");

	while(sexo!="f" && sexo!="m")
	{
		sexo=prompt("Error, por favor ingresar su sexo");
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN