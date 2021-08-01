import "./font.css";
import "./index.css";
import 'antd/dist/antd.dark.min.css'
import React from "react";
import ReactDOM from "react-dom";
import createCache from "@emotion/cache";
import properties from "@helpers/HomeAssistantPropsMap";
import App from "./App";

const reactWebComponent = (Component) =>
  class ReactElement extends HTMLElement {
    constructor() {
      super();
      Object.defineProperties(this, properties);
      this.initializeShadowDom();
      this.observer = new MutationObserver(() => {
        this.head.replaceWith(document.getElementsByTagName("head")[0].cloneNode(true));
      });
    }

    initializeShadowDom() {
      this.initializeRoot();
      this.shadow = this.attachShadow({ mode: "open" });
      this.shadow.appendChild(this.html);
    }

    initializeRoot() {
      this.html = document.createElement("html");
      this.head = document.getElementsByTagName("head")[0].cloneNode(true);
      this.html.appendChild(this.head);
      this.body = document.createElement("body");
      this.root = document.createElement("div");
      this.root.setAttribute("id", "root");
      this.body.appendChild(this.root);
      this.html.appendChild(this.body);
    }

    connectedCallback() {
      this.observer.observe(document.getElementsByTagName("head")[0], {
        attributes: true,
        childList: true,
        subtree: true
      });
      ReactDOM.render(<Component />, this.root);
    }

    disconnectedCallback() {
      this.observer.disconnect();
      ReactDOM.unmountComponentAtNode(this.root);
    }
  };
customElements.define("react-panel", reactWebComponent(App));
