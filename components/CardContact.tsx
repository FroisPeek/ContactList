import useMutateDeleteContato from "@/hooks/useMutateDeleteContato";
import { useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

interface iProps {
    codigo: number
    contatos: {
        nome: string;
        sobrenome: string;
        numero: string;
        link: string;
        email: string;
    }
}

export default function CardContact({ codigo, contatos }: iProps) {
    const query = useQueryClient();
    const { mutateAsync } = useMutateDeleteContato()

    async function onDelete(codigo: number) {
        await mutateAsync(codigo)
        query.invalidateQueries({
            queryKey: ["getContatos"],
            exact: true
        })
    }

    return (
        <div>
            <Card className="w-full h-16 text-white border-none bg-zinc-900 flex items-center pl-2 pr-2 gap-4 mb-2 shadow-lg transition-colors duration-100 delay-100 hover:bg-zinc-700">
                <Avatar>
                    <AvatarImage src={`${contatos.link}.png`} alt={`${contatos.nome} ${contatos.sobrenome}`} />
                    <AvatarFallback>FT</AvatarFallback>
                </Avatar>
                <div className="text-xs gap-2 w-full">
                    <h3>{contatos.nome} {contatos.sobrenome}</h3>
                    <a
                        className="text-sky-50 underline hover:text-sky-300 cursor-pointer"
                        href={contatos.link}
                    >{contatos.link}
                    </a>
                </div>
                <div onClick={() => onDelete(codigo)}>
                    <Trash className="w-4 h-4 stroke-red-500 hover:cursor-pointer transition-colors duration-100 delay-100 hover:stroke-red-400" />
                </div>
            </Card>
        </div>
    );
}
