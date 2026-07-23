const matchList = document.getElementById("matchList");

window.addEventListener("matchesLoaded", () => {

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingMatches = matches.filter(match => {

    const matchDate = new Date(match.date);
    matchDate.setHours(0, 0, 0, 0);

    return matchDate >= today;

});

    upcomingMatches.sort((a, b) =>
        new Date(a.date) - new Date(b.date)
    );

    console.log("matchList", matchList);
console.log("matches件数", matches.length);
console.log("upcomingMatches件数", upcomingMatches.length);
console.log("upcomingMatches", upcomingMatches);

    // 試合がない場合
    if (upcomingMatches.length === 0) {

        matchList.innerHTML = "<p>本日の試合はありません。</p>";

    } else {

        const nextDate = upcomingMatches[0].date;

        const todayMatches = upcomingMatches.filter(match =>
            match.date === nextDate
        );

        todayMatches.forEach(match => {

            matchList.innerHTML += createMatchCard(match);

        });

    }

});

function createEventPreview(){

    const area =
    document.getElementById("event-preview");

    if(!area) return;

    area.innerHTML = "";

    let hasVisibleEvent = false;

    Object.values(eventSettings).forEach(event=>{

        if(!event.visible){
            return;
        }

        hasVisibleEvent = true;

        area.innerHTML += `

        <div class="event-card">

            <h2>${event.name}</h2>

            <a href="${event.link}">
                詳細を見る
            </a>

        </div>

        `;

    });

    // visible=true のイベントがある時だけ表示
    if(hasVisibleEvent){
        area.style.display = "block";
    }

}

createEventPreview();

