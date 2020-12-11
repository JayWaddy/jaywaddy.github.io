import Home from "./views/Home.js"
import Work from "./views/Work.js";
import About from "./views/About.js";
import Contact from "./views/Contact.js";
import _404 from "./views/_404.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/404", view: _404 },
        { path: "/", view: Home },
        { path: "/work", view: Work },
        { path: "/about", view: About },
        { path: "/contact", view: Contact }
    ];

    const possibleMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = possibleMatches.find(possibleMatch => possibleMatch.isMatch);

    if (!match) {
        match = { route: routes[0], isMatch: true };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHTML();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", event => {
        if (event.target.matches("[data-link]")) {
            event.preventDefault();
            navigateTo(event.target.href);
        }
    });

    router();
});