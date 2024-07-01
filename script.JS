
function displayCurrentTimeUTC() {
    const now = new Date();
    const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };
    const formattedTime = now.toLocaleString('en-US', options);
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = formattedTime;
}


function displayCurrentDay() {
    const now = new Date();
    const options = { weekday: 'long' };
    const dayOfWeek = now.toLocaleString('en-US', options);
    document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
}


document.addEventListener('DOMContentLoaded', function() {
    displayCurrentTimeUTC();
    displayCurrentDay();
});
