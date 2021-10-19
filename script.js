function rndStr(len, charSet) {
  charSet = charSet || "0123456789";
  var randomString = "";
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

// Books Show on page
let Books = [
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81kosCB1luL._AC_UL200_SR200,200_.jpg",
    author: "Dave Grohl",
    description: "The Storyteller: Tales of Life and Music",
    color: "black",
    idf: rndStr(6),
    idx: rndStr(6),
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81cM4vjCFES._AC_UL200_SR200,200_.jpg",
    author: "Bret Baier",
    description:
      "To Rescue the Republic: Ulysses S. Grant, the Fragile Union, and the Crisis of 1876",
    color: "black",
    idf: rndStr(6),
    idx: rndStr(6),
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81GsPCydFPL._AC_UL200_SR200,200_.jpg",
    author: "Adam Schiff",
    description:
      "Midnight in Washington: How We Almost Lost Our Democracy and Still Could",
    color: "black",
    idf: rndStr(6),
    idx: rndStr(6),
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/51x7FKMxMqL._AC_UL200_SR200,200_.jpg",
    author: "Victor Davis Hanson",
    description:
      "The Dying Citizen: How Progressive Elites, Tribalism, and Globalization Are Destroying the Idea of America",
    color: "black",
    idf: rndStr(6),
    idx: rndStr(6),
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81m23idLXQL._AC_UL200_SR200,200_.jpg",
    author: "Liane Moriarty",
    description: "Apples Never Fall",
    color: "black",
    idf: rndStr(6),
    idx: rndStr(6),
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/910N36lR%2BkL._AC_UL200_SR200,200_.jpg",
    author: "Frank Herbert",
    description: "Dune (Dune Chronicles, Book 1)",
    color: "black",
    idf: rndStr(6),
    idx: rndStr(6),
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81Ok1VQoXWS._AC_UL200_SR200,200_.jpg",
    author: "Vanderbilt: The Rise and Fall of an American…",
    description: "Anderson Cooper",
    idf: rndStr(6),
    idx: rndStr(6),
  },
];

let bookLike = [];

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

function renderArr(array, DivSelect, ShowX = false) {
  let codeX = "";

  for (let i = 0; i < array.length; i++) {
    if (ShowX == true) {
      codeX = `<i  id="icon-${array[i].idx}" class="far fa-times-circle .icon-x" style="color:red;width:20px;height:20px" ></i>`;
    }
    const divm = $(`<div class="col-6" id="item1">
      <img id="image" src="${array[i].url}" alt="" whi>
      <span id="infoBook" >
          <h4>${array[i].author}</h4>
          <p href="#">${array[i].description}</p>
      </span> 
      <p href="#" style = "font-size: 20px"><b>23$</b></p>  
      <i id = "icon-${array[i].idf}" class="fas fa-star icon-f" style = "color: ${array[i].color}"></i>
      
      ${codeX}
      </div>`);

    DivSelect.append(divm);
  }
}

renderArr(Books, mainItems, true);

function Clear() {
  document.querySelector(".login-form #username-login").value = "";
  document.querySelector(".login-form #pass-login").value = "";

  document.querySelector(".signup-form #username-signup").value = "";
  document.querySelector(".signup-form #mail-signup").value = "";
  document.querySelector(".signup-form #pass-signup").value = "";
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
  $("#Favoritelist").css("display", "flex");

  Clear();
});

// Add like Book + change color icon
let selectElementHome = document.querySelectorAll("#items");

//delete Element form Home
selectElementHome.forEach((e) => {
  e.addEventListener("click", (e) => {
    for (i in Books) {
      if ("icon-" + Books[i].idx == e.target.id) {
        Books.splice(i, 1);
        mainItems.html("");
        renderArr(Books, mainItems, true);
        break;
      }

      if ("icon-" + Books[i].idf == e.target.id) {
        if (e.target.style.color == "black") {
          e.target.style.color = "gold";
          mainItemsF.html("");
          Books[i].color = "gold";
          bookLike.push(Books[i]);
          renderArr(bookLike, mainItemsF);
        } else {
          bookLike.forEach((element, index) => {
            if (Books[i].url == element.url) {
              bookLike.splice(index, 1);
              mainItemsF.html("");
              renderArr(bookLike, mainItemsF);
              e.target.style.color = "black";
              Books[i].color = "black";
            }
          });
        }
      }
    }
  });
});

// starSelect.forEach((element , i) => {
//   element.addEventListener("click", (e) => {
//     if (e.target.style.color == "black") {

//       //after Like Clear Favoritelist Convert Color To Gold And Add Obj to BookLike[] And Make List
//           e.target.style.color = "gold";
//           mainItemsF.html("");
//           Books[i].color = "gold"
//           bookLike.push(Books[i]);
//           renderArr(bookLike , mainItemsF);

//     } else {

//       //unLike And Convert To Black and Delete Item from Favoritelist
//       bookLike.forEach((element,index) => {
//         if (Books[i].url == element.url) {
//           bookLike.splice(index,1);
//           mainItemsF.html("");
//           renderArr(bookLike , mainItemsF);
//           e.target.style.color = "black";
//           Books[i].color = "black"
//         }
//       });

//     }
//   });
// });

// //Delete Book From Home
// let xSelect = document.querySelectorAll("#icon-x");
// xSelect.forEach((element , i) => {
//   element.addEventListener("click", (e) => {

//       console.log(Books[i]);
//       Books.splice(i,1);
//       mainItems.html("");
//       renderArr(Books, mainItems , true);

//   })
// });

// let starSelectF = document.querySelectorAll("#items-f");
// let home = document.getElementById("#items");
// starSelectF.forEach((element , i) => {
//   element.addEventListener("click", (e) => {
//     switch (e.target.id) {
//       case "icon-f":
//         if (e.target.style.color == "gold") {
//           for (o in Books) {
//             if (bookLike[i].url == Books[o].url) {
//               bookLike.splice(i, 1);
//               Books[o].color = "black";
//               //clear fav list
//               mainItemsF.html("");
//               renderArr(bookLike, mainItemsF);

//               //clear home
//               mainItems.html("");
//               renderArr(Books, mainItems , true);
//               break;
//             }
//           }
//         }

//         break;
//     }
//   });
// });

// starSelectF.forEach((element , i) => {
//   element.addEventListener("click", (e) => {
//     console.log(starSelectF);
//     if (e.target.style.color == "gold") {

//       console.log("GDFHGHD");

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
