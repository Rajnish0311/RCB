document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.input');
    const btns = document.querySelectorAll('.btn');
    const equal = document.getElementById('equal');

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            const buttonText = this.textContent;
            input.value += buttonText;
        });
    });

    equal.addEventListener('click', function() {
        try {
            input.value = eval(input.value);
        } catch (error) {
            input.value = 'Error';
        }
    });

    // Clear the input field when "AC" button is clicked
    document.querySelector('#ac').addEventListener('click', function() {
        input.value = '';
    });
    document.querySelector('#equal').addEventListener('click', function() {
        input.value = "ee sala cup namde";
    });
});
