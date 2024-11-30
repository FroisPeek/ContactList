import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

async function Login({ nome, senha }: { nome: string; senha: string }) {
  try {
    const response = await fetch(
      `http://localhost:5162/api/auth/authenticate`,
      {
        method: "POST",
        body: JSON.stringify({ nome, senha }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      toast.error("Usuário ou senha inválidos", {
        description: "Usuário ou senha inválidos",
        closeButton: true,
        duration: 5000,
      });
      return null;
    }

    const data = await response.json();
    console.log("Login bem-sucedido:", data);
    return data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw new Error("Falha na comunicação com o servidor");
  }
}

export function useMutateLogin() {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: Login,
    onSuccess: (data) => {
      if (data) {
        toast.success("Login feito com sucesso", {
          description: "Tenha um bom trabalho!",
          closeButton: true,
          duration: 5000,
        });
        router.push("/home");
      }
    },
    onError: (error: any) => {
      console.error("Erro no login:", error);
      toast.error("Erro ao fazer login", {
        description: error?.message || "Usuário ou senha inválidos.",
        closeButton: true,
      });
    },
  });

  return mutation;
}
