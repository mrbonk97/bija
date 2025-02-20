import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  stacks: {
    name: string;
    description: string;
  }[];
}

export const StackTabs = ({ stacks }: Props) => {
  return (
    <Tabs defaultValue={stacks[0].name}>
      <TabsList className="mx-auto w-fit flex gap-20 font-medium">
        {stacks.map((item) => (
          <TabsTrigger
            key={`list-${item.name}`}
            value={item.name}
            className="opacity-40 hover:opacity-80 data-[state=active]:opacity-80"
          >
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {stacks.map((item) => (
        <TabsContent key={`content-${item.name}`} value={item.name}>
          <p className="py-10 text-center font-medium opacity-80"> {item.description}</p>
        </TabsContent>
      ))}
    </Tabs>
  );
};
