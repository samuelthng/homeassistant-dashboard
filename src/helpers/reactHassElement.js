import { createElement } from 'react';
import ReactDOM from 'react-dom';

// Small helper function to generate custom elements that will render the passed
// in React component and forwards the Home Assistant panel properties.
export default function ReactHassElement(component, properties = null) {
	return class extends HTMLElement {
		constructor() {
			super();
			this.mount = this.createMountPoint();
			this.attachShadow({ mode: 'open' }).appendChild(this.mount);
			Object.defineProperties(this, properties);
		}
		connectedCallback() {
			ReactDOM.render(createElement(component), this);
		}
		disconnectedCallback() {
			ReactDOM.unmountComponentAtNode(this);
		}

		createMountPoint() {
			const mount = document.createElement('div');
			mount.setAttribute('id', 'react-panel-mount');
			return mount;
		}
	};
}
