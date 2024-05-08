import { ListItemIcon, styled } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export const StyledExpandMore = styled(ExpandMore)`
  margin-top: auto;
  margin-bottom: auto;
  @keyframes open {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes close {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 30px;
`;
