const clock = document.getElementById('clock')

setInterval(() => {
    const date = new Date().toLocaleTimeString();
    clock.innerHTML = `<span>${date}</span>`
}, 1000);