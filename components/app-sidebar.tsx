"use client";
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
import { LayersIcon } from "./icons/layers";
import { getUserName, signOut } from "@/app/auth/actions";
import { useEffect, useState } from "react";
import MessageMultiple01Icon from "./icons/message-multiple-01-stroke-rounded";
import CloudSavingDone02Icon from "./icons/cloud-saving-done-02-stroke-rounded";
import CheckmarkBadge03Icon from "./icons/checkmark-badge-03-stroke-rounded";
import Comment01Icon from "./icons/comment-01-stroke-rounded";
import UserGroupIcon from "./icons/user-group-stroke-rounded";
import ServerStack02Icon from "./icons/server-stack-02-stroke-rounded";
import EditTableIcon from "./icons/edit-table-stroke-rounded";
import AccountSetting02Icon from "./icons/account-setting-02-stroke-rounded";

const docs = [
  {
    title: "Uploaded Datasets",
    url: "/uploads",
    icon: CloudSavingDone02Icon,
  },
  {
    title: "New Dataset",
    url: "/create",
    icon: EditTableIcon,
  },
];

const collaborations = [
  {
    title: "Approvals",
    url: "/collaboration",
    icon: CheckmarkBadge03Icon,
  },
  {
    title: "Comments",
    url: "/collaborators/settings",
    icon: Comment01Icon,
  },
];

const adminOptions = [
  {
    title: "Users",
    url: "/admin#users",
    icon: UserGroupIcon,
  },
  {
    title: "Infrastructure",
    url: "/admin/infrastructure",
    icon: ServerStack02Icon,
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
              Datasets
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
                    <collaborations.icon className="dark:text-white" />
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
            <AccountSetting02Icon className="h-4 w-4 dark:text-white mr-2" />
            <SidebarGroupLabel className="font-medium">
              Admin Settings
            </SidebarGroupLabel>
          </SidebarMenuButton>
          {adminOptions.map((admin) => (
            <SidebarMenuSub key={admin.title}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={admin.url}>
                    <admin.icon className="dark:text-white" />
                    <span>{admin.title}</span>
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
