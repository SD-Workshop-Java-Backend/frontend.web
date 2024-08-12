"use client";
import SkelletonImage from "@/components/HomeImage/skelleton.jsx";
import { Suspense, useState } from "react";
import dynamic from "next/dynamic.js";
import api from "../services/index.jsx";
import Modal from "@/components/Modal/index.jsx";
import Form from "@/components/Form/index.jsx";
import * as I from "lucide-react";


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
    // console.log(values);

    try {
      const res = await api.post("/login", values);
      setUser(res.data);
      // console.log("foi");
      
    } catch (error) {
      // console.log("não");
      setError(true);
      
    }finally{
      setModal(true)
      setLoading(false)
    }
  };


  return (
    <main className="flex min-h-screen flex-row items-center justify-between ">
     <Form Loading={loading} onLogin={Login}   />
      <Suspense >
        <Homeimage />
      </Suspense>
      <Modal 
        isOpen={modal} 
        type={error}
        onclickConfirm={() => (setModal(!modal) )}
        infoTexte={(error ? "Credenciais Invalidas" : `${user.name}`)} 
        AltText={(error ? "Suas credenciais são inválidas. Por favor, insira credenciais válidas." : "Login efetuado com sucesso")}
        Icon={(error ? <I.XCircle color="rgb(220 38 38)" size={60}/> : <I.Check color="rgb(101 163 13)" size={60}/>)} 
      />
    </main>
  );
}
