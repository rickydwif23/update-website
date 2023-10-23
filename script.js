function openWhatsAppChat() {
    var phoneNumber = "087821131736";
    var message = "Halo, saya ingin menghubungi Anda.";

    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

    window.open(whatsappURL);
}
