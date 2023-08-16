import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'amauri@gmail.com'

    it('Deve exibir um alert com boas vindas', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo(a) amauri@gmail.com!')
    })

    it('Não deve exibir a mensagem de boasv vindas sem o email!', () => {
        login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo(a)!')
    })
})