document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inspectionForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add logic to handle form submission, possibly sending data to a server
        alert('OSHA inspection submitted successfully!');
    });
});
