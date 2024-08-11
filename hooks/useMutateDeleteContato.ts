import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export async function deleteContato(contatoId: number) {
    try {
        const response = await fetch(`http://localhost:5162/api/contatos/deleteContato/${contatoId}`, {
            method: 'DELETE',
        })

        if (!response.ok) {
            toast.error('Erro ao editar contato', {
                description: "Erro ao apagar contato",
                closeButton: true,
                duration: 5000
            });
            return false;
        }

        const data = await response.json();
        return data;
    }
    catch (error) {
        toast.error('Erro ao apagar o contato');
        console.error("Erro durante a ação de apagar o contato", error);
        throw error;
    }
}

export default function useMutateDeleteContato() {
    return useMutation({
        mutationKey: ["deleteContato"],
        mutationFn: (contatoId: number) => deleteContato(contatoId),
        onSuccess: () => {
            toast.success('Sucesso!', {
                description: 'Contato apagado com sucesso!',
                duration: 5000,
            });
        }
    });
}
