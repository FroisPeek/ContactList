'use client';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    nome: z.string().nonempty("O nome completo é obrigatório"),
    sobrenome: z.string().nonempty("O sobrenome é obrigatório"),
    email: z.string().nonempty("O email completo é obrigatório"),
    cpf: z.string().nonempty("O CPF é obrigatório"),
    numeroTelefone: z.string()
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
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <div className="bg-zinc-800 p-4 rounded w-full">
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
                                            placeholder="Insira seu nome..." {...field}
                                            className="w-full rounded h-9 px-2 border border-gray-200 shadow-sm"
                                        />
                                    </FormControl>
                                    <FormMessage />
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
                                            placeholder="Insira seu sobrenome..." {...field}
                                            className="w-full rounded h-9 px-2 border border-gray-200 shadow-sm"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-4 items-center justify-center">
                        <FormField
                            control={form.control}
                            name="numeroTelefone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Número de telefone: </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="(XX) XXXXX-XXXX" {...field}
                                            className="w-full rounded h-9 px-2 border border-gray-200 shadow-sm"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="cpf"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Insira o CPF: </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="CPF..." {...field}
                                            className="w-full rounded h-9 px-2 border border-gray-200 shadow-sm"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </form>
            </Form>
        </div>
    );
}
