$(document).ready(function () {
    const mq = window.matchMedia("(max-width: 1080px)");
    if (mq.matches) {
        $(".sub-btn").click(function () {
            $(this).next(".sub-menu").slideToggle();
        });

        $(".more-btn").click(function () {
            $(this).next(".more-menu").slideToggle();
        });
    }
});

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 10);
});

const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase()
  const storeitems = document.getElementById("product-list")
  const product = document.querySelectorAll(".product")
  const pname = storeitems.getElementsByTagName("h2")

  for(var i = 0; i < pname.length; i++){
    let match = product[i].getElementsByTagName('h2')[0];

    if(match){
      let textvalue = match.textContent || match.innerHTML

      if(textvalue.toUpperCase().indexOf(searchbox) >  -1){
        product[i].style.display = "";
      }else{
        product[i].style.display = "none";
      }
    }
  }
}
