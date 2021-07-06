var totalDeaths, newDeaths, timePerDeath, timePerDeathSeconds;
apiUrl = "https://cors-anywhere.herokuapp.com/https://api.covid19api.com/summary"

//get seconds since start of the day
var date = new Date();
var midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());
var timeSinceMidnight = date - midnight;

function mainThing() {
    fetch("https://api.covid19api.com/summary")
        //convert the data to json
        .then(getStats => getStats.json())
        //calculate some stats
        .then(myJson => {
            totalDeaths = myJson.Global.TotalDeaths;
            newDeaths = myJson.Global.NewDeaths;
            timePerDeath = (24 * 60 * 60 / newDeaths) * 1000;
            timePerDeathSeconds = Math.round(24 * 60 * 60 / newDeaths * 100) / 100;
            deathSinceStartOfDay = totalDeaths - newDeaths + (Math.floor(timeSinceMidnight / timePerDeath))

            //spawn and edit for the first circle bc the interval function starts later

            document.querySelector('#caseCount').innerHTML = deathCount();


            console.log(document.getElementById('tpd').innerHTML)
            document.getElementById('tpd').innerHTML = timePerDeathSeconds;

            people.push(new person(Math.random() * winWidth, -30, Math.random() * 10 + 40));

            console.log(timePerDeath)
            //loop that spawns and edits stuff based on time/death of the previous day
            window.setInterval(async () => {
                people.push(new person(Math.random() * winWidth, -30, Math.random() * 20 + 40));

                document.querySelector('#liveDeaths').innerHTML = people.length + ' people';
                document.querySelector('#hasHave').innerHTML = 'have';

                document.querySelector('#caseCount').innerHTML = deathCount();
            }, timePerDeath);
        })
}



function deathCount() {
    return `COVID-19 Deaths Worldwide: ${deathSinceStartOfDay + 1 + people.length}`
};

mainThing();



// const userAction = async () => {
//     const response = await fetch(apiUrl);
//     const myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//     totalDeaths = myJson.Global.TotalDeaths
//     newDeaths = myJson.Global.NewDeaths
//     timePerDeath = (24*60*60/newDeaths)*1000;
//     console.log(timePerDeath)
// }
