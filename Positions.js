function getFullName(player) {
    return `${player.fname} ${player.lname}`;
}

function getPosition(player) {
    return `${player.position}`;
}

function getSalary(player) {
    return `${player.salary}`;
}

fetch(`Positions.json`)
    .then(response => response.json())
    .then(data => {
        data.forEach(player => {
            console.log(getPlayerInfo(player));
            
        });
    })
    .catch(error => {
        console.error(error);
    });




    function getPlayerInfo(player) {
        return `${getFullName(player)} - ${getPosition(player)} - ${getSalary(player)}`;
    }

  

