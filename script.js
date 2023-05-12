function newSite1() {
    let information = prompt("What is the link?", "https://spew45.github.io")
    var sites = [information]

    document.getElementById('myIframe').src = sites[Math.floor(Math.random() * sites.length)];
}
function newSite2() {
    var sites = ['https://ezarcade.github.io/']

    document.getElementById('myIframe').src = sites[Math.floor(Math.random() * sites.length)];
}