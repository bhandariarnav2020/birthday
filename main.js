var images=[https://www.birthdaywishes.expert/wp-content/uploads/2015/08/happy-birthday-mom-quote-1-500x500.jpg,
            https://www.birthdaywishes.expert/wp-content/uploads/2015/08/happy-birthday-mom-quote-1-500x500.jpg,
            https://www.birthdaywishes.expert/wp-content/uploads/2015/08/Happy-Birthday-to-the-sweetest-mother-in-the-world.-Wish-on-watercolor-drawing-of-a-red-rose-450x600.jpg,
            https://www.birthdaywishes.expert/wp-content/uploads/2015/01/happy-birthday-mom-3-500x500.jpg,
            https://www.birthdaywishes.expert/wp-content/uploads/2015/08/floral-birthday-image-for-mom-500x375.jpg
            ];
var i = 0;
function nextslide(){
  document.getElementById("bdw").src=images[i]; i++;
  if (i == 5){
    i=0;
  }
}
