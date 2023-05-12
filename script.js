function newSite1() {
    var sites = ['prompt()']

    document.getElementById('myIframe').src = sites[Math.floor(Math.random() * sites.length)];
}
function newSite2() {
    var sites = ['https://ezarcade.github.io/']

    document.getElementById('myIframe').src = sites[Math.floor(Math.random() * sites.length)];
}