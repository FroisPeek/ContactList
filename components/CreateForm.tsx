// @ts-nocheck
"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useMutateCreateContato from "@/hooks/useMutateCreateContatos";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { z } from "zod";
import { Button } from "./ui/button";

const formSchema = z.object({
  nome: z.string().nonempty("O nome completo é obrigatório"),
  sobrenome: z.string().nonempty("O sobrenome é obrigatório"),
  email: z.string().nonempty("O email completo é obrigatório").email(),
  cpf: z
    .string()
    .nonempty("O CPF é obrigatório")
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido")
    .max(14, "O CPF deve ter no máximo 14 caracteres"),
  numero: z
    .string()
    .nonempty("O número é obrigatório")
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Tente novamente")
    .max(15),
  link: z.string().nonempty("Link necessario para colocar a foto de perfil"),
});

export default function CreateForm() {
  const query = useQueryClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      sobrenome: "",
      email: "",
      cpf: "",
      numero: "",
      link: "",
    },
  });

  const {
    mutateAsync: createContato,
    isLoading,
    isPending,
    isSuccess,
  } = useMutateCreateContato();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const newContato = {
      nome: values.nome,
      sobrenome: values.sobrenome,
      email: values.email,
      cpf: values.cpf,
      numero: values.numero,
      link: values.link,
    };
    await createContato(newContato);
    form.reset();
    query.invalidateQueries(["search"], { exact: false });
  }

  return (
    <div className="bg-zinc-200 p-4 rounded w-full mt-8 h-[620px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <h2 className="font-bold text-3xl text-black">
            Adicione um contato a lista:
          </h2>
          <div className="flex gap-4 items-center justify-center">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-black">Nome: </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Insira seu nome..."
                      className="w-full rounded h-9 px-2 border border-gray-200 shadow-sm"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sobrenome"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-black">Sobrenome: </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Insira seu sobrenome..."
                      className="w-full rounded h-9 px-2 border border-gray-200 shadow-sm"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Controller
              control={form.control}
              name="numero"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-black">
                    Número de telefone:{" "}
                  </FormLabel>
                  <FormControl>
                    <InputMask
                      mask="(99) 99999-9999"
                      maskChar={null}
                      {...field}
                      value={field.value}
                      onChange={field.onChange}
                    >
                      {(inputProps) => (
                        <Input
                          {...inputProps}
                          placeholder="(XX) XXXXX-XXXX"
                          className="w-full rounded h-9 px-2 border border-gray-200 shadow-sm"
                        />
                      )}
                    </InputMask>
                  </FormControl>
                </FormItem>
              )}
            />
            <Controller
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-black">Insira o CPF: </FormLabel>
                  <FormControl>
                    <InputMask
                      mask="999.999.999-99"
                      maskChar={null}
                      {...field}
                      value={field.value}
                      onChange={field.onChange}
                    >
                      {(inputProps) => (
                        <Input
                          {...inputProps}
                          placeholder="CPF (Pelo amor de Deus coloca cpf fake)..."
                          className="w-full rounded h-9 px-2 border border-gray-200 shadow-sm"
                        />
                      )}
                    </InputMask>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-black">Insira o email: </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Insira o email..."
                      className="w-full rounded h-9 px-2 border border-gray-200 shadow-sm"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-black">
                    Insira o link do seu GitHub:{" "}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Insira o link..."
                      className="w-full rounded h-9 px-2 border border-gray-200 shadow-sm"
                    />
                  </FormControl>
                  <FormDescription>
                    Link necessario para obter sua foto de perfil
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <Button variant={"secondary"} className="w-full">
              Salvar contato
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
