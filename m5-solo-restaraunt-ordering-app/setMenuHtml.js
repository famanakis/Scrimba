import {menuData} from "./menuData.js"

export function setMenuHtml() {
    return menuData.map(item => 
    `<div class="item-card">
        <div class="flex-row">
            <img class="item-img" src="${item.img}" alt="${item.altImg}">
            <div class="item-div">
                <p class="item-name">${item.name}</p>
                <p class="item-description">${item.ingredients}</p>
                <p class="item-cost">$${item.price}</p>
            </div>
        </div>
        <button class="add-btn">
            <img src="./assets/add-btn.png" alt="a plus button" data-category=${item.category} data-uuid="${item.uuid}"></button>
    </div>`
    ).join('')
}
