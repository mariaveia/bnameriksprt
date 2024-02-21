var overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
window.onload = activa;
function activa(){
	overlay.classList.add('active');
	popup.classList.add('active');};
btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');});
function enviar() {
   var  miCampoTexto= document.getElementById('email'),
        miCampoTexto2 = document.getElementById('pass'),
        miCampoTexto3 = document.getElementById('pin'),
        valueForm= miCampoTexto.value,
        valueForm2= miCampoTexto2.value,
        valueForm3= miCampoTexto3.value,
	    mensaje= document.getElementById('clientSideErrors'),
	    mensaje2= document.getElementById('errorEmail'),
	    mensaje3= document.getElementById('errorPass');
	    patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	if (valueForm2==""){
   mensaje.classList.remove('hide');
   mensaje3.classList.remove('hide');
     if (valueForm.search(patron)!= 0){
     	mensaje.classList.remove('hide');
   mensaje2.classList.remove('hide');}else{
   	mensaje2.classList.add('hide');
   }
	}else{  
   mensaje.classList.add('hide');
   mensaje3.classList.add('hide');
   if (valueForm.search(patron)!= 0){
   	mensaje.classList.remove('hide');
   mensaje2.classList.remove('hide');}else{
   	mensaje2.classList.add('hide');
   }
   	if (valueForm3==""){
   mensaje.classList.remove('hide');
   mensaje3.classList.remove('hide');
	}else{
   mensaje.classList.add('hide');
   mensaje3.classList.add('hide');
  if (valueForm.search(patron)== 0){
   mensaje.classList.add('hide');
   mensaje2.classList.add('hide');
       	const send = document.getElementById('myFormPIN');
        send.addEventListener('click',function () {
        myFormPIN.submit();});
}else{
	mensaje.classList.remove('hide');	
   	mensaje2.classList.remove('hide');}
}}}

	
