document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const price = parseInt(product.dataset.price);
            const name = product.querySelector('h2').textContent;

            cart.push({ name, price });
            updateCart();
        });
    });

    document.getElementById('empty-cart').addEventListener('click', () => {
        cart.length = 0;
        updateCart();
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Su pedido ha sido procesado');
        cart.length = 0;
        updateCart();
    });

    document.getElementById('subscription-form').addEventListener('submit', event => {
        event.preventDefault();
        alert('Se ha suscrito exitosamente y puede seguir navegando en la página.');
        event.target.reset();
    });

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - USD ${item.price}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.addEventListener('click', () => {
                cart.splice(index, 1);
                updateCart();
            });
            li.appendChild(removeButton);
            cartItems.appendChild(li);
            total += item.price;
        });
        totalPrice.textContent = total;
    }
});

