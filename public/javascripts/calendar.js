document.addEventListener("DOMContentLoaded", function () {
  let calendarEl = document.getElementById("calendar");
  let calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    initialView: "dayGridMonth",
    editable: true,
    events: [
      {
        eventId: 1,
        title: "Basketball Competition",
        description: "Versus the Lakers",
        start: "2023-10-24T16:00:00",
        end: "2023-10-24T18:00:00",
      },
    ],
  });
  calendar.render();
  console.log("calendar.js loaded");
});
