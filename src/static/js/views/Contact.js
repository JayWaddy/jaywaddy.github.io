import Template from "./Template.js";

export default class extends Template {
    constructor() {
        super();
        this.setTitle("Jay Waddy | Contact");
    }

    async getHTML() {
        return `
        <div class="page-section-title wrapper">
            <h1 class="content">Contect header</h1>
            <h3 class="main-subheader content">Contect page description subheader</h3>
        </div>
        `;
    }
}