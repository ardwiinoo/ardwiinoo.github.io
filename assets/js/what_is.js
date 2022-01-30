
function show() {
	let x = document.getElementById("what_is");

	if(x.style.display == 'none') {
		x.style.display = 'block';
		window.onscroll = () => { window.scroll(0, 0); };
	}
	else {
		x.style.display = 'none';
		window.onscroll = () => {};
	}
}