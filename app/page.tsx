"use client";

import ContainerMain from "@/components/ContainerMain";
import Image from "next/image";
import fundo from "../img/fundo.jpg";

export default function Home() {

  return (
    <div className="relative w-full h-screen">
      <Image
        src={fundo}
        layout="fill"
        objectFit="cover"
        alt="Fundo"
        placeholder="empty"
      />
      <div className="relative z-5 flex items-center justify-center w-full h-full">
        <ContainerMain />
      </div>
    </div>
  );
}
