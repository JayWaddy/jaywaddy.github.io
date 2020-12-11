const section = document.querySelector(".page-section");
const entries = [
    {
        title: "Project One",
        services: ["Web app", "Redesign", "UX/UI"], 
        technologies: ["React"],
        description: "This is a short description about the project",
        backgroundURL: null,
        path: "one.html"
    },
    {
        title: "Project Two",
        services: ["Web app", "Redesign", "UX/UI"], 
        technologies: ["React"],
        description: "This is another short description about the project",
        backgroundURL: null,
        path: "two.html"
    }
];

class WorkEntry {
    constructor(title, services, technologies, description, backgroundURL, path) {
        this.title = title;
        this.services = services;
        this.technologies = technologies;
        this.description = description;
        this.background = URL;
        this.path = path;
    }
    draw() {
        const workEntry = document.createElement("div");
        workEntry.innerHTML = `
        <div class="work-entry content">
            <div class="wrapper">
                <a href="/work/${this.path}"><h3 class="work-entry-title work-entry-transition">${this.title}</h3></a>
            </div>
            <div class="work-entry-content">
                <span class="work-entry-number">${this.title.toUpperCase()}</span>
                <div class="work-entry-background"></div>
                <span class="work-entry-number outline">${this.title.toUpperCase()}</span>
                <div class="work-entry-transition wrapper">
                    <div class="work-entry-details">
                        <div>
                            <h3>Services</h3>
                            <p>${this.services.join(", ")}</p>
                        </div>
                        <div>
                            <h3>Technologies</h3>
                            <p>${this.technologies.join(", ")}</p>
                        </div>
                    </div>
                    <p class="work-entry-description">${this.description}</p>
                    <button class="secondary-button">Preview</button>
                </div>
            </div>
        </div>`;
        section.appendChild(workEntry);
    }
}

for (let i = 0; i < entries.length; i++) {
    new WorkEntry(
        entries[i].title,
        entries[i].services,
        entries[i].technologies,
        entries[i].description,
        entries[i].backgroundURL,
        entries[i].path
    ).draw();
}