import { Validacion } from "../Hooks/Validacion";

export const Entrada = () => {
    const { Onlogin, Codigo, setCodigo, Error } = Validacion();

    return (
        <>
            <div>
                <h1>Ingrese el codigo de la mesa</h1>
                <form action="">
                    <input
                        type="text"
                        placeholder="Ingrese codigo"
                        value={Codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                    />
                    <button onClick={Onlogin}>Entrar</button>
                </form>
                {Error ? <p>{Error}</p> : null}
            </div>
        </>
    );
};
