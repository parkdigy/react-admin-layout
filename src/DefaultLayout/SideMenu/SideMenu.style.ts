import { Box, styled } from '@mui/material';
import SimpleBar from 'simplebar-react';

export const StyledSimpleBar = styled(SimpleBar)`
  max-height: 100%;
`;

export const StyledLogoContainerBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    borderBottom: 'thin solid #f5f5f5',
    color: 'text.primary',
  })
);
