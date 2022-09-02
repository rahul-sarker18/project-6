// manu api lode 
const lodeApi=()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(valu => lodeManu(valu.data.news_category))
}
const lodeManu=manus=>{
    // console.log(manus.data.news_category)
    const manuDive =document.getElementById('manu-div');
    for(const manu of manus){
        // console.log(manu.category_name)
        const li =document.createElement('li')
        li.style.listStyle=('none')
        li.classList.add('p-4')

        li.innerHTML=`
        <a href="" class='text-decoration-none text-danger'>${manu.category_name}</a>
        `
        manuDive.appendChild(li)
    }
}
lodeApi()

// main api lode 
const mainApi =()=>{
    const url =`https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
    .then(res => res.json())
    .then(newses => lodeUi(newses.data))
}


const lodeUi = newses=>{
   
    const div = document.getElementById('main-div');
    newses.forEach(news => {
        console.log(news)
        const newDiv =document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML =`
            <div class="card">
                <div class='row row-cols-1 row-cols-md-3 g-4 col-12'> 

                    <img src="${news.thumbnail_url}" class="card-img-top w-50 mx-auto" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${news.title ? news.title : "no title fouend"}</h5>
                        <p class="card-text">${news.details ? news.details.slice(0, 250) +'...' : ''}</p>

                        <div class='row row-cols-1 row-cols-md-2 g-4'>
                            <div class="d-flex gap-2"> 
                                <img src="${news.author.img}" width="20px" height="20px" class="rounded-circle  mt-3" alt="csdzdcczxc">
                                <p class='mt-3'> ${news.author.name}</p>
                            </div>
                            <div class='d-flex'>
                                <img src="img/eye-solid.svg"  width="20px"  alt="...">
                                <p class='mt-3 mx-2'>${news.total_view}</p>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        `
        div.appendChild(newDiv);
    });
}
mainApi()