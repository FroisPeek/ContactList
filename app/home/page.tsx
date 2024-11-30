"use client";

import ContainerMain from "@/components/ContainerMain";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative w-full h-screen">
      <div className="relative z-5 flex items-center justify-center w-full h-full">
        <ContainerMain />
      </div>
      <div className="relative p-4">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button
              className="fixed bottom-4 right-4 bg-white text-gray-900 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-slate-300 transition duration-300 ease-in-out"
              onClick={() => setIsOpen(true)}
            >
              <UserPlus />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Usuário</DialogTitle>
              <DialogDescription>
                Preencha as informações do usuário.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Digite o nome"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition"
              >
                Salvar
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
