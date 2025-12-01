let BannerDiv = document.getElementById("Banner");
  for (let i = 0; i < 27; i++) {
    let text = document.createElement("h6");
    if (i % 2 == 0) {
      text.innerText = "+++";
    }
    else {
      text.innerText = "Let’s talk";
    }
    BannerDiv.appendChild(text);
  }

  const modal = document.getElementById("contact-modal");
  const closeBtn = document.getElementById("close-modal");

  function openModal() {
    modal.classList.add("show");
  }

  closeBtn.onclick = () => modal.classList.remove("show");

  window.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("show");
  };