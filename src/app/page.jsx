"use client";
import SkelletonImage from "@/components/HomeImage/skelleton.jsx";
import { Suspense, useState } from "react";
import dynamic from "next/dynamic.js";
import api from "../services/index.jsx";
import Modal from "@/components/Modal/index.jsx";
import * as I from "lucide-react";

const LoginForm = ({onLogin, Loading})=>{
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const InputChange = (e)=> {
    const {name, value} = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name] : value,
    }))

  }
  return(
    <div className="flex flex-col items-center justify-center  sm:max-md:gap-6 md:max-lg:gap-8 gap-12 max-md:w-full w-2/5 h-screen">
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
      <form className="flex flex-col gap-12 items-center  w-full">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="current-email"
          onChange={InputChange}
          className="outline-none text-sm border-b w-2/3  border-gray-400 focus:border-gray-600 transition-all duration-100 ease-linear p-2"
        />
        <input
          id="password"
          name="password"
          type="password"
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
        onClick={() => onLogin(values)}
        disabled={Loading}
        className={`w-2/3 h-11 text-white rounded-lg p-2 ${Loading ? 'bg-neutral-900 cursor-wait' : '  bg-black '}`}
      >
        {Loading ? 'Carregando' : 'Entrar'}
      </button>
      <div className="text-xs  select-none ">
        Ainda não é membro?
        <span className="text-blue-700 cursor-pointer"> Cadastre-se.</span>
      </div>
    </div>
  </div>

  )
}


export default function Home() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const Homeimage = dynamic(() => import("@/components/HomeImage"),{
    ssr: false,
    loading : () => <SkelletonImage/>,
  })


  const Login = async (values) => {
    setLoading(true)
    console.log("foi",values);

    try {
      const res = await api.post("/login", values);
      setUser(res.data);
      console.log(res.data.name);
    } catch (error) {
      setError(true);
    }finally{
      setModal(true)
      setLoading(false)
    }
  };
  function upperFirstLetter(string) {
    if (!string) return ''; 
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <main className="flex min-h-screen flex-row items-center justify-between ">
     <LoginForm Loading={loading} onLogin={Login} />
      <Suspense >
        <Homeimage />
      </Suspense>
  <Modal 
  isOpen={modal} 
  type={error}
  onclickConfirm={() => setModal(!modal)}
  infoTexte={(error ? "Credenciais Invalidas" : `Bem-vindo ${upperFirstLetter(user.name)}`)} 
  AltText={(error ? "Suas credenciais são inválidas. Por favor, insira credenciais válidas." : "Login efetuado com sucesso")}
  Icon={(error ? <I.XCircle color="rgb(220 38 38)" size={60}/> : <I.Check color="rgb(101 163 13)" size={60}/>)} />
    </main>
  );
}
