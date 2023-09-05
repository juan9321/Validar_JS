function validaCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11) return false;

    if (/^(\d)\1+$/.test(cpf)) return false;
  
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito === 10 || primeiroDigito === 11) {
      primeiroDigito = 0;
    }
  
    if (parseInt(cpf.charAt(9)) !== primeiroDigito) return false;
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let segundoDigito = 11 - (soma % 11);
    if (segundoDigito === 10 || segundoDigito === 11) {
      segundoDigito = 0;
    }
  
    if (parseInt(cpf.charAt(10)) !== segundoDigito) return false;
  
    return true;
  }
  
  

function validarCEP(cep) {
    cep = cep.replace(/\D/g, ''); 

    if (cep.length !== 8 || !/^\d{8}$/.test(cep)) {
        return false;
    }

    return true;
}

function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var endereco = document.getElementById("endereco").value;
    var bairro = document.getElementById("bairro").value;
    var cep = document.getElementById("cep").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;
    var telefoneFixo = document.getElementById("telefoneFixo").value;
    var celular = document.getElementById("celular").value;
    var rg = document.getElementById("rg").value;
    var cpf = document.getElementById("cpf").value;

    if (nome.length < 3 || nome.length > 100) {
        alert("O campo Nome deve ter entre 3 e 100 caracteres.");
        return false;
    }

    if (endereco.length < 5 || endereco.length > 50) {
        alert("O campo Endereco deve ter entre 5 e 50 caracteres.");
        return false;
    }

    if (bairro.length < 3 || bairro.length > 50) {
        alert("O campo Bairro deve ter entre 3 e 30 caracteres.");
        return false;
    }

    if (cep === "") {
        alert("Por favor, preencha o campo CEP.");
        return false;
    }

    if (!validarCEP(cep)) {
        alert("CEP invalido. Por favor, digite um CEP valido.");
        return false;
    }

    if (cidade.length < 3 || cidade.length > 100) {
        alert("O campo Cidade deve ter entre 3 e 100 caracteres.");
        return false;
    }

    if (estado.length !== 2) {
        alert("O campo Estado deve ter apenas 2 caracteres.");
        return false;
    }

    if (telefoneFixo.length < 8 && celular.length < 8) {
        alert("Preencha pelo menos um campo de telefone (Fixo ou Celular) com no mínimo 8 digitos.");
        return false;
    }

    if (rg.length < 5 || rg.length > 15) {
        alert("O campo RG deve ter entre 8 e 15 caracteres.");
        return false;
    }

    if (cpf.length !== 11) {
        alert("O CPF deve ter exatamente 11 caracteres.");
        return false;
    }

    if (!validarCPF(cpf)) {
        alert("CPF invalido. Por favor, digite um CPF valido.");
        return false;
    }
    return true;
}


