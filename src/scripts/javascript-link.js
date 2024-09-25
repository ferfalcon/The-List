import javascriptLogo from '/javascript.svg';

export function javascriptLink() {
	document.querySelector('[data-footer]').innerHTML = `
		<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="js-link" target="_blank">
			<img class="logo" src="${javascriptLogo}" alt="JavaScript logo" />
		</a>
	`;
}
