import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";
import PrincipalPage from "./PrincipalPage";
import { Tabs } from "./ui/tabs";

export default function Page() {
  const [tab, setTab] = useState<"Principal" | "Adicionar" | "Editar">(
    "Principal"
  );

  return (
    <div className="bg-zinc-100 w-full p-4 rounded">
      <Tabs
        value={tab}
        onValueChange={(value) =>
          setTab(value as "Principal" | "Adicionar" | "Editar")
        }
        className="w-full"
      >
        <TabsList className="bg-zinc-200 grid w-full grid-cols-3 h-8 text-black rounded">
          <TabsTrigger
            value="Principal"
            className="rounded hover:bg-zinc-300 transition duration-150"
          >
            Principal
          </TabsTrigger>
          <TabsTrigger
            value="Adicionar"
            className="rounded hover:bg-zinc-300 transition duration-150"
          >
            Adicionar
          </TabsTrigger>
          <TabsTrigger
            value="Editar"
            className="rounded hover:bg-zinc-300 transition duration-150"
          >
            Editar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Principal">
          <PrincipalPage />
        </TabsContent>
        <TabsContent value="Adicionar">
          <CreateForm />
        </TabsContent>
        <TabsContent value="Editar">
          <EditForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
