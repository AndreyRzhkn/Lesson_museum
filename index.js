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

function tickets(){
    const tickets_block = document.createElement('div')
    tickets_block.className = 'tickets_block'
    container.append(tickets_block)

    const tickets_buy_block = document.createElement('div')
    tickets_buy_block.className = 'tickets_buy_block'
    tickets_block.append(tickets_buy_block)
    const tickets_block_title = document.createElement('div')
    tickets_block_title.className = 'tickets_block_title'
    tickets_block_title.innerHTML = 'BUY TICKETS'
    tickets_buy_block.append(tickets_block_title)

    const tickets_block_line = document.createElement('div')
    tickets_block_line.className = 'tickets_block_line'
    tickets_buy_block.append(tickets_block_line)

    const tickets_block_buy_buy = document.createElement('div')
    tickets_block_buy_buy.className = 'tickets_block_buy_buy'
    tickets_buy_block.append(tickets_block_buy_buy)
    const tickets_block_buy_buy_pic = document.createElement('div')
    tickets_block_buy_buy_pic.className = 'tickets_block_buy_buy_pic'
    tickets_block_buy_buy_pic.innerHTML = '<img src="./assets/buy_middle.png" alt="">'
    tickets_block_buy_buy.append(tickets_block_buy_buy_pic)

    const tickets_block_buy_buy_amount = document.createElement('div')
    tickets_block_buy_buy_amount.className = 'tickets_block_buy_buy_amount'
    tickets_block_buy_buy.append(tickets_block_buy_buy_amount)

    const tickets_block_buy_buy_amount_title = document.createElement('div')
    tickets_block_buy_buy_amount_title.className = 'tickets_block_buy_buy_amount_title'
    tickets_block_buy_buy_amount_title.innerHTML = 'Amount'
    tickets_block_buy_buy_amount.append(tickets_block_buy_buy_amount_title)
    
    const tickets_amount_young = document.createElement('div')
    tickets_amount_young.className = 'tickets_amount_young'
    tickets_block_buy_buy_amount.append(tickets_amount_young)

    const tickets_amount_young_title = document.createElement('div')
    tickets_amount_young_title.className = 'tickets_amount_young_title'
    tickets_amount_young_title.innerHTML = 'Basic 18+'
    tickets_amount_young.append(tickets_amount_young_title)

    const tickets_amount_young_count = document.createElement('div')
    tickets_amount_young_count.className = 'tickets_amount_young_count'
    tickets_amount_young.append(tickets_amount_young_count)
    const tickets_amount_young_count_minus = document.createElement('div')
    tickets_amount_young_count_minus.className = 'tickets_amount_young_count_minus'
    tickets_amount_young_count_minus.innerHTML = '–'
    tickets_amount_young_count.append(tickets_amount_young_count_minus)
    tickets_amount_young_count_minus.addEventListener('click', () =>{
        if(tickets_amount_young_count_count.innerHTML == 0){
            return 0
        }else{
            return tickets_amount_young_count_count.innerHTML -= 1
        }
    })

    const tickets_amount_young_count_count = document.createElement('div')
    tickets_amount_young_count_count.className = 'tickets_amount_young_count_count'
    tickets_amount_young_count_count.innerHTML = '1'
    tickets_amount_young_count.append(tickets_amount_young_count_count)
    const tickets_amount_young_count_plus = document.createElement('div')
    tickets_amount_young_count_plus.className = 'tickets_amount_young_count_plus'
    tickets_amount_young_count_plus.innerHTML = '+'
    tickets_amount_young_count.append(tickets_amount_young_count_plus)
    tickets_amount_young_count_plus.addEventListener('click', () => {
        return tickets_amount_young_count_count.innerHTML++
    })

    const tickets_amount_old = document.createElement('div')
    tickets_amount_old.className = 'tickets_amount_young'
    tickets_block_buy_buy_amount.append(tickets_amount_old)
    const tickets_amount_old_title = document.createElement('div')
    tickets_amount_old_title.className = 'tickets_amount_young_title'
    tickets_amount_old_title.innerHTML = 'Senior 65+'
    tickets_amount_old.append(tickets_amount_old_title)

    const tickets_amount_old_count = document.createElement('div')
    tickets_amount_old_count.className = 'tickets_amount_young_count'
    tickets_amount_old.append(tickets_amount_old_count)
    const tickets_amount_old_count_minus = document.createElement('div')
    tickets_amount_old_count_minus.className = 'tickets_amount_young_count_minus'
    tickets_amount_old_count_minus.innerHTML = '–'
    tickets_amount_old_count.append(tickets_amount_old_count_minus)
    tickets_amount_old_count_minus.addEventListener('click', () => {
        if(tickets_amount_old_count_count.innerHTML == 0){
            return 0
        }else{
            return tickets_amount_old_count_count.innerHTML -= 1
        }
    })

    const tickets_amount_old_count_count = document.createElement('div')
    tickets_amount_old_count_count.className = 'tickets_amount_young_count_count'
    tickets_amount_old_count_count.innerHTML = '1'
    tickets_amount_old_count.append(tickets_amount_old_count_count)
    const tickets_amount_old_count_plus = document.createElement('div')
    tickets_amount_old_count_plus.className = 'tickets_amount_young_count_plus'
    tickets_amount_old_count_plus.innerHTML = '+'
    tickets_amount_old_count.append(tickets_amount_old_count_plus)
    tickets_amount_old_count_plus.addEventListener('click', () => {
        return tickets_amount_old_count_count.innerHTML++
    })

    const tickets_block_buy_buy_amount_total = document.createElement('div')
    tickets_block_buy_buy_amount_total.className = 'tickets_block_buy_buy_amount_total'
    tickets_block_buy_buy_amount_total.innerHTML = 'Total € 220'
    tickets_block_buy_buy_amount.append(tickets_block_buy_buy_amount_total)

    const tickets_block_buy_buy_amount_button = document.createElement('div')
    tickets_block_buy_buy_amount_button.className = 'tickets_block_buy_buy_amount_button'
    tickets_block_buy_buy_amount_button.innerHTML = 'Buy Now'
    tickets_block_buy_buy_amount.append(tickets_block_buy_buy_amount_button)

    const tickets_block_footer = document.createElement('div')
    tickets_block_footer.className = 'tickets_block_footer'
    tickets_block_footer.innerHTML = '<img src="./assets/buy_end.png" alt="">'
    tickets_block.append(tickets_block_footer)
    return tickets_block
}   

tickets()