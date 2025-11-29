/* document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("logButton");
  const nameGuardado = localStorage.getItem("name");
  const lastnameGuardado = localStorage.getItem("lastname");
  const mailGuardado = localStorage.getItem("mail");
  const passwordGuardada = localStorage.getItem("password");

  if (nameGuardado && lastnameGuardado && mailGuardado && passwordGuardada) {
    window.location.href = "index.html";
    return;
  }

  loginButton.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const emailInput = document.getElementById("mail");
    const email = emailInput.value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "" || name === "" || lastname === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (!emailInput.checkValidity()) {
      alert("Ingrese un correo electrónico válido.");
      return;
    }

    localStorage.setItem("lastname", lastname);
    localStorage.setItem("name", name);
    localStorage.setItem("mail", email);
    localStorage.setItem("password", password);

    window.location.href = "index.html";
  });
}); */


document.addEventListener("DOMContentLoaded", () => {

  const loginButton = document.getElementById("logButton");
  const token = localStorage.getItem("token");

  if (token) {
    window.location.href = "index.html";
    return;
  }

  loginButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const emailInput = document.getElementById("mail");
    const email = emailInput.value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !lastname || !email || !password) {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (!emailInput.checkValidity()) {
      alert("Ingrese un correo electrónico válido.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mail: email, password })

      });

      const data = await response.json();

      if (!response.ok) {
        alert("Correo y/o contraseña incorrecto/s.");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("name", name);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("mail", email);

      window.location.href = "index.html";
    } catch (error) {
      console.error("Error al conectar con el backend: ", error);
    }

  });

});



