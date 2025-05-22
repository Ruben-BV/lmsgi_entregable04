document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const datos = {
        contact_person: document.getElementById("contact-person").value,
        form_of_address: document.querySelector('input[name="form-of-address"]:checked')?.value || "",
        age: document.getElementById("age").value,
        ocupation: document.getElementById("ocupation").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
        
    };

    document.getElementById("form-container").style.display = "none";
    document.getElementById("confirmation-container").style.display = "block";

    const resume = document.getElementById("form-resume");
    resume.innerHTML = `
    <dl>
        <dt>- Persona de contacto:</dt><dd>${datos.form_of_address} ${datos.contact_person}</dd>
        <dt>- Edad:</dt><dd>${datos.age}</dd>
        <dt>- Ocupación:</dt><dd>${datos.ocupation}</dd>
        <dt>- Ocupación:</dt><dd>${datos.email}</dd>
        <dt>- Ocupación:</dt><dd>${datos.subject}</dd>
        <dt>- Ocupación:</dt><dd>${datos.message}</dd>

    </dl>
    `;
});