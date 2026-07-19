const params =
new URLSearchParams(window.location.search);


const stage =
params.get("stage");


const postseasonTitle = document.getElementById("postseason-title");

if(postseasonTitle){
    postseasonTitle.textContent = stage;
}

function createPostseasonMatches(){

    const area = document.getElementById("postseason-matches");

    if(!area) return;

    area.innerHTML = "";

    // ダイナマイトシリーズは今まで通り
    if(stage === "ダイナマイトシリーズ"){

        const postseasonMatches = matches
            .filter(match => match.stage === stage)
            .sort((a,b)=>a.game-b.game);

        postseasonMatches.forEach(match=>{

            area.innerHTML += createMatchCard(match);

        });

        return;
    }

    // CSのみステージごとに表示
const setOrder = [
    "ファーストステージ",
    "ファイナルステージ"
];

setOrder.forEach(set => {

    const seriesMatches = matches
        .filter(match =>
            match.stage === "CS" &&
            match.set === set
        )
        .sort((a,b)=>a.game-b.game);

    if(seriesMatches.length === 0){
        return;
    }

    area.innerHTML += `
        <h2 class="postseason-match-title">
            ${set}
        </h2>
    `;

    seriesMatches.forEach(match => {

        area.innerHTML += createMatchCard(match);

    });

});


}

function createPostseasonTable (id, stageName){

    const area = document.getElementById(id);

    if(!area) return;


    area.innerHTML = "";


    // 対象の試合
    const postseasonMatches = matches.filter(match =>
        match.stage === stageName
    );


    // リーグごと
    const leagues =
stageName === "ダイナマイトシリーズ"
?
[
    "ダイナマイトシリーズ"
]
:
[
    "シティーリーグ",
    "ワイルドリーグ"
];

    const setOrder = [
    "ファイナルステージ",
    "ファーストステージ"
];

setOrder.forEach(set => {

    leagues.forEach(league => {

        const leagueMatches = postseasonMatches.filter(match =>
            match.league === league &&
            match.set === set
        );

        if (leagueMatches.length === 0){
            return;
        }

        const seriesMatches =
            leagueMatches.sort((a,b)=>a.game-b.game);



            if(seriesMatches.length === 0){
                return;
            }


            area.innerHTML += `

            <div class="postseason-league">

                <h2>${league}</h2>

                <h3>${set}</h3>

                <table class="postseason-table">

                <thead>

                    <tr>
                        <th>試合</th>
                        <th>ビジター</th>
                        <th>スコア</th>
                        <th>ホーム</th>
                    </tr>

                </thead>


                <tbody id="series-${league}-${set}">
                </tbody>


            </table>

            </div>

            `;



            const tbody =
            document.getElementById(
                `series-${league}-${set}`
            );

            // 勝者判定（後で調整可能）
            const series = postseasonData.find(data =>

                data.stage === stageName &&
                data.league === league &&
                data.set === set

            );


            if (series && series.advantage) {

    const advantageStyle = `
        background:${teams[series.advantage].color};
        color:${teams[series.advantage].textColor};
    `;

    tbody.innerHTML += `

    <tr class="advantage-row">

        <td>
            アドバンテージ
        </td>

        <td>
            -
        </td>

        <td>
            -
        </td>

        <td style="${advantageStyle}">
            <a href="team.html?team=${series.advantage}">
                ${series.advantage}
            </a>
        </td>

    </tr>

    `;

}

            seriesMatches.forEach(match=>{

                const awayStyle =
                match.awayScore > match.homeScore
                ? `style="
                background:${teams[match.away].color};
                color:${teams[match.away].textColor};
                "`
                : "";

                const homeStyle =
                match.homeScore > match.awayScore
                ? `style="
                background:${teams[match.home].color};
                color:${teams[match.home].textColor};
                "`
                : "";

                tbody.innerHTML += `

                <tr>

                    <td>
                    第${match.game}戦
                    </td>


                    <td ${awayStyle}>
                        <a href="team.html?team=${match.away}">
                            ${match.away}
                        </a>
                    </td>

                    <td>
                    ${
                        match.status === "試合終了"
                        ?
                        `${match.awayScore}-${match.homeScore}`
                        :
                        "-"
                    }
                    </td>


                    <td ${homeStyle}>
                        <a href="team.html?team=${match.home}">
                            ${match.home}
                        </a>
                    </td>

                </tr>

                `;


            });


            console.log(stageName, league, set);

postseasonData.forEach(data => {
    console.log(
        data.stage,
        data.league,
        data.set,
        data.stage === stage,
        data.league === league,
        data.set === set
    );
});

            if(series && series.winner){

            const winnerStyle = `
                background:${teams[series.winner].color};
                color:${teams[series.winner].textColor};
            `;

            tbody.innerHTML += `
            <tr class="winner-row">

                <td colspan="4" style="${winnerStyle}">
                勝者：
                    <a href="team.html?team=${series.winner}">
                        ${series.winner}
                    </a>
            </td> 

            </tr>
            `;

            }

        });

    });

}

function createDynamiteSeriesTable(id){

    const area = document.getElementById(id);

    if(!area) return;

    area.innerHTML = "";

    const seriesMatches = matches
        .filter(match => match.stage === "ダイナマイトシリーズ")
        .sort((a,b)=>a.game-b.game);

    area.innerHTML += `

    <div class="postseason-league">

        <h2>ダイナマイトシリーズ</h2>

        <table class="postseason-table">

            <thead>
                <tr>
                    <th>試合</th>
                    <th>ビジター</th>
                    <th>スコア</th>
                    <th>ホーム</th>
                </tr>
            </thead>

            <tbody id="dynamite-series-body">

            </tbody>

        </table>

    </div>

    `;

    const tbody = document.getElementById("dynamite-series-body");

    seriesMatches.forEach(match=>{

        const awayStyle =
            match.awayScore > match.homeScore
            ? `style="
                background:${teams[match.away].color};
                color:${teams[match.away].textColor};
            "`
            : "";

        const homeStyle =
            match.homeScore > match.awayScore
            ? `style="
                background:${teams[match.home].color};
                color:${teams[match.home].textColor};
            "`
            : "";

        tbody.innerHTML += `

        <tr>

            <td>第${match.game}戦</td>

            <td ${awayStyle}>
                ${match.away}
            </td>

            <td>
                ${
                    match.status === "試合終了"
                    ? `${match.awayScore}-${match.homeScore}`
                    : "-"
                }
            </td>

            <td ${homeStyle}>
                ${match.home}
            </td>

        </tr>

        `;

    });

}

if(document.getElementById("postseason-bracket")){

    if(stage === "CS"){
        createPostseasonTable("postseason-bracket","CS");
    }

    if(stage === "ダイナマイトシリーズ"){
        createDynamiteSeriesTable("postseason-bracket");
    }

}

if(document.getElementById("postseason-matches")){
    createPostseasonMatches();
}

function createCSPreview(){

    const area = document.getElementById("cs-bracket");

    if(!area) return;


    area.innerHTML = "";


    const csMatches = matches.filter(match =>
        match.stage === "CS"
    );


    csMatches.forEach(match => {

        area.innerHTML += `

        <div class="cs-match">

            <div class="cs-stage">
                ${match.set}
            </div>


            <div class="cs-teams">

                <span>
                    ${match.away}
                </span>

                <strong>
                    VS
                </strong>

                <span>
                    ${match.home}
                </span>

            </div>


            <div class="cs-game">
                第${match.game}戦
            </div>


        </div>

        `;

    });

}

window.addEventListener("DOMContentLoaded", () => {

    if(document.getElementById("cs-bracket")){
        createCSPreview();
    }

});