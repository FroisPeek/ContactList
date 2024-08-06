import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

interface iProps {
    contatos: {
        nome: string;
        sobrenome: string;
        numero: string;
        foto: string;
        email: string;
    }
}

export default function CardContact({ contatos }: iProps) {
    return (
        <div>
            <Card className="w-full h-16 text-white bg-zinc-800 flex items-center pl-2 pr-2 gap-4">
                <Avatar>
                    <AvatarImage src="https://github.com/FroisPeek.png" alt="@FROIS" />
                    <AvatarFallback>FT</AvatarFallback>
                </Avatar>
                <div className="text-xs	gap-2 w-full">
                    <h3>{contatos.nome} {contatos.sobrenome}</h3>
                    <h3>{contatos.numero}</h3>
                </div>
            </Card>
        </div>
    )
}