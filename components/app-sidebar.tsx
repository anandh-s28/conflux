import SparklesIcon from "@/components/icons/sparkles-stroke-rounded";
import Comment01Icon from "@/components/icons/comment-01-stroke-rounded";
import DocumentValidationIcon from "@/components/icons/document-validation-stroke-rounded";

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

const docs = [
  {
    title: "Uploaded Documents",
    url: "/uploads",
  },
  {
    title: "Create Document",
    url: "/create",
  },
];

const collaborations = [
  {
    title: "Comments and Discussions",
    url: "/collaboration",
  },
  {
    title: "Colloborators",
    url: "/collaborators/settings",
  },
];

const summaries = [
  {
    title: "Summaries",
    url: "/summaries",
  },
  {
    title: "Summarise Document",
    url: "/create-summary",
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" className="dark:bg-stone" collapsible="icon">
      <SidebarContent className="dark:bg-stone-900">
        <SidebarHeader className="font-medium text-xl items-center tracking-tight">
          Conflux
        </SidebarHeader>
        <SidebarGroup>
          <SidebarMenuButton>
            <SidebarGroupLabel className="font-medium">
              <DocumentValidationIcon className="h-4 w-4 dark:text-white mr-2" />
              Documents
            </SidebarGroupLabel>
          </SidebarMenuButton>
          {docs.map((doc) => (
            <SidebarMenuSub key={doc.title}>
              <SidebarMenuItem className="">
                <SidebarMenuButton asChild>
                  <a href={doc.url}>
                    <span className="">{doc.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuSub />
            </SidebarMenuSub>
          ))}
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="font-medium">
            <Comment01Icon className="h-4 w-4 dark:text-white mr-2" />
            <span>Collaboration</span>
          </SidebarGroupLabel>
          {collaborations.map((collaborations) => (
            <SidebarMenuSub key={collaborations.title}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={collaborations.url}>
                    <span>{collaborations.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuSub />
            </SidebarMenuSub>
          ))}
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="font-medium">
            <SparklesIcon className="h-4 w-4 dark:text-white mr-2" />
            Summaries
          </SidebarGroupLabel>
          {summaries.map((summary) => (
            <SidebarMenuSub key={summary.title}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={summary.url}>
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
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
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
