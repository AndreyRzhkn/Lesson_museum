const container = document.querySelector('.container')

const onCreateElement = (tag, className = null, text = null) => {
    const elem = document.createElement(tag)
    elem.className = className && className
    elem.innerHTML = text && text
    return elem
}

const pictureExplore = () => {
    const pictureEx = onCreateElement('div', 'pictureEx')
    pictureEx.id = 'pictureEx'
    container.append(pictureEx)
    const pictureExploreTitle = onCreateElement('div', 'pictureEx_title', 'Picture explore')
    pictureEx.append(pictureExploreTitle)
    const pictureExploreLine = onCreateElement('div', 'pictureEx_line')
    pictureEx.append(pictureExploreLine)
    const pictureExploreDiscriptionFirst = onCreateElement('div', 'pictureEx_discription_first', 'Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.')
    pictureEx.append(pictureExploreDiscriptionFirst)
    const pictureExploreDiscriptionSecond = onCreateElement('div', 'pictureEx_discription_second', 'It was cleaned in 1984 to remove a <span>"yellow veil"</span> of dust that had gathered since the previous restoration in the 19th century.')
    pictureEx.append(pictureExploreDiscriptionSecond)
    const pictureExplorePicture = onCreateElement('div', 'pictureEx_picture')
    pictureEx.append(pictureExplorePicture)
    const pictureExplorePictureImg = onCreateElement('img')
    pictureExplorePictureImg.src = "./assets/pic_explore.png"
    pictureExplorePicture.append(pictureExplorePictureImg)
    return pictureEx
}

const videoJourney = () => {
    const videoJourneyMain = onCreateElement('div', 'video_journey')
    videoJourneyMain.id = 'video_journey'
    container.append(videoJourneyMain)
    const videoJourneyTitle = onCreateElement('div', 'videoJour_title', 'Video journey')
    videoJourneyMain.append(videoJourneyTitle)
    const videoJourneyVideo = onCreateElement('div', 'videoJour_video', '<iframe src="https://www.youtube.com/embed/zVnhPd95hN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    videoJourneyMain.append(videoJourneyVideo)
    const videoJourneyVideoList = onCreateElement('div', 'videoJour_video_list')
    videoJourneyMain.append(videoJourneyVideoList)
    const videoJourneyVideoListFirst = onCreateElement('div', 'videoJour_video_list_first', '<iframe src="https://www.youtube.com/embed/c-CN6_x6sGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    videoJourneyVideoList.append(videoJourneyVideoListFirst)
    const videoJourneyVideoListSecond = onCreateElement('div', 'videoJour_video_list_second', '<iframe src="https://www.youtube.com/embed/FlYjF2thT2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    videoJourneyVideoList.append(videoJourneyVideoListSecond)
    const videoJourneyVideoListThird = onCreateElement('div', 'videoJour_video_list_third', '<iframe src="https://www.youtube.com/embed/imkgbRe97eY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    videoJourneyVideoList.append(videoJourneyVideoListThird)
    return videoJourneyMain
}

const artGalery = () => {
    const artGaleryMain = onCreateElement('div', 'art_galery')
    artGaleryMain.id = 'art_galery'
    container.append(artGaleryMain)
    const artGaleryTitle = onCreateElement('div', 'artGal_title', 'Art Gallery')
    artGaleryMain.append(artGaleryTitle)
    const artGaleryPhoto = onCreateElement('div', 'artGal_photo')
    artGaleryMain.append(artGaleryPhoto)
    const artGaleryPhotoFirstRow = onCreateElement('div', 'artGal_photo_first_row')
    artGaleryPhoto.append(artGaleryPhotoFirstRow)
    const artGaleryPhotoFirstRowFirst = onCreateElement('div', 'artGal_photo_first_photo')
    artGaleryPhotoFirstRow.append(artGaleryPhotoFirstRowFirst)
    const artGaleryPhotoFirstRowFirstImg = onCreateElement('img')
    artGaleryPhotoFirstRowFirstImg.src = "./assets/angel.png"
    artGaleryPhotoFirstRowFirst.append(artGaleryPhotoFirstRowFirstImg)
    const artGaleryPhotoFirstRowSecond = onCreateElement('div', 'artGal_photo_first_photo')
    artGaleryPhotoFirstRow.append(artGaleryPhotoFirstRowSecond)
    const artGaleryPhotoFirstRowSecondImg = onCreateElement('img')
    artGaleryPhotoFirstRowSecondImg.src = "./assets/deer.png"
    artGaleryPhotoFirstRowSecond.append(artGaleryPhotoFirstRowSecondImg)
    const artGaleryPhotoFirstRowThird = onCreateElement('div', 'artGal_photo_first_photo')
    artGaleryPhotoFirstRow.append(artGaleryPhotoFirstRowThird)
    const artGaleryPhotoFirstRowThirdImg = onCreateElement('img')
    artGaleryPhotoFirstRowThirdImg.src = "./assets/war.png"
    artGaleryPhotoFirstRowThird.append(artGaleryPhotoFirstRowThirdImg)
    const artGaleryPhotoSecondRow = onCreateElement('div', 'artGal_photo_second_row')
    artGaleryPhoto.append(artGaleryPhotoSecondRow)
    const artGaleryPhotoSecondRowFirst = onCreateElement('div', 'artGal_photo_first_photo')
    artGaleryPhotoSecondRow.append(artGaleryPhotoSecondRowFirst)
    const artGaleryPhotoSecondRowFirstImg = onCreateElement('img')
    artGaleryPhotoSecondRowFirstImg.src = "./assets/lizok.png"
    artGaleryPhotoSecondRowFirst.append(artGaleryPhotoSecondRowFirstImg)
    const artGaleryPhotoSecondRowSecond = onCreateElement('div', 'artGal_photo_first_photo')
    artGaleryPhotoSecondRow.append(artGaleryPhotoSecondRowSecond)
    const artGaleryPhotoSecondRowSecondImg = onCreateElement('img')
    artGaleryPhotoSecondRowSecondImg.src = "./assets/palace.png"
    artGaleryPhotoSecondRowSecond.append(artGaleryPhotoSecondRowSecondImg)
    const artGaleryPhotoSecondRowThird = onCreateElement('div', 'artGal_photo_first_photo')
    artGaleryPhotoSecondRow.append(artGaleryPhotoSecondRowThird)
    const artGaleryPhotoSecondRowThirdImg = onCreateElement('img')
    artGaleryPhotoSecondRowThirdImg.src = "./assets/sleep.png"
    artGaleryPhotoSecondRowThird.append(artGaleryPhotoSecondRowThirdImg)
    const artGaleryPhotoThirdRow = onCreateElement('div', 'artGal_photo_third_row')
    artGaleryPhoto.append(artGaleryPhotoThirdRow)
    const artGaleryPhotoThirdRowFirst = onCreateElement('div', 'artGal_photo_first_photo')
    artGaleryPhotoThirdRow.append(artGaleryPhotoThirdRowFirst)
    const artGaleryPhotoThirdRowFirstImg = onCreateElement('img')
    artGaleryPhotoThirdRowFirstImg.src = "./assets/friends.png"
    artGaleryPhotoThirdRowFirst.append(artGaleryPhotoThirdRowFirstImg)
    const artGaleryPhotoThirdRowSecond = onCreateElement('div', 'artGal_photo_first_photo')
    artGaleryPhotoThirdRow.append(artGaleryPhotoThirdRowSecond)
    const artGaleryPhotoThirdRowSecondImg = onCreateElement('img')
    artGaleryPhotoThirdRowSecondImg.src = "./assets/nake.png"
    artGaleryPhotoThirdRowSecond.append(artGaleryPhotoThirdRowSecondImg)
    const artGaleryPhotoThirdRowThird = onCreateElement('div', 'artGal_photo_first_photo')
    artGaleryPhotoThirdRow.append(artGaleryPhotoThirdRowThird)
    const artGaleryPhotoThirdRowThirdImg = onCreateElement('img')
    artGaleryPhotoThirdRowThirdImg.src = "./assets/angel_girl.png"
    artGaleryPhotoThirdRowThird.append(artGaleryPhotoThirdRowThirdImg)


    return artGaleryMain
}

const tickets = () => {
    const ticketsBlock = onCreateElement('div', 'tickets_block')
    ticketsBlock.id = 'tickets_block'
    container.append(ticketsBlock)
    const ticketsBuyBlock = onCreateElement('div', 'tickets_buy_block')
    ticketsBlock.append(ticketsBuyBlock)
    const ticketsBlockTitle = onCreateElement('div', 'tickets_block_title', 'BUY TICKETS')
    ticketsBuyBlock.append(ticketsBlockTitle)
    const ticketsBlockLine = onCreateElement('div', 'tickets_block_line')
    ticketsBuyBlock.append(ticketsBlockLine)
    const ticketsBlockBuyBuy = onCreateElement('div', 'tickets_block_buy_buy')
    ticketsBuyBlock.append(ticketsBlockBuyBuy)
    const ticketsBlockBuyBuyPic = onCreateElement('div', 'tickets_block_buy_buy_pic')
    ticketsBlockBuyBuy.append(ticketsBlockBuyBuyPic)
    const ticketsBlockBuyBuyPicImg = onCreateElement('img')
    ticketsBlockBuyBuyPicImg.src = "./assets/buy_middle.png"
    ticketsBlockBuyBuyPic.append(ticketsBlockBuyBuyPicImg)
    const ticketsBlockBuyBuyAmount = onCreateElement('div', 'tickets_block_buy_buy_amount')
    ticketsBlockBuyBuy.append(ticketsBlockBuyBuyAmount)
    const ticketsBlockBuyBuyAmountTitle = onCreateElement('div', 'tickets_block_buy_buy_amount_title', 'Amount')
    ticketsBlockBuyBuyAmount.append(ticketsBlockBuyBuyAmountTitle)
    const ticketsAmountYoung = onCreateElement('div', 'tickets_amount_young')
    ticketsBlockBuyBuyAmount.append(ticketsAmountYoung)
    const ticketsAmountYoungTitle = onCreateElement('div', 'tickets_amount_young_title', 'Basic 18+')
    ticketsAmountYoung.append(ticketsAmountYoungTitle)
    const ticketsAmountYoungCount = onCreateElement('div', 'tickets_amount_young_count')
    ticketsAmountYoung.append(ticketsAmountYoungCount)
    const ticketsAmountYoungCountMinus = onCreateElement('div', 'tickets_amount_young_count_minus', '–')
    ticketsAmountYoungCount.append(ticketsAmountYoungCountMinus)

    ticketsAmountYoungCountMinus.addEventListener('click', () => {
            if(ticketsAmountYoungCountCount.innerHTML == 0){
                return 
            }
            ticketsTotalCost.innerHTML = ticketsTotalCost.innerHTML - 18
        })
    ticketsAmountYoungCountMinus.addEventListener('click', () => {
        (ticketsAmountYoungCountCount.innerHTML == 0) ? 0 : (ticketsAmountYoungCountCount.innerHTML -= 1)
    })

    const ticketsAmountYoungCountCount = onCreateElement('div', 'tickets_amount_young_count_count', '0')
    ticketsAmountYoungCount.append(ticketsAmountYoungCountCount)
    const ticketsAmountYoungCountPlus = onCreateElement('div', 'tickets_amount_young_count_plus', '+')
    ticketsAmountYoungCount.append(ticketsAmountYoungCountPlus)
    ticketsAmountYoungCountPlus.addEventListener('click', () => {
        ticketsAmountYoungCountCount.innerHTML++
    })
    ticketsAmountYoungCountPlus.addEventListener('click', () => {
        ticketsTotalCost.innerHTML = +ticketsTotalCost.innerHTML + 18
    })

    const ticketsAmountOld = onCreateElement('div', 'tickets_amount_young')
    ticketsBlockBuyBuyAmount.append(ticketsAmountOld)
    const ticketsAmountOldTitle = onCreateElement('div', 'tickets_amount_young_title', 'Senior 65+')
    ticketsAmountOld.append(ticketsAmountOldTitle)
    const ticketsAmountOldCount = onCreateElement('div', 'tickets_amount_young_count')
    ticketsAmountOld.append(ticketsAmountOldCount)
    const ticketsAmountOldCountMinus = onCreateElement('div', 'tickets_amount_young_count_minus', '–')
    ticketsAmountOldCount.append(ticketsAmountOldCountMinus)

    ticketsAmountOldCountMinus.addEventListener('click', () => {
            if(+ticketsAmountOldCountCount.innerHTML === 0){
                return 
            }
            ticketsTotalCost.innerHTML = ticketsTotalCost.innerHTML - 65
        })
    ticketsAmountOldCountMinus.addEventListener('click', () => {
        (ticketsAmountOldCountCount.innerHTML == 0) ? 0 : ticketsAmountOldCountCount.innerHTML -= 1
    })

    const ticketsAmountOldCountCount = onCreateElement('div', 'tickets_amount_young_count_count', '0')
    ticketsAmountOldCount.append(ticketsAmountOldCountCount)
    const ticketsAmountOldCountPlus = onCreateElement('div', 'tickets_amount_young_count_plus',  '+')
    ticketsAmountOldCount.append(ticketsAmountOldCountPlus)

    ticketsAmountOldCountPlus.addEventListener('click', () => {
        ticketsAmountOldCountCount.innerHTML++
    })
    ticketsAmountOldCountPlus.addEventListener('click', () => {
        ticketsTotalCost.innerHTML = +ticketsTotalCost.innerHTML + 65
    })

    const ticketsBlockBuBuyAmountTotal = onCreateElement('div', 'tickets_block_buy_buy_amount_total')
    ticketsBlockBuyBuyAmount.append(ticketsBlockBuBuyAmountTotal)
    const ticketsTotalTitle = onCreateElement('div', 'tickets_total_title', 'Total €')
    ticketsBlockBuBuyAmountTotal.append(ticketsTotalTitle)
    const ticketsTotalCost = onCreateElement('div', 'tickets_total_cost', "0")
    ticketsBlockBuBuyAmountTotal.append(ticketsTotalCost)
    const ticketsBlockBuyBuyAmountButton = onCreateElement('div', 'tickets_block_buy_buy_amount_button', 'Buy Now')
    ticketsBlockBuyBuyAmount.append(ticketsBlockBuyBuyAmountButton)
    const ticketsBlockFooter = onCreateElement('div', 'tickets_block_footer')
    ticketsBlock.append(ticketsBlockFooter)
    const ticketsBlockFooterImg = onCreateElement('img')
    ticketsBlockFooterImg.src = "./assets/buy_end.png"
    ticketsBlockFooter.append(ticketsBlockFooterImg)
    return ticketsBlock
}   

const contacts = () => {
    const contactsBlock = onCreateElement('div', 'contacts_block')
    contactsBlock.id = 'contacts_block'
    container.append(contactsBlock)
    const contactsBlockTitle = onCreateElement('div', 'contacts_block_title', 'Contacts')
    contactsBlock.append(contactsBlockTitle)
    const contactsBlockLine = onCreateElement('div', 'contacts_block_line')
    contactsBlock.append(contactsBlockLine)
    const contactsBlockRequisites = onCreateElement('div', 'contacts_block_requisites')
    contactsBlock.append(contactsBlockRequisites)
    const contactsBlockRequisitesList = onCreateElement('div', 'contacts_block_requisites_list')
    contactsBlockRequisites.append(contactsBlockRequisitesList)
    const contactsBlockRequisitesListName = onCreateElement('div', 'contacts_block_requisites_list_name', 'Palais Royal<br> Musee du Louvre')
    contactsBlockRequisitesList.append(contactsBlockRequisitesListName)
    const contactsBlockRequisitesListAdress = onCreateElement('div', 'contacts_block_requisites_list_adress', 'address: 75001 Paris, France')
    contactsBlockRequisitesList.append(contactsBlockRequisitesListAdress)
    const contactsBlockRequisitesListPhone = onCreateElement('div', 'contacts_block_requisites_list_phone', 'phone: +33(0) 1 40 20 50 50')
    contactsBlockRequisitesList.append(contactsBlockRequisitesListPhone)
    const contactsBlockRequisitesListMail = onCreateElement('div', 'contacts_block_requisites_list_mail', 'mail: info@louvre.fr')
    contactsBlockRequisitesList.append(contactsBlockRequisitesListMail)
    const contactsBlockRequisitesMap = onCreateElement('div', 'contacts_block_requisites_map', '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2624.8530649525665!2d2.3420107918608224!3d48.86101222425656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1635940894243!5m2!1sru!2sby" width = "694" height = "454" style="border:0;" allowfullscreen="" loading="lazy"></iframe>')
    contactsBlockRequisites.append(contactsBlockRequisitesMap)
    return contactsBlock
}

const footer = () => {
    const footerMain = onCreateElement('div', 'footer_footer')
    container.append(footerMain)
    const footerFirst = onCreateElement('div', 'footer_footer_first')
    footerMain.append(footerFirst)
    const footerFirstLabel = onCreateElement('div', 'footer_footer_first_label')
    footerFirst.append(footerFirstLabel)
    const footerFirstLabelImg = onCreateElement('img')
    footerFirstLabelImg.src = "./assets/label.png"
    footerFirstLabel.append(footerFirstLabelImg)
    const footerFirstTitle = onCreateElement('div', 'footer_footer_first_title', 'Louvre')
    footerFirst.append(footerFirstTitle)
    const footerFirstListSocial = onCreateElement('div', 'footer_footer_first_list_social')
    footerFirst.append(footerFirstListSocial)
    const footerFirstList = onCreateElement('div', 'footer_footer_first_list')
    footerFirstListSocial.append(footerFirstList)
    const footerFirstlistFirstColomn = onCreateElement('div', 'footer_footer_first_list_first_colomn')
    footerFirstList.append(footerFirstlistFirstColomn)
    const footerFirstlistFirstColomnF = onCreateElement('div', 'footer_footer_first_list_first_colomn_point', 'Visiting')
    footerFirstlistFirstColomn.append(footerFirstlistFirstColomnF)
    const footerFirstlistFirstColomnS = onCreateElement('div', 'footer_footer_first_list_first_colomn_point', 'Explore')
    footerFirstlistFirstColomn.append(footerFirstlistFirstColomnS)
    const footerFirstlistFirstColomnT = onCreateElement('div', 'footer_footer_first_list_first_colomn_point', 'Video')
    footerFirstlistFirstColomn.append(footerFirstlistFirstColomnT)
    const footerFirstlistSecondColomn = onCreateElement('div', 'footer_footer_first_list_first_colomn')
    footerFirstList.append(footerFirstlistSecondColomn)
    const footerFirstlistSecondColomnF = onCreateElement('div', 'footer_footer_first_list_first_colomn_point', 'Gallery')
    footerFirstlistSecondColomn.append(footerFirstlistSecondColomnF)
    const footerFirstlistSecondColomnS = onCreateElement('div', 'footer_footer_first_list_first_colomn_point', 'Tickets')
    footerFirstlistSecondColomn.append(footerFirstlistSecondColomnS)
    const footerFirstlistSecondColomnT = onCreateElement('div', 'footer_footer_first_list_first_colomn_point', 'Contacts')
    footerFirstlistSecondColomn.append(footerFirstlistSecondColomnT)
    const footerFirstSocialBlock = onCreateElement('div', 'footer_footer_first_social_block')
    footerFirstListSocial.append(footerFirstSocialBlock)
    const footerFirstSocial = onCreateElement('div', 'footer_footer_first_social')
    footerFirstSocialBlock.append(footerFirstSocial)
    const footerFirstSocialY = onCreateElement('div', 'footer_footer_first_social_y')
    footerFirstSocial.append(footerFirstSocialY)
    const footerFirstSocialYPic = onCreateElement('div', 'footer_footer_first_social_y_pic')
    footerFirstSocialY.append(footerFirstSocialYPic)
    const footerFirstSocialYPicImg = onCreateElement('img')
    footerFirstSocialYPicImg.src = "./assets/youtube.png"
    footerFirstSocialYPic.append(footerFirstSocialYPicImg)
    const footerFirstSocialI = onCreateElement('div', 'footer_footer_first_social_y')
    footerFirstSocial.append(footerFirstSocialI)
    const footerFirstSocialIPic = onCreateElement('div', 'footer_footer_first_social_y_pic')
    footerFirstSocialI.append(footerFirstSocialIPic)
    const footerFirstSocialIPicImg = onCreateElement('img')
    footerFirstSocialIPicImg.src = "./assets/inst.png"
    footerFirstSocialIPic.append(footerFirstSocialIPicImg)
    const footerFirstSocialF = onCreateElement('div', 'footer_footer_first_social_y')
    footerFirstSocial.append(footerFirstSocialF)
    const footerFirstSocialFPic = onCreateElement('div', 'footer_footer_first_social_y_pic')
    footerFirstSocialF.append(footerFirstSocialFPic)
    const footerFirstSocialFPicImg = onCreateElement('img')
    footerFirstSocialFPicImg.src = "./assets/facebook.png"
    footerFirstSocialFPic.append(footerFirstSocialFPicImg)
    const footerFirstSocialT = onCreateElement('div', 'footer_footer_first_social_y')
    footerFirstSocial.append(footerFirstSocialT)
    const footerFirstSocialTPic = onCreateElement('div', 'footer_footer_first_social_y_pic')
    footerFirstSocialT.append(footerFirstSocialTPic)
    const footerFirstSocialTPicImg = onCreateElement('img')
    footerFirstSocialTPicImg.src = "./assets/twitter.png"
    footerFirstSocialTPic.append(footerFirstSocialTPicImg)
    const footerFirstSocialV = onCreateElement('div', 'footer_footer_first_social_y')
    footerFirstSocial.append(footerFirstSocialV)
    const footerFirstSocialVPic = onCreateElement('div', 'footer_footer_first_social_y_pic')
    footerFirstSocialV.append(footerFirstSocialVPic)
    const footerFirstSocialVPicImg = onCreateElement('img')
    footerFirstSocialVPicImg.src = "./assets/Vector (4).png"
    footerFirstSocialVPic.append(footerFirstSocialVPicImg)
    const footerSecond = onCreateElement('div', 'footer_footer_second')
    footerMain.append(footerSecond)
    const footerThird = onCreateElement('div', 'footer_footer_third')
    footerMain.append(footerThird)
    const footerThirdYear = onCreateElement('div', 'footer_footer_third_year', '© 2021')
    footerThird.append(footerThirdYear)
    const footerThirdSchool = onCreateElement('div', 'footer_footer_third_year_rol', 'The Rolling Scopes School')
    footerThird.append(footerThirdSchool)
    const footerThirdName = onCreateElement('div', 'footer_footer_third_year', 'Username')
    footerThird.append(footerThirdName)
    return footerMain
}

(function initialize () {
    pictureExplore()
    videoJourney()
    artGalery()
    tickets()
    contacts()
    footer()
})()
