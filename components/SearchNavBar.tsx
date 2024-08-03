import { Input } from "@/components/ui/input"


export default function SearchNavBar() {
    return (
        <div className="bg-zinc-900 w-96 h-full rounded p-4">
            <div className="flex gap-8 items-center">
                <Input
                    type="text"
                    placeholder="Search..."
                    className="border-zinc-500 w-4/5"
                />
                <button onClick={() => alert('ihasbid')}>
                    botao
                </button>
            </div>
            <div className="mt-4 p-2 gap-4">
                <h2>Contato 1</h2>
                <h2>Contato 1</h2>
                <h2>Contato 1</h2>
                <h2>Contato 1</h2>
                <h2>Contato 1</h2>
                <h2>Contato 1</h2>
                <h2>Contato 1</h2>
                <h2>Contato 1</h2>
                <h2>Contato 1</h2>
            </div>
        </div>
    )
}