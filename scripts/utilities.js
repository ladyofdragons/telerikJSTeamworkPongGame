function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

function getRandomValueInRange(max,min) {
                var random = Math.floor(Math.random() * (max - min + 1));
                return random;
            }