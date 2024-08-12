import { useState } from "react";

export default function Form({ onLogin, Loading }) {
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
  const Send = () => {
    onLogin(values);

    setValues({
      email: "",
      password: "",
    });
  };
  return (
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
          disabled={Loading}
          className={`w-2/3 h-11 text-white rounded-lg p-2 ${
            Loading ? "bg-neutral-900 cursor-wait" : "  bg-black "
          }`}
        >
          {Loading ? "Carregando" : "Entrar"}
        </button>
        <div className="text-xs  select-none ">
          Ainda não é membro?
          <span className="text-blue-700 cursor-pointer"> Cadastre-se.</span>
        </div>
      </div>
    </div>
  );
}
