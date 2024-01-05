"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50
символов в длину и не более 500. В случае неверной длины, необходимо выводить
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру.
На странице должны отображаться товары, под каждым товаром должен быть список
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальное id, для упрощения, используем
`Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не
делать, пока рано.
*/

let initialData = [
  {
    id: 1,
    product: "Apple iPhone 13",
    reviews: [
      {
        id: Date.now(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: Date.now(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: 2,
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: Date.now(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: 3,
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: Date.now(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function renderProducts(inputData) {
  let div = document.getElementById('wrapper');
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  inputData.forEach((data) => {
    let productCard = document.createElement('div')
    productCard.classList.add('product-card')
    productCard.id = `${data.id}`

    let productName = document.createElement('div')
    productName.classList.add('product-name')
    productName.insertAdjacentHTML('beforeend',
      `<p>${data.product}</p>`
    )

    let productReviews = document.createElement('div')
    productReviews.classList.add('product-reviews')
    data.reviews.forEach((review) => {
      productReviews.insertAdjacentHTML('beforeend',
        `<p> - ${review.text}\n</p>`
      )
    })

    productCard.appendChild(productName)
    productCard.appendChild(productReviews)

    let inputReview = document.createElement('input');
    inputReview.setAttribute('id', `ri${data.id}`);

    let btn = document.createElement('button');
    btn.classList.add('add-button')
    btn.innerText = 'Add review'
    btn.addEventListener('click', () => addReview(data.id));

    productCard.appendChild(inputReview)
    productCard.appendChild(btn)
    div.appendChild(productCard)
  })
}

function addReview(id) {
  let text = document.getElementById('ri' + id);
      let product = initialData.find(item => item.id === id);
      product.reviews.push({id: Date.now(), text: `${text.value}`});
      text.value = '';
  console.log(initialData);
  renderProducts(initialData);
}

renderProducts(initialData);
