import player from './module/playerData.js'
import showList from './module/showList.js'
import heartToggle from './module/heartToggle.js'
import { clickDelBtn, clickViewBtn } from './module/clickButton.js'
const Ul_playerList = document.querySelector('.player_list');
const wrap = document.querySelector('#wrap');
const delBtn = document.querySelector('.del_btn');
const viewBtn = document.querySelector('.view_btn');
Ul_playerList.innerHTML = showList(player)
clickDelBtn(delBtn, player, Ul_playerList)
clickViewBtn(viewBtn, player, Ul_playerList, wrap)
heartToggle()