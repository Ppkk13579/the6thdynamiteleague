function createCSPreview(){

    const area = document.getElementById("cs-preview-list");

    if(!area) return;


    const leagues = [
        "シティーリーグ",
        "ワイルドリーグ"
    ];


    const setOrder = [
        "ファイナルステージ",
        "ファーストステージ"
    ];


    area.innerHTML = "";


    setOrder.forEach(set => {

    leagues.forEach(league => {

        const leagueMatches = matches.filter(match =>
            match.stage === "CS" &&
            match.league === league &&
            match.set === set
        );

        if(leagueMatches.length === 0){
            return;
        }

        const seriesMatches = leagueMatches.sort((a,b)=>a.game-b.game);


            let tableHTML = "";

            const series = postseasonData.find(data =>

    data.stage === "CS" &&
    data.league === league &&
    data.set === set

);

if(series && series.advantage){

    const advantageStyle = `
        background:${teams[series.advantage].color};
        color:${teams[series.advantage].textColor};
    `;

    tableHTML += `

    <tr class="advantage-row">

        <td>アドバンテージ</td>

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

            // 試合表作成
            seriesMatches.forEach(match=>{


                const awayStyle =
                match.awayScore > match.homeScore
                ? `
                background:${teams[match.away].color};
                color:${teams[match.away].textColor};
                `
                : "";


                const homeStyle =
                match.homeScore > match.awayScore
                ? `
                background:${teams[match.home].color};
                color:${teams[match.home].textColor};
                `
                : "";



                tableHTML += `

                <tr>

                    <td>
                        第${match.game}戦
                    </td>


                    <td style="${awayStyle}">
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


                    <td style="${homeStyle}">
                        <a href="team.html?team=${match.home}">
                            ${match.home}
                        </a>
                    </td>



                </tr>

                `;


            });



            if(series && series.winner){


                const winnerStyle = `

                    background:${teams[series.winner].color};
                    color:${teams[series.winner].textColor};

                `;



                tableHTML += `

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




            // 表示
            area.innerHTML += `

            <div class="cs-league-card">


                <h3>
                    ${league}
                </h3>


                <h4>
                    ${set}
                </h4>



                <table class="postseason-table">


                    <thead>

                        <tr>
                            <th>試合</th>
                            <th>ビジター</th>
                            <th>スコア</th>
                            <th>ホーム</th>
                        </tr>

                    </thead>



                    <tbody>

                        ${tableHTML}

                    </tbody>


                </table>


            </div>

            `;


        });


    });


}

const csSection = document.querySelector(".cs-preview");

window.addEventListener("matchesLoaded", () => {

    if(eventSettings.CS.visible){

        createCSPreview();

    }else if(csSection){

        csSection.style.display = "none";

    }

});
