function contar() {
    let inicioContador = document.getElementById('txti') // recebendo valor digitado pelo usuário via formulário
    let fimContador = document.getElementById('txtf')    // recebendo valor digitado pelo usuário via formulário
    let passoContador = document.getElementById('txtp') // recebendo valor digitado pelo usuário via formulário
    let res = document.getElementById('res') // resultado

    if (inicioContador.value.lenght == 0 || fimContador.value.lenght == 0 || passoContador.value.lenght == 0) { // verificação para que o usuário não deixe os campos em branco
        // window.alert('[ERRO] Faltam os dados ')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicioContador.value)
        let f = Number(fimContador.value)
        let p = Number(passoContador.value)
        if(p <= 0) {
            window.alert('Passo Inválido! CONSIDERANDO PASSO 1 ')
            p = 1
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }

        } else {
            // CONTAGEM DECRESCENTE
            for (let c = i; C >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `${c} \u{1F3C1}`


    }
}
