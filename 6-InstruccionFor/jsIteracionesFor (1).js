function mostrar()
{

	var contador;

/*
	for (contador=0;contador<5;contador++)
	{
		console.log(contador);
	}
*/

/*
	contador=0;

	for (;contador<5;contador++)
	{
		console.log(contador);
	}

*/

/*
	contador=0;

	for (;contador<5;)
	{
		console.log(contador);

		contador++;
	}
*/

	contador=0;

	for (;;)
	{
		console.log(contador);

		contador++;

		if(contador==5)
		{
			break;
		}
}