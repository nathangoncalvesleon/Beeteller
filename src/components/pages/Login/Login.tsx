import { useNavigate } from "react-router-dom"
import { userAuth } from "../../AuthProvider/userAuth"
import Main from "../Main/Main"

const auth = userAuth()

const navigate = useNavigate();

    async function onFinish(values: {email:string, password: string})
    {
        try{
            await auth.authenticate(values.email, values.password)
            navigate('/main');

        }
    
    catch(error){
        alert("Senha errada!")
    }
}