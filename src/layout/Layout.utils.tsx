import { styled } from "@mui/material";

export const Main = styled("main", {
  /* stylelint-disable-next-line annotation-no-unknown */
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
  drawerwidth: number;
}>(({ theme, open, drawerwidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(0),

  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,

    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${drawerwidth}px`,
  }),
}));
