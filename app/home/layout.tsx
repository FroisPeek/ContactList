import Image from "next/image";
import React from "react";
import fundo from "../../img/fundoPW.svg";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full bg-transparent overflow-hidden">
      <Image
        src={fundo}
        alt="Background do site SEDUR (imagem abstrata)"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="h-full w-full flex z-10 justify-center">
        <main className="bg-transparent flex-1 flex justify-center">
          {children}
        </main>
      </div>
    </div>
  );
}
