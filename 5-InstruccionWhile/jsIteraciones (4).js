function mostrar()
{
	var valor;

	valor=prompt("Por favor ingrese un valor entre 0 y 9 inclusive");

	while(valor<0||valor>9)
	{
		valor=prompt("Error, ingrese un valor entre 0 y 9 inclusive");
	}

	document.getElementById('Numero').value = valor;

}//FIN DE LA FUNCIÓN