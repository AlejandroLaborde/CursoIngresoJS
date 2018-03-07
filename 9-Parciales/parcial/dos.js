function Mostrar()
{
	var importe;
	var importefinal; // este importe tiene ya invluido el 21%

	importe=prompt("ingrese un importe", "ejemplo 1000");
	importe=parseInt(importe);
	importefinal=importe + (importe*0.21);

	document.getElementById('importeFinal').value= importefinal;
  
}
