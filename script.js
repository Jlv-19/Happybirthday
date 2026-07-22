document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("message").style.display = "block";
});
// YYYY, Month (0-11), Day, Hour, Minute, Second
const birthday = new Date(2027, 2, 15, 0, 0, 0);

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const message = document.getElementById("countdown-message");

function updateCountdown(){

    const now = new Date();

    let diff = birthday - now;

    if(diff <= 0){

        document.querySelector(".countdown-container").innerHTML = `
            <h1 style="font-size:3rem;">
                🎉 Happy Birthday! 🎂❤️
            </h1>
        `;

        message.innerHTML =
            "Today is your special day. Wishing you happiness, love and endless smiles.";

        clearInterval(timer);

        return;
    }

    const d = Math.floor(diff / (1000*60*60*24));
    diff %= (1000*60*60*24);

    const h = Math.floor(diff / (1000*60*60));
    diff %= (1000*60*60);

    const m = Math.floor(diff / (1000*60));
    diff %= (1000*60);

    const s = Math.floor(diff / 1000);

    days.textContent = String(d).padStart(2,'0');
    hours.textContent = String(h).padStart(2,'0');
    minutes.textContent = String(m).padStart(2,'0');
    seconds.textContent = String(s).padStart(2,'0');
}

updateCountdown();

const timer = setInterval(updateCountdown,1000);
