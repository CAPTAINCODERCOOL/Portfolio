<script>
    function showPopup() {
        document.getElementById('confirmation-popup').style.display = 'block';
    }

    function closePopup() {
        document.getElementById('confirmation-popup').style.display = 'none';
    }

    // Handle form submission to show popup
    document.querySelector('.recommendation-form form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission
        showPopup(); // Show confirmation popup
    });
</script>
