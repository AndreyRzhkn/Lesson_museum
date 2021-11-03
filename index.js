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

function contacts(){
    const contacts_block = document.createElement('div')
    contacts_block.className = 'contacts_block'
    container.append(contacts_block)
    const contacts_block_title = document.createElement('div')
    contacts_block_title.className = 'contacts_block_title'
    contacts_block_title.innerHTML = 'Contacts'
    contacts_block.append(contacts_block_title)

    const contacts_block_line = document.createElement('div')
    contacts_block_line.className = 'contacts_block_line'
    contacts_block.append(contacts_block_line)

    const contacts_block_requisites = document.createElement('div')
    contacts_block_requisites.className = 'contacts_block_requisites'
    contacts_block.append(contacts_block_requisites)
    const contacts_block_requisites_list = document.createElement('div')
    contacts_block_requisites_list.className = 'contacts_block_requisites_list'
    contacts_block_requisites.append(contacts_block_requisites_list)
    const contacts_block_requisites_list_name = document.createElement('div')
    contacts_block_requisites_list_name.className = 'contacts_block_requisites_list_name'
    contacts_block_requisites_list_name.innerHTML = 'Palais Royal<br> Musee du Louvre'
    contacts_block_requisites_list.append(contacts_block_requisites_list_name)
    const contacts_block_requisites_list_adress = document.createElement('div')
    contacts_block_requisites_list_adress.className = 'contacts_block_requisites_list_adress'
    contacts_block_requisites_list_adress.innerHTML = 'address: 75001 Paris, France'
    contacts_block_requisites_list.append(contacts_block_requisites_list_adress)
    const contacts_block_requisites_list_phone = document.createElement('div')
    contacts_block_requisites_list_phone.className = 'contacts_block_requisites_list_phone'
    contacts_block_requisites_list_phone.innerHTML = 'phone: +33(0) 1 40 20 50 50'
    contacts_block_requisites_list.append(contacts_block_requisites_list_phone)
    const contacts_block_requisites_list_mail = document.createElement('div')
    contacts_block_requisites_list_mail.className = 'contacts_block_requisites_list_mail'
    contacts_block_requisites_list_mail.innerHTML = 'mail: info@louvre.fr'
    contacts_block_requisites_list.append(contacts_block_requisites_list_mail)
    
    const contacts_block_requisites_map = document.createElement('div')
    contacts_block_requisites_map.className = 'contacts_block_requisites_map'
    contacts_block_requisites_map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2624.8530649525665!2d2.3420107918608224!3d48.86101222425656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1635940894243!5m2!1sru!2sby" width = "694" height = "454" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    contacts_block_requisites.append(contacts_block_requisites_map)
    return contacts_block
}

contacts()

function footer(){
    const footer_footer = document.createElement('div')
    footer_footer.className = 'footer_footer'
    container.append(footer_footer)

    const footer_footer_first = document.createElement('div')
    footer_footer_first.className = 'footer_footer_first'
    footer_footer.append(footer_footer_first)

    const footer_footer_first_label = document.createElement('div')
    footer_footer_first_label.className = 'footer_footer_first_label'
    footer_footer_first_label.innerHTML = '<img src="./assets/label.png" alt="">'
    footer_footer_first.append(footer_footer_first_label)
    const footer_footer_first_title = document.createElement('div')
    footer_footer_first_title.className = 'footer_footer_first_title'
    footer_footer_first_title.innerHTML = 'Louvre'
    footer_footer_first.append(footer_footer_first_title)

    const footer_footer_first_list = document.createElement('div')
    footer_footer_first_list.className = 'footer_footer_first_list'
    footer_footer_first.append(footer_footer_first_list)

    const footer_footer_first_list_first_colomn = document.createElement('div')
    footer_footer_first_list_first_colomn.className = 'footer_footer_first_list_first_colomn'
    footer_footer_first_list.append(footer_footer_first_list_first_colomn)
    const footer_footer_first_list_first_colomn_f = document.createElement('div')
    footer_footer_first_list_first_colomn_f.className = 'footer_footer_first_list_first_colomn_point'
    footer_footer_first_list_first_colomn_f.innerHTML = 'Visiting'
    footer_footer_first_list_first_colomn.append(footer_footer_first_list_first_colomn_f)
    const footer_footer_first_list_first_colomn_s = document.createElement('div')
    footer_footer_first_list_first_colomn_s.className = 'footer_footer_first_list_first_colomn_point'
    footer_footer_first_list_first_colomn_s.innerHTML = 'Explore'
    footer_footer_first_list_first_colomn.append(footer_footer_first_list_first_colomn_s)
    const footer_footer_first_list_first_colomn_t = document.createElement('div')
    footer_footer_first_list_first_colomn_t.className = 'footer_footer_first_list_first_colomn_point'
    footer_footer_first_list_first_colomn_t.innerHTML = 'Video'
    footer_footer_first_list_first_colomn.append(footer_footer_first_list_first_colomn_t)

    const footer_footer_first_list_second_colomn = document.createElement('div')
    footer_footer_first_list_second_colomn.className = 'footer_footer_first_list_first_colomn'
    footer_footer_first_list.append(footer_footer_first_list_second_colomn)
    const footer_footer_first_list_second_colomn_f = document.createElement('div')
    footer_footer_first_list_second_colomn_f.className = 'footer_footer_first_list_first_colomn_point'
    footer_footer_first_list_second_colomn_f.innerHTML = 'Gallery'
    footer_footer_first_list_second_colomn.append(footer_footer_first_list_second_colomn_f)
    const footer_footer_first_list_second_colomn_s = document.createElement('div')
    footer_footer_first_list_second_colomn_s.className = 'footer_footer_first_list_first_colomn_point'
    footer_footer_first_list_second_colomn_s.innerHTML = 'Tickets'
    footer_footer_first_list_second_colomn.append(footer_footer_first_list_second_colomn_s)
    const footer_footer_first_list_second_colomn_t = document.createElement('div')
    footer_footer_first_list_second_colomn_t.className = 'footer_footer_first_list_first_colomn_point'
    footer_footer_first_list_second_colomn_t.innerHTML = 'Contacts'
    footer_footer_first_list_second_colomn.append(footer_footer_first_list_second_colomn_t)

    const footer_footer_first_social = document.createElement('div')
    footer_footer_first_social.className = 'footer_footer_first_social'
    footer_footer_first_list.append(footer_footer_first_social)
    const footer_footer_first_social_y = document.createElement('div')
    footer_footer_first_social_y.className = 'footer_footer_first_social_y'
    footer_footer_first_social.append(footer_footer_first_social_y)
    const footer_footer_first_social_y_pic = document.createElement('div')
    footer_footer_first_social_y_pic.className = 'footer_footer_first_social_y_pic'
    footer_footer_first_social_y_pic.innerHTML = '<img src="./assets/youtube.png" alt="">'
    footer_footer_first_social_y.append(footer_footer_first_social_y_pic)
    const footer_footer_first_social_i = document.createElement('div')
    footer_footer_first_social_i.className = 'footer_footer_first_social_y'
    footer_footer_first_social.append(footer_footer_first_social_i)
    const footer_footer_first_social_i_pic = document.createElement('div')
    footer_footer_first_social_i_pic.className = 'footer_footer_first_social_y_pic'
    footer_footer_first_social_i_pic.innerHTML = '<img src="./assets/inst.png" alt="">'
    footer_footer_first_social_i.append(footer_footer_first_social_i_pic)
    const footer_footer_first_social_f = document.createElement('div')
    footer_footer_first_social_f.className = 'footer_footer_first_social_y'
    footer_footer_first_social.append(footer_footer_first_social_f)
    const footer_footer_first_social_f_pic = document.createElement('div')
    footer_footer_first_social_f_pic.className = 'footer_footer_first_social_y_pic'
    footer_footer_first_social_f_pic.innerHTML = '<img src="./assets/facebook.png" alt="">'
    footer_footer_first_social_f.append(footer_footer_first_social_f_pic)
    const footer_footer_first_social_t = document.createElement('div')
    footer_footer_first_social_t.className = 'footer_footer_first_social_y'
    footer_footer_first_social.append(footer_footer_first_social_t)
    const footer_footer_first_social_t_pic = document.createElement('div')
    footer_footer_first_social_t_pic.className = 'footer_footer_first_social_y_pic'
    footer_footer_first_social_t_pic.innerHTML = '<img src="./assets/twitter.png" alt="">'
    footer_footer_first_social_t.append(footer_footer_first_social_t_pic)
    const footer_footer_first_social_v = document.createElement('div')
    footer_footer_first_social_v.className = 'footer_footer_first_social_y'
    footer_footer_first_social.append(footer_footer_first_social_v)
    const footer_footer_first_social_v_pic = document.createElement('div')
    footer_footer_first_social_v_pic.className = 'footer_footer_first_social_y_pic'
    footer_footer_first_social_v_pic.innerHTML = '<img src="./assets/Vector (4).png" alt="">'
    footer_footer_first_social_v.append(footer_footer_first_social_v_pic)

    const footer_footer_second = document.createElement('div')
    footer_footer_second.className = 'footer_footer_second'
    footer_footer.append(footer_footer_second)

    const footer_footer_third = document.createElement('div')
    footer_footer_third.className = 'footer_footer_third'
    footer_footer.append(footer_footer_third)
    const footer_footer_third_year = document.createElement('div')
    footer_footer_third_year.className = 'footer_footer_third_year'
    footer_footer_third_year.innerHTML = '© 2021'
    footer_footer_third.append(footer_footer_third_year)
    const footer_footer_third_school = document.createElement('div')
    footer_footer_third_school.className = 'footer_footer_third_year'
    footer_footer_third_school.innerHTML = 'The Rolling Scopes School'
    footer_footer_third.append(footer_footer_third_school)
    const footer_footer_third_name = document.createElement('div')
    footer_footer_third_name.className = 'footer_footer_third_year'
    footer_footer_third_name.innerHTML = 'Username'
    footer_footer_third.append(footer_footer_third_name)
    return footer_footer
}

footer()
