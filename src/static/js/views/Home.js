import Template from "./Template.js";

export default class extends Template {
    constructor() {
        super();
        this.setTitle("Jay Waddy | Home");
    }

    async getHTML() {
        return `
            <div id="home" class="wrapper">
                <div class="site-title">
                    <h1 class="original-text content">Main header</h1>
                    <h3 class="content">Application description subheader</h3>
                </div>
                <div class="scroll-icon-wrapper content">
                    <p class="content">Swipe to explore</p>
                    <span class="scroll-icon content"><span class="scroll-icon-ball"></span></span>
                </div>
            </div>
        `;
    }
}