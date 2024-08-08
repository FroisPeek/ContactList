import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export interface iProps {
    nome: string;
    sobrenome: string;
    numero: string;
    cpf: string;
    email: string;
    link: string;
}

export async function createContato(values: iProps) {
    console.log(JSON.stringify(values));
    try {
        const response = await fetch('http://localhost:5162/api/contatos/createContatos', {
            method: 'POST',
            body: JSON.stringify({
                nome: values.nome,
                sobrenome: values.sobrenome,
                numero: values.numero,
                cpf: values.cpf,
                email: values.email,
                link: values.link
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erro: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        return data;

    } catch (error: any) {
        toast.error('Erro ao criar o contato');
        console.error("Erro durante a criação do contato", error);
        throw error;
    }
}

export default function useMutateCreateContato() {
    return useMutation({
        mutationKey: ["creteContatos"],
        mutationFn: (values: iProps) => createContato(values),
        onSuccess: () => {
            toast.success('Sucesso!', {
                description: 'Contato criado com sucesso!',
                duration: 5000,
            });
        }
    })
}