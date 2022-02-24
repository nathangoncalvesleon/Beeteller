import './Login.css'
import { useNavigate } from 'react-router-dom'



function Login () {
    const navigate = useNavigate();
    

    return (
        <>
        <div className="container">
        <div className="img">
        </div>

        <div className="login">
            <h1>Olá! Bem vindo de volta.</h1>
            <label>Faça Login com seus dados inseridos  <p>durante o seu registro</p></label>
            <form onSubmit={useNavigate('/main')}>
                
                <div className="smallbox">
                    <label>Email</label>
                    <input type="email" placeholder="Exemplo@email.com"/>
                </div>

                <div className="smallbox">
                    <label>Senha</label>
                    <a href="#">Esqueci a senha</a>
                    <input type="password" placeholder="Enter Password"/>
                </div>

                <div className="smallbox button">
                    <button onClick={() => navigate('/main')}>Login</button>
                </div>

            </form>
        </div>
    </div>
        
        </>
    )
}

export default Login;