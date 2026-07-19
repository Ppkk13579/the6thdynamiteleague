function createAllStarPreview(){

    const area = document.getElementById("allstar-preview");

    if(!area) return;


    area.innerHTML = `

<div class="match-card allstar-card">

    <h3>${allStarMatch.title}</h3>

    <div id="allstarPreviewStatus" class="status">
        ${allStarMatch.status}
    </div>

    <div class="allstar-preview-match">

        <div class="allstar-preview-team">

            <img class="allstar-preview-logo"
                 src="${allStarMatch.home.logo}">

            <p>${allStarMatch.home.name}</p>

        </div>

        <div class="preview-score">

            ${allStarMatch.score.home}
            -
            ${allStarMatch.score.away}

        </div>

        <div class="allstar-preview-team">

            <img class="allstar-preview-logo"
                 src="${allStarMatch.away.logo}">

            <p>${allStarMatch.away.name}</p>

        </div>

    </div>

    <p class="preview-date">
        ${allStarMatch.date}　${allStarMatch.time}
    </p>

    <p class="preview-stadium">
        ${allStarMatch.stadium}
    </p>

</div>

`;

const previewStatus =
document.getElementById("allstarPreviewStatus");

if(allStarMatch.status === "試合前"){
    previewStatus.classList.add("before");
}else if(allStarMatch.status.startsWith("試合中")){
    previewStatus.classList.add("live");
}else if(allStarMatch.status === "試合終了"){
    previewStatus.classList.add("finished");
}

}
const allstarSection =
document.querySelector(".allstar-preview");

if(eventSettings.AllStar.visible){

    createAllStarPreview();

}else if(allstarSection){

    allstarSection.style.display = "none";

}