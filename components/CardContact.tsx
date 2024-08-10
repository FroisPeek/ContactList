import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

interface iProps {
    contatos: {
        nome: string;
        sobrenome: string;
        numero: string;
        link: string;
        email: string;
    }
}

export default function CardContact({ contatos }: iProps) {
    return (
        <div>
            <Card className="w-full h-16 text-white bg-zinc-800 flex items-center pl-2 pr-2 gap-4 mb-2">
                <Avatar>
                    <AvatarImage src={`${contatos.link}.png`} alt={`${contatos.nome} ${contatos.sobrenome}`} />
                    <AvatarFallback>FT</AvatarFallback>
                </Avatar>
                <div className="text-xs gap-2 w-full">
                    <h3>{contatos.nome} {contatos.sobrenome}</h3>
                    <a
                        className="text-sky-300 underline hover:text-blue-100 cursor-pointer"
                        href={contatos.link}
                        onClick={() => console.log(contatos.link)}
                    >{contatos.link}
                    </a>
                </div>
            </Card>
        </div>
    );
}
