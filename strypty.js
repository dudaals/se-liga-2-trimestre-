// Image Gallery for Hero Section
document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const images = heroImage.dataset.images.split(',');
        let currentImageIndex = 0;

        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            heroImage.src = images[currentImageIndex];
        }, 5000); // Change image every 5 seconds
    }

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            alert(`${productName} foi adicionado ao carrinho!`);
        });
    });
});
