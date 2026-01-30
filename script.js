// Globale variabelen
let selectedRegion = 'amsterdam';
let countdownInterval;

// Initialisatie
document.addEventListener('DOMContentLoaded', () => {
    loadSavedRegion();
    setupEventListeners();
    renderTable();
    updateCurrentDay();
    startCountdown();
    updateTodayTimes();
});

// Laad opgeslagen regio uit localStorage
function loadSavedRegion() {
    const saved = localStorage.getItem('selectedRegion');
    if (saved && regionCorrections[saved]) {
        selectedRegion = saved;
        document.getElementById('region').value = saved;
    }
}

// Event listeners
function setupEventListeners() {
    document.getElementById('region').addEventListener('change', (e) => {
        selectedRegion = e.target.value;
        localStorage.setItem('selectedRegion', selectedRegion);
        renderTable();
        updateTodayTimes();
    });
}

// Voeg correctie toe aan tijd
function adjustTime(timeStr, minutesAdjustment) {
    if (!timeStr || minutesAdjustment === 0) return timeStr;
    
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date(2026, 0, 1, hours, minutes);
    date.setMinutes(date.getMinutes() + minutesAdjustment);
    
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

// Haal aangepaste tijden voor geselecteerde regio
function getAdjustedTimes(dayData) {
    const corrections = regionCorrections[selectedRegion];
    
    return {
        ...dayData,
        fajr: adjustTime(dayData.fajr, corrections.fajr),
        maghrib: adjustTime(dayData.maghrib, corrections.maghrib),
        isha: adjustTime(dayData.isha, corrections.isha)
    };
}

// Render volledige tabel
function renderTable() {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
    
    ramadanData.forEach(dayData => {
        const adjusted = getAdjustedTimes(dayData);
        const row = document.createElement('tr');
        
        // Highlight huidige dag
        const today = new Date();
        const [day, month, year] = adjusted.date.split('-').map(Number);
        const rowDate = new Date(year, month - 1, day);
        
        if (isSameDay(today, rowDate)) {
            row.classList.add('current-day-row');
        }
        
        row.innerHTML = `
            <td><strong>${adjusted.day}</strong></td>
            <td>${adjusted.dayName}</td>
            <td>${adjusted.date}</td>
            <td>${adjusted.fajr}</td>
            <td>${adjusted.zuhr}</td>
            <td>${adjusted.asr}</td>
            <td>${adjusted.maghrib}</td>
            <td>${adjusted.isha}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Update huidige dag info
function updateCurrentDay() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = today.toLocaleDateString('nl-NL', options);
    
    document.getElementById('current-date').textContent = dateStr;
    
    // Vind Ramadan dag
    const todayData = ramadanData.find(day => {
        const [d, m, y] = day.date.split('-').map(Number);
        const dayDate = new Date(y, m - 1, d);
        return isSameDay(today, dayDate);
    });
    
    if (todayData) {
        document.getElementById('ramadan-day').textContent = `Ramadan Dag ${todayData.day}`;
    } else {
        document.getElementById('ramadan-day').textContent = 'Buiten Ramadan periode';
    }
}

// Update vandaag tijden
function updateTodayTimes() {
    const today = new Date();
    const todayData = ramadanData.find(day => {
        const [d, m, y] = day.date.split('-').map(Number);
        const dayDate = new Date(y, m - 1, d);
        return isSameDay(today, dayDate);
    });
    
    const container = document.getElementById('today-times');
    
    if (!todayData) {
        container.innerHTML = '<p class="no-data">Geen gebedstijden beschikbaar voor vandaag</p>';
        return;
    }
    
    const adjusted = getAdjustedTimes(todayData);
    
    container.innerHTML = `
        <div class="time-card">
            <span class="prayer-name">Fadjr</span>
            <span class="prayer-time">${adjusted.fajr}</span>
        </div>
        <div class="time-card">
            <span class="prayer-name">Zuhr</span>
            <span class="prayer-time">${adjusted.zuhr}</span>
        </div>
        <div class="time-card">
            <span class="prayer-name">Asr</span>
            <span class="prayer-time">${adjusted.asr}</span>
        </div>
        <div class="time-card highlight">
            <span class="prayer-name">Maghrib (Iftar)</span>
            <span class="prayer-time">${adjusted.maghrib}</span>
        </div>
        <div class="time-card">
            <span class="prayer-name">Isha</span>
            <span class="prayer-time">${adjusted.isha}</span>
        </div>
    `;
}

// Start countdown timer
function startCountdown() {
    if (countdownInterval) clearInterval(countdownInterval);
    
    countdownInterval = setInterval(() => {
        updateCountdown();
    }, 1000);
    
    updateCountdown(); // Direct updaten
}

// Update countdown
function updateCountdown() {
    const now = new Date();
    const today = ramadanData.find(day => {
        const [d, m, y] = day.date.split('-').map(Number);
        const dayDate = new Date(y, m - 1, d);
        return isSameDay(now, dayDate);
    });
    
    if (!today) {
        document.getElementById('countdown-timer').textContent = '--:--:--';
        document.getElementById('next-event-label').textContent = 'Geen gebedstijden vandaag';
        return;
    }
    
    const adjusted = getAdjustedTimes(today);
    const prayers = [
        { name: 'Fadjr', time: adjusted.fajr },
        { name: 'Zuhr', time: adjusted.zuhr },
        { name: 'Asr', time: adjusted.asr },
        { name: 'Maghrib (Iftar)', time: adjusted.maghrib },
        { name: 'Isha', time: adjusted.isha }
    ];
    
    // Vind volgende gebed
    let nextPrayer = null;
    
    for (const prayer of prayers) {
        const [hours, minutes] = prayer.time.split(':').map(Number);
        const prayerTime = new Date(now);
        prayerTime.setHours(hours, minutes, 0, 0);
        
        if (prayerTime > now) {
            nextPrayer = { ...prayer, time: prayerTime };
            break;
        }
    }
    
    if (!nextPrayer) {
        document.getElementById('countdown-timer').textContent = 'Alle gebeden voorbij';
        document.getElementById('next-event-label').textContent = 'Vandaag';
        return;
    }
    
    const diff = nextPrayer.time - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countdown-timer').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('next-event-label').textContent = `Tijd tot ${nextPrayer.name}`;
}

// Helper functie om te checken of twee datums dezelfde dag zijn
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}