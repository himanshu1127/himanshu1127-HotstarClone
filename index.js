let carousel_div = document.getElementById("carousel");
function carousel() {
    let images = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/2358/1282358-h-daf565810c3c",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/5519/675519-h",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/2352/1282352-h-23698d5e8f30",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/8772/1248772-h-8fc79ddd0960",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/8508/1358508-h-9374e51a02a7 ",]
    let imgelement = document.createElement("img");
    imgelement.src = images[0];
    carousel_div.append(imgelement);



    let i = 1;

    setInterval(function () {

        if (i === images.length) {
            i = 0;
        }

        imgelement.src = images[i];
        carousel_div.append(imgelement);
        i++

    }, 3000);



}
carousel();

const movies = [
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

let grid = document.getElementById("grid");
let data = movies;



let mypromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let data = movies;
        if (data != null) {
            resolve(data);
        }
        else {
            reject("Server Laging")
        }
    }, 2000);
})

async function main() {
    try {
        let res = await mypromise
        appendmovies(res)
    }
    catch (error) {
        console.log(error)
    }
}
main();

function appendmovies(data) {
    let loader = document.getElementById("loader_div");
    loader.style.display = "none";

    data.forEach(function (el) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.id = "poster"
        img.src = el.img;

        let p_n = document.createElement("p");
        p_n.innerHTML = el.name;

        let p_r = document.createElement("p");
        p_r.innerHTML = el.rating
        div.append(img, p_n, p_r);
        grid.append(div)
    })
}

function sortLH() {
    grid.innerHTML = null;
    data = data.sort(function (a, b) {
        return a.rating - b.rating;
    })
    appendmovies(data);
}

function sortHL() {
    grid.innerHTML = null;
    data = data.sort(function (a, b) {
        return b.rating - a.rating;
    })
    appendmovies(data);
}

async function Searchmovies() {
    try {
        let query = document.getElementById("search").value;
        let res = await fetch("http://www.omdbapi.com/?s=" + query + "&apikey=f4f3e6c5")
        let data = await res.json()
        let loader = document.getElementById("loader_div");
        loader.style.display = "block"

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
    let loader = document.getElementById("loader_div");
    loader.style.display = "none";
    carousel_div.style.display = "none";
    grid.style.display = "none"
    let btn = document.getElementById("buttons");
    btn.style.display = "none"


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