"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutateLogin } from "@/hooks/useMutateLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PassWordInput } from "./ui/password-input";

const loginFormSchema = z.object({
  nome: z
    .string({ required_error: "Campo obrigatório!" })
    .min(4, "Deve ter pelo menos 4 caracteres"),
  senha: z
    .string({ required_error: "Campo obrigatório!" })
    .min(1, "Deve ter pelo menos 1 caractere"),
});

export default function FormLogin() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      nome: "",
      senha: "",
    },
  });

  const router = useRouter();
  const { mutateAsync } = useMutateLogin();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  const handleLogin = async (formData: z.infer<typeof loginFormSchema>) => {
    const { nome, senha } = formData;
    mutateAsync(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(handleLogin)();
        }}
        className="flex flex-col gap-4"
      >
        <FormField
          {...register("nome")}
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuário</FormLabel>
              <FormControl>
                <Input
                  className="w-[95%]"
                  ref={field.ref}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder="Ex: fulano.silva"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          {...register("senha")}
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <PassWordInput
                  className="w-[95%]"
                  placeholder="Digite sua senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="default" className="w-32">
          Entrar
        </Button>
      </form>
    </Form>
  );
}
