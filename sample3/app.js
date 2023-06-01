import player from './module/playerData.js'
import showList from './module/showList.js'
import heartToggle from './module/heartToggle.js'
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
heartToggle()