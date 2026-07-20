function formatDate(date){

    const d = new Date(date);

    return `${d.getMonth()+1}月${d.getDate()}日`;

}

const newsList = document.getElementById("news-list");


window.addEventListener("newsLoaded",()=>{


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
