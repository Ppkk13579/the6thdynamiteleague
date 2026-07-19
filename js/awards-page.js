const teamBody = document.getElementById("award-team");

teamAwards.forEach(data => {

    const cityHTML = data.city.length
        ? data.city
            .filter(t => t.team)
            .map(t => `
                <span
                    class="award-player"
                    style="color:${teams[t.team].color}; font-weight:bold;">
                    ${t.team}
                </span>
            `).join("<br>") || "―"
        : "―";

    const wildHTML = data.wild.length
        ? data.wild
            .filter(t => t.team)
            .map(t => `
                <span
                    class="award-player"
                    style="color:${teams[t.team].color}; font-weight:bold;">
                    ${t.team}
                </span>
            `).join("<br>") || "―"
        : "―";

    teamBody.innerHTML += `
    <tr>
        <td>${data.award}</td>
        <td>${cityHTML}</td>
        <td>${wildHTML}</td>
    </tr>
    `;
});

const managerBody = document.getElementById("award-manager");

managerAwards.forEach(data => {

    const cityHTML = data.city.length
        ? data.city
            .filter(m => m.team)
            .map(m => `
                <span
                    class="award-player"
                    style="color:${teams[m.team].color}; font-weight:bold;">
                    ${m.manager}
                </span>
            `).join("<br>") || "―"
        : "―";

    const wildHTML = data.wild.length
        ? data.wild
            .filter(m => m.team)
            .map(m => `
                <span
                    class="award-player"
                    style="color:${teams[m.team].color}; font-weight:bold;">
                    ${m.manager}
                </span>
            `).join("<br>") || "―"
        : "―";

    managerBody.innerHTML += `
    <tr>
        <td>${data.award}</td>
        <td>${cityHTML}</td>
        <td>${wildHTML}</td>
    </tr>
    `;
});

const tbody = document.getElementById("award-player");

playerAwards.forEach(data => {

    const city = teams[data.city.team];
    const wild = teams[data.wild.team];

    const cityHTML = data.city.length
    ? data.city
        .filter(p => p.team)
        .map(p => `
            <span
                class="award-player"
                style="
                    color:${teams[p.team].color};
                ">
                ${p.player}
            </span>
        `).join("<br>") || "―"
    : "―";

const wildHTML = data.wild.length
    ? data.wild
        .filter(p => p.team)
        .map(p => `
            <span
                class="award-player"
                style="
                    color:${teams[p.team].color};
                ">
                ${p.player}
            </span>
        `).join("<br>") || "―"
    : "―";
    tbody.innerHTML += `
    <tr>

        <td>${data.award}</td>

        <td>${cityHTML}</td>

        <td>${wildHTML}</td>

    </tr>
    `;

});

const bestNineBody = document.getElementById("best-nine");

bestNine.forEach(data => {

    const cityHTML = data.city.length
        ? data.city
            .filter(p => p.team)
            .map(p => `
                <span
                    class="award-player"
                    style="
                        color:${teams[p.team].color};
                        font-weight:bold;
                    ">
                    ${p.player}
                </span>
            `).join("<br>") || "―"
        : "―";

    const wildHTML = data.wild.length
        ? data.wild
            .filter(p => p.team)
            .map(p => `
                <span
                    class="award-player"
                    style="
                        color:${teams[p.team].color};
                        font-weight:bold;
                    ">
                    ${p.player}
                </span>
            `).join("<br>") || "―"
        : "―";

    bestNineBody.innerHTML += `
    <tr>

        <td>${data.position}</td>

        <td>${cityHTML}</td>

        <td>${wildHTML}</td>

    </tr>
    `;

});