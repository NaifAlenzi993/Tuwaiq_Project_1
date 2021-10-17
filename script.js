let Books = [
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81kosCB1luL._AC_UL200_SR200,200_.jpg",
    author: "Dave Grohl",
    description: "dThe Storyteller: Tales of Life and Music",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81cM4vjCFES._AC_UL200_SR200,200_.jpg",
    author: "Bret Baier",
    description: "To Rescue the Republic: Ulysses S. Grant, the…",
  },
];

let itemsSelect = document.querySelectorAll("#item1");
let navbarSelect = document.querySelectorAll("#navVar1 a");

// $("#SignIn").click(function() {
//     alert($(".container"))
// })

// $("#item1").click(function(e) {
//     alert(e)
// })

// navbarSelect[0].addEventListener("click" , e => {
//     alert("Home");
// })

// navbarSelect[1].addEventListener("click" , e => {
//     alert("Favorite");
// })

// navbarSelect[2].addEventListener("click" , e => {
//     alert("Sign In");
// })

itemsSelect.forEach((element) => {
  element.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "image":
        e.target.id;
        breal;
      case "icon-f":
        if (e.target.style.color == "black") {
            e.target.style.color = "red";
          } else {
            e.target.style.color = "black";
        }

        break;
    }

   
  });
});
