// import Imge from "../assets/woman.jpg";
// import HomeImage from "@/components/images/HomeImage";
"use server";
import HomeImage from "@/components/HomeImage";
import SkelletonImage from "@/components/skelleton/Image";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between ">
      <div className="flex flex-col items-center justify-center  sm:max-md:gap-6 md:max-lg:gap-8 gap-12 max-md:w-full w-2/5 h-screen">
        <div className="flex flex-col gap-1  w-2/3  items-start mt-10 sm:mt-12  md:mt-16  ">
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
          <div className="flex flex-col gap-12 items-center  w-full">
            <input
              type="email"
              placeholder="Email"
              className="outline-none text-sm border-b w-2/3  border-gray-400 focus:border-gray-600 transition-all duration-100 ease-linear p-2"
            />
            <input
              type="password"
              placeholder="Senha"
              className="outline-none text-sm border-b w-2/3 border-gray-400 focus:border-gray-600 transition-all duration-100 ease-linear p-2"
            />
          </div>
          <span className="text-blue-700 text-xs  w-2/3 cursor-pointer">
            Esqueceu?
          </span>
        </div>

        <div className=" flex flex-col items-center justify-center w-full  mt-10 gap-5 lg:mb-16">
          <button className="w-2/3 h-11 text-white rounded-lg bg-black  p-2">
            Entrar
          </button>
          <div className="text-xs  select-none ">
            Ainda não é membro?
            <span className="text-blue-700 cursor-pointer"> Cadastre-se.</span>
          </div>
        </div>
      </div>
      <Suspense fallback={<SkelletonImage/>}>
        <HomeImage />
      </Suspense>
    </main>
  );
}
