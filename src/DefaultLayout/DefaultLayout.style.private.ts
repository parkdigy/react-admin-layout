import { AppBar, Box, Drawer, styled } from '@mui/material';

export const SIDE_MENU_WIDTH = 220;

export const StyledContainerBox = styled(Box)`
  display: flex;
  height: 100%;
`;

export const StyledAppBar = styled(AppBar)(({ theme }) =>
  theme.unstable_sx({
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'text.primary',
    borderBottom: 'thin solid #f5f5f5',
  })
);

export const StyledSideMenuContainerBox = styled(Box)(({ theme }) => theme.unstable_sx({}));

export const StyledSideMenuTemporaryDrawer = styled(Drawer)(({ theme }) =>
  theme.unstable_sx({
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDE_MENU_WIDTH },
  })
);

export const StyledSideMenuPermanentDrawer = styled(Drawer)(({ theme }) =>
  theme.unstable_sx({
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDE_MENU_WIDTH },
  })
);

export const StyledMainBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    flexGrow: 1,
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  })
);

export const StyledMainContentDiv = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
