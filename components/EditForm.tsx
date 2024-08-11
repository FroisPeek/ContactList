// @ts-nocheck
"use client"
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import useMutateEditContato from "@/hooks/useMutateEditContato";
import useQueryGetAllContatos from "@/hooks/useQueryGetAllContatos";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useQueryClient } from "@tanstack/react-query";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import { z } from "zod";
import { formSchema } from "./CreateForm";
import { Input } from "./ui/input";

export default function EditForm() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<string>('')

    const { data: contatos, isLoading } = useQueryGetAllContatos()
    const { mutateAsync, isSuccess } = useMutateEditContato()
    const query = useQueryClient();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            sobrenome: "",
            email: "",
            cpf: "",
            numero: "",
            link: ""
        }
    });

    useEffect(() => {
        const selectedContato = contatos?.find((contato: any) => contato.nome === value);
        if (selectedContato) {
            form.setValue("nome", selectedContato.nome);
            form.setValue("sobrenome", selectedContato.sobrenome);
            form.setValue("numero", selectedContato.numero);
            form.setValue("cpf", selectedContato.cpf);
            form.setValue("email", selectedContato.email);
            form.setValue("link", selectedContato.link);
        }
    }, [value]);

    async function onEdit(values: z.infer<typeof formSchema>) {
        const selectedContato = contatos?.find((contato: any) => contato.nome === value);
        if (!selectedContato) {
            toast.error('Erro', {
                description: "Contato não encontrado",
                closeButton: true,
                duration: 5000
            });
            return;
        }

        await mutateAsync({
            contatoId: selectedContato.codigo,
            values: {
                nome: values.nome,
                sobrenome: values.sobrenome,
                numero: values.numero,
                cpf: values.cpf,
                email: values.email,
                link: values.link
            }
        });

        form.reset()
        query.invalidateQueries({
            queryKey: ["getContatos"],
            exact: true
        })
    }


    return (
        <div className="bg-zinc-800 p-4 rounded w-full mt-8">
            <h2 className="font-bold text-3xl">
                Edite um contato da lista:
            </h2>
            <div className="w-full flex flex-col gap-2 mt-4">
                <h1 className="text-xs text-red-400">Selecione o contato para editar: {isLoading ? <ReloadIcon className="animate-spin text-slate-400" /> : null}</h1>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="secondary"
                            role="combobox"
                            aria-expanded={open}
                            className="w-full justify-between"
                        >
                            {value
                                ? contatos.find((contato: any) => contato.nome === value)?.nome
                                : "Selecione o contato..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[350px] p-0">
                        <Command>
                            <CommandInput placeholder="Procure o contato..." />
                            <CommandList>
                                <CommandEmpty>Nenhum contato encontrado.</CommandEmpty>
                                <CommandGroup>
                                    {contatos?.map((contato: any) => (
                                        <CommandItem
                                            key={contato.codigo}
                                            value={contato.nome}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value === contato.nome ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {contato.nome} {contato.sobrenome}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
            <div className="mt-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onEdit)} className="space-y-8 w-full">
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
                                name="numero"
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
                        <div className="w-full flex gap-4">
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
        </div>
    )
}
