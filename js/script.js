(function() {

    var randomNumber = document.getElementById("random-numbers"),
        output = document.getElementById("final-numbers");

    function randomNumbers (min, max) {

        return Math.round(Math.random() * (max - min) + min);
    }

    function showNumbers (){
        var number = [];

        for(var i = 0; i < 6; i++){
            var randomNumber = randomNumbers(1, 49);

            while( number.indexOf(randomNumber) !== -1 ) {
                randomNumber = randomNumbers(1, 49);
            }

            number[number.length] = randomNumber;

        }

        output.value = number.join(", ");
    }

    randomNumber.onclick = showNumbers;

})();