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