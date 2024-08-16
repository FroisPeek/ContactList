import { Input } from "@/components/ui/input";
import useQuerySearchContato from "@/hooks/useQuerySearchContato";
import { Search } from 'lucide-react';
import { useState } from "react";
import CardContact from "./CardContact";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";

export default function SearchNavBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const { data: searchResults, refetch, isLoading } = useQuerySearchContato(searchTerm);

    const handleSearch = () => {
        refetch();
    };

    return (
        <div className="bg-zinc-900 w-96 h-full rounded p-4">
            <div className="flex gap-2 items-center">
                <Input
                    type="text"
                    placeholder="Search..."
                    className="border-zinc-500 w-[200px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant={"ghost"} onClick={handleSearch}>
                    <Search />
                </Button>
            </div>
            <div className="mt-4 p-0 gap-4">
                <ScrollArea className="h-[625px] w-full rounded-lg pr-4">
                    {isLoading ?
                        <div className="flex flex-col gap-2">
                            {[...Array(10)].map((_, index) => (
                                <Skeleton key={index} className="h-16 w-full bg-zinc-800 rounded" />
                            ))}
                        </div>
                        :
                        searchResults ? searchResults.map((contato: any, index: number) => (
                            <CardContact key={index} contatos={contato} codigo={contato.codigo} />
                        )) : 'nada'
                    }
                </ScrollArea>
            </div>
        </div>
    );
}
