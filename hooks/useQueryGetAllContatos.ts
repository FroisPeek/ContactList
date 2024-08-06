import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export async function getAllContatos() {
    try {
        const response = await fetch("http://localhost:5162/api/contatos/getContatos")
            .then(res => res.json());

        if (response.success == false) {
            toast.error("Error", {
                description: response.data.message,
                duration: 5000,
                closeButton: true,
            });
            return false;
        }

        const data = response.data;
        return data;
    }
    catch (error) {
        console.log(error)
    }
}

export default function useQueryGetAllContatos() {
    return useQuery({
        queryKey: ["getContatos"],
        queryFn: () => getAllContatos(),
    });
}
