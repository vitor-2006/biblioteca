function verificarTitle(title) {
    if(title.length === 0) {
        return false
    }
    return true
}

function verificarAuthor(author) {
    if(author.length === 0 || !isNaN(author)){
        return false
    }
    return true
}

function verificarYear(year) {
    if(year.length === 0 || isNaN(year)){
        return false
    }
    return true
}

function verificarGenre(genre) {
    if(genre.length === 0 || !isNaN(genre)){
        return false
    }
    return true
}

export { verificarAuthor, verificarGenre, verificarTitle, verificarYear }