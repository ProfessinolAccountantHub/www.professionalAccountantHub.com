// بٹن دبانے پر میسج شو ہوگا
function showMessage() {
    alert("یہ میری ویب سائٹ ہے، جہاں میں ڈیٹا انٹری سکھاتا ہوں!");
}

// فارم کو ای میل پر بھیجنے کا فنکشن
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // فارم کو ریفریش ہونے سے بچانا
        
        // فارم سے ڈیٹا لینا
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // ای میل بھیجنے کے لیے لنک بنانا
        let mailtoLink = `mailto:your-email@example.com?subject=رابطہ فارم&body=نام: ${name}%0Aای میل: ${email}%0Aپیغام: ${message}`;

        // ای میل کلائنٹ اوپن کرنا
        window.location.href = mailtoLink;
    });
});
