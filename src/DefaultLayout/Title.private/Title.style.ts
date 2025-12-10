import { Box, Icon, styled, Typography } from '@mui/material';

export const StyledContainerBox = styled(Box)`
  position: relative;
`;

export const StyledHeadContainerBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    display: { xs: 'none', sm: 'flex' },
    alignItems: 'center',
    opacity: 0.5,
  })
);

export const StyledHeadIconContainerBox = styled(Box)`
  margin-right: 0.25rem;
  line-height: 0;
`;

export const StyledHeadIcon = styled(Icon)`
  font-size: 1rem;
`;

export const StyledHeadTitleTypography = styled(Typography)`
  font-size: 0.7rem;
`;

export const StyledTitleContainerDiv = styled('div')`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const StyledTitleIconContainerDiv = styled('div')`
  flex-shrink: 0;
  display: inline-flex;
  margin-right: 0.3rem;
`;
