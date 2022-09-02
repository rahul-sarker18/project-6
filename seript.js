// main api lode 
const lodeApi=()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(valu => lodeManu(valu.data.news_category))
}
const lodeManu=manus=>{
    // console.log(manus.data.news_category)
    const manuDive =document.getElementById('manu-div');
    for(const manu of manus){
        console.log(manu.category_name)
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