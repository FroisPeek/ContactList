import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"
import CreateForm from "./CreateForm"
import PrincipalPage from "./PrincipalPage"

export default function Page() {
    const [tab, setTab] = useState<"Principal" | "Adicionar" | "Editar">("Principal")

    return (
        <div className="bg-zinc-900 w-full p-4 rounded">
            <Tabs value={tab} onValueChange={setTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-zinc-800 text-white h-[40px]">
                    <TabsTrigger value="Principal">Principal</TabsTrigger>
                    <TabsTrigger value="Adicionar">Adicionar contato</TabsTrigger>
                    <TabsTrigger value="Editar">Editar contato</TabsTrigger>
                </TabsList>

                <TabsContent value="Principal">
                    <PrincipalPage />
                </TabsContent>
                <TabsContent value="Adicionar">
                    <CreateForm />
                </TabsContent>
                <TabsContent value="Editar">
                    <div className="bg-red-600">
                        teste2
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
