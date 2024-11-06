import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="items-center">
          <Breadcrumb className="dark:text-neutral-500 mb-2">
            <BreadcrumbItem className="text-sm">Dashboard</BreadcrumbItem>
          </Breadcrumb>
          <h1 className="text-2xl font-medium">Hi, user!</h1>
        </div>
        <div className="flex items-center space-x-2">
          <form className="flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Enter your search query"
              className="rounded-full dark:bg-stone-800 w-64"
            />
            <Button type="submit" className="rounded-full">
              Search
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
