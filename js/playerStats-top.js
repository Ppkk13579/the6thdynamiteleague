window.addEventListener("matchesLoaded", () => {
console.log("ランキングJS実行");

console.log(getHomeRunRanking("シティーリーグ"));

function createTopRanking(id, data, unit){

    const table = document.getElementById(id);

    if(!table) return;


    data.slice(0,3).forEach((player,index)=>{


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

createTopRanking(
    "city-homeRun",
    getHomeRunRanking("シティーリーグ"),
    "本"
);


createTopRanking(
    "city-steal",
    getStealRanking("シティーリーグ"),
    "個"
);


createTopRanking(
    "city-winningStarter",
    getWinningStarterRanking("シティーリーグ"),
    "勝"
);



// ワイルドリーグ

createTopRanking(
    "wild-homeRun",
    getHomeRunRanking("ワイルドリーグ"),
    "本"
);


createTopRanking(
    "wild-steal",
    getStealRanking("ワイルドリーグ"),
    "個"
);


createTopRanking(
    "wild-winningStarter",
    getWinningStarterRanking("ワイルドリーグ"),
    "勝"
);
});
