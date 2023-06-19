/**
 * Represents a custom counter component.
 * @extends HTMLElement
 */
class MyCounter extends HTMLElement {
    /**
     * Constructs a new instance of the MyCounter class.
     */
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" }); //'open' to access this shadowDOM via this component.
    }
  
    /**
     * Gets the count value.
     * @returns {string} The current count value.
     */
    get count() {
      return this.getAttribute("count");
    }
  
    /**
     * Sets the count value.
     * @param {string} val - The new count value to set.
     */
    set count(val) {
      this.setAttribute("count", val);
    }
  
    /**
     * Specifies the attributes to be observed for changes.
     * @returns {string[]} An array of attribute names to observe.
     */
    static get observedAttributes() {
      return ["count"];
    }
  
    /**
     * Callback called when an observed attribute has changed.
     * @param {string} prop - The name of the attribute that changed.
     * @param {string} oldVal - The previous value of the attribute.
     * @param {string} newVal - The new value of the attribute.
     */
    attributeChangedCallback(prop, oldVal, newVal) {
      if (prop === "count") {
        this.render();
        let btn = this.shadow.querySelector("#btn");
        btn.addEventListener("click", this.inc.bind(this));
      }
    }
  
    /**
     * Increments the count value by 1.
     */
    inc() {
      this.count++;
    }
  
    /**
     * Callback called when the element is connected to the DOM.
     */
    connectedCallback() {
      this.render();
      let btn = this.shadow.querySelector("#btn");
      btn.addEventListener("click", this.inc.bind(this));
    }
  
    /**
     * Renders the counter component.
     */
    render() {
      this.shadow.innerHTML = `
         <h1>Counter</h1>
         ${this.count}
         <button id='btn'>Increment</button>
         `;
    }
  }
  
  customElements.define("my-counter", MyCounter);
  