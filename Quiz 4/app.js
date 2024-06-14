(function() {
    const startButton = document.getElementById('startBtn');
    const resetButton = document.getElementById('resetBtn');
    const car1 = document.getElementById('car1');
    const car2 = document.getElementById('car2');
    const flag1 = document.getElementById('flag1');
    const flag2 = document.getElementById('flag2');

    startButton.addEventListener('click', function() {
        startButton.disabled = true;
        resetRace();

        const isCar1Winner = Math.random() >= 0.5;

        animateCars(isCar1Winner);

        setTimeout(() => {
            displayFlags(isCar1Winner);
            announceWinner(isCar1Winner);
            startButton.disabled = false;
        }, 2000);
    });

    resetButton.addEventListener('click', resetRace);

    function animateCars(isCar1Winner) {
        const car1Distance = isCar1Winner ? '80%' : '70%';
        const car2Distance = isCar1Winner ? '70%' : '80%';

        car1.style.transition = 'left 2s';
        car2.style.transition = 'left 2s';

        car1.style.left = car1Distance;
        car2.style.left = car2Distance;
    }

    function displayFlags(isCar1Winner) {
        if (isCar1Winner) {
            flag1.style.display = 'block';
        } else {
            flag2.style.display = 'block';
        }
    }

    function announceWinner(isCar1Winner) {
        alert(isCar1Winner ? 'Car 1 Wins!' : 'Car 2 Wins!');
    }

    function resetRace() {
        car1.style.left = '10px';
        car2.style.left = '10px';
        
        car1.style.transition = 'none';
        car2.style.transition = 'none';

        flag1.style.display = 'none';
        flag2.style.display = 'none';
    }
})();
