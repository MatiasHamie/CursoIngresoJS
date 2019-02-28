/* 
	<h2>Enunciado:</h2>
	<h3>
	Bienvenidos.
	</br>Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
	<br>la temperatura de almacenamiento(entre -30 y 30)  hasta que el
	usuario quiera e informar al terminar el ingreso por document.write:
	<br>a)
	La cantidad de temperaturas pares.
	<br>b)
	La marca del producto más pesado
	<br>c)
	La cantidad de productos que se conservan a menos de 0 grados.
	<br>d)
	El promedio del peso de todos los productos.				
	<br>f)
	El peso máximo y el mínimo.

	</h3>
	<br> Testeo con los siguientes valores
	<br>(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
	<br>(m=teem;p = 10; t =0 )
	<br>(m=llut;p = 150(mal), 15(bien); t =-13 )
	<br>(m=fpy;p = 45; t =-12 )
*/

function mostrar()
{

	var marcaProducto;
	var pesoProducto;
	var tempAlmacenamiento;
	var respuesta;
	var contadorTempPar;
	var marcaProductoPesado;
	var pesoProductoMasPesado;
	var pesoProductoMasLiviano;
	var contadorProductos;
	var contadorProductosBajoCero;
	var promedioPesosTotal;
	var acumuladorPesos;

	contadorProductos=0;
	contadorTempPar=0;
	contadorProductosBajoCero=0;
	acumuladorPesos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		marcaProducto=prompt("Ingresar marca del producto");

		pesoProducto=prompt("Ingresar peso del producto");
		pesoProducto=parseInt(pesoProducto);

		while(pesoProducto<1 || pesoProducto>100)
		{
			pesoProducto=prompt("Peso INVALIDO, Ingresar peso del producto entre 1 y 100");
		}

		acumuladorPesos=acumuladorPesos+pesoProducto;

		tempAlmacenamiento=prompt("Ingresar una temperatura entre -30º y 30º");
		tempAlmacenamiento=parseInt(tempAlmacenamiento);

		while(tempAlmacenamiento<-30 || tempAlmacenamiento>30)
		{
			tempAlmacenamiento=prompt("Temperatura ingresada INVALIDA, ingresar una temperatura entre -30º y 30º");
		}

		if(tempAlmacenamiento%2==0)
		{
			contadorTempPar=contadorTempPar+1;
		}

		if (contadorProductos==0)
		{
			pesoProductoMasPesado=pesoProducto;
			pesoProductoMasLiviano=pesoProducto;
			marcaProductoPesado=marcaProducto;

		}
		else if(pesoProducto>pesoProductoMasPesado)
		{
			marcaProductoPesado=marcaProducto;
			pesoProductoMasPesado=pesoProducto;
		}
		else if(pesoProducto<pesoProductoMasLiviano)
		{
			pesoProductoMasLiviano=pesoProducto;
		}

		if(tempAlmacenamiento<0)
		{
			contadorProductosBajoCero=contadorProductosBajoCero+1;
		}

		contadorProductos=contadorProductos+1;

		respuesta=prompt("Ingrese 'si' para continuar");
	}

	promedioPesosTotal=acumuladorPesos/contadorProductos;

	document.write("Cantidad de temperatura pares: "+contadorTempPar+
					"<br>Marca producto mas pesado: "+marcaProductoPesado+
					"<br>Cantidad de productos que se conservan a menos de 0º: "+contadorProductosBajoCero+
					"<br>Promedio de los pesos de todos los productos: "+promedioPesosTotal+
					"<br>Peso Maximo: "+pesoProductoMasPesado+"Kg"+
					"<br>Peso Minimo: "+pesoProductoMasLiviano+"Kg");


}
