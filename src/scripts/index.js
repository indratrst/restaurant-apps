import "regenerator-runtime"; /* for async await transpile */
import $ from "jquery/dist/jquery.min.js";
// import main from "./views.js";
// import "./navbar";
// import "../../DATA.json";
import "../styles/main.css";
import "../styles/responsive.css";
import App from "./views/app";

const app = new App({
	button: document.querySelector("#menu"),
	drawer: document.querySelector("#drawer"),
	content: document.querySelector("#firstContent"),
});
window.addEventListener("hashchange", () => {
	app.renderPage();
});

window.addEventListener("load", () => {
	app.renderPage();
});

// $(document).on("DOMContentLoaded", main);
