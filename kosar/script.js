var cipo01 = 10000
var cipo02 = 6000
var cipo03 = 20000
function kosarba(termek){
    db = Number(prompt("db"))
    localStorage.setItem(termek,db)
}
function tor(torles){
    localStorage.setItem(termek,db)
}
function kosar() {
    var lista = ""
    var termek = localStorage.key(1)
    
    lista += "<tr><th>név</th><th>db</th><th>ár</th></tr>"
    lista += "<tr><td>cipo01</td><td>2 db</td><td>10000 ft</td></tr>"
    lista += "<tr><td>cipo02</td><td>2 db</td><td>10000 ft</td></tr>"
    lista += "<tr><td>cipo03</td><td>2 db</td><td>10000 ft</td></tr>"
    document.getElementById('table').innerHTML = lista
}
