import { createElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Markdown from 'react-markdown';

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(createElement(App, {}, null));

function App() {
	return createElement("div", {className: "app"}, createElement(Navigation), createElement(Content))
}

function Navigation() {
	return null;
}

function Content() {
	const [markdown, setMarkdown] = useState("");

	useEffect(() => {
		void (async () => {
			try {
				const resp = await fetch("./README.md");
				const text = await resp.text();
				setMarkdown(text);
			} catch (e) {
				alert(e);
			}
		})();
	}, []);

	return (
		createElement("div", {className: "content"}, createElement(Markdown, {}, markdown))
	);
}
