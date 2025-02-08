document.addEventListener("DOMContentLoaded", () => {
    const champions = [
        "AATROX", "AHRI", "AKALI", "AKSHAN", "ALISTAR", "AMUMU", "ANIVIA", "ANNIE",
        "APHELIOS", "ASHE", "AURELIONSOL", "AZIR", "BARD", "BELVETH", "BLITZCRANK",
        "BRAND", "BRAUM", "CAITLYN", "CAMILLE", "CASSIOPEIA", "CHO'GATH", "CORKI",
        "DARIUS", "DIANA", "DRAVEN", "DRMUNDO", "EKKO", "ELISE", "EVELYNN", "EZREAL",
        "FIDDLESTICKS", "FIORA", "FIZZ", "GALIO", "GANGPLANK", "GAREN", "GNAR",
        "GRAGAS", "GRAVES", "GWEN", "HECARIM", "HEIMERDINGER", "ILLAOI", "IRELIA",
        "IVERN", "JANNA", "JARVANIV", "JAX", "JAYCE", "JHIN", "JINX", "KAI'SA",
        "KALISTA", "KARMA", "KARTHUS", "KASSADIN", "KATARINA", "KAYLE", "KAYN",
        "KENNEN", "KHA'ZIX", "KINDRED", "KLED", "KOG'MAW", "LEBLANC", "LEESIN",
        "LEONA", "LILLIA", "LISSANDRA", "LUCIAN", "LULU", "LUX", "MALPHITE",
        "MALZAHAR", "MAOKAI", "MASTER YI", "MISS FORTUNE", "MORDEKAISER",
        "MORGANA", "NAMI", "NASUS", "NAUTILUS", "NEEKO", "NIDALEE", "NOCTURNE",
        "NUNU & WILLUMP", "OLAF", "ORIANNA", "ORNN", "PANTHEON", "POPPY", "PYKE",
        "QIYANA", "QUINN", "RAKAN", "RAMMUS", "REK'SAI", "RELL", "RENEKTON",
        "RENGAR", "RIVEN", "RUMBLE", "RYZE", "SAMIRA", "SEJUANI", "SENNA", "SERAPHINE",
        "SETT", "SHACO", "SHEN", "SHYVANA", "SINGED", "SION", "SIVIR", "SKARNER",
        "SONA", "SORAKA", "SWAIN", "SYLAS", "SYNDRA", "TAHM KENCH", "TALIYAH",
        "TARIC", "TEEMO", "THRESH", "TRISTANA", "TRUNDLE", "TRYNDAMERE", "TWISTED FATE",
        "TWITCH", "UDYR", "URGOT", "VARUS", "VAYNE", "VEIGAR", "VEL'KOZ", "VEX",
        "VI", "VIEGO", "VIKTOR", "VLADIMIR", "VOLIBEAR", "WARWICK", "WUKONG",
        "XAYAH", "XERATH", "XIN ZHAO", "YASUO", "YONE", "YORICK", "YUUMI", "ZAC",
        "ZED", "ZERI", "ZIGGS", "ZILEAN", "ZOE", "ZYRA"
    ];

    let answer = champions[Math.floor(Math.random() * champions.length)].toUpperCase();
    let maxAttempts = 6;
    let attempts = 0;

    const gameBoard = document.getElementById("gameBoard");

    function createGrid() {
        gameBoard.innerHTML = "";
        for (let i = 0; i < maxAttempts; i++) {
            let row = document.createElement("div");
            row.classList.add("grid");

            for (let j = 0; j < answer.length; j++) {
                let cell = document.createElement("div");
                cell.classList.add("cell");
                row.appendChild(cell);
            }
            gameBoard.appendChild(row);
        }
    }

    createGrid();

    function checkGuess() {
        const input = document.getElementById("guessInput");
        let guess = input.value.toUpperCase().trim();

        if (guess.length !== answer.length) {
            document.getElementById("message").innerText = "⚠️ ต้องมี " + answer.length + " ตัวอักษร!";
            return;
        }

        if (!champions.includes(guess)) {
            document.getElementById("message").innerText = "⚠️ ไม่มีชื่อนี้ใน LOL!";
            return;
        }

        let row = document.getElementsByClassName("grid")[attempts];

        for (let i = 0; i < answer.length; i++) {
            let cell = row.children[i];
            cell.innerText = guess[i];

            if (guess[i] === answer[i]) {
                cell.classList.add("green");
            } else if (answer.includes(guess[i])) {
                cell.classList.add("yellow");
            } else {
                cell.classList.add("gray");
            }
        }

        attempts++;

        if (guess === answer || attempts === maxAttempts) {
            document.getElementById("message").innerHTML = "🎉 คำตอบคือ: <b>" + answer + "</b>";
            document.getElementById("guessInput").disabled = true;
        }

        input.value = "";
    }

    document.getElementById("guessButton").addEventListener("click", checkGuess);
});
