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
        //
        const li =document.createElement('li')
        li.style.listStyle=('none')
        li.classList.add('p-4')
        li.innerHTML=`
        <h6 onclick="mainApi(${manu.category_id})"  class='text-decoration-none text-danger'>${manu.category_name}</h6>
        `
        manuDive.appendChild(li)
        console.log(li)
    }
}
lodeApi()



// main api lode 
const mainApi =(search)=>{
    // console.log(search)
    const url =`https://openapi.programming-hero.com/api/news/category/0${search}`
    fetch(url)
    .then(res => res.json())
    .then(newses => lodeUi(newses.data))
}
mainApi()

const lodeUi = newses=>{
   // news length imput fild 
   const newesLength =document.getElementById('news-length');
   newesLength.innerText="total news category" +'   '+ newses.length;
   
    const div = document.getElementById('main-div');
    div.innerHTML =``;
    newses.forEach(news => {
        // console.log(news)

        const newDiv =document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML =`
            <div class="card">
                <div class='row row-cols-1 row-cols-md-3 g-4 col-12'> 

                    <img src="${news.thumbnail_url}" class="card-img-top w-50 mx-auto" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${news.title ? news.title.slice(0,50)+'...' : "no title fouend"}</h5>
                        <p class="card-text">${news.details ? news.details.slice(0, 250) +'...' : 'no title fouend'}</p>

                        <div class='d-flex  g-3'>
                            <div class="d-flex col-8"> 
                                <img src="${news.author.img}" width="20px" height="20px" class="rounded-circle  mt-3" alt="csdzdcczxc">
                                <p class='mt-3 ms-1'> ${news.author.name ?news.author.name.slice(0, 13)+'..' : 'onte fouend'}</p>
                            </div>
                            <div class='d-flex col-3'>
                                <img src="img/eye-solid.svg"  width="20px"  alt="...">
                                <p class='mt-3 mx-2'>${news.total_view ? news.total_view :0}</p>
                            </div>       
                        </div>
                        <div class='text-center'>
                            <button class='btn btn-primary'> Deatls</button> 
                        </div>
                    </div>
                </div>
            </div>
        `
        div.appendChild(newDiv);
    });
}
