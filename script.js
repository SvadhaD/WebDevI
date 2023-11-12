document.addEventListener('DOMContentLoaded', function() {
    const calendarCells = document.querySelectorAll('td');
    
    calendarCells.forEach((cell) => {
        cell.addEventListener('click', function() {
            const eventText = prompt('Enter your event:');
            if (eventText) {
                const eventBox = document.createElement('div');
                eventBox.classList.add('event-box');
                eventBox.textContent = eventText;
                cell.appendChild(eventBox);
            }
        });
    });
});
