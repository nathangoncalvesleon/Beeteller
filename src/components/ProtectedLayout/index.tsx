import { userAuth} from '../AuthProvider/userAuth'
export const ProtectedLayout = ({children} : { children: JSX.Element})=>
{
const auth = userAuth();

if(!auth.email){
    return <h1>Sem acesso</h1>
}}