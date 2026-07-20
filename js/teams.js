const teams = {
    "エレファンツ": {
        logo: "images/Elephantslogo.PNG",
        color: "#DC9FDC",
        textColor: "#000000",
        league: "シティーリーグ",
        description: "過去2回の優勝を誇る強打の球団。ここ最近は厳しい戦いが続いており、今季は巻き返しを図りたい。",
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
        description: "ダイナマイトリーグ黎明期の第1期、2期で連覇を果たした。ここ3期はCSから遠ざかっているが、今季はワイルド初代王者の意地を見せられるか。",
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
        description: "昨季は前半戦は好調だったものの、アリゲーターズに巻き返され2位に終わった。今季こそは鰐の牙城を崩せるだろうか。",
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
        description: "現在4期連続でAクラス入りしている実力派球団。球団初のリーグ優勝、そして第3期以来の日本一も夢ではない。",
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
        description: "堅守が武器のシティーのダークホース。昨季は最後まで優勝争いをしており、今季こそは初優勝なるか。",
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
        description: "シャークス同様、ワイルドリーグではチーム力の低さやチームの相性の問題もあり苦戦している。昨季本塁打王の島津を筆頭に、厚い野手陣の層を活かしたい。",
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
        "本郷高校"
        "コウキン",
        ],
    },

    "ラビッツ": {
        logo: "images/Rabbitslogo.PNG",
        color: "#FFC0CB",
        textColor: "#000000",
        league: "シティーリーグ",
        description: "前々回の第4期には球団史上初となるリーグ優勝を果たした。そのスピードで、シティーリーグを駆け抜ける。",
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
        description: "初参加の第3期ではCSでアリゲーターズを破りDSに出場したが、ここ2期は優勝争いから遠ざかっている。苦手な鰐を克服して、頂点を目指す。",
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
        description: "チーム力や人材不足が仇となりこれまでに目立った成績は残せていない。逆境を跳ねのけて上へ登っていけるか。",
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
