
document.addEventListener('DOMContentLoaded', () => { 
    if (document.getElementById('bookingForm')) {
      document.getElementById('bookingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('message').textContent = 'Appointment booked successfully!';
      });
    }
    if (document.getElementById('availabilityForm')) {
      document.getElementById('availabilityForm').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('teacherMessage').textContent = 'Availability set!';
      });
    }
    if (document.getElementById('adminForm')) {
      document.getElementById('adminForm').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('adminMessage').textContent = 'Teacher added successfully!';
      });
    }
  });
  