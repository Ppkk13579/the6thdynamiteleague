function createDSPreview() {

    const area = document.getElementById("ds-preview-list");

    if (!area) return;

    area.innerHTML = "";

    // ダイナマイトシリーズの試合
    const seriesMatches = matches
        .filter(match => match.stage === "ダイナマイトシリーズ")
        .sort((a, b) => a.game - b.game);

    if (seriesMatches.length === 0) {
        return;
    }

    let tableHTML = "";

    // 試合一覧
    seriesMatches.forEach(match => {

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
                    ? `${match.awayScore}-${match.homeScore}`
                    : "-"
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

    // 勝者表示
    const series = postseasonData.find(data =>
        data.stage === "ダイナマイトシリーズ"
    );

    if (series && series.winner) {

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
    area.innerHTML = `

    <div class="cs-league-card">

        <h3>ダイナマイトシリーズ</h3>

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

}

const dsSection = document.querySelector(".ds-preview");

if(eventSettings.DS.visible){
    createDSPreview();
}else if(dsSection){
    dsSection.style.display = "none";
}