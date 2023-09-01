(function isWebP() {
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {

      if (support == true) {
         document.querySelector('html').classList.add('webp');
      } else {
         document.querySelector('html').classList.add('no-webp');
      }
   });
})()
/*
const cart = document.querySelector('.cart')
const cartArr = [
   {
      name: "asd1"
   },
   {
      name: "asd2"
   },
   {
      name: "asd3"
   },
]
for (let i = 0; i < cartArr.length; i++) {
   let item = cartArr[i];
   cart.innerHTML += `
   <li class="cart__item">${item.name}</li>
   `
}
*/
const body = document.body;
const backdrop = document.querySelector('.backdrop')
function burgerWork() {
   const burgerBtn = document.querySelector('#burgerBtn')
   const burgerMenu = document.querySelector('.header-menu')
   const headerMobile = document.querySelector('.header-mobile')
   if (burgerBtn) {
      burgerBtn.addEventListener("click", () => {
         burgerBtn.classList.toggle("active")
         burgerMenu.classList.toggle("active")
         headerMobile.classList.toggle("active")
         body.classList.toggle("lock")
      })
   }
}
function cartWork() {
   renderCart()
   openCart()
}
let products = [
   {
      image: "cart1.jpg",
      title: "Браво-22 Snow Melinga / Magic Fog",
      category: "Межкомнатная дверь",
      price: "18 600 ₽",
      countInCart: 0,
      id: 12
   },
   {
      image: "cart2.jpg",
      title: "Браво-22 Snow Melinga",
      category: "Межкомнатная дверь",
      price: "18 600 ₽",
      countInCart: 0,
      id: 13
   },
   {
      image: "cart1.jpg",
      title: "Браво-22 Snow Melinga / Magic Fog",
      category: "Межкомнатная дверь",
      price: "18 600 ₽",
      countInCart: 0,
      id: 14
   },
   {
      image: "cart1.jpg",
      title: "Браво-22 Snow Melinga / Magic Fog",
      category: "Межкомнатная дверь",
      price: "18 600 ₽",
      countInCart: 0,
      id: 15
   },
   {
      image: "cart2.jpg",
      title: "Браво-22 Snow Melinga",
      category: "Межкомнатная дверь",
      price: "18 600 ₽",
      countInCart: 0,
      id: 16
   },
]
let cartProducts = [
]
function renderCart() {
   const cartLists = document.querySelectorAll('.header-cart__list')
   if (cartLists.length > 0) {
      for (let i = 0; i < cartLists.length; i++) {
         let cartList = cartLists[i];
         cartList.innerHTML = "";
         if (cartProducts.length > 0) {
            for (let i = 0; i < cartProducts.length; i++) {
               let cartProduct = cartProducts[i];
               cartList.innerHTML += `<li class="header-cart__item cart-item" id="${cartProduct.id}">
                  <div class="cart-item__main">
                     <div class="cart-item__image">
                        <img src="img/${cartProduct.image}" alt="">
                     </div>
                     <div class="cart-item__info">
                        <div class="cart-item__title">${cartProduct.title}</div>
                        <div class="cart-item__category">${cartProduct.category}</div>
                     </div>
                  </div>
                  <div class="cart-item__actions">
                     <div class="cart-item__price">${cartProduct.price}</div>
                     <div class="cart-item__count">
                        <button class="cart-item__btn cart-item__btn_decrease">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                              fill="none">
                              <path d="M12 8L4 8" stroke="#5A5C5F" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" />
                           </svg>
                        </button>
                        <span>${cartProduct.countInCart}</span>
                        <button class="cart-item__btn cart-item__btn_increase">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                              fill="none">
                              <path d="M12 8H4" stroke="#5A5C5F" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" />
                              <path d="M8 4L8 12" stroke="#5A5C5F" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" />
                           </svg>
                        </button>
                     </div>
                  </div>
               </li>`
            }
         } else {
            cartList.innerHTML = `<li class="cart-item">Корзина пуста</li>`
         }
      }
   }
   changeCountInCart()
}
function openCart() {
   const cartOpenBtns = document.querySelectorAll('#cartOpenBtn')
   const headerCarts = document.querySelectorAll('.header__cart')
   if (cartOpenBtns.length > 0) {
      for (let i = 0; i < cartOpenBtns.length; i++) {
         let cartOpenBtn = cartOpenBtns[i];
         cartOpenBtn.addEventListener("click", () => {
            const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";
            headerCarts.forEach(item => {
               item.classList.toggle("active")
            })
            backdrop.classList.toggle("active")
            if (body.classList.contains("lock")) {
               body.classList.remove("lock")
               document.querySelector('.header__body').style.paddingRight = 0;
               document.querySelector('main').style.paddingRight = 0;
            } else {
               body.classList.add("lock")
               document.querySelector('.header__body').style.paddingRight = lockPaddingValue;
               document.querySelector('main').style.paddingRight = lockPaddingValue;
            }

         })
      }
   }
}

function removeFromCart(id) {
   for (let i = 0; i < cartProducts.length; i++) {
      let cartProduct = cartProducts[i];
      if (id == cartProduct.id) {
         cartProducts.splice(i, 1)
      }
   }
   renderCart()
}
function changeCountInCart() {
   const plusButtons = document.querySelectorAll('.cart-item__btn_increase')
   const minusButtons = document.querySelectorAll('.cart-item__btn_decrease')
   if (plusButtons.length > 0) {
      for (let i = 0; i < plusButtons.length; i++) {
         let plusButton = plusButtons[i];
         let minusButton = minusButtons[i];
         plusButton.addEventListener("click", (e) => {
            let product = e.target.closest(".cart-item")
            let id = product.id;
            for (let i = 0; i < cartProducts.length; i++) {
               let cartProduct = cartProducts[i];
               if (id == cartProduct.id) {
                  cartProduct.countInCart++;
                  product.querySelector(".cart-item__count span").innerHTML = cartProduct.countInCart;
               }
            }
         })
         minusButton.addEventListener("click", (e) => {
            let product = e.target.closest(".cart-item")
            let id = product.id;
            for (let i = 0; i < cartProducts.length; i++) {
               let cartProduct = cartProducts[i];
               if (id == cartProduct.id) {
                  if (cartProduct.countInCart > 1) {
                     cartProduct.countInCart--;
                     product.querySelector(".cart-item__count span").innerHTML = cartProduct.countInCart;
                  } else {
                     cartProduct.countInCart--;
                     removeFromCart(id)
                  }
               }
            }
         })
      }
   }
}
function renderProducts() {
   const catalogList = document.querySelector('.catalog__list')
   if (catalogList) {
      catalogList.innerHTML = "";
      for (let i = 0; i < products.length; i++) {
         let product = products[i];
         catalogList.innerHTML += `
         <li class="catalog__item product-card" id="${product.id}">
                  <div class="product-card__header">
                     <ul class="product-card__labels">
                        <li class="product-card__label">Хит продаж</li>
                     </ul>
                     <ul class="product-card__actions">
                        <li class="product-card__action">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="none">
                              <mask id="path-1-inside-1_2616_2171" fill="white">
                                 <rect x="3" y="9" width="7" height="12" rx="1" />
                              </mask>
                              <rect x="3" y="9" width="7" height="12" rx="1" stroke="#AFB0B2" stroke-width="4"
                                 mask="url(#path-1-inside-1_2616_2171)" />
                              <mask id="path-2-inside-2_2616_2171" fill="white">
                                 <rect x="14" y="2" width="7" height="19" rx="1" />
                              </mask>
                              <rect x="14" y="2" width="7" height="19" rx="1" stroke="#AFB0B2" stroke-width="4"
                                 mask="url(#path-2-inside-2_2616_2171)" />
                           </svg>
                        </li>
                        <li class="product-card__action">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="none">
                              <path
                                 d="M16.5 3C19.538 3 22 5.5 22 9C22 14.8727 16.7211 18.6338 13.5446 20.5787C12.5997 21.1572 11.4003 21.1572 10.4554 20.5787C7.27886 18.6338 2 14.8727 2 9C2 5.5 4.5 3 7.5 3C9.36 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.934 18.604C13.815 18.048 14.61 17.495 15.354 16.903C18.335 14.533 20 11.943 20 9C20 6.64 18.463 5 16.5 5C15.424 5 14.26 5.57 13.414 6.414L12 7.828L10.586 6.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.656 4 9C4 11.944 5.666 14.533 8.645 16.903C9.39 17.495 10.185 18.048 11.066 18.603C11.2064 18.6917 11.3461 18.7787 11.4899 18.8669C11.8029 19.0589 12.197 19.0588 12.5101 18.867C12.6539 18.779 12.7936 18.6923 12.934 18.604Z"
                                 fill="#AFB0B2" />
                           </svg>
                        </li>
                     </ul>
                  </div>
                  <div class="product-card__image">
                     <img src="img/${product.image}" alt="">
                  </div>
                  <div class="product-card__info info-product">
                     <div class="info-product__header">
                        <div class="info-product__available">В наличии</div>
                        <div class="info-product__articul">Арт.: 127456</div>
                     </div>
                     <div class="info-product__naming">
                        <div class="info-product__title">${product.title}</div>
                        <div class="info-product__category">${product.category}</div>
                     </div>
                     <div class="info-product__main">
                        <button class="info-product__cart" id="addToCart">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="none">
                              <g clip-path="url(#clip0_2616_2154)">
                                 <path
                                    d="M1 1H5V15.5C5 15.7761 5.22386 16 5.5 16H19.1802C19.6569 16 20.0673 15.6635 20.1608 15.1961L21.8804 6.59806C21.9423 6.28866 21.7056 6 21.3901 6H5"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 <path
                                    d="M6 22C6.55228 22 7 21.5523 7 21C7 20.4477 6.55228 20 6 20C5.44772 20 5 20.4477 5 21C5 21.5523 5.44772 22 6 22Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 <path
                                    d="M17 22C17.5523 22 18 21.5523 18 21C18 20.4477 17.5523 20 17 20C16.4477 20 16 20.4477 16 21C16 21.5523 16.4477 22 17 22Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                 <clipPath id="clip0_2616_2154">
                                    <rect width="24" height="24" fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </button>
                        <div class="info-product__price">
                           <span class="actual">${product.price}</span>
                           <span class="old">18 600 ₽</span>
                        </div>
                     </div>
                     <a href="#" class="info-product__buy">
                        Купить в один клик
                     </a>
                  </div>
               </li>
         `
      }
   }
}
function addProductToCart() {
   let isInCart = false;
   const btns = document.querySelectorAll('#addToCart')
   if (btns.length > 0) {
      for (let i = 0; i < btns.length; i++) {
         let btn = btns[i];
         btn.addEventListener("click", (e) => {
            let productCard = e.target.closest(".product-card")
            let id = productCard.id;
            for (let i = 0; i < products.length; i++) {
               let product = products[i];
               if (id == product.id) {
                  if (cartProducts.length > 0) {
                     for (let j = 0; j < cartProducts.length; j++) {
                        let cartProduct = cartProducts[j];
                        if (id == cartProduct.id) {
                           console.log("already in cart")
                           isInCart = true;
                        }
                     }
                     if (!isInCart) {
                        console.log("added to cart")
                        product.countInCart++;
                        cartProducts.push(product)
                        renderCart()
                     } else {
                        console.log("count++")
                        product.countInCart++;
                     }
                  } else {
                     console.log("cart was empty, we added first product")
                     product.countInCart++;
                     cartProducts.push(product)
                  }
               }
            }
            renderCart()
            isInCart = false;
         })
      }
   }
}
document.addEventListener("DOMContentLoaded", () => {
   // products
   renderProducts()
   // header
   burgerWork()
   // cart
   cartWork()
   addProductToCart()
})





// Popup
const popupLinks = document.querySelectorAll(".modal__link");
const lockPadding = document.querySelectorAll(".lock-padding");
const popupCloseIcon = document.querySelectorAll(".modal__close");

let unlock = true;

const timeout = 500;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}




if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener("click", function (e) {
         popupClose(el.closest(".modal"));
         e.preventDefault();
      });
   }
}


function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector(".modal.open");
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add("open");
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest(".modal__content")) {
            popupClose(e.target.closest(".modal"));
         }
      })
   }
}
function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove("open");
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";

   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;
      }
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add("lock");


   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnLock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = "0px";
         }
      }
      body.style.paddingRight = "0px";
      body.classList.remove("lock");
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout)
}


document.addEventListener("keydown", function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector(".modal.open");
      popupClose(popupActive);
   }
})




// validation 
IMask(
   document.getElementById('phone'),
   {
      mask: '+{7} (000) 000-00-00'
   }
)
const validator = new JustValidate('.callback-modal__form');
/*
function validateForms(selector, rules) {
   new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function (form, values, ajax) {
         // console.log(form);

         // let formData = new FormData(form);
      }
   });
}

validateForms('.callback-modal__form', { name: { required: true, minValue: 3 }, tel: { required: true } });
*/
validator
   .addField(document.querySelector('#name'), [
      {
         rule: 'required',
      },
      {
         rule: 'minLength',
         value: 3,
      },
      {
         rule: 'maxLength',
         value: 15,
      },
   ])
   .addField(document.querySelector('#phone'), [
      {
         rule: 'required',
      },
      {
         rule: 'minLength',
         value: 18,
      },
   ])