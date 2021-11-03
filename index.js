const container = document.querySelector('.container')

function pictureExplore(){
    const pictureEx = document.createElement('div')
    pictureEx.className = 'pictureEx'
    container.append(pictureEx)
    const pictureEx_title = document.createElement('div')
    pictureEx_title.className = 'pictureEx_title'
    pictureEx_title.innerHTML = 'Picture explore'
    pictureEx.append(pictureEx_title)
    const pictureEx_line = document.createElement('div')
    pictureEx_line.className = 'pictureEx_line'
    pictureEx.append(pictureEx_line)
    const pictureEx_discription_first = document.createElement('div')
    pictureEx_discription_first.className = 'pictureEx_discription_first'
    pictureEx_discription_first.innerHTML = 'Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.'
    pictureEx.append(pictureEx_discription_first)
    const pictureEx_discription_second = document.createElement('div')
    pictureEx_discription_second.className = 'pictureEx_discription_second'
    pictureEx_discription_second.innerHTML = 'It was cleaned in 1984 to remove a <span>"yellow veil"</span> of dust that had gathered since the previous restoration in the 19th century.'
    pictureEx.append(pictureEx_discription_second)
    const pictureEx_picture = document.createElement('div')
    pictureEx_picture.className = 'pictureEx_picture'
    pictureEx_picture.innerHTML = '<img src="./assets/pic_explore.png" alt="">'
    pictureEx.append(pictureEx_picture)
    return pictureEx
}

pictureExplore()
