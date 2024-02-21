import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsContainer = () => {
  return (
    <Tabs defaultValue="allMethods">
      <TabsList>
        <TabsTrigger value="allMethods">All Methods</TabsTrigger>
        <TabsTrigger value="noMutation">No Mutation</TabsTrigger>
        <TabsTrigger value="mutation">Mutation</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TabsContainer;
