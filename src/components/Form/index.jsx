import { useState } from "react";
import api from "../../services/index.jsx";
import Modal from "@/components/Modal/index.jsx";
import * as I from "lucide-react";

export default function Form() {

  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const InputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const Login = async (values) => {
    setLoading(true)
    console.log(values);

    try {
      const res = await api.post("/login", values);
      setUser(res.data);
      setError(false);
    } catch (error) {
      setError(true);
      
    }finally{
      setModal(true)
      setLoading(false)
    }
  };
  const Send = () => {
    Login(values);
       setValues({
      email: "",
      password: "",
    });
  };
  function upperFirstLetter(string) {
    if (!string) return 'Usuario'; 
    return  string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="flex flex-col items-center justify-center  sm:max-md:gap-6 md:max-lg:gap-8 gap-12 max-lg:w-full max-w-96 w-2/5 h-screen">
      <div className="flex flex-col gap-1  w-2/3  items-start  justify-center   ">
        <span className="text-3xl font-bold select-none ">
          {" "}
          Bem-vindo de volta
        </span>
        <span className="text-base font-normal select-none">
          {" "}
          Faça login para continuar
        </span>
      </div>

      <div className="flex flex-col w-full gap-3 items-center justify-center">
        <form  className="flex flex-col gap-12 items-center  w-full">
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            placeholder="Email"
            autoComplete="current-email"
            onChange={InputChange}
            className="outline-none text-sm border-b w-2/3  border-gray-400 focus:border-gray-600 transition-all duration-100 ease-linear p-2"
          />
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            placeholder="Senha"
            autoComplete="current-password"
            onChange={InputChange}
            className="outline-none text-sm border-b w-2/3 border-gray-400 focus:border-gray-600 transition-all duration-100 ease-linear p-2"
          />
        </form>
        <span className="text-blue-700 text-xs  w-2/3 cursor-pointer">
          Esqueceu?
        </span>
      </div>

      <div className=" flex flex-col items-center justify-center w-full  mt-10 gap-5 ">
        <button
          onClick={Send}
          disabled={loading}
          className={`w-2/3 h-11 text-white rounded-lg p-2 ${
            loading ? "bg-neutral-900 cursor-wait" : "  bg-black "
          }`}
        >
          {loading ? "Carregando" : "Entrar"}
        </button>
        <div className="text-xs  select-none ">
          Ainda não é membro?
          <span className="text-blue-700 cursor-pointer"> Cadastre-se.</span>
        </div>
      </div>
      <Modal 
        isOpen={modal} 
        type={error}
        onclickConfirm={() => (setModal(false))}
        infoTexte={(error ? "Credenciais Invalidas" : `Login efetuado com sucesso`)} 
        AltText={(error ? "Suas credenciais são inválidas. Por favor, insira credenciais válidas." : <>Bem-vindo de volta, <span className="font-semibold">{upperFirstLetter(user.name)}</span>! Você pode acessar todos os nossos recursos.</>)}
        Icon={(error ? <I.XCircle color="rgb(220 38 38)" size={60}/> : <I.Check color="rgb(101 163 13)" size={60}/>)} 
      />
    </div>
  );
}
