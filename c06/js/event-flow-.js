function showElement() {
    alert(this.innerHTML);
}

el = document.getElementById("list"); // <<< el is reused and not defined
el.addEventListener('click', showElement, false);

el = document.getElementById("item");
el.addEventListener('click', showElement, false);

el