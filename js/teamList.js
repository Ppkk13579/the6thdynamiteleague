const cityList = document.getElementById("city-team-list");
const wildList = document.getElementById("wild-team-list");

for (const teamName in teams) {

    const team = teams[teamName];

    const card = `
    <div class="team-card"
     onclick="location.href='team.html?team=${teamName}'">

    <div class="team-card-top">

        <img src="${team.logo}" alt="${teamName}">

    </div>

    <div class="team-card-bottom"
        style="
            background:${team.color};
            color:${team.textColor};
        ">

        <h3>${teamName}</h3>

        <p>${team.league}</p>

    </div>

</div>
    `;

    if (team.league === "シティーリーグ") {
        cityList.innerHTML += card;
    } else {
        wildList.innerHTML += card;
    }
}


