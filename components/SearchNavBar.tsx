import { Input } from "@/components/ui/input";
import useQueryGetAllContatos from "@/hooks/useQueryGetAllContatos";
import { Search } from 'lucide-react';
import CardContact from "./CardContact";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export default function SearchNavBar() {
    const { data: contatos, error, isLoading } = useQueryGetAllContatos();

    return (
        <div className="bg-zinc-900 w-96 h-full rounded p-4">
            <div className="flex gap-8 items-center">
                <Input
                    type="text"
                    placeholder="Search..."
                    className="border-zinc-500 w-4/5"
                />
                <Button variant={"ghost"} onClick={() => alert('ihasbid')}>
                    <Search />
                </Button>
            </div>
            <div className="mt-4 p-2 gap-4">
                {isLoading ?
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-16 w-full bg-zinc-800 rounded" />
                        <Skeleton className="h-16 w-full bg-zinc-800 rounded" />
                        <Skeleton className="h-16 w-full bg-zinc-800 rounded" />
                        <Skeleton className="h-16 w-full bg-zinc-800 rounded" />
                        <Skeleton className="h-16 w-full bg-zinc-800 rounded" />
                        <Skeleton className="h-16 w-full bg-zinc-800 rounded" />
                        <Skeleton className="h-16 w-full bg-zinc-800 rounded" />
                        <Skeleton className="h-16 w-full bg-zinc-800 rounded" />
                        <Skeleton className="h-16 w-full bg-zinc-800 rounded" />
                    </div>
                    :
                    contatos && contatos.map((contato: any, index: number) => (
                        <CardContact contatos={contato} />
                    ))}
            </div>
        </div>
    );
}
