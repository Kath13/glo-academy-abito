const searchButton = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main__list');

const cardArray = [
    {
        id: 0,
        title: 'Пвх материал 2й сорт',
        price: 170,
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        imageURL: 'card-img.png'
    },
    {
        id: 1,
        title: 'Первый товар',
        price: 171,
        address: 'Казань, р-н Вахитовский 1',
        date: '11 июля 11:39',
        imageURL: 'card-img.png'
    },
    {
        id: 2,
        title: 'Второй товар',
        price: 172,
        address: 'Казань, р-н Вахитовский 2',
        date: '12 июля 11:39',
        imageURL: 'card-img.png'
    },
    {
        id: 3,
        title: 'Третий товар',
        price: 173,
        address: 'Казань, р-н Вахитовский 3',
        date: '13 июля 11:39',
        imageURL: 'card-img.png'
    },
    {
        id: 4,
        title: 'Четвертый товар',
        price: 174,
        address: 'Казань, р-н Вахитовский 4',
        date: '14 июля 11:39',
        imageURL: 'card-img.png'
    },
    {
        id: 5,
        title: 'Пятый товар',
        price: 175,
        address: 'Казань, р-н Вахитовский 5',
        date: '15 июля 11:39',
        imageURL: 'card-img.png'
    },
]

const render = (cardList) => {
    cardWrapper.innerHTML = '';
    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="/product.html" class="content-main__list-item" id="${item.id}">
                <div class="content-main__list-item--img">
                    <img src="image/${item.imageURL}" alt="Изображение товара Пвх материал 2й сорт">
                </div>
                <h5 class="content-main__list-item--title">${item.title}</h5>
                <strong class="content-main__list-item--price">${item.price} ₽</strong>
                <div class="content-main__list-item--desc-box">
                    <span class="content-main__list-item--desc">${item.address}</span>
                    <span class="content-main__list-item--desc">${item.date}</span>
                </div>
            </a>`)
    })
}

const filterArray = (array, value) => {
    return array.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()) || item.price.toString().includes(value.toLowerCase()))
}

render(cardArray)

searchButton.addEventListener('click', (event) => render(filterArray(cardArray, searchInput.value)))
