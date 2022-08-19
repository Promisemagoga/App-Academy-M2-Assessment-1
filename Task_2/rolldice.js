document.getElementById('rollButton').addEventListener('click', GameStart);
function GameStart(){
    var WinningCategories = [
        "Best Financial Solution",
        "Best Hackhathon solution",
        "Best campus Solution",
        "Best Health Solution",
        "Best Agricultural Solution",
        "Best Educational Solution",
    ]
    let Categories = WinningCategories[Math.floor(Math.random() * WinningCategories.length)]
    console.log(Categories)

}
