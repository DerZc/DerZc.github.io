function timeElapse(date){
	var current = new Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	var result = "<span class=\"digit\">" + days + "</span> days"; 
    //$("#elapseClock").html(result);
    document.getElementById("elapseClock").innerHTML = result;
}