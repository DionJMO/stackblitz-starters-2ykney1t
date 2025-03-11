window.isToastVisible = false;

document.addEventListener("DOMContentLoaded", async () => {
  const toastTrigger = document.getElementById("toastBtn");
  const toastElement = document.getElementById("toastContainer");
  const toastBody = document.getElementById("toastBody");

  if (toastTrigger) {
    try {
      // Markdown-Datei laden
      const response = await fetch("./src/toast.md");
      const markdownText = await response.text();

      // Markdown parsen und im Toast anzeigen
      toastBody.innerHTML = marked.parse(markdownText);
      const toast = new bootstrap.Toast(toastElement, { autohide: false });
      // Event-Listener für den Button
      toastTrigger.addEventListener("click", () => {
        //Toogle die Toast-Sichtbarkeit
      if(window.isToastVisible) {
        toast.hide();
        window.isToastVisible = false;
        loop();
      } else {
        toast.show()
        window.isToastVisible = true;
        noLoop();
      }
      });

      // Toast wird geschlossen → Animation fortsetzen
      toastElement.addEventListener("hidden.bs.toast", () => {
        window.isToastVisible = false;
        loop();
      });

    } catch (error) {
      console.error("Fehler beim Laden der Markdown-Datei:", error);
    }
  }
});