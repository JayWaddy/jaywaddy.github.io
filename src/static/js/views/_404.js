import Template from "./Template.js";

export default class extends Template {
    constructor() {
        super();
        this.setTitle("Jay Waddy | 404");
    }

    async getHTML() {
        return `
        <div class="page-section-title wrapper">
            <h1 class="content">404 header</h1>
            <h3 class="main-subheader content">404 page description subheader</h3>
        </div>
        `;
    }
}