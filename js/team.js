const stages = {

    "レギュラーシーズン":[
        "第1セット",
        "第2セット",
        "第3セット",
        "第4セット",
        "第5セット",
        "第6セット"
    ],

    "交流戦":[
        "交流戦"
    ],

    "プレーオフ":[
        "CS ファーストステージ",
        "CS ファイナルステージ",
        "ダイナマイトシリーズ"
    ]

};



const gamesPerSection = {

    "第1セット":5,
    "第2セット":5,
    "第3セット":5,
    "第4セット":5,
    "第5セット":5,
    "第6セット":5,

    "交流戦":6,

};
const params = new URLSearchParams(window.location.search);

const teamName = params.get("team");

const team = teams[teamName];

const managerList =
document.getElementById("teamManagers");

if(managerList){

    managerList.innerHTML = "";

    team.managers.forEach(manager => {

        managerList.innerHTML += `
            <li>${manager}</li>
        `;

    });

}

const league =
    team.league === "シティーリーグ"
    ? Cityleague
    : Wildleague;

const standing = league.find(t => t.team === teamName);

document.getElementById("teamName").textContent = teamName;

document.getElementById("teamLogo").src = team.logo;

const leagueElement = document.getElementById("teamLeague");

leagueElement.textContent = team.league;


document.getElementById("teamDescription").innerHTML =
    team.description;

document.getElementById("teamHistory").innerHTML =
    team.history;

document.documentElement.style.setProperty(
    "--team-color",
    team.color
);

document.getElementById("rank").textContent =
    `${standing.rank}位`;

document.getElementById("record").innerHTML =
`
<span>${standing.wins}勝</span>
<span>${standing.losses}敗</span>
<span>${standing.draws}分</span>
`;

document.getElementById("rate").textContent =
    standing.rate === 1
    ? "1"
    : Number(standing.rate).toFixed(3).replace(/^0/,"");

document.getElementById("scored").textContent = standing.scored;

document.getElementById("allowed").textContent = standing.allowed;

document.getElementById("diff").textContent = standing.diff;    

function createSeasonTable() {

    const seasonTable = document.getElementById("seasonTable");

    seasonTable.innerHTML = "";

    // このチームの試合だけ取得
    const teamMatches = matches.filter(match =>
        (match.home === teamName ||
         match.away === teamName) &&
        (
         match.stage === "レギュラーシーズン" ||
         match.stage === "交流戦"
        )
    );

    // セットごと
    const sections = [
        1,
        "交流戦",
        2,
        3,
        4,
        5,
        6,
        ];

        sections.forEach(set => {

        seasonTable.innerHTML += `
        <table class="season-table">

            <tr id="head-${set}">
                <th rowspan="3" class="set-title">
                ${set === "交流戦" ? "交流戦" : `第${set}セット`}
                </th>
            </tr>

            <tr id="result-${set}" class="season-result"></tr>

            <tr id="detail-${set}" class="season-detail"></tr>

        </table>
        `;

        const head = document.getElementById(`head-${set}`);
        const result = document.getElementById(`result-${set}`);
        const detail = document.getElementById(`detail-${set}`);

        const gameCount = set === "交流戦" ? 6 : 5;

            for (let game = 1; game <= gameCount; game++) {

            const match = teamMatches.find(match =>
                match.set === set &&
                match.game === game
            );

            // 試合がまだ登録されていない場合
            if (!match) {

                head.innerHTML += `
                    <th>
                        未定<br>
                        第${game}試合
                    </th>
                `;

                result.innerHTML += `
                    <td>－</td>
                `;

                detail.innerHTML += `
                    <td>未定</td>
                `;

                continue;
            }

            const opponent =
                match.home === teamName
                ? match.away
                : match.home;

                // ○×△
                let mark = "－";

                if(match.status !== "試合前"){

                    if(match.homeScore === match.awayScore){

                        mark = "△";

                    }else{

                        const win =
                            (match.home === teamName && match.homeScore > match.awayScore) ||
                            (match.away === teamName && match.awayScore > match.homeScore);

                        mark = win ? "○" : "×";

                    }

                }

               head.innerHTML += `
               <th>
                    <img src="${teams[opponent].logo}" class="season-logo">
                    vs ${opponent}<br>
                    第${match.seasonGame}試合
                </th>
                `;

                const score =
                    match.home === teamName
                        ? `${match.homeScore}-${match.awayScore}`
                        : `${match.awayScore}-${match.homeScore}`;

                result.innerHTML += `
                    <td>
                        ${mark}
                        ${
                            match.status === "試合前"
                            ? ""
                            : `<span class="season-score">
                                ${match.homeScore}-${match.awayScore}
                            </span>`
                        }
                    </td>
                `;

                detail.innerHTML += `
                    <td>
                        <a href="match.html?id=${match.id}">
                            詳細
                        </a>
                    </td>
                `;

            }
        });    

}

window.addEventListener("matchesLoaded", () => {

    createSeasonTable();

});
