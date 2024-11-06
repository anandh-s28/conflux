"use client";
import SparklesIcon from "@/components/icons/sparkles-stroke-rounded";
import DocumentValidationIcon from "@/components/icons/document-validation-stroke-rounded";
import AiSettingIcon from "./icons/ai-setting-stroke-rounded";
import { AtSign, Fingerprint, Combine, Boxes } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { ChevronUp, User2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { LayersIcon } from "./icons/layers";
import { getUserName, signOut } from "@/app/auth/actions";
import { useEffect, useState } from "react";
import MessageMultiple01Icon from "./icons/message-multiple-01-stroke-rounded";
import CloudSavingDone02Icon from "./icons/cloud-saving-done-02-stroke-rounded";
import QuillWrite02Icon from "./icons/quill-write-02-stroke-rounded";

const docs = [
  {
    title: "Uploaded Documents",
    url: "/uploads",
    icon: CloudSavingDone02Icon,
  },
  {
    title: "Create Document",
    url: "/create",
    icon: QuillWrite02Icon,
  },
];

const collaborations = [
  {
    title: "Discussions",
    url: "/collaboration",
    icon: AtSign,
  },
  {
    title: "Access Control",
    url: "/collaborators/settings",
    icon: Fingerprint,
  },
];

const summaries = [
  {
    title: "Generated Summaries",
    url: "/summaries",
    icon: Boxes,
  },
  {
    title: "RAG",
    url: "/create-summary",
    icon: Combine,
  },
  {
    title: "Model Settings",
    url: "/model",
    icon: AiSettingIcon,
  },
];

export function AppSidebar() {
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
    <Sidebar variant="floating" className="dark:bg-stone" collapsible="icon">
      <SidebarContent className="dark:bg-stone-900">
        <SidebarHeader>
          <SidebarMenuButton className="justify-center items-center ml-1">
            <LayersIcon />
            <span className="font-medium text-xl tracking-tight">Conflux</span>
          </SidebarMenuButton>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarMenuButton>
            <DocumentValidationIcon className="h-5 w-5 dark:text-white mr-2" />
            <SidebarGroupLabel className="font-medium">
              Documents
            </SidebarGroupLabel>
          </SidebarMenuButton>
          {docs.map((doc) => (
            <SidebarMenuSub key={doc.title}>
              <SidebarMenuItem className="dark:text-white">
                <SidebarMenuButton asChild>
                  <a href={doc.url}>
                    <doc.icon className="dark:text-white" />
                    <span className="">{doc.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuSub />
            </SidebarMenuSub>
          ))}
        </SidebarGroup>
        <SidebarGroup>
          <SidebarMenuButton>
            <MessageMultiple01Icon className="h-4 w-4 dark:text-white mr-2" />
            <SidebarGroupLabel className="font-medium">
              <span>Collaboration</span>
            </SidebarGroupLabel>
          </SidebarMenuButton>
          {collaborations.map((collaborations) => (
            <SidebarMenuSub key={collaborations.title}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={collaborations.url}>
                    <collaborations.icon />
                    <span>{collaborations.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuSub />
            </SidebarMenuSub>
          ))}
        </SidebarGroup>
        <SidebarGroup>
          <SidebarMenuButton>
            <SparklesIcon className="h-4 w-4 dark:text-white mr-2" />
            <SidebarGroupLabel className="font-medium">
              Summarise
            </SidebarGroupLabel>
          </SidebarMenuButton>
          {summaries.map((summary) => (
            <SidebarMenuSub key={summary.title}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={summary.url}>
                    <summary.icon />
                    <span>{summary.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuSub />
            </SidebarMenuSub>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> <span className="font-medium">{user}</span>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width] border border-stone-700 rounded-md"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="bg-red-900"
                  onClick={() => {
                    signOut();
                  }}
                >
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
