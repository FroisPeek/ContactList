"use client";

import FormLogin from "@/components/FormLogin";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import fundo from "../img/fundoPW.svg";

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
        <Card className="w-[60%] min-w-[40rem] max-w-[60rem] mx-auto relative">
          <CardHeader className="flex flex-col items-center">
            <CardDescription className="text-2xl font-bold antialiased">
              Contact List 2.0{" "}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Separator className="mb-8" />
            <FormLogin />
          </CardContent>
          <CardFooter>
            <p className="text-slate-400 font-light italic text-sm">
              Trabalho feito por: Eduardo Frois e Fernando Medeiros
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
