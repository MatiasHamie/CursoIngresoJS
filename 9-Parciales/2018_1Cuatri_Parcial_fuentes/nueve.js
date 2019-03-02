function mostrar()
{
	var marcaIngresada;
	var litrosIngresados;
	var precioIngresado;
	var contadorGaseosas;
	var contadorPrecioPar;
	var marcaMasBarata;
	var litrosMasBarata;
	var contadorGaseosaMenor50;
	var acumuladorPrecios;
	var promedioPrecios;
	var precioMaximoTresLitros;
	var precioMinimoTresLitros;
	var precioMinimo;
	var contadorTresLitros;
	var respuesta;

	contadorTresLitros=0;
	contadorGaseosas=0;
	contadorGaseosaMenor50=0;
	contadorPrecioPar=0;
	acumuladorPrecios=0;
	respuesta="si";

	while(respuesta=="si")
	{
		marcaIngresada=prompt("Ingresar Marca de la gaseosa");
		
		litrosIngresados=prompt("Ingresar la cantidad de litros de la gaseosa entre 1 y 3 Lts.");
		litrosIngresados=parseInt(litrosIngresados);

		while(litrosIngresados<1 || litrosIngresados>3)
		{
			litrosIngresados=prompt("ERROR, Ingresar la cantidad de litros de la gaseosa entre 1 y 3 Lts.");
			litrosIngresados=parseInt(litrosIngresados);			
		}

		precioIngresado=prompt("Ingresar el precio de la gaseosa entre $0 y $30");
		precioIngresado=parseInt(precioIngresado);

		while(precioIngresado<30 || precioIngresado>100)
		{
			precioIngresado=prompt("ERROR, Ingresar el precio de la gaseosa entre $0 y $30");
			precioIngresado=parseInt(precioIngresado);			
		}

		if(precioIngresado%2==0)
		{
			contadorPrecioPar++;
		}

		if(contadorGaseosas==0)
		{
			precioMinimo=precioIngresado;
			marcaMasBarata=marcaIngresada;
			litrosMasBarata=litrosIngresados;
		}
		else
		{
			if(precioIngresado<precioMinimo)
			{
				marcaMasBarata=marcaIngresada;
				litrosMasBarata=litrosIngresados;								
			}
		}
			
		if(litrosIngresados<3)
		{
			if(contadorTresLitros==0)
			{
				precioMaximoTresLitros=precioIngresado;					
				precioMinimoTresLitros=precioIngresado;	

				contadorTresLitros++;				
			}
			else
			{
				if(precioIngresado<precioMinimoTresLitros)
				{
					precioMinimoTresLitros=precioIngresado;
				}				
				else
				{
					if(precioIngresado>precioMaximoTresLitros)
					{
						precioMaximoTresLitros=precioIngresado;
					}				
				}
			}
		}

		if(precioIngresado<50)
		{
			contadorGaseosaMenor50++;
		}
	
	acumuladorPrecios=acumuladorPrecios+precioIngresado;
	contadorGaseosas++;

	respuesta=prompt("Ingrese 'si' para continuar");
	}

	promedioPrecios=acumuladorPrecios/contadorGaseosas;

	document.write("a)La cantidad de precios pares: "+contadorPrecioPar+
					"<br>b)La marca y litros del más barato: "+marcaMasBarata+" "+litrosMasBarata+
					"<br>c)La cantidad de gaseosas que valen menos de 50: "+contadorGaseosaMenor50+
					"<br>d)El promedio del precio de todas las gaseosa: $"+promedioPrecios+
					"<br>f)El precio máximo y el mínimo de todas las gaseosa de menores de 3 litros-> Max: "+precioMaximoTresLitros+" lts. Min: "+precioMinimoTresLitros+" lts.");

}


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
*/