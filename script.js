document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".input-group").forEach((el, i) => {
      el.style.setProperty('--i', i);
    });
  
    const form = document.getElementById("groupForm");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const names = Array.from(form.querySelectorAll("input[name='name']")).map(input => input.value.trim()).filter(Boolean);
      const message = form.querySelector("textarea[name='message']").value.trim();
  
      if (names.length === 0 || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
  
      const payload = { names, message };
  
      try {
        const res = await fetch("https://fsdt-contact.onrender.com/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
  
        if (!res.ok) throw new Error("Erro ao enviar dados");
  
        alert("Enviado com sucesso!");
        form.reset();
      } catch (err) {
        alert("Falha ao enviar. Tente novamente.");
      }
    });
  });
  
