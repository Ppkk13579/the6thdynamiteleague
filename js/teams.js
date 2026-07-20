const teams = {
    "エレファンツ": {
        logo: "images/Elephantslogo.PNG",
        color: "#DC9FDC",
        textColor: "#000000",
        league: "シティーリーグ",
        description: "過去2回の優勝を誇る伝統ある強打の球団。ここ2期は厳しい戦いが続いているが、狙うはもちろん王座奪還。",
        history: `
        第1期 リーグ優勝<br>
        第3期 リーグ優勝
        `,
        managers: [
        "象の救世主",
        "beta",
        "大濠中学生",
        "ドリ者",
        "ぱえりある",
        "松山恐怖症",
        "投壊大学",
        ],
    },

    "ファルコンズ": {
        logo: "images/Falconslogo.PNG",
        color: "#008000",
        textColor: "#ffffff",
        league: "ワイルドリーグ",
        description: "ダイナマイトリーグ黎明期の第1期、2期で連覇を果たしたものの、ここ3期ではAクラスすら遠い戦いが続いた。伝統の守り勝つ野球で、4期ぶりの頂へ。",
        history: `
        第1期 リーグ優勝<br>
        第2期 リーグ優勝、日本一
        `,
        managers: [
        "もっちゃん",
        "粉バナナ",
        "たつ",
        "ｲﾁﾑﾗ",
        "敦賀気比",
        "吹上",
        "Fibo",
        "市村の監督",
        "実",
        "みりん",
        "広島東洋カープ",
        ],
    },

    "モンキーズ": {
        logo: "images/Monkeyslogo.PNG",
        color: "#FEA500",
        textColor: "#000000",
        league: "シティーリーグ",
        description: "昨季は混戦のシティーリーグを制して3期ぶり2度目のリーグ優勝を果たした。今季もその勢いでシティーリーグ初の連覇球団となるか。",
        history: `
        第2期 リーグ優勝<br>
        第5期 リーグ優勝
        `,
        managers: [
        "ザコ",
        "志位諫",
        "たっつー",
        "ジャロムロ",
        "中川たまらん",
        "アップル",
        "ホームラン",
        ],
    },

    "ドッグス": {
        logo: "images/Dogslogo.PNG",
        color: "#FE6348",
        textColor: "#000000",
        league: "ワイルドリーグ",
        description: "昨季は前半戦は好調だったものの、アリゲーターズに巻き返され2位に終わった。昨季の雪辱を果たし、アリゲーターズの4連覇を阻止できるか。",
        history: `
        第1期 交流戦優勝<br>
        第2期 交流戦優勝<br>
        第5期 交流戦優勝
        `,
        managers: [
        "爆薬",
        "Neko",
        "あかり",
        "Johnson",
        "市村の監督",
        "シリキ",
        "GWR",
        "いくら",
        ],
    },

    "シャークス": {
        logo: "images/Sharkslogo.PNG",
        color: "#6494EB",
        textColor: "#ffffff",
        league: "ワイルドリーグ",
        description: "実力のあるチームが揃うワイルドリーグでは、なかなか不利な戦いを強いられている。ワイルドの台風の目となれるか。",
        history: `
        第4期 3位<br>
        `,
        managers: [
        "ソーセージ",
        "森迪夫",
        "風切",
        "島津で打てない",
        "田中三郎",
        "お、おう",
        ],
    },

    "リザーズ": {
        logo: "images/Lizardslogo.PNG",
        color: "#ABD7E7",
        textColor: "#000000",
        league: "シティーリーグ",
        description: "現在4期連続でAクラス入りしている、個性豊かな選手を擁する実力派球団。球団初のリーグ優勝、そして第3期以来の日本一も夢ではない。",
        history: `
        第3期 交流戦優勝<br>
        第3期 日本一
        `,
        managers: [
        "東京の昆布",
        "つよつよ",
        "いちか",
        "明菜",
        "月岡推し",
        "リアタイ初心者",
        "松尾形",
        ],
    },

    "タートルズ": {
        logo: "images/Turtleslogo.PNG",
        color: "#D8A521",
        textColor: "#000000",
        league: "シティーリーグ",
        description: "堅守が武器のシティーのダークホース。昨季は最後まで優勝争いをしており、今季こそは悲願の初優勝なるか。",
        history: `
        第1期 2位
        `,
        managers: [
        "あいうえお",
        "つなしー",
        "カーブが最強",
        "128kt",
        "ヴェラスケス",
        ],
    },

    "クロウズ": {
        logo: "images/Crowslogo.PNG",
        color: "#808080",
        textColor: "#ffffff",
        league: "ワイルドリーグ",
        description: "投手力の低やチーム相性の悪さにより苦戦を強いられている。昨季本塁打王の島津を筆頭に、層の厚い野手陣が打って打って打って打って打って打って参ります。",
        history: `
        第2期 3位<br>
        第3期 3位
        `,
        managers: [
        "川又は星4",
        "weakest",
        "苦労ズ",
        "ギウルン",
        "Mrクロウズ",
        "141",
        "カラピチ推し",
        "クロウズ実習生",
        ],
    },

    "アリゲーターズ": {
        logo: "images/Alligatorslogo.PNG",
        color: "#90ED91",
        textColor: "#000000",
        league: "ワイルドリーグ",
        description: "リーグ3連覇、日本一3度を誇る、ダイナマイトリーグ最強球団。今季は前人未踏のリーグ4連覇、日本一3連覇へ突き進む。",
        history: `
        第1期 日本一<br>
        第3期 リーグ優勝<br>
        第4期 リーグ優勝<br>
        第4期 日本一<br>
        第5期 リーグ優勝<br>
        第5期 日本一
        `,
        managers: [
        "龍",
        "うががみ",
        "室谷のシュート",
        "サザ良",
        "どーなつ",
        "本郷高校",
        "コウキン",
        ],
    },

    "ラビッツ": {
        logo: "images/Rabbitslogo.PNG",
        color: "#FFC0CB",
        textColor: "#000000",
        league: "シティーリーグ",
        description: "前々回の第4期には球団史上初となるリーグ優勝を果たしたものの、昨季はなかなか浮上のきっかけをつかめなかった。そのスピードで頂へ一直線へ駆け抜ける。",
        history: `
        第4期 リーグ優勝
        `,
        managers: [
        "ラビLOVE",
        "600族の王",
        "セプテンバー",
        "打力こそパワー",
        "oranji",
        "とまじい",
        "はやと",
        ],
    },

    "レパーズ": {
        logo: "images/Leopardslogo.PNG",
        color: "#FFD500",
        textColor: "#000000",
        league: "ワイルドリーグ",
        description: "初参加の第3期では最終戦まで優勝争いをし、CSでアリゲーターズを破りDSに出場したが、ここ2期は優勝争いから遠ざかっている。苦手な鰐を克服して、頂点を目指す。",
        history: `
        第3期 ワイルドリーグ CS優勝
        `,
        managers: [
        "153",
        "ゴンザレス最強",
        "【V.I.P】",
        "するめゐか",
        "えむ",
        "Yyt",
        "キュウリ",
        "お湯さん",
        ],
    },

    "ライノス": {
        logo: "images/Rhinoslogo.PNG",
        color: "#A9A9A9",
        textColor: "#ffffff",
        league: "シティーリーグ",
        description: "逆境での勝負強さが光る強打の球団。ここ2期はAクラスまであと1歩の戦いを続けており、今期の戦いぶりにも注目だ。",
        history: `
        第4期 4位<br>
        第5期 4位
        `,
        managers: [
        "Satoya",
        "くり",
        "直球",
        "あわね",
        "冥界",
        ],
    },
};

function getTeamLeague(teamName){

    if(!teams[teamName]){
        return null;
    }

    return teams[teamName].league;

}
