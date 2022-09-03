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
        const list =document.createElement('li')
        list.style.listStyle=('none')
        list.classList.add('p-4')
        list.innerHTML=`
        <h6 onclick="mainApi(${manu.category_id})" style="cursor: pointer;"  class='text-decoration-none text-danger'>${manu.category_name}</h6>
        `
        manuDive.appendChild(list);
    }
    spinner(true);
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
mainApi(08)

const lodeUi = newses=>{
   // news length imput fild 
   const newesLength =document.getElementById('news-length');
   newesLength.innerText="total news category" +'   '+ newses.length;
   
    const div = document.getElementById('main-div');
    div.innerHTML =``;
    newses.forEach(news => {
        // console.log(news._id)

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
                            <button onclick=" btnDtls('${news._id}')" class='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal"> Deatls</button> 
                        </div>
                    </div>
                </div>
            </div>
        `
        div.appendChild(newDiv);
    });
    spinner(false);
}

// details buttons functions
const btnDtls=(id)=>{
    const ul =`https://openapi.programming-hero.com/api/news/${id}`
    fetch(ul)
    .then(res => res.json())
    .then(detls => detailsBtn(detls.data))
}
const detailsBtn=(detls)=>{
    // console.log(detls);
    // const exampleModals =document.getElementById('exampleModal')

    for(const dt of detls){
        console.log(dt)
        const h5= document.getElementById('exampleModalLabel');
        h5.innerText = dt.author.name ?dt.author.name: 'no found'
        const h4=document.getElementById('publict-det');

        const bodys=  document.getElementById('modal-body')
        bodys.innerHTML= `
        <p>Published Date :  ${dt.author.published_date ? dt.author.published_date:'no found'}</p>
        <img src="${ dt.author.img ? dt.author.img:'no fouend'}" class='w-50'>            
        `
    }    
}
detailsBtn()

// spinner add function 
const spinner = (istrue)=>{
    const spinnerDiv =document.getElementById('spinner-div');
    if(istrue === true){
        spinnerDiv.classList.remove('d-none')
    }else{
        spinnerDiv.classList.add('d-none')
    }
}