import App from './components/App.html';
import './scss/main.scss';

const app = new App({
	target: document.body,
	data: {
		name: 'world'
	}
});

export default app;