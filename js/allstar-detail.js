document.getElementById("allstarTitle").textContent =
    allStarMatch.title;


document.getElementById("allstarDate").textContent =
    allStarMatch.date + " " + allStarMatch.time;


document.getElementById("allstarStadium").textContent =
    allStarMatch.stadium;

const status = document.getElementById("status");

status.textContent = allStarMatch.status;

if(allStarMatch.status === "試合前"){
    status.classList.add("before");
}else if(allStarMatch.status.startsWith("試合中")){
    status.classList.add("live");
}else if(allStarMatch.status === "試合終了"){
    status.classList.add("finished");
}
// ホーム（シティー）

document.getElementById("homeLogo").src =
    allStarMatch.home.logo;


document.getElementById("homeTeam").textContent =
    allStarMatch.home.name;


document.getElementById("homeManager").textContent =
    allStarMatch.home.manager;



// アウェー（ワイルド）

document.getElementById("awayLogo").src =
    allStarMatch.away.logo;


document.getElementById("awayTeam").textContent =
    allStarMatch.away.name;


document.getElementById("awayManager").textContent =
    allStarMatch.away.manager;



// スコア

document.getElementById("homeScore").textContent =
    allStarMatch.score.home;


document.getElementById("awayScore").textContent =
    allStarMatch.score.away;

// シティー スタメン

const homeLineup =
    document.getElementById("homeLineup");

allStarMatch.home.lineup.forEach(player => {

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="batting-order">${player.number}番</span>
        <span class="position">${player.position}</span>
        <span class="player-name">${player.player}</span>
    `;

    homeLineup.appendChild(li);

});


// ワイルド スタメン

const awayLineup =
    document.getElementById("awayLineup");

allStarMatch.away.lineup.forEach(player => {

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="batting-order">${player.number}番</span>
        <span class="position">${player.position}</span>
        <span class="player-name">${player.player}</span>
    `;

    awayLineup.appendChild(li);

});

const scoreboardHead = document.getElementById("scoreboardHead");

const inningCount = allStarMatch.innings.home.length;

let headHTML = "<tr><th>Team</th>";

for(let i = 1; i <= inningCount; i++){
    headHTML += `<th>${i}</th>`;
}

headHTML += `
    <th class="runs-cell">R</th>
    <th>H</th>
</tr>`;

scoreboardHead.innerHTML = headHTML;

const scoreboardBody = document.getElementById("allstarScoreboard");

scoreboardBody.innerHTML = "";

function createScoreRow(teamName, innings, runs, hits){

    const tr = document.createElement("tr");

    let rowHTML = `<td class="team-cell">${teamName}</td>`;

innings.forEach(score => {

    rowHTML += `<td>${
        score === null ? "" : score
    }</td>`;

});

rowHTML += `
    <td class="runs-cell">${runs}</td>
    <td>${hits}</td>
`;

tr.innerHTML = rowHTML;

    scoreboardBody.appendChild(tr);

}

createScoreRow(
    allStarMatch.home.name,
    allStarMatch.innings.home,
    allStarMatch.score.home,
    allStarMatch.hits.home
);

createScoreRow(
    allStarMatch.away.name,
    allStarMatch.innings.away,
    allStarMatch.score.away,
    allStarMatch.hits.away
);

document.getElementById("mvp").textContent =
    allStarMatch.mvp;


// シティー

document.getElementById("homeRunsLogo").src =
    allStarMatch.home.logo;

document.getElementById("homeRunsTitle").textContent =
    allStarMatch.home.name;


// ワイルド

document.getElementById("awayRunsLogo").src =
    allStarMatch.away.logo;

document.getElementById("awayRunsTitle").textContent =
    allStarMatch.away.name;


document.getElementById("homeStealsLogo").src =
    allStarMatch.home.logo;

document.getElementById("homeStealsTitle").textContent =
    allStarMatch.home.name;

document.getElementById("awayStealsLogo").src =
    allStarMatch.away.logo;

document.getElementById("awayStealsTitle").textContent =
    allStarMatch.away.name;

// シティー 本塁打

const homeRuns = document.getElementById("homeRuns");

homeRuns.innerHTML = "";

allStarMatch.homeRuns.forEach(run => {

    const li = document.createElement("li");

    li.textContent = run;

    homeRuns.appendChild(li);

});


// ワイルド 本塁打

const awayRuns = document.getElementById("awayRuns");

awayRuns.innerHTML = "";

allStarMatch.awayRuns.forEach(run => {

    const li = document.createElement("li");

    li.textContent = run;

    awayRuns.appendChild(li);

});


// シティー 盗塁

const homeSteals = document.getElementById("homeSteals");

homeSteals.innerHTML = "";

allStarMatch.homeSteals.forEach(steal => {

    const li = document.createElement("li");

    li.textContent = steal;

    homeSteals.appendChild(li);

});


// ワイルド 盗塁

const awaySteals = document.getElementById("awaySteals");

awaySteals.innerHTML = "";

allStarMatch.awaySteals.forEach(steal => {

    const li = document.createElement("li");

    li.textContent = steal;

    awaySteals.appendChild(li);

});

document.getElementById("winPitcher").textContent =
    allStarMatch.winPitcher;

document.getElementById("losePitcher").textContent =
    allStarMatch.losePitcher;

document.getElementById("homeBatteryLogo").src =
    allStarMatch.home.logo;

document.getElementById("homeBatteryTitle").textContent =
    allStarMatch.home.name;

document.getElementById("awayBatteryLogo").src =
    allStarMatch.away.logo;

document.getElementById("awayBatteryTitle").textContent =
    allStarMatch.away.name;

document.getElementById("homeBattery").textContent =
    allStarMatch.battery.home;

document.getElementById("awayBattery").textContent =
    allStarMatch.battery.away;

const scoreEvents = document.getElementById("scoreEvents");

allStarMatch.scoreEvents.forEach(event => {

    const p = document.createElement("p");

    p.textContent = event;

    scoreEvents.appendChild(p);

});

const gameEvents = document.getElementById("gameEvents");

gameEvents.innerHTML = "";

allStarMatch.events.forEach(event => {

    const div = document.createElement("div");

    div.classList.add("game-event");
    div.classList.add(event.type);

    div.innerHTML = `
        <strong>${event.inning}</strong><br>
        ${event.text}
    `;

    gameEvents.appendChild(div);

});