import Page from "./Page";
import SearchNavBar from "./SearchNavBar";

export default function ContainerMain() {
    return (
        <div className="w-[80%] h-[80%] bg-zinc-950 rounded-lg text-zinc-50 p-4 flex gap-4">
            <div className="w-1/3">
                <SearchNavBar />
            </div>
            <div className="w-2/3">
                <Page />
            </div>
        </div>
    )
}