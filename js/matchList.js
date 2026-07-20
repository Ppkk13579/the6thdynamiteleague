const params = new URLSearchParams(window.location.search);

const matchupTeam1 = params.get("team1");
const matchupTeam2 = params.get("team2");



if(matchupTeam1 && matchupTeam2){

    const searchArea = document.getElementById("search-area");

    if(searchArea){
        searchArea.style.display = "none";
    }


    const matchupHeader = document.getElementById("matchup-header");
    const matchupTitle = document.getElementById("matchup-title");


    if(matchupHeader && matchupTitle){

        matchupHeader.style.display = "block";

        matchupTitle.textContent =
            `${matchupTeam1} vs ${matchupTeam2}`;

    }

}

function createMatchList(matches, id){

    const list = document.getElementById(id);

    if(!list) return;

    list.innerHTML = "";

    // 日付ごとに試合をまとめる
    const groupedMatches = {};

    matches.forEach(match => {

    if(!groupedMatches[match.date]){
        groupedMatches[match.date] = [];
    }

    groupedMatches[match.date].push(match);

    });


    // 日付ごとに表示
for (const date in groupedMatches) {

    list.innerHTML += `<h3 class="schedule-date">${date}</h3>`;

    const cityMatches = groupedMatches[date].filter(
    match =>
        match.stage !== "交流戦" &&
        match.stage !== "オープン戦" &&
        teams[match.home].league === "シティーリーグ"
    );


    const wildMatches = groupedMatches[date].filter(
    match =>
        match.stage !== "交流戦" &&
        match.stage !== "オープン戦" &&
        teams[match.home].league === "ワイルドリーグ"
    );


    const specialMatches = groupedMatches[date].filter(
    match =>
        match.stage === "交流戦" ||
        match.stage === "オープン戦"
    );

    // シティーリーグ
    if (cityMatches.length > 0) {

        const cityId = `${id}-${date}-city`;

        list.innerHTML += `
            <h4 class="league-title">シティーリーグ</h4>
            <div class="schedule-grid" id="${cityId}"></div>
        `;

        const cityGrid = document.getElementById(cityId);

        cityMatches.forEach(match => {
            cityGrid.innerHTML += createMatchCard(match);
        });
    }

    // ワイルドリーグ
    if (wildMatches.length > 0) {

        const wildId = `${id}-${date}-wild`;

        list.innerHTML += `
            <h4 class="league-title">ワイルドリーグ</h4>
            <div class="schedule-grid" id="${wildId}"></div>
        `;

        const wildGrid = document.getElementById(wildId);

        wildMatches.forEach(match => {
            wildGrid.innerHTML += createMatchCard(match);
        });
    }

    if(specialMatches.length > 0){

    const specialId = `${id}-${date}-special`;

    list.innerHTML += `
        <h4 class="league-title">
            ${specialMatches[0].stage}
        </h4>

        <div class="schedule-grid" id="${specialId}"></div>
    `;


    const specialGrid = document.getElementById(specialId);


    specialMatches.forEach(match=>{

        specialGrid.innerHTML += createMatchCard(match);

    });

}
}

}

function displaySchedule(){

    const date = document.getElementById("date-filter").value;
    const league = document.getElementById("league-filter").value;


    let filteredMatches = matches.filter(match=>{


        const dateOK =
            date === "all" ||
            match.date === date;


        const leagueOK =
            league === "all" ||
            match.league === league;


        const matchupOK =
            !matchupTeam1 ||
            !matchupTeam2 ||
            (
                (match.home === matchupTeam1 &&
                 match.away === matchupTeam2)
                ||
                (match.home === matchupTeam2 &&
                 match.away === matchupTeam1)
            );


        return dateOK && leagueOK && matchupOK;

    });


    createMatchList(filteredMatches, "match-list");

        sessionStorage.setItem("dateFilter", date);
        sessionStorage.setItem("leagueFilter", league);

}



function createDateOptions(){

    const select = document.getElementById("date-filter");

    const dates = [...new Set(matches.map(match=>match.date))];


    dates.forEach(date=>{

        select.innerHTML += `
        <option value="${date}">
            ${formatDate(date)}
        </option>
        `;


    });

}

window.addEventListener("matchesLoaded", () => {

createDateOptions();

const savedDate = sessionStorage.getItem("dateFilter");
const savedLeague = sessionStorage.getItem("leagueFilter");

if (savedDate) {
    document.getElementById("date-filter").value = savedDate;
}

if (savedLeague) {
    document.getElementById("league-filter").value = savedLeague;
}

document
.getElementById("date-filter")
.addEventListener("change", displaySchedule);

document
.getElementById("league-filter")
.addEventListener("change", displaySchedule);

displaySchedule();

const scroll = sessionStorage.getItem("scheduleScroll");

// 「戻る」でページに戻ってきたときだけ復元
const navigation =
performance.getEntriesByType("navigation")[0];

if (
    scroll !== null &&
    navigation &&
    navigation.type === "back_forward"
) {

    setTimeout(() => {

        window.scrollTo(0, Number(scroll));

    }, 0);

} else {

    // ヘッダーや他ページから来たら一番上
    window.scrollTo(0, 0);

    // 古いスクロール位置も消しておく
    sessionStorage.removeItem("scheduleScroll");

}

});
