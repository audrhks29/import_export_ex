let clickDelBtn = (delBtn, player, Ul_playerList) => {
    delBtn.addEventListener('click', e => {
        Ul_playerList.remove(player)
        heartToggle()
    })
}
let clickViewBtn = (viewBtn, player, Ul_playerList, wrap) => {
    viewBtn.addEventListener('click', e => {
        wrap.append(Ul_playerList)
        Ul_playerList.innerHTML = showList(player)
        heartToggle()
    })
}
export { clickDelBtn, clickViewBtn }


