
        let count = 0;
        const countt = document.getElementById('counter');

        function increment() {
            count++;
            updateCounter();
        }

        function decrement() {
            if (count > 0) {
                count--;
                updateCounter();
            }
        }

        function reset() {
            count = 0;
            updateCounter();
        }

        function updateCounter() {
            countt.textContent = count;
        }




     
    