class MyCounter extends HTMLElement {
    constructor() {
     super();
     this.shadow = this.attachShadow({mode: "open"}); //open to access component
    }

    connectedCallback(callback) {
        this.render()
    }

    render() {
       this.shadow.innerHTML = `
       <H1>counter</H1>
       ${this.count}
       <button id='btn'> Increment </button>
       ` ;
    }
}


customElements.define('my-counter', MyCounter)