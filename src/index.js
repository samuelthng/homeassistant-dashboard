import 'antd/dist/antd.dark.min.css';
import App from './App';
import reactWebComponent from '@helpers/reactWebComponent';
customElements.define('react-panel', reactWebComponent(App));
