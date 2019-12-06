function toggleNextP(item) {
	var target = item.nextElementSibling;
	target.classList.toggle('d-none');
	console.log(target);
}

function closeNav() {
	var target = document.getElementById('navbarNav');
	target.classList.toggle('show');
}