import {
  PermIdentity as PermIdentityIcon,
  Restore as RestoreIcon,
  StarBorder as StarBorderIcon,
  GitHub as GitHubIcon,
  HelpOutline as HelpOutlineIcon,
  Feedback as FeedbackIcon,
  Chat as ChatIcon,
  Security as SecurityIcon,
  Report as ReportIcon,
  Category as CategoryIcon,
  LabelOutlined as LabelOutlinedIcon,
} from "@mui/icons-material";

interface SidebarMenu {
  text: string;
  icon: JSX.Element;
}

export const quickActions: SidebarMenu[] = [
  {
    text: "Contacts",
    icon: <PermIdentityIcon />,
  },
  {
    text: "Frequently Contacted",
    icon: <RestoreIcon />,
  },
  {
    text: "Starred",
    icon: <StarBorderIcon />,
  },
];

export const socialLinks: SidebarMenu[] = [
  {
    text: "Give a star",
    icon: <StarBorderIcon />,
  },
  {
    text: "View on Github",
    icon: <GitHubIcon />,
  },

  {
    text: "Get help",
    icon: <HelpOutlineIcon />,
  },
];

export const communicate: SidebarMenu[] = [
  {
    text: "Send Feedback",
    icon: <FeedbackIcon />,
  },
  {
    text: "Chat with us",
    icon: <ChatIcon />,
  },
];

export const appInfo: SidebarMenu[] = [
  {
    text: "Users manual",
    icon: <SecurityIcon />,
  },
  {
    text: "Report a problem",
    icon: <ReportIcon />,
  },
  {
    text: "Our Products",
    icon: <CategoryIcon />,
  },
];

export const labels: SidebarMenu[] = [
  {
    text: "Users manual",
    icon: <LabelOutlinedIcon />,
  },
  {
    text: "Report a problem",
    icon: <LabelOutlinedIcon />,
  },
  {
    text: "Our Products",
    icon: <LabelOutlinedIcon />,
  },
];
