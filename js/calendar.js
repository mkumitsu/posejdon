$(document).ready(function() {
    var calendar = $('#calendar1').fullCalendar({
        locale: 'pl',
        editable: true,
        header: {
            left: 'prev,next',
            center: 'title',
            right: ''
        },
        events: 'vendor/fullcalendar/l1.php',
        selectable: true,
        selectHelper: false,
        select: function(start, end, allDay) {
            var title = prompt("Enter Event Title");
            if (title) {
                var start = $.fullCalendar.formatDate(start, "Y-MM-DD HH:mm:ss");
                var end = $.fullCalendar.formatDate(end, "Y-MM-DD HH:mm:ss");
                $.ajax({
                    url: "vendor/fullcalendar/i1.php",
                    type: "POST",
                    data: {
                        title: title,
                        start: start,
                        end: end,
						
                    },
                    success: function() {
                        calendar.fullCalendar('refetchEvents');
                        alert("Dodano rezerwację");
                    }
                })
            }
        },
        editable: true,
        eventResize: function(event) {
            var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
            var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
            var title = event.title;
            var id = event.id;
			var background = event.background;
            $.ajax({
                url: "vendor/fullcalendar/u1.php",
                type: "POST",
                data: {
                    title: title,
                    start: start,
                    end: end,
                    id: id
                },
                success: function() {
                    calendar.fullCalendar('refetchEvents');
                    alert('Event Update');
                }
            })
        },

        eventDrop: function(event) {
            var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
            var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
            var title = event.title;
            var id = event.id;
            $.ajax({
                url: "vendor/fullcalendar/u1.php",
                type: "POST",
                data: {
                    title: title,
                    start: start,
                    end: end,
                    id: id
                },
                success: function() {
                    calendar.fullCalendar('refetchEvents');
                    alert("Zaktualizowano rezerwację");
                }
            });
        },

        eventClick: function(event) {
            if (confirm("Na pewno usunąć?")) {
                var id = event.id;
                $.ajax({
                    url: "vendor/fullcalendar/delete.php",
                    type: "POST",
                    data: {
                        id: id
                    },
                    success: function() {
                        calendar.fullCalendar('refetchEvents');
                        alert("Usunięto rezerwację");
                    }
                })
            }
        },
    });
});

$(document).ready(function() {
    var calendar2 = $('#calendar2').fullCalendar({
        locale: 'pl',
        editable: true,
        header: {
            left: 'prev,next',
            center: 'title',
            right: ''
        },
        events: 'vendor/fullcalendar/l2.php',
        selectable: true,
        selectHelper: false,
        select: function(start, end, allDay) {
            var title = prompt("Enter Event Title");
            if (title) {
                var start = $.fullCalendar.formatDate(start, "Y-MM-DD HH:mm:ss");
                var end = $.fullCalendar.formatDate(end, "Y-MM-DD HH:mm:ss");
				var background = $(event).css("background", "red");
                $.ajax({
                    url: "vendor/fullcalendar/i2.php",
                    type: "POST",
                    data: {
                        title: title,
                        start: start,
                        end: end,
						
                    },
                    success: function() {
                        calendar2.fullCalendar('refetchEvents');
                        alert("Dodano rezerwację");
                    }
                })
            }
        },
        editable: true,
        eventResize: function(event) {
            var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
            var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
            var title = event.title;
            var id = event.id;
            $.ajax({
                url: "vendor/fullcalendar/u2.php",
                type: "POST",
                data: {
                    title: title,
                    start: start,
                    end: end,
                    id: id
                },
                success: function() {
                    calendar2.fullCalendar('refetchEvents');
                    alert('Event Update');
                }
            })
        },

        eventDrop: function(event) {
            var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
            var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
            var title = event.title;
            var id = event.id;
            $.ajax({
                url: "vendor/fullcalendar/u2.php",
                type: "POST",
                data: {
                    title: title,
                    start: start,
                    end: end,
                    id: id
                },
                success: function() {
                    calendar2.fullCalendar('refetchEvents');
                    alert("Zaktualizowano rezerwację");
                }
            });
        },

        eventClick: function(event) {
            if (confirm("Na pewno usunąć?")) {
                var id = event.id;
                $.ajax({
                    url: "vendor/fullcalendar/d2.php",
                    type: "POST",
                    data: {
                        id: id
                    },
                    success: function() {
                        calendar2.fullCalendar('refetchEvents');
                        alert("Usunięto rezerwację");
                    }
                })
            }
        },
    });
});