"use client";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getUserName } from "../auth/actions";
import { FilePlus, FolderPlus } from "lucide-react";
import MessageMultiple01Icon from "@/components/icons/message-multiple-01-stroke-rounded";
import { useEffect, useState } from "react";
import FilesTabs from "@/components/files-tabs";

export default function Home() {
  const cards = [
    {
      title: "New Document",
      description: "Create a new document",
      href: "#",
      icon: FilePlus,
    },
    {
      title: "New Folder",
      description: "Create a new folder",
      href: "#",
      icon: FolderPlus,
    },
    {
      title: "Collaboration",
      description: "Catch up on comments and discussions",
      href: "/comments",
      icon: MessageMultiple01Icon,
    },
  ];

  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserName() {
      const response = await getUserName();
      if (response.data) {
        setUser(response.data.username);
      }
    }
    fetchUserName();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8 mr-6">
      <div className="flex justify-between items-center mb-8">
        <div className="items-center">
          <Breadcrumb className="dark:text-neutral-500 mb-2">
            <BreadcrumbItem className="text-sm">Dashboard</BreadcrumbItem>
          </Breadcrumb>
          <h1 className="text-2xl font-medium">
            Hi,{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              {user}
            </span>
            !
          </h1>
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
      <div>
        <h1 className="font-medium">Quick Access</h1>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-900 rounded-lg p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => (window.location.href = card.href)}
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-lg">
                  <card.icon className="text-white w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-medium">{card.title}</h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-medium mt-5">All Documents</h1>
        <div className="mt-4">
          <FilesTabs />
        </div>
      </div>
    </div>
  );
}
