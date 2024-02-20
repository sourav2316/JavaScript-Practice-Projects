const qrFormEl = document.getElementById("qrForm");
const qrImageEl = document.getElementById("qrImage");
const qrContainerEl = document.getElementById("qrContainer");
const qrInputTextEl = document.getElementById("qrInputText");
const btnEl = document.getElementById("btn");

// Render QR //

const renderQrCode = (url) => {
    if (!url) return;
    btnEl.innerText = "Generating QR Code....";
    qrImageEl.src = url;

    // Interval Set //

    const onImageLoad = () => {
        const interval  = setInterval (() => {
            qrContainerEl.classList.add("show");
            clearInterval(interval);
            btnEl.innerText = "Generate QR Code";
        }, 500);
    };

    // Event listner for loading //

    qrImageEl.addEventListener("load", onImageLoad );
};

 // Event listner for form submit //
qrFormEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData (qrFormEl);
    const text = formData.get("qrText");
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

    renderQrCode(qrCodeUrl);
});

// Event listner for form Input //
qrInputTextEl.addEventListener("keyup", () => {
    event.preventDefault();

    if(!qrInputTextEl.value.trim()){
        qrContainerEl.classList.remove("show");
        return;
    }
});