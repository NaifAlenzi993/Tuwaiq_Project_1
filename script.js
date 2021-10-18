// Books Show on page
let Books = [
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81kosCB1luL._AC_UL200_SR200,200_.jpg",
    author: "Dave Grohl",
    description: "The Storyteller: Tales of Life and Music",

  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81cM4vjCFES._AC_UL200_SR200,200_.jpg",
    author: "Bret Baier",
    description:
      "To Rescue the Republic: Ulysses S. Grant, the Fragile Union, and the Crisis of 1876",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81GsPCydFPL._AC_UL200_SR200,200_.jpg",
    author: "Adam Schiff",
    description:
      "Midnight in Washington: How We Almost Lost Our Democracy and Still Could",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/51x7FKMxMqL._AC_UL200_SR200,200_.jpg",
    author: "Victor Davis Hanson",
    description:
      "The Dying Citizen: How Progressive Elites, Tribalism, and Globalization Are Destroying the Idea of America",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81m23idLXQL._AC_UL200_SR200,200_.jpg",
    author: "Liane Moriarty",
    description: "Apples Never Fall",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/910N36lR%2BkL._AC_UL200_SR200,200_.jpg",
    author: "Frank Herbert",
    description: "Dune (Dune Chronicles, Book 1)",
  }
];

let bookLike = []

let mainItems = $("#items");
let mainItemsF = $("#items-f");
let itemsSelect = document.querySelectorAll("#item1");
let navbarSelect = document.querySelectorAll("#navVar1 a");

let transTime = 150;

let pages = [
  $("#bookslist"),
  $("#Favoritelist"),
  $(".signup-form"),
  $(".login-form"),
];

function renderArr(array , DivSelect , color = "") {
  for (let i = 0; i < array.length; i++) {
    const divm = $(`<div class="col-6" id="item1">
    <img id="image" src="${array[i].url}" alt="" whi>
    <span id="infoBook">
        <h4>${array[i].author}</h4>
        <p href="#">${array[i].description}</p>
    </span>   
    <i id = "icon-f" class="fas fa-star icon-f" style = "color: ${color}"></i>
    </div>`);
    DivSelect.append(divm);
  }
}

renderArr(Books , mainItems);

function Clear() {
  document.querySelector(".login-form #username").value = "";
  document.querySelector(".login-form #pass").value = "";

  document.querySelector(".signup-form #username").value = "";
  document.querySelector(".signup-form #mail").value = "";
  document.querySelector(".signup-form #pass").value = "";
}

//event function btn
$("#SignIn").click(function () {
  $("#bookslist").hide(transTime);
  $(".signup-form").hide(transTime);
  $(".login-form").css("display", "flex");
  $("#Favoritelist").hide(transTime);

  Clear();
});

$("#home").click(function (e) {
  $("#bookslist").show();
  $(".login-form").hide(transTime);
  $(".signup-form").hide(transTime);
  $("#Favoritelist").hide(transTime);

  Clear();
});

$("#SignUp").click(function () {
  $("#bookslist").hide(transTime);
  $(".login-form").hide(transTime);
  $(".signup-form").css("display", "flex");
  $("#Favoritelist").hide(transTime);

  Clear();
});

$("#Favorite").click(function () {
  $("#bookslist").hide(transTime);
  $(".signup-form").hide(transTime);
  $(".login-form").hide(transTime);
  $("#Favoritelist").show();

  Clear();
});

// Add like Book + change color icon
let heartSelect = document.querySelectorAll("#items .icon-f");
heartSelect.forEach((element , i) => {
  element.addEventListener("click", (e) => {
    if (e.target.style.color == "black") {
      e.target.style.color = "gold";
      // for (u in bookLike) {
        // if (bookLike[u].url == Books[i].url) {
          
          bookLike.push({url: Books[i].url, author: Books[i].author , description: Books[i].description});
          renderArr([{url: Books[i].url, author: Books[i].author , description: Books[i].description}] , mainItemsF , "gold");
        // }
          
      // }
      
    } else {
      
      e.target.style.color = "black";

      bookLike.splice()

    }
  });
});



// itemsSelect.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     switch (e.target.id) {
//       case "image":
//         e.target.id;
//         breal;
//       case "icon-f":
//         if (e.target.style.color == "black") {
//           e.target.style.color = "red";
//         } else {
//           e.target.style.color = "black";
//         }

//         break;
//     }
//   });
// });
$("#btn-login").click(() => {
  let user = document.querySelector(".login-form #username");
  let pass = document.querySelector(".login-form #pass");

  console.log(user.value + " " + pass.value);
});

//Sign Up
$("#btn-Rigstry").click(() => {
  let user = document.querySelector(".signup-form #username");
  let mail = document.querySelector(".signup-form #mail");
  let pass = document.querySelector(".signup-form #pass");
});
