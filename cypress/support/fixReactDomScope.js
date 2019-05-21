import ReactDom from 'react-dom';
export default function fixReactDomScope(win) {
	if (win.ReactDOM !== ReactDom) {
		win.ReactDOM = ReactDom;
	}
}
