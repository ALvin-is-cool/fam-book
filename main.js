var img = ["a young lade drink a soda.jpg", "the cool tower.jpg", "the best mom.jpg", "intentess man.jpg", "the fam.jpg"];
var names = [" the boy the man the cool Alvin", "me and my sis and a tower of onion ", "the best mom in the intire world", "the intens but fun dad", "the fam"];
var i = 0;
function update() {
    i++;
    if (i > 4) { i = 0; }
 var updatedImage = img[i]; 
var updatedName = names[i]; 
document.getElementById("famPic").src = updatedImage; 
document.getElementById("name").innerHTML = updatedName;
}





















