import { Validacion } from "../Hooks/Validacion";

export const Entrada = () => {
    const { Onlogin, Codigo, setCodigo, Error } = Validacion();

    return (
        <div className="bg-[url('/assets/p22.jpeg')] bg-cover bg-center h-screen w-full flex justify-center items-center">
            <div className="bg-white p-10 rounded-lg max-w-96 h-auto border-2 border-black shadow-xl">
                <div>
                    <h1 className="text-black text-xl text-center">
                    Ingrese el código de la mesa
                    </h1>

                </div>
                <div>
                <form action="" className="space-y-4">
                    <div className="pt-2">
                        <input
                        type="text"
                        placeholder="Ingrese código"
                        value={Codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        className="w-full p-2 rounded border "
                        />

                    </div>
                    <div className="flex justify-center">
                        <button
                        onClick={Onlogin}
                        className=" p-2 bg-black text-white rounded hover:bg-slate-800 "
                        >
                        Entrar
                        </button>

                    </div>
                </form>
                {Error ? <p className="text-red-500 text-center">{Error}</p> : null}
                </div>
            </div>
        </div>
    );
};
