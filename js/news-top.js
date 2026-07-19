const topNewsList = document.getElementById("top-news-list");


news.slice(0,3).forEach(item => {

    topNewsList.innerHTML += `

    <div class="news-item">

        <div class="date">
            ${formatDate(item.date)}
        </div>

        <p>
            ${item.title}
        </p>

    </div>

    `;

});