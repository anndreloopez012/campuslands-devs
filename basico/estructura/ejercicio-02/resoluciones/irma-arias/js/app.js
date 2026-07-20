
fetch('data/player.json')
    .then(response => response.json())
    .then(data => console.log(data));