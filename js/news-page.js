function formatDate(date){

    const d = new Date(date);

    return `${d.getMonth()+1}月${d.getDate()}日`;

}

const newsList = document.getElementById("news-list");

console.log("news-page読み込み");

window.addEventListener("newsLoaded",()=>{

    console.log("newsLoaded受信");
    console.log(window.news);

    newsList.innerHTML = "";

    window.news.forEach(item => {


        newsList.innerHTML += `

        <article class="news-item">

            <div class="date">
                ${formatDate(item.date)}
            </div>

            <h3>
                ${item.title}
            </h3>

            <p>
                ${item.text}
            </p>

        </article>

        `;


    });


});

console.log("news-page.js読み込みOK");

window.addEventListener("newsLoaded",()=>{

    console.log("newsLoaded受信");

});
