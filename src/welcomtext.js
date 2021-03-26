const welcome = (number, groupname) => {
    return `Ola @${number}. seja bem-vindo ao grupo ${groupname}`
}
exports.welcome = welcome

const bye = (number) => {
    return `Adeus @${number}. Já vai tarde 👋`
}
exports.bye = bye