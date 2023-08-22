import { login } from "./login"

// const mockSetIsLoggedIn = jest.fn()
// const mockNavigate = jest.fn()

// jest.mock('react', () =>({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setisLoggedIn: mockSetIsLoggedIn
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }))

describe('login', () => {

    const mockEmail = 'amauri@gmail.com'

    it('Deve exibir um alert com boas vindas caso o email seja valido', async() => {
        const response = await login(mockEmail)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async()=>{
        const response = await login('email@invalido.com')
        expect(response).toBeFalsy()
    })
})