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

function videoJourney(){
    const videoJour = document.createElement('div')
    videoJour.className = 'video_journey'
    container.append(videoJour)
    const videoJour_title = document.createElement('div')
    videoJour_title.className = 'videoJour_title'
    videoJour_title.innerHTML ='Video journey'
    videoJour.append(videoJour_title)
    const videoJour_video = document.createElement('div')
    videoJour_video.className = 'videoJour_video'
    videoJour_video.innerHTML = '<iframe src="https://www.youtube.com/embed/zVnhPd95hN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    videoJour.append(videoJour_video)
    const videoJour_video_list = document.createElement('div')
    videoJour_video_list.className = 'videoJour_video_list'
    videoJour.append(videoJour_video_list)
    const videoJour_video_list_first = document.createElement('div')
    videoJour_video_list_first.className = 'videoJour_video_list_first'
    videoJour_video_list_first.innerHTML = '<iframe src="https://www.youtube.com/embed/c-CN6_x6sGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    videoJour_video_list.append(videoJour_video_list_first)
    const videoJour_video_list_second = document.createElement('div')
    videoJour_video_list_second.className = 'videoJour_video_list_first'
    videoJour_video_list_second.innerHTML = '<iframe src="https://www.youtube.com/embed/FlYjF2thT2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    videoJour_video_list.append(videoJour_video_list_second)
    const videoJour_video_list_third = document.createElement('div')
    videoJour_video_list_third.className = 'videoJour_video_list_first'
    videoJour_video_list_third.innerHTML = '<iframe src="https://www.youtube.com/embed/imkgbRe97eY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    videoJour_video_list.append(videoJour_video_list_third)
    return videoJour
}

videoJourney()

function artGalery(){
    const artGal = document.createElement('div')
    artGal.className = 'art_galery'
    container.append(artGal)
    const artGal_title = document.createElement('div')
    artGal_title.className = 'artGal_title'
    artGal_title.innerHTML = 'Art Gallery'
    artGal.append(artGal_title)
    const artGal_photo = document.createElement('div')
    artGal_photo.className = 'artGal_photo'
    artGal.append(artGal_photo)

    const artGal_photo_first_row = document.createElement('div')
    artGal_photo_first_row.className = 'artGal_photo_first_row'
    artGal_photo.append(artGal_photo_first_row)
    const artGal_photo_first_row_first = document.createElement('div')
    artGal_photo_first_row_first.className = 'artGal_photo_first_photo'
    artGal_photo_first_row_first.innerHTML = '<img src="./assets/angel.png" alt="">'
    artGal_photo_first_row.append(artGal_photo_first_row_first)
    const artGal_photo_first_row_second = document.createElement('div')
    artGal_photo_first_row_second.className = 'artGal_photo_first_photo'
    artGal_photo_first_row_second.innerHTML = '<img src="./assets/deer.png" alt="">'
    artGal_photo_first_row.append(artGal_photo_first_row_second)
    const artGal_photo_first_row_third = document.createElement('div')
    artGal_photo_first_row_third.className = 'artGal_photo_first_photo'
    artGal_photo_first_row_third.innerHTML = '<img src="./assets/war.png" alt="">'
    artGal_photo_first_row.append(artGal_photo_first_row_third)

    const artGal_photo_second_row = document.createElement('div')
    artGal_photo_second_row.className = 'artGal_photo_second_row'
    artGal_photo.append(artGal_photo_second_row)
    const artGal_photo_second_row_first = document.createElement('div')
    artGal_photo_second_row_first.className = 'artGal_photo_first_photo'
    artGal_photo_second_row_first.innerHTML = '<img src="./assets/lizok.png" alt="">'
    artGal_photo_second_row.append(artGal_photo_second_row_first)
    const artGal_photo_second_row_second = document.createElement('div')
    artGal_photo_second_row_second.className = 'artGal_photo_first_photo'
    artGal_photo_second_row_second.innerHTML = '<img src="./assets/palace.png" alt="">'
    artGal_photo_second_row.append(artGal_photo_second_row_second)
    const artGal_photo_second_row_third = document.createElement('div')
    artGal_photo_second_row_third.className = 'artGal_photo_first_photo'
    artGal_photo_second_row_third.innerHTML = '<img src="./assets/sleep.png" alt="">'
    artGal_photo_second_row.append(artGal_photo_second_row_third)

    const artGal_photo_third_row = document.createElement('div')
    artGal_photo_third_row.className = 'artGal_photo_third_row'
    artGal_photo.append(artGal_photo_third_row)
    const artGal_photo_third_row_first = document.createElement('div')
    artGal_photo_third_row_first.className = 'artGal_photo_first_photo'
    artGal_photo_third_row_first.innerHTML = '<img src="./assets/friends.png" alt="">'
    artGal_photo_third_row.append(artGal_photo_third_row_first)
    const artGal_photo_third_row_second = document.createElement('div')
    artGal_photo_third_row_second.className = 'artGal_photo_first_photo'
    artGal_photo_third_row_second.innerHTML = '<img src="./assets/nake.png" alt="">'
    artGal_photo_third_row.append(artGal_photo_third_row_second)
    const artGal_photo_third_row_third = document.createElement('div')
    artGal_photo_third_row_third.className = 'artGal_photo_first_photo'
    artGal_photo_third_row_third.innerHTML = '<img src="./assets/angel_girl.png" alt="">'
    artGal_photo_third_row.append(artGal_photo_third_row_third)
    return artGal
}

artGalery()