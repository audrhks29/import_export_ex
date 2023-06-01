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