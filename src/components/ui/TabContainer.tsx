import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LinkProps {
  currentPath: string;
}

const TabsContainer = ({ currentPath }: LinkProps) => {
  return (
    <Tabs defaultValue={currentPath}>
      <TabsList>
        <TabsTrigger value="">
          <a href="/">All Methods</a>
        </TabsTrigger>
        <TabsTrigger value="no-mutation">
          <a href="/no-mutation">No Mutation</a>
        </TabsTrigger>
        <TabsTrigger value="mutation">
          <a href="/mutation">Mutation</a>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TabsContainer;
