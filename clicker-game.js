let coins = 0;

function btnCoin() {
    coins++;
    document.getElementById("totalCoins").innerHTML = coins;
}

let autoClick = 0;
let autoClickUpgrade = 10;

function btnAutoClicker() {
    if (coins >= autoClickUpgrade) {
        autoClick++;
        coins = coins - autoClickUpgrade;

        autoClickUpgrade = Math.round(autoClickUpgrade * 1.1);

        document.getElementById("totalCoins").innerHTML = coins;
        document.getElementById("totalAutoClicker").innerHTML = autoClick;
        document.getElementById("clickerCost").innerHTML = autoClickUpgrade;
    } else {
        {
            Swal.fire({
                title: "Oh No",
                text: "Not Enough Coins",
                icon: "error",
            });
        }

        coinsPerSecond();
        checkAchievement();
    }
}

let golddigger = 0;
let diggerUpgrade = 20;

function btnDigger() {
    if (coins >= diggerUpgrade) {
        golddigger++;
        coins = coins - diggerUpgrade;

        diggerUpgrade = Math.round(diggerUpgrade * 1.2);

        document.getElementById("totalCoins").innerHTML = coins;
        document.getElementById("totalDigger").innerHTML = golddigger;
        document.getElementById("diggerCost").innerHTML = diggerUpgrade;
    } else {
        {
            Swal.fire({
                title: "Oh No",
                text: "Not Enough Coins",
                icon: "error",
            });
        }
        coinsPerSecond();
        checkAchievement();
    }
}

function coinsPerSecond() {
    cps = autoClick * 1 + golddigger * 2;
    document.getElementById("cps").innerHTML = cps;
}

let achievement = {
    name: "You Have Earned The Coin Master Achievement",
    requirement: 20,
};

function checkAchievement() {
    const achievementsList = document.getElementById("achievementsList");

    if (coins >= achievement.requirement) {
        if (!document.getElementById(achievement.name)) {
            achievementsList.innerHTML += `<li id="${achievement.name}">${achievement.name}</li>`;
        }
    }
}

setInterval(checkAchievement, 3000);

setInterval(function () {
    coins = coins + autoClick * 1 + golddigger * 2;
    totalCoins = document.getElementById("totalCoins");
    document.getElementById("totalCoins").innerHTML = coins;
    coinsPerSecond();
}, 1000);

// } else {
//     {
//         Swal.fire({
//             title: "Oh No",
//             text: "Not Enough Coins",
//             icon: "error",
//         });
//     }
