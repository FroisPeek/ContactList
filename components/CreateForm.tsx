'use client';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import { z } from "zod";
import { Button } from "./ui/button";

const formSchema = z.object({
    nome: z.string().nonempty("O nome completo é obrigatório"),
    sobrenome: z.string().nonempty("O sobrenome é obrigatório"),
    email: z.string().nonempty("O email completo é obrigatório").email(),
    cpf: z.string()
        .nonempty("O CPF é obrigatório")
        .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido")
        .max(14, "O CPF deve ter no máximo 14 caracteres"),
    numeroTelefone: z.string()
        .nonempty("O número é obrigatório")
        .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Tente novamente").max(15), // Ajuste o max conforme necessário
    link: z.string().nonempty("Link necessario para colocar a foto de perfil")
});

export default function CreateForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            sobrenome: "",
            email: "",
            cpf: "",
            numeroTelefone: "",
            link: ""
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <div className="bg-zinc-800 p-4 rounded w-full mt-8">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <h2 className="font-bold text-3xl">
                        Adicione um contato a lista:
                    </h2>
                    <div className="flex gap-4 items-center justify-center">
                        <FormField
                            control={form.control}
                            name="nome"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Nome: </FormLabel>
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
                                    <FormLabel>Sobrenome: </FormLabel>
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
                            name="numeroTelefone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Número de telefone: </FormLabel>
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
                                    <FormLabel>Insira o CPF: </FormLabel>
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
                                                    placeholder="CPF..."
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
                                    <FormLabel>Insira o email: </FormLabel>
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
                                    <FormLabel>Insira o link do seu GitHub: </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Insira o link..."
                                            className="w-full rounded h-9 px-2 border border-gray-200 shadow-sm"
                                        />
                                    </FormControl>
                                    <FormDescription>Link necessario para obter sua foto de perfil</FormDescription>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="w-full">
                        <Button
                            variant={"secondary"}
                            className="w-full"
                        >
                            Salvar contato
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
