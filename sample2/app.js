import player from './module/playerData.js'
import showList from './module/showList.js'
const Ul_playerList = document.querySelector('.player_list');
const wrap = document.querySelector('#wrap');
const delBtn = document.querySelector('.del_btn');
const viewBtn = document.querySelector('.view_btn');

Ul_playerList.innerHTML = showList(player)


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