import FlowBuilder from "@/components/builder/flow-builder";

export default async function BuilderPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  
  return (
    <div className="w-full h-screen overflow-hidden bg-background">
      <FlowBuilder botId={id} />
    </div>
  );
}
