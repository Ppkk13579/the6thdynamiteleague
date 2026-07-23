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

const allTeams = [
    ...Cityleague,
    ...Wildleague
];

function initializeSpecialLeague(league){

    league.forEach(team=>{

        team.specialGames = 0;
        team.specialWins = 0;
        team.specialLosses = 0;
        team.specialDraws = 0;
        team.specialRate = 0;

    });

}

initializeSpecialLeague(allTeams);

// 特別大会用の順位データ作成
function createSpecialLeague(){

    return allTeams.map(team => {

        return {
            team: team.team,
            logo: team.logo,

            games: 0,
            wins: 0,
            losses: 0,
            draws: 0,

            scored: 0,
            allowed: 0,

            rate: 0,
            rank: 0,

            gameDiff: "-"
        };

    });

}

function calculateSpecialRanking(ranking, stage, matchesData){

    matchesData.forEach(match => {

        // 対象の試合だけ
        if(match.stage !== stage){
            return;
        }

        // 試合終了だけ
        if(match.status !== "試合終了"){
            return;
        }


        const homeTeam =
        ranking.find(team => team.team === match.home);

        const awayTeam =
        ranking.find(team => team.team === match.away);


        if(!homeTeam || !awayTeam){
            return;
        }


        // 試合数
        homeTeam.games++;
        awayTeam.games++;


        // 得点・失点
        homeTeam.scored += match.homeScore;
        homeTeam.allowed += match.awayScore;

        awayTeam.scored += match.awayScore;
        awayTeam.allowed += match.homeScore;


        // 勝敗
        if(match.homeScore > match.awayScore){

            homeTeam.wins++;
            awayTeam.losses++;

        }
        else if(match.homeScore < match.awayScore){

            awayTeam.wins++;
            homeTeam.losses++;

        }
        else{

            homeTeam.draws++;
            awayTeam.draws++;

        }

    });


    // 勝率計算
    ranking.forEach(team => {

    const decisionGames = team.wins + team.losses;

    if(decisionGames > 0){

        team.rate = team.wins / decisionGames;

    }
    else{

        team.rate = 0;

    }

});

    // 順位決定
    ranking.sort((a,b)=>{

    // 未試合は上
    const aNoGame = a.games === 0;
    const bNoGame = b.games === 0;

    if(aNoGame && !bNoGame) return -1;
    if(!aNoGame && bNoGame) return 1;

    // 勝率
    if(b.rate !== a.rate){
        return b.rate - a.rate;
    }

    // 勝利数
    if(b.wins !== a.wins){
        return b.wins - a.wins;
    }

    return 0;

});


    // 順位を付ける
    ranking.forEach((team,index)=>{

        team.rank = index + 1;

    });

    ranking.forEach((team,index)=>{

    if(index === 0){

        team.gameDiff = "-";

    }else{

        const upper = ranking[index - 1];

        const diff =
            ((upper.wins - upper.losses) -
            (team.wins - team.losses)) / 2;

        team.gameDiff = diff.toFixed(1);

    }

});


}

const Interleague = createSpecialLeague();
const Openleague = createSpecialLeague();

window.addEventListener("matchesLoaded", () => {

matches.forEach(match => {

    // 試合終了だけ集計
    if (
    match.stage !== "レギュラーシーズン" &&
    match.stage !== "交流戦" 
    ){
    return;
    }
    
    if (match.status !== "試合終了") {
        return;
    }

    let targetTeams;

    if(match.stage === "交流戦" || match.stage === "オープン戦"){

    targetTeams = allTeams;

    }else{

    targetTeams = match.league === "シティーリーグ"
        ? Cityleague
        : Wildleague;

    }

    const homeTeam = targetTeams.find(
        team => team.team === match.home
    );

    const awayTeam = targetTeams.find(
        team => team.team === match.away
    );

    console.log(homeTeam);
    console.log(awayTeam);

    // 試合数
    homeTeam.games++;
    awayTeam.games++;

    // 得点・失点
    homeTeam.scored += match.homeScore;
    homeTeam.allowed += match.awayScore;

    awayTeam.scored += match.awayScore;
    awayTeam.allowed += match.homeScore;

    if (match.homeScore > match.awayScore) {

    homeTeam.wins++;
    awayTeam.losses++;

    }
    else if (match.homeScore < match.awayScore) {

    awayTeam.wins++;
    homeTeam.losses++;

    }
    else {

    homeTeam.draws++;
    awayTeam.draws++;

    }

    // 交流戦を除いたリーグ戦成績
    if(match.stage !== "交流戦"){

    if(match.homeScore > match.awayScore){

        homeTeam.leagueWins++;
        awayTeam.leagueLosses++;

    }
    else if(match.homeScore < match.awayScore){

        awayTeam.leagueWins++;
        homeTeam.leagueLosses++;

    }

    homeTeam.leagueGames++;
    awayTeam.leagueGames++;

}

});

        calculateStats(Cityleague);
    calculateStats(Wildleague);

    calculateSpecialRanking(Interleague, "交流戦", matches);
    calculateSpecialRanking(Openleague, "オープン戦", matches);

    sortLeague(Cityleague, matches);
    sortLeague(Wildleague, matches);

    setRank(Cityleague);
    setRank(Wildleague);

    calculateGameDiff(Cityleague);
    calculateGameDiff(Wildleague);

    createDetailTable(Cityleague, "Cityleague-detail");
    createDetailTable(Wildleague, "Wildleague-detail");

    createSimpleTable(Cityleague, "Cityleague-top");
    createSimpleTable(Wildleague, "Wildleague-top");

    createSpecialTable(Interleague, "Interleague-detail");
    createSpecialTable(Openleague, "Openleague-detail");

});


function createSpecialTable(data, id){

    const table = document.getElementById(id);

    if(!table) return;

    table.innerHTML = "";


    data.forEach(team => {

        table.innerHTML += `
        <tr>

            <td>${team.rank}</td>

            <td class="team-name"
            style="background:${teams[team.team].color};
            color:${teams[team.team].textColor}">

                <img src="${team.logo}" alt="${team.team}">

                <a href="team.html?team=${encodeURIComponent(team.team)}"
                class="team-link">
                    ${team.team}
                </a>

            </td>

            <td>${team.games}</td>

            <td>${team.wins}</td>

            <td>${team.losses}</td>

            <td>${team.draws}</td>

            <td>
            ${
                Number(team.rate) === 1
                ? "1"
                : Number(team.rate).toFixed(3).replace(/^0/,"")
            }
            </td>

            <td>${team.gameDiff}</td>

        </tr>
        `;

    });

}


function getTeamHomeRuns(teamName){

    let total = 0;

    (window.matches || []).forEach(match => {

        // レギュラーシーズン・交流戦だけ集計
        if(
            match.stage !== "レギュラーシーズン" &&
            match.stage !== "交流戦"
        ){
            return;
        }

        if(match.status !== "試合終了"){
            return;
        }

        if(match.home === teamName){
            total += (match.homeRuns || []).length;
        }

        if(match.away === teamName){
            total += (match.awayRuns || []).length;
        }

    });

    return total;

}

function getTeamSteals(teamName){

    let total = 0;

    (window.matches || []).forEach(match => {

        // レギュラーシーズン・交流戦のみ集計
        if(
            match.stage !== "レギュラーシーズン" &&
            match.stage !== "交流戦"
        ){
            return;
        }

        if(match.status !== "試合終了"){
            return;
        }

        if(match.home === teamName){
            total += (match.homeSteals || []).length;
        }

        if(match.away === teamName){
            total += (match.awaySteals || []).length;
        }

    });

    return total;

}

function initializeLeague(league) {

    league.forEach(team => {

        team.games = 0;
        team.wins = 0;
        team.losses = 0;
        team.draws = 0;

        team.leagueGames = 0;
        team.leagueWins = 0;
        team.leagueLosses = 0; 
        team.leagueRate = 0;

        team.scored = 0;
        team.allowed = 0;

        team.diff = 0;
        team.rate = 0;
        team.rank = 0;
        team.gameDiff = "-";

    });

}

initializeLeague(Cityleague);
initializeLeague(Wildleague);


function calculateStats(league){

    league.forEach(team => {

        // 得失点差
        team.diff = team.scored - team.allowed;

        // 勝率（引き分けを除外）
        const decisionGames = team.wins + team.losses;

        if(decisionGames > 0){
            team.rate = (team.wins / decisionGames).toFixed(3);
        }else{
            team.rate = "0.000";
        }

        // リーグ内勝率（引き分けを除外）
        const leagueDecisionGames =
            team.leagueWins + team.leagueLosses;

        if(decisionGames > 0){
    team.rate = Number((team.wins / decisionGames).toFixed(3));
}else{
    team.rate = 0;
}

    });

}

calculateStats(Cityleague);
calculateStats(Wildleague);

function sortLeague(league, matches){

    league.sort((a,b)=>{

        // 勝率
        if(b.rate !== a.rate){
            return b.rate - a.rate;
        }

        // 勝利数
        if(b.wins !== a.wins){
            return b.wins - a.wins;
        }

        // 未試合（0試合）は下へ
        // ただしここに来るのは「勝率も勝利数も同じ」場合だけ
        const aNoGame = a.games === 0;
        const bNoGame = b.games === 0;

        if(aNoGame && !bNoGame){
            return 1;
        }

        if(!aNoGame && bNoGame){
            return -1;
        }

        // 直接対決
        const h2h = getHeadToHead(a.team, b.team, matches);

        if(h2h.teamA !== h2h.teamB){
            return h2h.teamB - h2h.teamA;
        }

        // リーグ戦勝率
        if(b.leagueRate !== a.leagueRate){
            return b.leagueRate - a.leagueRate;
        }

        // 得失点差
        return b.diff - a.diff;

    });

}

function getHeadToHead(teamA, teamB, matches){

    let winsA = 0;
    let winsB = 0;
    let draws = 0;


    matches.forEach(match => {

        // A vs B の試合だけを見る
        if(
            (match.home === teamA && match.away === teamB) ||
            (match.home === teamB && match.away === teamA)
        ){

            if(match.status !== "試合終了"){
                return;
            }


            if(match.homeScore === match.awayScore){

                draws++;

            }
            else if(
                (match.home === teamA && match.homeScore > match.awayScore) ||
                (match.away === teamA && match.awayScore > match.homeScore)
            ){

                winsA++;

            }
            else{

                winsB++;

            }

        }

    });


    return {
        teamA: winsA,
        teamB: winsB,
        draw: draws
    };

}

function setRank(league){

    league.forEach((team, index) => {

        team.rank = index + 1;

    });

}

function calculateGameDiff(league){

    league.forEach((team,index)=>{

        // 首位
        if(index === 0){

            team.gameDiff = "-";
            return;

        }

        const upper = league[index - 1];

        // 同率なら 0.0
        if(
            team.rate === upper.rate &&
            team.wins === upper.wins &&
            team.losses === upper.losses
        ){

            team.gameDiff = "0.0";

        }else{

            const diff =
                ((upper.wins - upper.losses) -
                (team.wins - team.losses)) / 2;

            team.gameDiff = diff.toFixed(1);

        }

    });

}

function createSimpleTable(data, id){

    const table = document.getElementById(id);

    if(!table) return;

    table.innerHTML = "";
    
    data.forEach(team => {

        table.innerHTML += `
        <tr>
            <td>${team.rank}</td>
            <td class="team-name" 
            style="background:${teams[team.team].color}; color:${teams[team.team].textColor}"> 
                <img src="${team.logo}" alt="${team.team}">
                <a href="team.html?team=${encodeURIComponent(team.team)}"
                    class="team-link">
                    ${team.team}
                </a>
            </td>
            <td>${team.wins}</td>
            <td>${team.losses}</td>
            <td>${team.draws}</td>
        </tr>
        `;

    });

}

function createDetailTable(data, id){

    const table = document.getElementById(id);

    if(!table) return;

    table.innerHTML = "";

    data.forEach(team => {

        table.innerHTML += `
        <tr>
            <td>${team.rank}</td>
            <td class="team-name" 
            style="background:${teams[team.team].color}; color:${teams[team.team].textColor}">
                <img src="${team.logo}" alt="${team.team}">
                <a href="team.html?team=${encodeURIComponent(team.team)}"
                    class="team-link">
                    ${team.team}
                </a>
            </td>
            <td>${team.games}</td>
            <td>${team.wins}</td>
            <td>${team.losses}</td>
            <td>${team.draws}</td>
            <td>
            ${
                Number(team.rate) === 1
                ? "1"
                : Number(team.rate).toFixed(3).replace(/^0/,"")
            }
            </td>
            <td>${team.gameDiff}</td>
            <td>${team.scored}</td>
            <td>${team.allowed}</td>
            <td>${team.diff}</td>
            <td>${getTeamHomeRuns(team.team)}</td>
            <td>${getTeamSteals(team.team)}</td>
        </tr>
        `;

    });

}
