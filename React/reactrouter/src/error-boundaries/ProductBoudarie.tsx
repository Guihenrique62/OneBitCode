import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ProductBoundarie(){
    const error = useRouteError()

    if(isRouteErrorResponse(error)){
        switch (error.status) {
            case 404: 
                return <h2>Oops.. Produto não encontrado</h2>
            case 401:
                return <h2>Você não tem permissão para isto</h2>
            case 400: 
                return <h2>Parece que algo deu errado</h2>
            case 500:
                return <h2>Erro interno</h2>
        }
    }

    return <h2>erro não esperado</h2>
}