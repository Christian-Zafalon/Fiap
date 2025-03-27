document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('grupoForm');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const nomeInputs = document.querySelectorAll('.nome-input');
        const historia = document.getElementById('historia').value;
        
        const names = [];
        
        nomeInputs.forEach(input => {
            if (input.value.trim() !== '') {
                names.push(input.value.trim());
            }
        });
        
        const data = {
            names: names,
            message: historia
        };
        
        try {
            const response = await fetch('https://fsdt-contact.onrender.com/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                limparFormulario();
                alert('Formulário enviado com sucesso!');
            } else {
                alert('Erro ao enviar o formulário. Por favor, tente novamente.');
            }
        } catch (error) {
            alert('Erro ao enviar o formulário. Por favor, tente novamente.');
        }
    });
    
    function limparFormulario() {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.value = '';
        });
    }
});
