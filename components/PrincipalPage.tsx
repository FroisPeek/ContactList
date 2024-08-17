import { useRouter } from "next/navigation";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

export default function PrincipalPage() {
    const router = useRouter()

    return (
        <div className="px-4 sm:px-8 h-[644px]">
            <ScrollArea className="h-[625px] w-full rounded-lg pr-4">

                <div className="flex items-center justify-center">
                    <h1 className="text-3xl font-extrabold">Sobre o projeto: </h1>
                </div>
                <div className="mt-2 flex items-center flex-col gap-2 h-[100px] sm:h-[200px] lg:h-[300px]">
                    <iframe
                        src="https://giphy.com/embed/iIqmM5tTjmpOB9mpbn"
                        className="w-full h-[300px] max-w-xs sm:max-w-md lg:max-w-lg rounded-lg"
                        allowFullScreen
                    ></iframe>
                </div>
                <Separator className="mt-8" />
                <div className="p-2 text-lg font-bold gap-4 flex flex-col">
                    <div
                        className="w-64 mt-2 grid grid-cols-[25px_1fr] items-start"
                    >
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        <div className="space-y-1">
                            <p
                                className="w-full text-sm font-medium leading-none transition duration-150 hover:text-sky-400 cursor-pointer underline"
                                onClick={() => router.push('https://github.com/FroisPeek')}
                            >
                                https://github.com/FroisPeek
                            </p>
                        </div>
                    </div>
                    <div
                        className="w-64 grid grid-cols-[25px_1fr] items-start"
                    >
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        <div className="space-y-1">
                            <p
                                className="w-full text-sm font-medium leading-none transition duration-150 hover:text-sky-400 cursor-pointer underline"
                                onClick={() => router.push('https://linkedin.com/in/efroisdrumond')}
                            >
                                https://linkedin.com/in/efroisdrumond

                            </p>
                        </div>
                    </div>

                    <h1>
                        Olá, me chamo Eduardo Frois e estou animado em apresentar meu primeiro projeto pessoal full stack! Durante uma aula na faculdade,
                        me deparei com um exercício em Python que sofri para fazer, o que acabou me deixando encabulado!
                        Eu sabia que poderia fazer uma aplicação web sobre isso, então aqui estou eu.
                    </h1>
                    <h1>
                        Embora eu saiba que ainda há muito a melhorar, estou satisfeito com o que consegui construir até agora.
                        Este projeto me fez evoluir bastante, gerando novas ideias e um desejo ainda maior de aprender novas tecnologias.
                        Tenho certeza de que esse é apenas o começo, e em breve trarei mais novidades!
                    </h1>
                    <h1>
                        Neste projeto, utilizei Next.js, TypeScript, ASP.NET 8, EF 8 e
                        desenvolvi meu próprio banco de dados SQL Server. Também usei libs como react hook form, zod,
                        shadcn, lucide e tailwind.
                    </h1>
                </div>
            </ScrollArea>
        </div>
    )
}
