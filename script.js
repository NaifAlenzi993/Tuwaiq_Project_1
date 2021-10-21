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
    price: "19 $",
    idf: rndStr(6),
    idx: rndStr(6),
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81cM4vjCFES._AC_UL200_SR200,200_.jpg",
    author: "Bret Baier",
    description:
      "To Rescue the Republic: Ulysses S. Grant, the Fragile Union, and the Crisis of 1876",
    color: "black",
    price: "60 $",
    idf: rndStr(6),
    idx: rndStr(6),
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81GsPCydFPL._AC_UL200_SR200,200_.jpg",
    author: "Adam Schiff",
    description:
      "Midnight in Washington: How We Almost Lost Our Democracy and Still Could",
    color: "black",
    price: "51 $",
    idf: rndStr(6),
    idx: rndStr(6),
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/51x7FKMxMqL._AC_UL200_SR200,200_.jpg",
    author: "Victor Davis Hanson",
    description:
      "The Dying Citizen: How Progressive Elites, Tribalism, and Globalization Are Destroying the Idea of America",
    color: "black",
    price: "35 $",
    idf: rndStr(6),
    idx: rndStr(6),
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81m23idLXQL._AC_UL200_SR200,200_.jpg",
    author: "Liane Moriarty",
    description: "Apples Never Fall",
    color: "black",
    price: "20 $",
    idf: rndStr(6),
    idx: rndStr(6),
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/910N36lR%2BkL._AC_UL200_SR200,200_.jpg",
    author: "Frank Herbert",
    description: "Dune (Dune Chronicles, Book 1)",
    color: "black",
    price: "55 $",
    idf: rndStr(6),
    idx: rndStr(6),
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81Ok1VQoXWS._AC_UL200_SR200,200_.jpg",
    author: "Vanderbilt: The Rise and Fall of an American…",
    description: "Anderson Cooper",
    price: "43 $",
    idf: rndStr(6),
    idx: rndStr(6),
  },
];

// if (localStorage["bookLike"] !== null) {
// let ppp = JSON.parse(localStorage["bookLike"])
// console.log(ppp);
// }

let bookLike = [];

let mainItems = $("#items");
let mainItemsF = $("#items-f");
let itemsSelect = document.querySelectorAll("#item1");
let navbarSelect = document.querySelectorAll("#navVar1 a");

let transTime = 150;

let users = [
  {
    username: "admin",
    mail: "admin@admin.cc",
    pass: "admin",
    admin: true,
    fav: bookLike,
  },
];
let userOnline = [];

// console.log(localStorage.bookLike.color);

function mkHtmlFromArr(array, DivSelect, ShowX = false) {
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
      <p href="#" style = "font-size: 20px"><b>${array[i].price}</b></p>  
      <i id = "icon-${array[i].idf}" class="fas fa-star icon-f" style = "color: ${array[i].color}"></i>
      
      ${codeX}
      </div>`);

    DivSelect.append(divm);
  }
}

// console.log(localStorage.userOnline);
if (localStorage.userOnline == null) {
  mkHtmlFromArr(bookLike, mainItemsF);
  mkHtmlFromArr(Books, mainItems);
} else {
  $("#SignOut").show();
  $("#SignOut").css("color", "red");

  $("#SignIn").hide();
  $("#SignUp").hide();
  $("#Addbook").show();
  $("#bookslist").css("display", "flex");
  $(".signup-form").hide(transTime);
  $(".login-form").hide(transTime);
  $(".form-addbook").hide(transTime);
  $("#Favoritelist").hide(transTime);

  let ooo = JSON.parse(localStorage.userOnline);
  console.log(ooo);

  mainItems.html("");
  // console.log(localStorage.userOnline);
  mkHtmlFromArr(Books, mainItems, true);
  mkHtmlFromArr(bookLike, mainItemsF);
}

function Clear() {
  document.querySelector(".login-form #username-login").value = "";
  document.querySelector(".login-form #pass-login").value = "";

  document.querySelector(".signup-form #username-signup").value = "";
  document.querySelector(".signup-form #mail-signup").value = "";
  document.querySelector(".signup-form #pass-signup").value = "";

  document.querySelector(".form-addbook #url-image").value = "";
  document.querySelector(".form-addbook #author").value = "";
  document.querySelector(".form-addbook #description").value = "";
  document.querySelector(".form-addbook #price").value = "";
}

//event function btn
$("#Addbook").click(function () {
  $(".form-addbook").css("display", "flex");
  $("#bookslist").hide(transTime);
  $(".signup-form").hide(transTime);
  $(".login-form").hide(transTime);
  $("#Favoritelist").hide(transTime);

  Clear();
});

$("#SignIn").click(function () {
  $("#bookslist").hide(transTime);
  $(".signup-form").hide(transTime);
  $(".login-form").css("display", "flex");
  $("#Favoritelist").hide(transTime);
  $(".form-addbook").hide(transTime);

  Clear();
});

$("#home").click(function (e) {
  $("#bookslist").show();
  $(".login-form").hide(transTime);
  $(".signup-form").hide(transTime);
  $("#Favoritelist").hide(transTime);
  $(".form-addbook").hide(transTime);
  Clear();
});

$("#SignUp").click(function () {
  $("#bookslist").hide(transTime);
  $(".login-form").hide(transTime);
  $(".signup-form").css("display", "flex");
  $("#Favoritelist").hide(transTime);
  $(".form-addbook").hide(transTime);

  Clear();
});

$("#Favorite").click(function () {
  $("#bookslist").hide(transTime);
  $(".signup-form").hide(transTime);
  $(".login-form").hide(transTime);
  $(".form-addbook").hide(transTime);
  $("#Favoritelist").css("display", "flex");

  Clear();
});

// Add like Book + change color icon
let selectElementHome = document.querySelectorAll("#items");

selectElementHome.forEach((e) => {
  e.addEventListener("click", (e) => {
    for (i in Books) {
      if ("icon-" + Books[i].idx == e.target.id) {
        //delete Element form Home & Fav

        bookLike.forEach((element, index) => {
          if (element.idx == Books[i].idx) {
            bookLike.splice(index, 1);
            mainItemsF.html("");
            mkHtmlFromArr(bookLike, mainItemsF);
          }
        });

        Books.splice(i, 1);
        mainItems.html("");

        mkHtmlFromArr(Books, mainItems, true);

        break;
      }

      if ("icon-" + Books[i].idf == e.target.id) {
        if (e.target.style.color == "black") {
          // like
          e.target.style.color = "gold";
          mainItemsF.html("");
          Books[i].color = "gold";
          bookLike.push(Books[i]);
          localStorage.bookLike = JSON.stringify(bookLike);
          mkHtmlFromArr(bookLike, mainItemsF);
        } else {
          bookLike.forEach((element, index) => {
            if (Books[i].url == element.url) {
              // Unlike
              bookLike.splice(index, 1);
              mainItemsF.html("");
              mkHtmlFromArr(bookLike, mainItemsF);
              localStorage.bookLike = "";
              localStorage.bookLike = JSON.stringify(bookLike);
              e.target.style.color = "black";
              Books[i].color = "black";
            }
          });
        }
      }
    }
  });
});

let selectElementF = document.querySelectorAll("#items-f");

selectElementF.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    if (e.target.style.color == "gold") {
      for (o in bookLike) {
        if ("icon-" + bookLike[o].idf == e.target.id) {
          let indexOf = Books.indexOf(bookLike[o]);
          Books[indexOf].color = "black";
          bookLike.splice(o, 1);
          mainItemsF.html("");
          mkHtmlFromArr(bookLike, mainItemsF);

          mainItems.html("");

          mkHtmlFromArr(Books, mainItems, true);
        }
      }
    }
  });
});

function addBook() {
  let urlImage = document.querySelector(".form-addbook #url-image").value;
  let authorImage = document.querySelector(".form-addbook #author").value;
  let descriptionImg = document.querySelector(
    ".form-addbook #description"
  ).value;
  let priceBook = document.querySelector(".form-addbook #price").value;

  let newBook = {
    url: urlImage,
    author: authorImage,
    description: descriptionImg,
    price: priceBook,
    color: "black",
    idx: rndStr(6),
    idf: rndStr(6),
  };

  Books.push(newBook);

  mainItems.html("");

  mkHtmlFromArr(Books, mainItems, true);

  Clear();
}

function loginAcc() {
  let usernameVa = document.querySelector(".login-form #username-login").value;
  let passVa = document.querySelector(".login-form #pass-login").value;
  let result = $("#result");

  let localsrotage = localStorage.static;
  if (localsrotage == null) {
    result.html(`<p id="result"> error 10 </p>`);
    result.css("color", "red");
    return null;
  }

  let staticLocal = JSON.parse(localsrotage);

  for (i in staticLocal) {
    if (
      staticLocal[i].username == usernameVa &&
      staticLocal[i].pass == passVa
    ) {
      result.html(`<p id="result"> login in </p>`);
      result.css("color", "green");
      userOnline.push(staticLocal);

      $("#SignOut").show();
      $("#SignOut").css("color", "red");

      $("#SignIn").hide();
      $("#SignUp").hide();
      $("#Addbook").show();
      $("#bookslist").css("display", "flex");
      $(".signup-form").hide(transTime);
      $(".login-form").hide(transTime);
      $(".form-addbook").hide(transTime);
      $("#Favoritelist").hide(transTime);

      mainItems.html("");

      mkHtmlFromArr(Books, mainItems, true);

      localStorage.userOnline = JSON.stringify(userOnline);

      result.html(`<p id="result"> wlcome to login </p>`);
      result.css("color", "black");

      break;
    } else {
      result.html(`<p id = "result" > *error </p>`);
      result.css("color", "red");
      break;
    }
  }
}

function addNewAccount() {
  let usernameVar = document.querySelector(
    ".signup-form #username-signup"
  ).value;
  let mailVar = document.querySelector(".signup-form #mail-signup").value;
  let passVar = document.querySelector(".signup-form #pass-signup").value;

  let newAccount = {
    username: usernameVar,
    mail: mailVar,
    pass: passVar,
    admin: false,
    fav: bookLike,
  };
  users.push(newAccount);

  localStorage["static"] = JSON.stringify(users);
}

function signOut() {
  userOnline = [];

  localStorage.removeItem("userOnline");
  $("#SignIn").show();
  $("#SignUp").show();
  $("#SignOut").hide();
  $("#Addbook").hide();
  $("#bookslist").css("display", "flex");
  $(".signup-form").hide(transTime);
  $(".login-form").hide(transTime);
  $(".form-addbook").hide(transTime);
  $("#Favoritelist").hide(transTime);
  mainItems.html("");
  mkHtmlFromArr(Books, mainItems);
}

// $("#btn-login").click(() => {
//   let user = document.querySelector(".login-form #username");
//   let pass = document.querySelector(".login-form #pass");

//   console.log(user.value + " " + pass.value);
// });

// //Sign Up
// $("#btn-Rigstry").click(() => {
//   let user = document.querySelector(".signup-form #username");
//   let mail = document.querySelector(".signup-form #mail");
//   let pass = document.querySelector(".signup-form #pass");
// });
