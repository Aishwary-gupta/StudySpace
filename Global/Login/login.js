// Initialize Google Sign-In (make sure to replace YOUR_GOOGLE_CLIENT_ID with actual client id)
function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
}

// Render Google Sign-In button when page loads
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.querySelector(".g_id_signin"),
        { theme: "outline", size: "large" }  // customization of the Google button
    );

    google.accounts.id.prompt();  // Show prompt for one-tap sign-in
};
