/* IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSION */
(function init() {
    console.log('init();');

    var loadedImageShopCart = false;

    console.log('loadedImageShopCart = ' + loadedImageShopCart);

    /* SHOPPING CART CLICK */
    document.getElementById("shoppingCart").addEventListener("click", function() {
        
        console.log('Shopping Cart clicked');

        if (!loadedImageShopCart) {

            loadImageCart();
            loadedImageShopCart = true;
            console.log('loadedImageShopCart = ' + loadedImageShopCart);
        }

        // ADD/HIDE ELEMENTS FROM DOM @INIT
        hideElementShoppingCart();

    });

    /* LOAD IMAGE SHOPPING CART ARRAY FUNCTION ON CLICK*/
    var loadImageCart = function () {
        var images = [
            {
                name: 'Bag',
                price: 25,
                quantity: 3,
                imgURL: '/images/mochi.jpg'
            },
    
            {
                name: 'PC',
                price: 50,
                quantity: 5,
                imgURL: '/images/laptop.jpg'
            },
    
            {
                name: 'Mouse',
                price: 67,
                quantity: 8,
                imgURL: '/images/mouse.jpg'
            },
        ];

        /* PRECONDITION ARRAY OF 3 IMAGES */
        loadImagesArray(images);        
    };

    /* HOME MENU */
    document.getElementById("homeMenu").addEventListener("click", function() {
        
        console.log('Menu clicked');

        // ADD/HIDE ELEMENTS FROM DOM @MENU
        hideElementMenu();

    });

    /* CATALOG MENU */
    document.getElementById("catalogMenu").addEventListener("click", function() {

        alert('Catalog');
    });

    /* ABOUT MENU */
    document.getElementById("aboutMenu").addEventListener("click", function() {

        alert('About');
    });

    /* CONTACT MENU */
    document.getElementById("contactMenu").addEventListener("click", function() {

        alert('Contact');
    });

    /* loadImagesArray(images) function */
    function loadImagesArray(images) {

        console.log('logic for loadImagesArray in place...');

        for (var i=0; i< images.length; i++) {

            var img = new Image();
            img.src = images[i].imgURL;
            img.name = images[i].name;
            img.classList.add("shoppingCartImageClass");

            var name = images[i].name;

            var price = images[i].price;

            var quantity = images[i].quantity;

            loadImageItemValues(images, img, name, price, quantity, i);

            console.log('loading image ' + i + ': ' + JSON.stringify(images[i]));
        }
    }

    function loadImageItemValues(images, img, name, price, quantity, i) {

        if (images[i] == images[0]) {

            document.getElementById('shoppingCartItem1').appendChild(img);

            var nameItem1 = document.getElementById('shoppingCartItemName1');
            nameItem1.innerHTML = name;

            var priceItem1 = document.getElementById('shoppingCartItemPrice1');
            priceItem1.innerHTML = '<h6>Price</h6> $' + price;

            var qtyItem1 = document.getElementById('shoppingCartItemQty1');
            qtyItem1.innerHTML = '<h6>Qty</h6><input type="number" style="width:55px;" value="' + 1 + '">'

            var totalItem1 = document.getElementById('shoppingCartItemTotal1');
            totalItem1.innerHTML = '<h6>Total</h6> $' + price;

        } else if (images[i] == images[1]) {

            document.getElementById('shoppingCartItem2').appendChild(img);

            var nameItem2 = document.getElementById('shoppingCartItemName2');
            nameItem2.innerHTML = name;

            var priceItem2 = document.getElementById('shoppingCartItemPrice2');
            priceItem2.innerHTML = '<h6>Price</h6> $' + price;

            var qtyItem2 = document.getElementById('shoppingCartItemQty2');
            qtyItem2.innerHTML = '<h6>Qty</h6><input type="number" style="width:55px;" value="' + 1 + '">'

            var totalItem2 = document.getElementById('shoppingCartItemTotal2');
            totalItem2.innerHTML = '<h6>Total</h6> $' + price;
            
        } else {

            document.getElementById('shoppingCartItem3').appendChild(img);

            var nameItem3 = document.getElementById('shoppingCartItemName3');
            nameItem3.innerHTML = name;

            var priceItem3 = document.getElementById('shoppingCartItemPrice3');
            priceItem3.innerHTML = '<h6>Price</h6> $' + price;

            var qtyItem3 = document.getElementById('shoppingCartItemQty3');
            qtyItem3.innerHTML = '<h6>Qty</h6><input type="number" style="width:55px;" value="' + 1 + '">';

            var totalItem3 = document.getElementById('shoppingCartItemTotal3');
            totalItem3.innerHTML =  '<h6>Total</h6> $' + price;
        
        }
    }

    /* ADD/HIDE ELEMENTS FROM DOM */

    function hideElementShoppingCart() {

        // get searchBar and style Class to hide element in DOM
        document.getElementById('searchBar').classList.add("hideFromDOM");

        // get mainContainer and style Class to hide element in DOM
        document.getElementById('mainContainer').classList.add("hideFromDOM");
       
        // get shoppingCartItemList and style Class to add in element DOM
        document.getElementById('shoppingCartItemList').classList.remove("hideFromDOM");
    }

    function hideElementMenu() {
        
        // get shoppingCartItemList and style Class to hide element in DOM
        document.getElementById('shoppingCartItemList').classList.add("hideFromDOM");

        // get searchBar and style Class to add element in DOM
        document.getElementById('searchBar').classList.remove("hideFromDOM");

        // get mainContainer and style Class to add element in DOM
        document.getElementById('mainContainer').classList.remove("hideFromDOM");
    }

})();