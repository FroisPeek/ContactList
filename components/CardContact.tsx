import useMutateDeleteContato from "@/hooks/useMutateDeleteContato";
import { useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

interface iProps {
  codigo: number;
  contatos: {
    nome: string;
    sobrenome: string;
    numero: string;
    link: string;
    email: string;
  };
}

export default function CardContact({ codigo, contatos }: iProps) {
  const query = useQueryClient();

  const { mutateAsync } = useMutateDeleteContato();

  async function onDelete(codigo: number) {
    await mutateAsync(codigo);
    query.invalidateQueries({
      queryKey: ["search"],
      exact: false,
    });
  }

  return (
    <div className="w-full">
      <Card className="w-full h-16 text-black border-none bg-zinc-200 flex items-center pl-2 pr-2 mb-2  transition-colors duration-100 delay-100 hover:bg-zinc-300 cursor-pointer">
        <Avatar>
          <AvatarImage
            src={`${contatos.link}.png`}
            alt={`${contatos.nome} ${contatos.sobrenome}`}
          />
          <AvatarFallback>FT</AvatarFallback>
        </Avatar>
        <div className="text-xs gap-2 w-full ml-4">
          <h3>
            {contatos.nome} {contatos.sobrenome}
          </h3>
          <a
            className="text-sky-500 underline hover:text-sky-400 cursor-pointer"
            href={contatos.link}
          >
            {contatos.link}
          </a>
        </div>
        <div onClick={() => onDelete(codigo)}>
          <Trash className="mr-4 w-4 h-4 stroke-red-500 hover:cursor-pointer transition-colors duration-100 delay-100 hover:stroke-red-700" />
        </div>
      </Card>
    </div>
  );
}
