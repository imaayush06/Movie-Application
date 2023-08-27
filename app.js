const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
//api for most popular movies 
const imgPath = "https://image.tmdb.org/t/p/w1280"
//api for images of the movies
const searchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
//api for search engine
const mvBox = document.querySelector("#movie-box")


const getMovies = async(api) =>{
    const response = await fetch(api)
    const data = await response.json()
    console.log(data)
    showMovies(data.results)
}


/* <div class="box">
    <img src="https://picsum.photos/400/500" alt="image" srcset="">
            <div class="overlay">
                <div class="title">
                    <h2>Title</h2>
                    <span> 9.5 </span>
                </div>
                <h3>Overview:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veritatis iusto iure cumque facere. 
                    Deleniti hic reiciendis voluptatibus mollitia neque minima rem eligendi odit, itaque dolorum, perspiciatis laboriosam earum labore.</p>
            </div>
</div> */

const showMovies = (data) =>{
    mvBox.innerHTML = ""  //empty the box everytime you search
    console.log(data)
    data.forEach(
        (item) =>{
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML =`
            <img src="${imgPath + item.poster_path}" alt="image"/>
                <div class="overlay">
                    <div class="title">
                        <h2>${item.title}</h2>
                        <span>${item.vote_average}</span>
                    </div>
                    <h3>Overview:</h3>
                    <p>${item.overview}</p>
            </div>
            `
            mvBox.appendChild(box)
        }
    )
    
}

document.querySelector("#search").addEventListener(
    "keyup",
    function(event){
        console.log(event.target.value)
        if(event.target.value != ""){
            getMovies(searchAPI + event.target.value)
            //searched movies
        }else{
            getMovies(APIURL)
        }
    }
)
//init call
getMovies(APIURL)
