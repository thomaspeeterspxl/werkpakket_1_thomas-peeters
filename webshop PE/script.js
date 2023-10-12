let filterSelect = document.getElementById("filter");
let producten = document.querySelectorAll("article[data-eigenschap]");

filterSelect.addEventListener("change", filterProducten);

function filterProducten() {
    const selectedValue = filterSelect.value;

    producten.forEach(product => {
        if (selectedValue === "all" || product.getAttribute("data-eigenschap") === selectedValue) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}