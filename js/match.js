const params = new URLSearchParams(window.location.search);

const matchId = Number(params.get("id"));

console.log(matchId);

const match = matches.find(match => match.id === matchId);

let title = "";

    if (match.stage === "レギュラーシーズン") {
    title = `第${match.set}セット 第${match.seasonGame}試合`;

    } else if (
    match.stage === "交流戦" ||
    match.stage === "オープン戦"
    ) {
    title = `${match.stage} 第${match.seasonGame}試合`;

    } else if (match.set) {
    title = `${match.stage} ${match.set} 第${match.game}戦`;

    } else {
    title = `${match.stage} 第${match.game}戦`;
    }

function getHomeRunNumber(matchId, player){

    let count = 0;

    matches.forEach(m => {

        if(m.id > matchId) return;

        m.homeRuns.forEach(run=>{
            if(run.player === player){
                count++;
            }
        });

        m.awayRuns.forEach(run=>{
            if(run.player === player){
                count++;
            }
        });

    });

    return count;

}

document.getElementById("title").textContent = title;

console.log(match);

document.getElementById("league").textContent = match.league;

document.getElementById("title").textContent = title;

document.getElementById("date").textContent =
    `${formatDate(match.date)} ${match.time}`;


document.getElementById("homeTeam").innerHTML =
`<a href="team.html?team=${encodeURIComponent(match.home)}"
class="team-link">${match.home}</a>`;

document.getElementById("awayTeam").innerHTML =
`<a href="team.html?team=${encodeURIComponent(match.away)}"
class="team-link">${match.away}</a>`;

document.getElementById("homeLogo").src =
    teams[match.home].logo;

document.getElementById("awayLogo").src =
    teams[match.away].logo;

document.getElementById("homeManager").textContent =
    `監督：${match.homeManager}`;

document.getElementById("awayManager").textContent =
    `監督：${match.awayManager}`;    

document.getElementById("homeStarter").textContent =
    `先発：${match.homeStarter}`;

document.getElementById("awayStarter").textContent =
    `先発：${match.awayStarter}`;    


if (match.status === "試合前") {
    document.getElementById("score").textContent = "VS";
} else {
    document.getElementById("score").textContent =
        `${match.homeScore} - ${match.awayScore}`;
}

const scoreboardBody = document.getElementById("scoreboardBody");

scoreboardBody.innerHTML = `
<tr class="away-row">
    <td
    style="
    background:${teams[match.away].color};
    color:${teams[match.away].textColor};
    "
    >
        ${match.away}
    </td>
    <td>${match.innings.away[0]}</td>
    <td>${match.innings.away[1]}</td>
    <td>${match.innings.away[2]}</td>
    <td>${match.awayScore}</td>
    <td>${match.hits.away}</td>
</tr>

<tr class="home-row">
    <td
    style="
    background:${teams[match.home].color};
    color:${teams[match.home].textColor};
    "
    >
        ${match.home}
    </td>
    <td>${match.innings.home[0]}</td>
    <td>${match.innings.home[1]}</td>
    <td>${match.innings.home[2]}</td>
    <td>${match.homeScore}</td>
    <td>${match.hits.home}</td>
</tr>
`;

document.getElementById("status").textContent =
    match.status;

document.getElementById("mvp").textContent = match.mvp || "なし";


document.getElementById("homeRunsTitle").textContent = match.home;
document.getElementById("awayRunsTitle").textContent = match.away;
document.getElementById("homeRunsLogo").src = teams[match.home].logo;
document.getElementById("awayRunsLogo").src = teams[match.away].logo;

const homeRunsList = document.getElementById("homeRuns");
const awayRunsList = document.getElementById("awayRuns");

homeRunsList.innerHTML = "";
awayRunsList.innerHTML = "";

const showHomeRunNumber =
    match.stage === "レギュラーシーズン" ||
    match.stage === "交流戦";


if(match.homeRuns.length === 0){

    homeRunsList.innerHTML = "<li>なし</li>";

}else{

    match.homeRuns.forEach((run,index)=>{

    const samePlayerCount =
        match.homeRuns
        .slice(0,index)
        .filter(r=>r.player === run.player)
        .length;


    const number =
    showHomeRunNumber
    ? getHomeRunNumber(match.id, run.player) - samePlayerCount
    : null;


    homeRunsList.innerHTML += `
        <li>
            ${run.player}
            ${number ? `${number}号` : ""}
        </li>
    `;

});

}



if(match.awayRuns.length === 0){

    awayRunsList.innerHTML = "<li>なし</li>";

}else{

    match.awayRuns.forEach((run,index)=>{

    const samePlayerCount =
        match.awayRuns
        .slice(0,index)
        .filter(r=>r.player === run.player)
        .length;


    const number =
    showHomeRunNumber
    ? getHomeRunNumber(match.id, run.player) - samePlayerCount
    : null;


    awayRunsList.innerHTML += `
        <li>
            ${run.player}
            ${number ? `${number}号` : ""}
        </li>
    `;

});

}

document.getElementById("homeStealsTitle").textContent = match.home;
document.getElementById("awayStealsTitle").textContent = match.away;

document.getElementById("homeStealsLogo").src = teams[match.home].logo;
document.getElementById("awayStealsLogo").src = teams[match.away].logo;

const homeStealsList = document.getElementById("homeSteals");
const awayStealsList = document.getElementById("awaySteals");

homeStealsList.innerHTML = "";
awayStealsList.innerHTML = "";

// ホームチーム
if(match.homeSteals.length === 0){
    homeStealsList.innerHTML = "<li>なし</li>";
}else{
    match.homeSteals.forEach(steal => {
        homeStealsList.innerHTML += `<li>${steal.player}</li>`;
    });
}

// アウェーチーム
if(match.awaySteals.length === 0){
    awayStealsList.innerHTML = "<li>なし</li>";
}else{
    match.awaySteals.forEach(steal => {
        awayStealsList.innerHTML += `<li>${steal.player}</li>`;
    });
}