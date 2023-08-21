const conta = {
    email: 'amauri@gmail.com',
    passwoord: '123456',
    name: 'Amauri',
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})