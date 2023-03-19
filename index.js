
let reload = document.querySelector('.brand-logo');
reload.addEventListener('click', () => {
    window.location = "index.html"
})



let carousel = document.querySelector('.carousel');
let sliders = []
let sliderindex = 0;


let movies = [
    {
        name: 'WI  vs IND 317/8 (50)',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 2.PNG'
    },
    {
        name: 'Rudra: The Edge of Darkness',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 1.PNG'
    },
    {
        name: 'The Book of Boba Fett',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 3.PNG'
    },
    {
        name: 'raya and the last dragon',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 4.PNG'
    },
    {
        name: 'luca',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 5.PNG'
    }
]


const createSlide = () => {
    if (sliderindex >= movies.length) {
        sliderindex = 0;

    }
    carousel.innerHTML = null

    let slide = document.createElement("div")
    let imgelement = document.createElement("img")
    let content = document.createElement("div")
    let h1 = document.createElement("h1")
    let p = document.createElement("p")

    imgelement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[sliderindex].name));
    p.appendChild(document.createTextNode(movies[sliderindex].des));
    content.appendChild(h1)
    content.appendChild(p)
    slide.appendChild(content)
    slide.appendChild(imgelement)
    carousel.appendChild(slide)

    imgelement.src = movies[sliderindex].image;
    sliderindex++;

    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-tittle';
    p.className = "movie-desc"

    sliders.push(slide);


    if (slide.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }


}

for (let i = 0; i < 6; i++) {
    createSlide()
}
setInterval(() => {
    createSlide()
}, 3000)


const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {


    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause()
    })

})


let cardcontainers = [...document.querySelectorAll('.card-container')];
let prebtn = [...document.querySelectorAll('.pre-btn')];
let nxtbtn = [...document.querySelectorAll('.nxt-btn')];



cardcontainers.forEach((el, i) => {
    let containersdimention = el.getBoundingClientRect();
    let containerwidth = containersdimention.width;


    nxtbtn[i].addEventListener("click", () => {
        el.scrollLeft += containerwidth - 200
    });
    prebtn[i].addEventListener("click", () => {
        el.scrollLeft -= containerwidth + 200
    });
})















const movies2 = [
    {
        name: 'RRR',
        rating: 8,
        img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7642/1307642-v-3d3b6c61f97e',
    },
    {
        name: 'Goodluck Jerry ',
        rating: 7,
        img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/901/1310901-v-e9763c24f44d',
    },
    {
        name: 'MSD',
        rating: 8.5,
        img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v',
    },
    {
        name: 'Doctor Strange',
        rating: 9,
        img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40',
    },
    {
        name: 'Ford vs Ferrari',
        rating: 8.7,
        img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3150/813150-v',
    },
    {
        name: 'Masaan',
        rating: 8.8,
        img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/7441/1000087441/1000087441-v',
    },
    {
        name: 'The lion king',
        rating: 8.4,
        img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v',
    },
];



async function Searchmovies() {
    try {
        let query = document.getElementById("search").value;
        let res = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=f4f3e6c5&page=3`)
        let data = await res.json()

        console.log(data)

        setTimeout(function () {
            appendsearch(data.Search)
        }, 2000)
    }
    catch (error) {

    }
}


function appendsearch(data) {
    let res = document.getElementById("search_res")
    res.innerHTML = null;
    let h1 = document.querySelector('.search-result');
    h1.style.display = "block"
    let home = document.querySelector('.home-container');
    home.style.display = "none";


    data.forEach(function (el) {
        let div = document.createElement("div");


        let img = document.createElement("img");
        img.id = "poster"
        img.src = el.Poster;

        let p_n = document.createElement("p");
        p_n.innerHTML = el.Title;

        let p_r = document.createElement("p");
        p_r.innerHTML = el.Year
        div.append(img, p_n, p_r);
        res.append(div)
    })
}
let id;
function debounce(func, delay) {
    if (id) {
        clearInterval(id);
    }
    id = setTimeout(() => {
        func();


    }, delay)

}