// Ramadan tijden data (basis tijden voor 52°00' NB en 5°00' OL)
const ramadanData = [
    { day: 1, dayName: "Donderdag", date: "19-02-2026", fajr: "06:17", zuhr: "14:00", asr: "16:30", maghrib: "18:01", isha: "19:30" },
    { day: 2, dayName: "Vrijdag", date: "20-02-2026", fajr: "06:15", zuhr: "14:00", asr: "16:30", maghrib: "18:03", isha: "19:30" },
    { day: 3, dayName: "Zaterdag", date: "21-02-2026", fajr: "06:13", zuhr: "14:00", asr: "16:30", maghrib: "18:05", isha: "19:30" },
    { day: 4, dayName: "Zondag", date: "22-02-2026", fajr: "06:11", zuhr: "14:00", asr: "16:30", maghrib: "18:07", isha: "19:30" },
    { day: 5, dayName: "Maandag", date: "23-02-2026", fajr: "06:09", zuhr: "14:00", asr: "16:30", maghrib: "18:09", isha: "19:30" },
    { day: 6, dayName: "Dinsdag", date: "24-02-2026", fajr: "06:07", zuhr: "14:00", asr: "16:30", maghrib: "18:10", isha: "19:30" },
    { day: 7, dayName: "Woensdag", date: "25-02-2026", fajr: "06:05", zuhr: "14:00", asr: "16:30", maghrib: "18:12", isha: "19:30" },
    { day: 8, dayName: "Donderdag", date: "26-02-2026", fajr: "06:02", zuhr: "14:00", asr: "16:30", maghrib: "18:14", isha: "19:30" },
    { day: 9, dayName: "Vrijdag", date: "27-02-2026", fajr: "06:00", zuhr: "14:00", asr: "16:30", maghrib: "18:16", isha: "19:30" },
    { day: 10, dayName: "Zaterdag", date: "28-02-2026", fajr: "05:58", zuhr: "14:00", asr: "16:30", maghrib: "18:18", isha: "19:45" },
    { day: 11, dayName: "Zondag", date: "01-03-2026", fajr: "05:56", zuhr: "14:00", asr: "16:30", maghrib: "18:20", isha: "19:45" },
    { day: 12, dayName: "Maandag", date: "02-03-2026", fajr: "05:54", zuhr: "14:00", asr: "16:30", maghrib: "18:21", isha: "19:45" },
    { day: 13, dayName: "Dinsdag", date: "03-03-2026", fajr: "05:52", zuhr: "14:00", asr: "16:30", maghrib: "18:23", isha: "19:45" },
    { day: 14, dayName: "Woensdag", date: "04-03-2026", fajr: "05:49", zuhr: "14:00", asr: "16:30", maghrib: "18:25", isha: "19:45" },
    { day: 15, dayName: "Donderdag", date: "05-03-2026", fajr: "05:47", zuhr: "14:00", asr: "16:30", maghrib: "18:27", isha: "19:45" },
    { day: 16, dayName: "Vrijdag", date: "06-03-2026", fajr: "05:45", zuhr: "14:00", asr: "16:30", maghrib: "18:28", isha: "19:45" },
    { day: 17, dayName: "Zaterdag", date: "07-03-2026", fajr: "05:43", zuhr: "14:00", asr: "16:30", maghrib: "18:30", isha: "20:00" },
    { day: 18, dayName: "Zondag", date: "08-03-2026", fajr: "05:40", zuhr: "14:00", asr: "16:30", maghrib: "18:32", isha: "20:00" },
    { day: 19, dayName: "Maandag", date: "09-03-2026", fajr: "05:38", zuhr: "14:00", asr: "16:30", maghrib: "18:34", isha: "20:00" },
    { day: 20, dayName: "Dinsdag", date: "10-03-2026", fajr: "05:36", zuhr: "14:00", asr: "16:30", maghrib: "18:36", isha: "20:00" },
    { day: 21, dayName: "Woensdag", date: "11-03-2026", fajr: "05:34", zuhr: "14:00", asr: "16:30", maghrib: "18:37", isha: "20:00" },
    { day: 22, dayName: "Donderdag", date: "12-03-2026", fajr: "05:31", zuhr: "14:00", asr: "16:30", maghrib: "18:39", isha: "20:00" },
    { day: 23, dayName: "Vrijdag", date: "13-03-2026", fajr: "05:29", zuhr: "14:00", asr: "16:30", maghrib: "18:41", isha: "20:00" },
    { day: 24, dayName: "Zaterdag", date: "14-03-2026", fajr: "05:27", zuhr: "14:00", asr: "16:30", maghrib: "18:43", isha: "20:00" },
    { day: 25, dayName: "Zondag", date: "15-03-2026", fajr: "05:24", zuhr: "14:00", asr: "16:30", maghrib: "18:44", isha: "20:15" },
    { day: 26, dayName: "Maandag", date: "16-03-2026", fajr: "05:22", zuhr: "14:00", asr: "16:30", maghrib: "18:46", isha: "20:15" },
    { day: 27, dayName: "Dinsdag", date: "17-03-2026", fajr: "05:20", zuhr: "14:00", asr: "16:30", maghrib: "18:48", isha: "20:15" },
    { day: 28, dayName: "Woensdag", date: "18-03-2026", fajr: "05:18", zuhr: "14:00", asr: "16:30", maghrib: "18:50", isha: "20:15" },
    { day: 29, dayName: "Donderdag", date: "19-03-2026", fajr: "05:15", zuhr: "14:00", asr: "16:30", maghrib: "18:51", isha: "20:15" }
];

// Regio correcties in minuten (basis: Amsterdam)
const regionCorrections = {
    'almere': { fajr: -1, maghrib: -1, isha: -1 },
    'amsterdam': { fajr: 0, maghrib: 0, isha: 0 },
    'arnhem': { fajr: -4, maghrib: -4, isha: -4 },
    'den-haag': { fajr: 3, maghrib: 3, isha: 3 },
    'den-helder': { fajr: -1, maghrib: 1, isha: 1 },
    'eindhoven': { fajr: -2, maghrib: -2, isha: -2 },
    'leeuwarden': { fajr: -3, maghrib: -3, isha: -3 },
    'maastricht': { fajr: -3, maghrib: -3, isha: -3 },
    'nunspeet': { fajr: -3, maghrib: -3, isha: -3 },
    'rotterdam': { fajr: 2, maghrib: 2, isha: 2 },
    's-hertogenbosch': { fajr: -1, maghrib: -1, isha: -1 },
    'utrecht': { fajr: 0, maghrib: 0, isha: 0 },
    'vlissingen': { fajr: 6, maghrib: 6, isha: 6 },
    'zoetermeer': { fajr: 2, maghrib: 2, isha: 2 }
};

const prayerNames = {
    fajr: "Fadjr (begin vasten)",
    zuhr: "Zuhr",
    asr: "Asr",
    maghrib: "Maghrib (Iftar)",
    isha: "Isha & Tarawih"
};