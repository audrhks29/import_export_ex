# module 예제

## sample1
1. app.js - module 폴더 안의 js들을 import하여 index.html에 최종 적용시키는 js파일
  ```js
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
  ```
2. playerdata.js - 데이터 배열을 담는 js파일
    ```js
    const player = [
    { name: 'Erling Haaland', position: 'CF', nation: 'Norway', img: '../player/Erling_Braut_Haland.png' },
    { name: 'Kylian Mbappe', position: 'CF', nation: 'France', img: '../player/Kylian_Mbappe.png' },
    { name: 'Kim Min Jae', position: 'DF', nation: 'Korea', img: '../player/Kim_Min_Jae.png' },
    { name: 'Victor Osimhen', position: 'CF', nation: 'Niger', img: '../player/Victor_Osimhen.png' },
    { name: 'Kevin De Bruyne', position: 'MF', nation: 'Belgium', img: '../player/Kevin_De_Bruyne.png' }
    ]
    export default player
    ```
***

## sample2
1. app.js - module 폴더 안의 js들을 import하여 index.html에 최종 적용시키는 js파일 
  ```js
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
  ```
2. playerdata.js - 데이터 배열을 담는 js파일
    ```js
    const player = [
    { name: 'Erling Haaland', position: 'CF', nation: 'Norway', img: '../player/Erling_Braut_Haland.png' },
    { name: 'Kylian Mbappe', position: 'CF', nation: 'France', img: '../player/Kylian_Mbappe.png' },
    { name: 'Kim Min Jae', position: 'DF', nation: 'Korea', img: '../player/Kim_Min_Jae.png' },
    { name: 'Victor Osimhen', position: 'CF', nation: 'Niger', img: '../player/Victor_Osimhen.png' },
    { name: 'Kevin De Bruyne', position: 'MF', nation: 'Belgium', img: '../player/Kevin_De_Bruyne.png' }
    ]
    export default player
    ```
3. showList.js - showList 함수를 담는 js파일
  ```js
  const showList = (obj) => {
      const newPlayer = obj.map(item => {
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
  export default showList
  ```
  ***
  
## sample3
1. app.js - module 폴더 안의 js들을 import하여 index.html에 최종 적용시키는 js파일
  ```js
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
  ```
2. playerdata.js - 데이터 배열을 담는 js파일
    ```js
    const player = [
    { name: 'Erling Haaland', position: 'CF', nation: 'Norway', img: '../player/Erling_Braut_Haland.png' },
    { name: 'Kylian Mbappe', position: 'CF', nation: 'France', img: '../player/Kylian_Mbappe.png' },
    { name: 'Kim Min Jae', position: 'DF', nation: 'Korea', img: '../player/Kim_Min_Jae.png' },
    { name: 'Victor Osimhen', position: 'CF', nation: 'Niger', img: '../player/Victor_Osimhen.png' },
    { name: 'Kevin De Bruyne', position: 'MF', nation: 'Belgium', img: '../player/Kevin_De_Bruyne.png' }
    ]
    export default player
    ```
3. showList.js - showList 함수를 담는 js파일
  ```js
  const showList = (obj) => {
      const newPlayer = obj.map(item => {
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
  export default showList
  ```
4. heartToggle.js - heartToggle 함수를 담는 js파일
  ```js
  let heartToggle = () => {
      let heart = document.querySelectorAll('.heart_box span');
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
  export default heartToggle
  ```
  ***
  
## sample4
1. app.js - module 폴더 안의 js들을 import하여 index.html에 최종 적용시키는 js파일
  ```js
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
  ```
2. playerdata.js - 데이터 배열을 담는 js파일
    ```js
    const player = [
    { name: 'Erling Haaland', position: 'CF', nation: 'Norway', img: '../player/Erling_Braut_Haland.png' },
    { name: 'Kylian Mbappe', position: 'CF', nation: 'France', img: '../player/Kylian_Mbappe.png' },
    { name: 'Kim Min Jae', position: 'DF', nation: 'Korea', img: '../player/Kim_Min_Jae.png' },
    { name: 'Victor Osimhen', position: 'CF', nation: 'Niger', img: '../player/Victor_Osimhen.png' },
    { name: 'Kevin De Bruyne', position: 'MF', nation: 'Belgium', img: '../player/Kevin_De_Bruyne.png' }
    ]
    export default player
    ```
3. showList.js - showList 함수를 담는 js파일
  ```js
  const showList = (obj) => {
      const newPlayer = obj.map(item => {
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
  export default showList
  ```
4. heartToggle.js - heartToggle 함수를 담는 js파일
  ```js
  let heartToggle = () => {
      let heart = document.querySelectorAll('.heart_box span');
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
  export default heartToggle
  ```
5. clickButton.js - clickDelBtn, clickViewBtn 함수를 담는 js파일
  ```js
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
  ```
