const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

        if(!isAsideClosed){
            shoppingCartContainer.classList.add('inactive');
        }


        desktopMenu.classList.toggle('inactive');
} 

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');

    }

        mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');


    
}

const productList = [];
productList.push({
    name: 'bicicleta',
    precio: 150,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'carro',
    precio: 15000,
    image: "https://images.pexels.com/photos/13297394/pexels-photo-13297394.jpeg?auto=compress&cs=tinysrgb&w=300",
});
productList.push({
    name: 'motocicleta',
    precio: 150,
    image: "https://images.pexels.com/photos/1143824/pexels-photo-1143824.jpeg?auto=compress&cs=tinysrgb&w=300",
});
productList.push({
    name: 'computadora',
    precio: 150,
    image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=300",
});

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

      function renderProducts(array){
        for(product of array){
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
        
            //product = {nombre, precio, image}
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
        
            const productInfoDiv = document.createElement('div');
        
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
        
            const productName = document.createElement('p');
            productName.innerText = product.name;
        
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
        
            const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
            //segunda fase
            productInfoFigure.appendChild(productImgCart);
        
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
        
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
        
            cardsContainer.appendChild(productCard);
        
        
        }
      }

      renderProducts(productList);