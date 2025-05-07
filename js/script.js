const form = document.getElementById("myForm");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        nombre: form.nombre.value,
        email: form.email.value
    };

    const response = await fetch('http://localhost:3000/enviar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log(data);
});