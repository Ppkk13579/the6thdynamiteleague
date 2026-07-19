// playerStats.js

function getTeamLeague(teamName){

    return teams[teamName].league;

}

function isRecordMatch(match){

    return (
        match.stage === "レギュラーシーズン" ||
        match.stage === "交流戦" 
    );

}

function getPlayerTeam(playerName){


    let team = null;


    matches.forEach(match=>{


        (match.homeRuns || []).forEach(player=>{

            if(player.player === playerName){
                team = match.home;
            }

        });


        (match.awayRuns || []).forEach(player=>{

            if(player.player === playerName){
                team = match.away;
            }

        });


        (match.homeSteals || []).forEach(player=>{

            if(player.player === playerName){
                team = match.home;
            }

        });


        (match.awaySteals || []).forEach(player=>{

            if(player.player === playerName){
                team = match.away;
            }

        });


        if(match.homeStarter === playerName){
            team = match.home;
        }


        if(match.awayStarter === playerName){
            team = match.away;
        }


    });


    return team;

}

// =======================
// 本塁打ランキング
// =======================

function getHomeRunRanking(leagueName){

    const players = {};


    matches.forEach(match=>{


        if(!isRecordMatch(match)){
            return;
        }

        // ホームラン（ホーム側）
        if(getTeamLeague(match.home) === leagueName){

            (match.homeRuns || []).forEach(hr=>{

                if(!players[hr.player]){
                    players[hr.player] = 0;
                }

                players[hr.player]++;

            });

        }


        // ホームラン（アウェイ側）
        if(getTeamLeague(match.away) === leagueName){

            (match.awayRuns || []).forEach(hr=>{

                if(!players[hr.player]){
                    players[hr.player] = 0;
                }

                players[hr.player]++;

            });

        }


    });


    return Object.entries(players)
        .sort((a,b)=>b[1]-a[1]);

}

// =======================
// 盗塁ランキング
// =======================

function getStealRanking(leagueName){

    const players = {};


    matches.forEach(match=>{

        if(!isRecordMatch(match)){
            return;
        }

        // ホーム側
        if(getTeamLeague(match.home) === leagueName){

            (match.homeSteals || []).forEach(player=>{

                if(!players[player.player]){
                    players[player.player]=0;
                }

                players[player.player]++;

            });

        }


        // アウェイ側
        if(getTeamLeague(match.away) === leagueName){

            (match.awaySteals || []).forEach(player=>{

                if(!players[player.player]){
                    players[player.player]=0;
                }

                players[player.player]++;

            });

        }


    });


    return Object.entries(players)
        .sort((a,b)=>b[1]-a[1]);

}

// =======================
// 勝利先発ランキング
// =======================

function getWinningStarterRanking(leagueName){

    const players = {};

    matches.forEach(match=>{

        if(!isRecordMatch(match)){
            return;
        }

        // 試合終了のみ
        if(match.status !== "試合終了"){
            return;
        }


        // ホーム勝利
        if(match.homeScore > match.awayScore){


            if(
                getTeamLeague(match.home) === leagueName &&
                match.homeStarter
            ){

                if(!players[match.homeStarter]){
                    players[match.homeStarter] = 0;
                }

                players[match.homeStarter]++;

            }


        }


        // ビジター勝利
        else if(match.awayScore > match.homeScore){


            if(
                getTeamLeague(match.away) === leagueName &&
                match.awayStarter
            ){

                if(!players[match.awayStarter]){
                    players[match.awayStarter] = 0;
                }

                players[match.awayStarter]++;

            }


        }


    });


    return Object.entries(players)
        .sort((a,b)=>b[1]-a[1]);

}
