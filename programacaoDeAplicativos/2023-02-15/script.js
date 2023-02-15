const carnaval = new Date("2023-02-20T00:00:00-0300").getTime();
const countdown = document.getElementById("countdown");

const updateCount = setInterval(() => {
    const now = new Date().getTime();
    const distance = carnaval - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdown.innerHTML = `${days}d  ${hours}h ${minutes}m ${seconds}s`;
    if (distance < 0) {
        clearInterval(updateCount);
        countdown.innerHTML = "Já é carnaval!";
    }
}, 1000);