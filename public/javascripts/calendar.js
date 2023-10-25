document.addEventListener("DOMContentLoaded", function () {
  let calendarEl = document.getElementById("calendar");
  let calendar = new FullCalendar.Calendar(calendarEl, {
    customButtons: {
      addEventButton: {
        text: "add event",
        click: function () {
          console.log("Add Event button clicked!");
        },
      },
    },
    headerToolbar: {
      left: "prev,next today addEventButton",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    initialView: "dayGridMonth",
    editable: true,
    events: [
      {
        title: "Basketball Competition",
        description: "Versus the Lakers",
        start: "2023-10-24T16:00:00",
        end: "2023-10-24T18:00:00",
      },
      {
        title: "Halloween Preparation",
        description: "Party preparation for Halloween",
        start: "2023-10-28",
        end: "2023-10-30",
      },
      {
        title: "Report Submission",
        description: "Report submission for algorithms",
        start: "2023-10-11T23:00:00",
      },
      {
        title: "Coffee with John",
        start: "2023-11-12T10:30:00",
      },
      {
        title: "Lunch with family",
        start: "2023-11-17T13:00:00",
      },
    ],
    // customize event style
    eventTextColor: "white",
    eventBackgroundColor: "#d6711e",
    eventBorderColor: "#d6711e",
    handleWindowResize: true,
  });
  calendar.render();
  console.log("calendar.js loaded");
});
