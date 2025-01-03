import { useState } from "react"
import { Chefs } from "../../Restaurant/Data/Chefs"
import { Mesas } from "../../Restaurant/Data/Mesas"
import { useNavigate } from "react-router-dom"
export const Validacion = () => {
    
    const navigate = useNavigate();
        const [Codigo, setCodigo] = useState('')
        const [Error, setError] = useState('')
        const Onlogin = (e) => {
            e.preventDefault();
            const esChef = Chefs.some(chef => chef.code === Codigo); 
            const esMesa = Mesas.some(mesa => mesa.codigo === Codigo);
            if(esChef){
                navigate('/ChefMenu')
                setError('');
            }
            else if(esMesa){
                navigate('/ClienteMenu')
                setError('');
            }
            else{
                setError('Codigo invalido')
            }
        }
        

    return {
        Onlogin,
        Codigo,
        setCodigo,
        Error,
        setError
    }
}
