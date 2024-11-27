import { idoExample } from "@/static/IDO";
import IDO_Client from "@/views/IDO";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
    const data = await fetchData(params.id);
    if (!data) redirect("/");
    return <IDO_Client {...data} />;
}

async function fetchData(id: string) {
    if(id !== idoExample.id) return null
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return idoExample
}