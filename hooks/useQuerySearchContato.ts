import { useQuery } from "@tanstack/react-query";

async function searchContato(nome: string) {
    try {
        const response = await fetch(`http://localhost:5162/api/contatos/search?nome=${encodeURIComponent(nome)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (response.ok && data.success) {
            return data.data;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

export default function useQuerySearchContato(nome: string) {
    return useQuery({
        queryKey: ["search", nome],
        queryFn: () => searchContato(nome),
        enabled: !!nome,
    });
}
