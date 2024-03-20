

let eventHolder = {
    monday: {
        image: '/media/books.png',
        description: 'Join Us for ...',
        title: 'Men Of The Movement',
        day:'Monday'
    },
    tuesday: {
        image: '/media/tues.png',
        description: 'Take Action Now.. on tuesdays...',
        title: 'Tuesday Outreach',
        day:'Tuesday'
    },
    wednesday: {
        image: '/media/tse.JPG',
        description: 'Align your Chakras and ...',
        title: 'Wellness Wednesdays',
        day:'Wednesday'
    },
    thursday: {
        image: '/media/ali.png',
        description: 'Release your Artistic Side..',
        title: 'Sip & Paint',
        day:'Thursday'
    },
    friday: {
        image: '/media/movie.png',
        description: 'Fellowship at Kemet',
        title: 'EduTainment ',
        day:'Friday'
    },
    saturday: {
        image: '/media/mantra.png',
        description: 'Tse High Life',
        title: 'Atlanta Quarterly',
        day:''
    },
    sunday: {
        image: '/media/medd.png',
        description: 'Exercise and Alignment',
        title: 'Meditation Days',
        day:'Sunday'
    }
}

let screen = document.querySelector('.posterLook')
let title = document.querySelector('.eventName')
let description = document.querySelector('.eDesc')

const transferPic = (pic,header,info) => {
    screen.setAttribute('src',pic)
    title.innerHTML = header
    description.innerHTML= info
}