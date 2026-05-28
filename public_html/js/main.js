const API_URL = "http://islasgeci.org:300/check_traps_ids";

const form = document.getElementById("check-form");
const submitBtn = document.getElementById("submit-btn");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // --- clear previous result ---
    resultDiv.innerHTML = "";

    // --- loading state ---
    submitBtn.setAttribute("aria-busy", "true");
    submitBtn.disabled = true;

    const formData = new FormData(form);

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (response.ok) {
            showSuccess(data.message);
        } else {
            showError(data);
        }
    } catch (err) {
        showNetworkError(err);
    } finally {
        submitBtn.removeAttribute("aria-busy");
        submitBtn.disabled = false;
    }
});

function showSuccess(message) {
    resultDiv.innerHTML = `
    <article style="background: #e9f7ef; border-color: #2ecc71;">
      <p style="font-size: 1.2rem; margin: 0;">${escapeHtml(message)}</p>
    </article>
  `;
}

function showError(data) {
    const detail = JSON.stringify(data, null, 2);
    resultDiv.innerHTML = `
    <article style="background: #fdecea; border-color: #e74c3c;">
      <strong>Ocurrió un error al conectar con el servidor.</strong><br />
      Envía el mensaje de abajo al equipo de Ciencia de Datos.
      <pre style="
        margin-top: 0.75rem;
        padding: 0.75rem;
        background: rgba(0,0,0,0.05);
        border-radius: 6px;
        overflow-x: auto;
        font-size: 0.85rem;
        white-space: pre-wrap;
        word-break: break-word;
      ">${escapeHtml(detail)}</pre>
    </article>
  `;
}

function showNetworkError(err) {
    resultDiv.innerHTML = `
    <article style="background: #fdecea; border-color: #e74c3c;">
      <strong>Ocurrió un error al conectar con el servidor.</strong><br />
      Envía el mensaje de abajo al equipo de Ciencia de Datos.
      <pre style="
        margin-top: 0.75rem;
        padding: 0.75rem;
        background: rgba(0,0,0,0.05);
        border-radius: 6px;
        overflow-x: auto;
        font-size: 0.85rem;
        white-space: pre-wrap;
        word-break: break-word;
      ">${escapeHtml(err.message)}</pre>
    </article>
  `;
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
}
