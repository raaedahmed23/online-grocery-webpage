function updateDateTime() {
    const currentDateTimeElement = document.getElementById("currentDateTime");

    if (currentDateTimeElement) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

        currentDateTimeElement.textContent = now.toLocaleString(undefined, options);
    }
    setTimeout("updateDateTime()", 1000);
}
updateDateTime();