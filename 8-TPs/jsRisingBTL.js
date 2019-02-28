/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide
realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.		Edad, entre 18 y 90 años inclusive.
B.		Sexo, “M” para masculino y “F” para femenino
C.		Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.		Sueldo bruto, no menor a 8000.
E.		Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.		Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
*/
function ComenzarIngreso () 
{
	var edad;
 	var sexo;
 	var respuesta;
 	var estadoCivil;
 	var mensajeEstCivil;
 	var mensajeNacionalidad;
 	var sueldoBruto;
 	var numeroLegajo;
 	var nacionalidad;
 	var mensaje;

 	respuesta="si";

 	while(respuesta=="si")
 	{
 		//Pido edad
 		edad=prompt("Ingrese edad");
 		edad=parseInt(edad);

 		//Valido edad
 		while(edad<18 || edad>90)
 		{
 			edad=prompt("Edad INVALIDA, ingresar edad entre 18 y 90 años")
 		}

 		//Pido el sexo
 		sexo=prompt("Ingrese sexo, 'f' para femenino, 'm' para masculino");

 		//Valido el sexo
 		while(sexo!="f" && sexo!="m")
 		{
 			sexo=prompt("Sexo INVALIDO, ingresar 'f' o 'm'");
 		}

 		//Pido estCivil
 		estadoCivil=prompt("Ingrese el número según su estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 		estadoCivil=parseInt(estadoCivil);

 		//Valido nro estado civil
 		while(estadoCivil<1 || estadoCivil>4)
 		{
 			estadoCivil=prompt("Numero ERRONEO, Ingrese el número según su estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 		}

 		switch(estadoCivil)
 			{
	 			case 1:
	 				if(sexo=="f")
	 				{
	 					mensajeEstCivil="Soltera";	
	 				}
	 				else
	 				{
	 					mensajeEstCivil="Soltero";
	 				}
	 				break;

	 			case 2:
	 				if(sexo=="f")
	 				{
	 					mensajeEstCivil="Casada";
	 				}
	 				else
	 				{
	 					mensajeEstCivil="Casado";
	 				}
	 				break;

	 			case 3:
	 				if(sexo=="f")
	 				{
	 					mensajeEstCivil="Divorciada";
	 				}
	 				else
	 				{
	 					mensajeEstCivil="Divorciado";
	 				}
	 				break;
	 				
	 			case 4:
	 				if(sexo=="f")
	 				{
	 					mensajeEstCivil="Viuda";
	 				}
	 				else
	 				{
	 					mensajeEstCivil="Viudo";
	 				}
	 				break;
 			}

 			//Pido sueldo BRUTO
 			sueldoBruto=prompt("Ingresar sueldo bruto");
 			sueldoBruto=parseInt(sueldoBruto);

 			//Valido sueldo BRUTO
 			while(sueldoBruto<8000)
 			{
 				sueldoBruto=prompt("Sueldo menor a $8000, por favor, ingrese un monto mayor a $8000");
 			}

 			//Pido numero legajo
 			numeroLegajo=prompt("Ingrese número de legajo de 4 cifras");
 			numeroLegajo=parseInt(numeroLegajo);

 			//Valido numero legajo
 			while(numeroLegajo>9999)
 			{
 				numeroLegajo=prompt("Legajo ERRONEO, ingrese número de legajo de 4 cifras");
 			}

 			//Pido nacionalidad
 			nacionalidad=prompt("Ingrese Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

 			//Valido nacionalidad
 			while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
 			{
 				nacionalidad=prompt("Nacionalidad ERRONEA, Ingrese Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
 			}

 			switch(nacionalidad)
 			{
	 			case "A":
	 				if(sexo=="f")
	 				{
	 					mensajeNacionalidad="Argentina";	
	 				}
	 				else
	 				{
	 					mensajeNacionalidad="Argentino";
	 				}
	 				break;

	 			case "E":
	 				if(sexo=="f")
	 				{
	 					mensajeNacionalidad="Extranjera";
	 				}
	 				else
	 				{
	 					mensajeNacionalidad="Extranjero";
	 				}
	 				break;

	 			case "N":
	 				if(sexo=="f")
	 				{
	 					mensajeNacionalidad="Nacionalizada";
	 				}
	 				else
	 				{
	 					mensajeNacionalidad="Nacionalizado";
	 				}
	 				break;
	 		}
	 	respuesta=prompt("Ingrese SI para continuar");
 	}

	//Pongo el ID con el valor del sexo
 	document.getElementById('Sexo').value=sexo;

 	//Pongo el ID con el valor de la edad
 	document.getElementById('Edad').value=edad;

	//Pongo el ID con el valor del estCivil
	document.getElementById('EstadoCivil').value=mensajeEstCivil;

	//Pongo el ID con el valor del sueldo Bruto
 	document.getElementById('Sueldo').value=sueldoBruto;

	//Pongo el ID con el valor de la nacionalidad
 	document.getElementById('Nacionalidad').value=mensajeNacionalidad;

 	//Pongo el ID con el valor del legajo
 	document.getElementById('Legajo').value=numeroLegajo;
}