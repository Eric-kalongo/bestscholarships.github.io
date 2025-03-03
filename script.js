function redirectToScholarship() {
    const selector = document.getElementById("scholarshipSelector");
    const selectedUrl = selector.value;

    if (selectedUrl) {
        window.location.href = selectedUrl;
    } else {
        alert("Please select an organization from the list.");
    }
}