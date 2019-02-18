import Monster from "../JS/Monster.js";
var mon = new Monster({name:"Pierre", image:"https://cdn.discordapp.com/attachments/547037631322783757/547080433175887872/664573925_small.png"});
var nom_mob = $('<p>'+mon.name+'</p>');
nom_mob.appendTo('#ok');
var img_mob = $('<img id="dynamic_img">');
img_mob.attr('src', mon.image);
img_mob.appendTo('#ok');
