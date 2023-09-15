
const minYear = 1990;
const maxYear = 2022;

const randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;

    document.getElementById('h3').textContent = `Who is the champion of the ${randomYear} season?`;

    let deep;

function loader() {
  deep = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

    function randomizeItems(items)
{
    var cached = items.slice(0), temp, i = cached.length, rand;
    while(--i)
    {
        rand = Math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}
function randomizeList()
{
var list = document.getElementById("myItems");
    var nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = randomizeItems(nodes);
    while(i < nodes.length)
    {
        list.appendChild(nodes[i]);
        ++i;
    }
list.style.display="block";
}

fetch(`https://ergast.com/api/f1/${randomYear}/driverstandings/1.json`)
.then(function (response) {

    return response.json();

})
.then(function (json){

    let MRData = json.MRData
    let StandingsTable = MRData.StandingsTable
    let StandingsLists = StandingsTable.StandingsLists
    let zero = StandingsLists[0]
    let DriverStandings = zero.DriverStandings
    let zeroTwo = DriverStandings[0]
    let Driver = DriverStandings[0].Driver
    let familyName1 = Driver.familyName
    let givenName1 = Driver.givenName
    let name1 = [`${givenName1} ${familyName1}`]
    name1 = String(name1);
    document.getElementById('1').textContent = name1;


})


fetch(`https://ergast.com/api/f1/${randomYear}/driverstandings/2.json`)
.then(function (response) {

    return response.json();

})
.then(function (json){

    let MRData = json.MRData
    let StandingsTable = MRData.StandingsTable
    let StandingsLists = StandingsTable.StandingsLists
    let zero = StandingsLists[0]
    let DriverStandings = zero.DriverStandings
    let zeroTwo = DriverStandings[0]
    let Driver = DriverStandings[0].Driver
    let familyName2 = Driver.familyName
    let givenName2 = Driver.givenName
    let name2 = [`${givenName2} ${familyName2}`]
    name2 = String(name2);
    document.getElementById('2').textContent = name2;

})

fetch(`https://ergast.com/api/f1/${randomYear}/driverstandings/3.json`)
.then(function (response) {

    return response.json();

})
.then(function (json){

    let MRData = json.MRData
    let StandingsTable = MRData.StandingsTable
    let StandingsLists = StandingsTable.StandingsLists
    let zero = StandingsLists[0]
    let DriverStandings = zero.DriverStandings
    let zeroTwo = DriverStandings[0]
    let Driver = DriverStandings[0].Driver
    let familyName3 = Driver.familyName
    let givenName3 = Driver.givenName
    let name3 = [`${givenName3} ${familyName3}`];
    name3 = String(name3);
    document.getElementById('3').textContent = name3;

})

fetch(`https://ergast.com/api/f1/${randomYear}/driverstandings/4.json`)
.then(function (response) {

    return response.json();

})
.then(function (json){

    let MRData = json.MRData
    let StandingsTable = MRData.StandingsTable
    let StandingsLists = StandingsTable.StandingsLists
    let zero = StandingsLists[0]
    let DriverStandings = zero.DriverStandings
    let zeroTwo = DriverStandings[0]
    let Driver = DriverStandings[0].Driver
    let familyName4 = Driver.familyName
    let givenName4 = Driver.givenName
    let name4 = [`${givenName4} ${familyName4}`];
    name4 = String(name4);
    document.getElementById('4').textContent = name4;

})

