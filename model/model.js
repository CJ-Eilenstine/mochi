export var wordArray = ["home", "about", "flavors"];

// Url Change

export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log(hashTag + " " + pageID);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      $("#app").html(data);
    });
  } else {
    $.get(`pages/home.html`, function (data) {
      $("#app").html(data);
    });
  }
}

// Login/Out

var loggedInOut = false;

export function setLoggedInOut() {
  if (loggedInOut == true) {
    loggedInOut = false;
    $("nav .cart a").html("Log In");
    console.log("Hello");
  } else {
    loggedInOut = true;
    $("nav .cart a").html("Log Out");
  }
}

export function getLoggedInOut() {
  return loggedIn;
}
