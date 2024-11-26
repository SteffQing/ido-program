import { idoExample } from "@/static/IDO";
import IDO_Client from "@/views/IDO";

export default async function Page({ params }: { params: { id: string } }) {
    const data = await fetchData(params.id);
    return <IDO_Client {...data} />
}

async function fetchData(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return idoExample
}