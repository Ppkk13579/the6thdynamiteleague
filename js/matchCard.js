function createMatchCard(match){

    const homeWinner = match.homeScore > match.awayScore;
    const awayWinner = match.awayScore > match.homeScore;

    let title = "";

    if (match.stage === "レギュラーシーズン") {
    title = `第${match.set}セット 第${match.seasonGame}試合`;

    } else if (
    match.stage === "交流戦" ||
    match.stage === "オープン戦"
    ) {
    title = `${match.stage} 第${match.seasonGame}試合`;

    } else if (match.set) {
    title = `${match.stage} ${match.set} 第${match.game}戦`;

    } else {
    title = `${match.stage} 第${match.game}戦`;
    }

    return `

    <div class="match-card">

        <div class="league">
            ${match.league}
        </div>

        <div class="match-header">

            <div class="match-title">
                ${title}
            </div>

            <div class="match-date">
                ${formatDate(match.date)} ${match.time}
            </div>

        </div>


 
        <div class="teams">


            <div class="team-box">

                <img src="${teams[match.home].logo}" class="team-logo">

                <span class="${homeWinner ? 'winner' : ''}">

                <a href="team.html?team=${encodeURIComponent(match.home)}"
                    class="team-link ${homeWinner ? 'winner' : ''}"
                > 
                    ${match.home}
                </a>

                </span>

            </div>



            ${
                match.status === "試合前"
                ? `<span class="score">VS</span>`
                : `<span class="score">${match.homeScore} - ${match.awayScore}</span>`
            }



            <div class="team-box">

                <img src="${teams[match.away].logo}" class="team-logo">

                <span class="${awayWinner ? 'winner' : ''}">

                <a href="team.html?team=${encodeURIComponent(match.away)}"
                    class="team-link ${awayWinner ? 'winner' : ''}"
                >
                    ${match.away}
                </a>

                </span>

            </div>


        </div>



        <div class="winner-text">

            ${
                match.status === "試合前"
                ? "試合開始前"
                : homeWinner
                    ? `${match.home}の勝利`
                    : awayWinner
                        ? `${match.away}の勝利`
                        : "引き分け"
            }

        </div>



        <div class="match-footer">

            <div class="status ${match.status === '試合前' ? 'before' : 'finished'}">

                ${match.status}

            </div>
            


            <div class="detail-link" onclick="
            sessionStorage.setItem('scheduleScroll', window.scrollY);
            location.href='match.html?id=${match.id}'">

            詳細を見る →

        </div>


    </div>

    `;

}
