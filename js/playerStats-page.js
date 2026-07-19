console.log("詳細ページJS実行");
console.log(getHomeRunRanking("シティーリーグ"));

function createRankingTable(id, data, unit){

    const table = document.getElementById(id);

    if(!table) return;


    data.forEach((player,index)=>{

        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td style="
                background:${teams[getPlayerTeam(player[0])].color};
                color:${teams[getPlayerTeam(player[0])].textColor};
            ">
                ${player[0]}
            </td>
            <td>${player[1]}${unit}</td>
        </tr>
        `;

    });

}



// シティーリーグ

createRankingTable(
    "city-homeRun-ranking",
    getHomeRunRanking("シティーリーグ"),
    "本"
);


createRankingTable(
    "city-steal-ranking",
    getStealRanking("シティーリーグ"),
    "個"
);

createRankingTable(
    "city-winningStarter-ranking",
    getWinningStarterRanking("シティーリーグ"),
    "勝"
);


// ワイルドリーグ

createRankingTable(
    "wild-homeRun-ranking",
    getHomeRunRanking("ワイルドリーグ"),
    "本"
);


createRankingTable(
    "wild-steal-ranking",
    getStealRanking("ワイルドリーグ"),
    "個"
);

createRankingTable(
    "wild-winningStarter-ranking",
    getWinningStarterRanking("ワイルドリーグ"),
    "勝"
);

function displayRanking(){

    const league =
        document.getElementById("league-filter").value;

    const category =
        document.getElementById("category-filter").value;


    // いったん全部隠す
    document.querySelectorAll(".ranking-card")
    .forEach(card=>{
        card.style.display = "none";
    });


    // 表示するカード
    const leagues =
        league === "all"
        ? ["city","wild"]
        : [
            league === "シティーリーグ"
            ? "city"
            : "wild"
        ];


    leagues.forEach(l=>{

        let ids = [];

        if(category==="all"){
            ids = [
                `${l}-homeRun-ranking`,
                `${l}-steal-ranking`,
                `${l}-winningStarter-ranking`
            ];
        }

        if(category==="hr"){
            ids = [`${l}-homeRun-ranking`];
        } 

        if(category==="sb"){
            ids = [`${l}-steal-ranking`];
        }

        if(category==="win"){
            ids = [`${l}-winningStarter-ranking`];
        }


        ids.forEach(id=>{

        const tbody=document.getElementById(id);

        if(tbody){

        tbody.closest(".ranking-card")
        .style.display="block";

        }

        });

    });


}

document
.getElementById("league-filter")
.addEventListener("change", displayRanking);

document
.getElementById("category-filter")
.addEventListener("change", displayRanking);


displayRanking();