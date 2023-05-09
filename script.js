function newSite1() {
    var sites = ['https://spew45.github.io']

    document.getElementById('myIframe').src = sites[Math.floor(Math.random() * sites.length)];
    alert('Done');
}
function newSite2() {
    var sites = ['https://ezarcade.github.io/']

    document.getElementById('myIframe').src = sites[Math.floor(Math.random() * sites.length)];
    alert('Done');
}