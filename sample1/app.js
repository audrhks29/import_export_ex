import player from './module/playerData.js'
const Ul_playerList = document.querySelector('.player_list');
const wrap = document.querySelector('#wrap');
const delBtn = document.querySelector('.del_btn');
const viewBtn = document.querySelector('.view_btn');
const showList = () => {
    const newPlayer = player.map(item => {
        const { name, position, nation, img } = item;
        return `<li>
        <div class="img_box">
            <img src="${img}">
        </div>
        <div class="text_box">
            <p>${name}</p>
            <p>${position}</p>
            <p>${nation}</p>
        </div>
        <div class="heart_box">
            <span>♡</span>
        </div>
    </li>`
    }).join('')
    return newPlayer
}
Ul_playerList.innerHTML = showList()


delBtn.addEventListener('click', e => {
    Ul_playerList.remove()
    heartToggle()
})

viewBtn.addEventListener('click', e => {
    wrap.append(Ul_playerList)
    Ul_playerList.innerHTML = showList()
    heartToggle()
})
let heartToggle = () => {
    const heart = document.querySelectorAll('.heart_box span');
    heart.forEach(item => {
        item.addEventListener('click', e => {
            if (e.currentTarget.innerHTML == '♡') {
                e.currentTarget.style.color = "red"
                e.currentTarget.innerHTML = '♥'
            }
            else if (e.currentTarget.innerHTML == '♥') {
                e.currentTarget.style.color = "initial"
                e.currentTarget.innerHTML = '♡'
            }
        })
    })
}
heartToggle()