window.isModalVisible = false;

document.addEventListener("DOMContentLoaded", async () => {
  const modalTrigger = document.getElementById("modalBtn");
  const modalElement = new bootstrap.Modal(document.getElementById("infoModal"));
  const modalBody = document.getElementById("modalBody");

  if (modalTrigger) {
    try {
      // Markdown-Datei laden
      const response = await fetch("./src/modal.md");
      const markdownText = await response.text();

      // Markdown parsen und im modal anzeigen
      modalBody.innerHTML = marked.parse(markdownText);
      
      // Event-Listener für den Button
      modalTrigger.addEventListener("click", () => {
        //Toogle die modal-Sichtbarkeit
      if(window.isModalVisible) {
        modal.hide();
        window.isModalVisible = false;
        loop();
      } else {
        modal.show()
        window.isModalVisible = true;
        noLoop();
      }
      });

      // modal wird geschlossen → Animation fortsetzen
      document.getElementById("infoModal").addEventListener("hidden.bs.modal", () => {
        window.isModalVisible = false;
        loop();
      });

    } catch (error) {
      console.error("Fehler beim Laden der Markdown-Datei:", error);
    }
  }
});