const showList = (player) => {
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

export default showList
