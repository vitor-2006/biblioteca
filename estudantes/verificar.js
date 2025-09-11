function verificarNome(nome) {
    if(nome.length === 0 || !isNaN(nome)){
        return false
    }
    return true
}

function verificarMatricula(matricula) {
    if(matricula.length === 0 || isNaN(matricula)){
        return false
    }
    return true
}

function verificarCurso(curso) {
    if(curso.length === 0 || !isNaN(curso)){
        return false
    }
    return true
}

function verificarAno(ano) {
    if(ano.length === 0 || isNaN(ano)){
        return false
    }
    return true
}

export { verificarAno, verificarNome, verificarCurso, verificarMatricula }