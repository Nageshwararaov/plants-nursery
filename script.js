const productButtons = document.querySelectorAll('.product');
const productDetails = document.querySelector('.product-details');
const productName = document.getElementById('productName');
const productDescription = document.getElementById('productDescription');

productButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const name = button.querySelector('h2').textContent;
        const description = button.querySelector('p').textContent;

        productName.textContent = name;
        productDescription.textContent = description;
        productDetails.style.display = 'block';
    });
});

const categoryButtons = document.querySelectorAll('.categories button');
categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const category = button.id;

        productButtons.forEach((product) => {
            const productCategory = product.getAttribute('data-category');

            if (category === productCategory || category === 'all') {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
