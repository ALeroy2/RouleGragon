import Monster from "../JS/Monster.js";
var mon = new Monster({name:"Pierre", image:"https://cdn.discordapp.com/attachments/547037631322783757/547080433175887872/664573925_small.png"});
alert(mon.name);

$('#ok').text(mon.name);
var img = $('<img id="dynamic_img">');
img.attr('src', mon.image);
img.appendTo('#ok');
