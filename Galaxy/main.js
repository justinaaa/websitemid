let pageData = {
    productName: 'Book a Cruise to the Moon',
    productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station',
    image:[
        "image/asteroid.jpg",
        "image/fantasy.jpg",
        "image/space.jpg",
        "image/spaceship.jpg"
    ],
    h2ClassController: {
        centered:true,
        colorFont:true
    },
    pStyleController:{
        'margin-left':'50px',
        color:'black',
        'font-size':'20px',
        'font-style':'italic'
    },
    imageStyleController:{
        margin:'auto',
        display:'black',
        width:'50%'
    },
    imageAlt:"Photo from Space",

    productClasses:[
        {
            name:'Coach',
            price:125000,
            seatAvailable:6,
            earlybird:true
        },
        {
            name:'Business',
            price:275000,
            seatAvailable:20,
            earlybird:true
        },
        {
            name:'First',
            price:430000,
            seatAvailable:2,
            earlybird:false
        },
    ],
};

const app = Vue.createApp({
    data(){
        return pageData;
    }
});

app.mount("#app");