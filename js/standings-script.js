function createMatchupTable(league, id, mode = "league") {

    const container = document.getElementById(id);

    if(!container) return;

    if(mode === "league"){

    const order = [
        "エレファンツ",
        "モンキーズ",
        "リザーズ",
        "タートルズ",
        "ラビッツ",
        "ライノス",

        "ファルコンズ",
        "ドッグス",
        "シャークス",
        "クロウズ",
        "アリゲーターズ",
        "レパーズ"
    ];

    league = [...league].sort((a, b) =>
        order.indexOf(a.team) - order.indexOf(b.team)
    );

}else{

    const order = [
        "エレファンツ",
        "ファルコンズ",
        "モンキーズ",
        "ドッグス",
        "シャークス",
        "リザーズ",
        "タートルズ",
        "クロウズ",
        "アリゲーターズ",
        "ラビッツ",
        "レパーズ",
        "ライノス",
    ];

    league = [...league].sort((a,b)=>
        order.indexOf(a.team) - order.indexOf(b.team)
    );

}

    let html = `
    <table class="matchup-table ${mode === "interleague" ? "interleague-table" : ""}">

    <thead>
    <tr>
        <th></th>
    `;


    league.forEach(team=>{

    const data = teams[team.team];

    if(mode === "interleague"){

        html += `
        <th class="matchup-team"
        style="background:${data.color}; color:${data.textColor};">

            <a href="team.html?team=${encodeURIComponent(team.team)}">
                <img src="${data.logo}">
            </a>

        </th>
        `;

    }else{

        html += `
        <th class="matchup-team"
        style="background:${data.color}; color:${data.textColor};">

            <img src="${data.logo}">
            <a href="team.html?team=${encodeURIComponent(team.team)}"
                class="team-link">
                ${team.team}
            </a>

        </th>
        `;

    }

});


    html += `
    </tr>
    </thead>

    <tbody>
    `;



    league.forEach(team=>{

        const data = teams[team.team];


        html += `
<tr>

<th class="matchup-team"
    style="background:${data.color}; color:${data.textColor};">

    <img src="${data.logo}">

    <a href="team.html?team=${encodeURIComponent(team.team)}"
        class="team-link">
        ${team.team}
    </a>

</th>
`;



        league.forEach(opponent=>{


            if(team.team === opponent.team){

                html += `<td>-</td>`;
                return;

            }


            let win = 0;
            let lose = 0;
            let draw = 0;


            matches.forEach(match=>{

                // レギュラーシーズンの対戦表はレギュラーシーズンだけ集計
                if(mode === "league" && match.stage !== "レギュラーシーズン"){
                    return;
                }


                if(mode === "interleague" && match.stage !== "交流戦"){
                    return;
                }

                if(
                    (match.home === team.team &&
                     match.away === opponent.team)
                    ||
                    (match.home === opponent.team &&
                     match.away === team.team)
                ){


                    if(match.status !== "試合終了"){
                        return;
                    }


                    if(match.homeScore === match.awayScore){

                        draw++;

                    }
                    else if(
                        (match.home === team.team &&
                         match.homeScore > match.awayScore)
                        ||
                        (match.away === team.team &&
                         match.awayScore > match.homeScore)
                    ){

                        win++;

                    }
                    else{

                        lose++;

                    }

                }


            });


            let text;

if(mode === "league"){

    text = `${win}-${lose}(${draw})`;

}else{

    if(win > 0){
        text = "○";
    }else if(lose > 0){
        text = "×";
    }else if(draw > 0){
        text = "△";
    }else{
        text = "";
    }

}

html += `
    <td>
        <a href="schedule.html?team1=${encodeURIComponent(team.team)}&team2=${encodeURIComponent(opponent.team)}"
            class="matchup-link">
                ${text}
        </a>
    </td>
`;

        });


        html += `</tr>`;

    });



    html += `
    </tbody>
    </table>
    `;


    container.innerHTML = html;

}

window.addEventListener("matchesLoaded", () => {

    createMatchupTable(Cityleague,"Cityleague-matchup");

    createMatchupTable(Wildleague,"Wildleague-matchup");

    const Allleague = [
        ...Cityleague,
        ...Wildleague
    ];

    createMatchupTable(
        Allleague,
        "interleague-matchup",
        "interleague"
    );

});
