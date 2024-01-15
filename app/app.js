import * as Model from "../model/model.js"

import { setLoggedInOut } from "../model/model.js";

function initURLListener() {
$(window).on('hashchange', Model.changeRoute);
Model.changeRoute();
}

$(document).ready(function () {
initURLListener();
});

// Login/out

function initListeners() {
    $("nav .cart a").on("click", (e) => {
        e.preventDefault();        setLoggedInOut();
        console.log("Hello")
    })
}
$(document).ready(function () {
    initListeners();
});