"use client";
import SkelletonImage from "@/components/HomeImage/skelleton.jsx";
import { Suspense} from "react";
import dynamic from "next/dynamic.js";
import Form from "@/components/Form/index.jsx";

export default function Home() {
  const Homeimage = dynamic(() => import("@/components/HomeImage"), {
    ssr: false,
    loading: () => <SkelletonImage />,
  });

  return (
    <main className="flex min-h-screen flex-row items-center  justify-around max-lg:justify-center ">
      <Form />
      <Suspense>
        <Homeimage />
      </Suspense>
    </main>
  );
}
