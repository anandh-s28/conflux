import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default function FilesTabs() {
  return (
    <div className="flex items-center space-x-4">
      <Tabs defaultValue="recent">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
          <TabsTrigger value="tagged">Tagged</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
