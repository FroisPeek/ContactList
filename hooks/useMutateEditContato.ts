import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { iProps } from "./useMutateCreateContatos";

export async function editContato(contatoId: number, values: iProps) {
    try {
        const response = await fetch(`http://localhost:5162/api/contatos/editContato/${contatoId}`, {
            method: 'PUT',
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
            toast.error('Erro ao editar contato', {
                description: "Erro ao editar contato",
                closeButton: true,
                duration: 5000
            });
            return false;
        }

        const data = await response.json();
        return data;
    }
    catch (error) {
        toast.error('Erro ao editar o contato');
        console.error("Erro durante a edição do contato", error);
        throw error;
    }
}


export default function useMutateEditContato() {
    return useMutation({
        mutationKey: ["editContato"],
        mutationFn: ({ contatoId, values }: { contatoId: number, values: iProps }) => editContato(contatoId, values),
        onSuccess: () => {
            toast.success('Sucesso!', {
                description: 'Contato editado com sucesso!',
                duration: 5000,
            });
        }
    });
}
