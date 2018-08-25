var today = new Date();
today.setHours(today.getHours() - 9);
//Descomentar para ver o horario:
//document.writeln("UTC - 9: " + today.toUTCString() + "<br>");

var weekday = new Array();
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var dayOfWeek = weekday[today.getUTCDay()];

var rashidLocation = new Array();
rashidLocation[0] = "Carlin";
rashidLocation[1] = "Svargrond";
rashidLocation[2] = "Liberty Bay";
rashidLocation[3] = "Port Hope";
rashidLocation[4] = "Ankrahmun";
rashidLocation[5] = "Darashia";
rashidLocation[6] = "Edron";

var rloc = rashidLocation[today.getUTCDay()];

var images = new Array();
images[0] = "images/Rashid_Carlin.png";
images[1] = "images/Rashid_Svargrond.png";
images[2] = "images/Rashid_LibertyBay.png";
images[3] = "images/Rashid_PortHope.png";
images[4] = "images/Rashid_Arkrahmun.png";
images[5] = "images/Rashid_Darashia.png";
images[6] = "images/Rashid_Edron.png";

var imageSrc = images[today.getUTCDay()];

document.write("Today is <b>" + dayOfWeek + "</b> so Rashid is in <b>" + rloc + "</b></br>");
document.write("<img src=\"" + imageSrc + "\" width=300 alt=\"" + rloc + "\" />");

/*
document.write("Hoje é " + dayOfWeek + " então o Rashid está em " + rloc + "</br>");
document.write("<a href=\"" + imageSrc + "\">");
document.write("	<img src=\"" + imageSrc + "\" width=300 alt=\"" + rloc + "\" />");
document.write("</a>");
*/

//document.write("<img src=\"" + imageSrc + "\" width=300 alt=\"" + rloc + "\" />");