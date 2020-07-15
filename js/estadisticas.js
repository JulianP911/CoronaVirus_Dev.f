var request = new XMLHttpRequest();
request.open("GET",'../assets/files/corona.json', false);
request.send(null);
var jsonData = JSON.parse(request.responseText);

for(let i = 0; i < jsonData.Countries.length; i++)
{
    var paisActual = jsonData.Countries[i];
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');

    var tabla = document.getElementById('tablaCo');
    
    tabla.append(tr);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);

    td1.innerHTML = i;
    td1.setAttribute('class', 'text-center font-weight-bolder');
    td2.innerHTML = paisActual.Country;
    td3.innerHTML = paisActual.TotalConfirmed;
    td4.innerHTML = paisActual.TotalDeaths;
    td5.innerHTML = paisActual.TotalRecovered;
}
