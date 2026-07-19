const matchList = document.getElementById("matchList");


const today = new Date();
today.setHours(0, 0, 0, 0);

const upcomingMatches = matches.filter(match => {

    const matchDate = new Date(match.date + "T00:00:00");

    return matchDate >= today;

});

upcomingMatches.sort((a, b) =>
    new Date(a.date) - new Date(b.date)
);

// 試合がない場合
if (upcomingMatches.length === 0) {

    matchList.innerHTML = "<p>今シーズンの試合は終了しました。</p>";

} else {

    const nextDate = upcomingMatches[0].date;

    const todayMatches = upcomingMatches.filter(match =>
        match.date === nextDate
    );

    todayMatches.forEach(match => {

        matchList.innerHTML += createMatchCard(match);

    });

}

function createEventPreview(){

    const area =
    document.getElementById("event-preview");

    if(!area) return;


    area.innerHTML = "";


    Object.values(eventSettings).forEach(event=>{


        if(!event.visible){
            return;
        }


        area.innerHTML += `

        <div class="event-card">

            <h2>${event.name}</h2>

            <a href="${event.link}">
                詳細を見る
            </a>

        </div>

        `;


    });

}


createEventPreview();