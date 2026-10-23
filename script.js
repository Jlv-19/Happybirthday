document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Surprise Button
    // ==========================
    const btn = document.getElementById("btn");
    const surpriseMessage = document.getElementById("message");

    if (btn && surpriseMessage) {
        btn.addEventListener("click", () => {
            surpriseMessage.style.display = "block";
        });
    }

    // ==========================
    // Birthday Countdown
    // Birthday: October 10, 2026
    // ==========================
    const birthday = new Date("2027-10-23T00:00:00");

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const countdownMessage = document.getElementById("countdown-message");
    const countdownContainer = document.querySelector(".countdown-container");

    function updateCountdown() {

        const now = new Date();
        const diff = birthday.getTime() - now.getTime();

        if (diff <= 0) {

            if (countdownContainer) {
                countdownContainer.innerHTML = `
                    <h1 style="font-size:3rem;">
                        Time to get Settle Down
                    </h1>
                `;
            }

            if (countdownMessage) {
                countdownMessage.textContent =
                    "Today is your special day. Wishing you endless happiness, love, and beautiful memories.";
            }

            clearInterval(timer);
            return;
        }

        const totalSeconds = Math.floor(diff / 1000);

        const d = Math.floor(totalSeconds / (60 * 60 * 24));
        const h = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const m = Math.floor((totalSeconds % (60 * 60)) / 60);
        const s = totalSeconds % 60;

        if (days) days.textContent = String(d).padStart(2, "0");
        if (hours) hours.textContent = String(h).padStart(2, "0");
        if (minutes) minutes.textContent = String(m).padStart(2, "0");
        if (seconds) seconds.textContent = String(s).padStart(2, "0");
    }

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

});
