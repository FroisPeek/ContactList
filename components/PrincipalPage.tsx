import { useRouter } from "next/navigation";
import { ScrollArea } from "./ui/scroll-area";

export default function PrincipalPage() {
  const router = useRouter();

  return (
    <div className="px-4 sm:px-8 h-[644px]">
      <ScrollArea className="h-[625px] w-full rounded-lg pr-4 mt-4  ">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl text-black font-extrabold">
            Sobre o trabalho:{" "}
          </h1>
        </div>
        <div className="mt-2 flex items-center flex-col gap-2 h-[100px] sm:h-[200px] lg:h-[300px]">
          <iframe
            src="https://giphy.com/embed/iIqmM5tTjmpOB9mpbn"
            className="w-full h-[300px] max-w-xs sm:max-w-md lg:max-w-lg rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 bg-gray-50 text-gray-900 rounded-lg shadow-lg space-y-4 mt-8">
          <h1 className="text-2xl font-bold text-center">Desafio FullStack</h1>
          <p className="text-justify">
            Tema a seu critério. O projeto deve ser{" "}
            <span className="font-semibold">FullStack</span>, contendo:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              FrontEnd e backend utilizando uma{" "}
              <span className="font-semibold">API REST</span>.
            </li>
            <li>Linguagem de programação de sua escolha.</li>
            <li>Tela e lógica de login.</li>
            <li>
              Fluxos de <span className="font-semibold">CRUD completo</span>.
            </li>
            <li>Tratamento de erros e exceções.</li>
            <li>Casos de teste.</li>
            <li>
              Banco de dados SQL ou NoSQL utilizando{" "}
              <span className="font-semibold">Docker</span>.
            </li>
            <li>
              Código em um repositório no{" "}
              <span className="font-semibold">GitHub</span>.
            </li>
            <li>
              Documento de evidências{" "}
              <span className="italic">
                (profissional, detalhado e organizado)
              </span>
              .
            </li>
          </ul>
          <p className="text-justify">
            O documento deve conter cabeçalho e rodapé, informações bem
            organizadas, prints e explicações claras.
          </p>
          <p className="text-justify">
            Se encontrar dificuldades, pesquise, peça apoio aos colegas ou
            procure auxílio do professor.
          </p>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Novo prazo:</span> 30/11/2024
            </p>
            <p className="text-sm text-gray-700">
              Apresente o projeto para a turma assim que estiver pronto, no
              máximo na primeira semana de dezembro.
            </p>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
