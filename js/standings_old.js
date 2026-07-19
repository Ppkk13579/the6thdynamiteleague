const Cityleague = [
    {
        team: "エレファンツ",
        logo: "images/Elephantslogo.PNG",
    },

    {
        team: "モンキーズ",
        logo: "images/Monkeyslogo.PNG",
    },


    {
        team: "リザーズ",
        logo: "images/Lizardslogo.PNG",
    },

    {
        team: "タートルズ",
        logo: "images/Turtleslogo.PNG",
    },

    {
        team: "ラビッツ",
        logo: "images/Rabbitslogo.PNG",
    },

    {
        team: "ライノス",
        logo: "images/Rhinoslogo.PNG",
    }

];

const Wildleague = [
    {
        team: "ファルコンズ",
        logo: "images/Falconslogo.PNG",
    },

    {
        team: "ドッグス",
        logo: "images/Dogslogo.PNG",
    },

    {
        team: "シャークス",
        logo: "images/Sharkslogo.PNG",
    },


    {
        team: "クロウズ",
        logo: "images/Crowslogo.PNG",
    },

    {
        team: "アリゲーターズ",
        logo: "images/Alligatorslogo.PNG",
    },

    {
        team: "レパーズ",
        logo: "images/Leopardslogo.PNG",
    },

];

const records = {};

Cityleague.forEach(team => {

    records[team.team] = {

        wins:0,
        losses:0,
        draws:0

    };

});

Wildleague.forEach(team => {

    records[team.team] = {

        wins:0,
        losses:0,
        draws:0

    };

});

matches.forEach(match => {

    // 試合終了だけ集計
    if(match.status !== "試合終了"){
        return;
    }

    // ホームの得点が多い
    if(match.homeScore > match.awayScore){

        records[match.home].wins++;
        records[match.away].losses++;

    }

    // ビジターの得点が多い
    else if(match.homeScore < match.awayScore){

        records[match.away].wins++;
        records[match.home].losses++;

    }

    // 引き分け
    else{

        records[match.home].draws++;
        records[match.away].draws++;

    }

});



const topTable = document.getElementById("top-standings");



const detailTable = document.getElementById("detail-standings");



function createSimpleTable(data, id){

    const table = document.getElementById(id);

    if(table){

        data.forEach(team => {

            table.innerHTML += `
            <tr>
                <td>${team.rank}</td>
                <td class="team-name" style="background:${team.color}">
                    <img src="${team.logo}" alt="${team.team}">
                    ${team.team}
                </td>
                <td>${team.wins}</td>
                <td>${team.losses}</td>
                <td>${team.draws}</td>
                <td>${team.gameDiff}</td>
            </tr>
            `;

        });

    }
}

function createDetailTable(data, id){

    const table = document.getElementById(id);

    if(table){

        data.forEach(team => {

            table.innerHTML += `
            <tr>
                <td>${team.rank}</td>
                <td class="team-name">
                    <img src="${team.logo}" alt="${team.team}">
                    ${team.team}
                </td>
                <td>${team.games}</td>
                <td>${team.wins}</td>
                <td>${team.losses}</td>
                <td>${team.draws}</td>
                <td>${team.rate}</td>
                <td>${team.scored}</td>
                <td>${team.allowed}</td>
                <td>${team.diff}</td>
                <td>${team.gameDiff}</td>
            </tr>
            `;

        });

    }
}


createDetailTable(Cityleague,"Cityleague-detail");
createDetailTable(Wildleague,"Wildleague-detail");


createSimpleTable(Cityleague,"Cityleague-top");
createSimpleTable(Wildleague,"Wildleague-top");

