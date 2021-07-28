var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const listProduct = $('.home-product .grid__row');
console.log(listProduct)

var jsonApi = 'https://reqres.in/api/users?delay=3';
fetch(jsonApi)
    .then(data =>{
        listProduct.innerHTML = "<div class="product__loading">Loading ...</div>";
       return data.json()
         
    })
    .then((product) => {
        let temp = product.data;
        // var blockElement = document.querySelector("#test");
       let html=temp.map(item=>{
        return `<div class="grid__column-2-4">
        <a class="home-product-item">
            <div class="home-product-item_img"
                style="background-image: url(${item.avatar});">
            </div>
            <h4 class="home-product-item__name">${item.first_name}</h4>
            <div class="home-product-item__price">
                <span class="home-product-item__price-old">${180*Math.floor(Math.random() *11)}đ</span>
                <span class="home-product-item__price-new">${280*Math.floor(Math.random() *11)}</span>
            </div>
            <div class="home-product-item__action">
                <span class="home-product-item__like home-product-item__like--liked">
                    <i class="home-product-item__like-icon-empty far fa-heart"></i>
                    <i class="home-product-item__like-icon-fil fas fa-heart"></i>
                </span>
                <div class="home-product-item__rating">
                    <i class="home-product-item__star--gold fas fa-star"></i>
                    <i class="home-product-item__star--gold fas fa-star"></i>
                    <i class="home-product-item__star--gold fas fa-star"></i>
                    <i class="home-product-item__star--gold fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div class="home-product-item__sold"> đã bán</div>
            </div>
            <div class="home-product-item__orgin">
                <span class="home-product-item__brand">Whoo</span>
                <span class="home-product-item__orgin-name">${item.last_name}</span>
            </div>
            <div class="home-product-item__favourite">
                <i class="fas fa-check"></i>
                <span class="home-product-item__favourite-text">Yêu thích</span>
            </div>
            <div class="home-product-item__sale">
                <span class="home-product-item__sale-percent">${item.id}%</span>
                <span class="home-product-item__sale-label">GIẢM</span>
            </div>
        </a>
    </div>`
       })
        listProduct.innerHTML = html.join("");
    })
    .catch((error) => {
        console.error(error)
    })