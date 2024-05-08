import React, { useMemo } from 'react';
import { Icon } from '@mui/material';
import {
  StyledContainerBox,
  StyledHeadContainerBox,
  StyledHeadIcon,
  StyledHeadIconContainerBox,
  StyledHeadTitleTypography,
  StyledTitleContainerDiv,
  StyledTitleIconContainerDiv,
} from './Title.style';

export interface TitleProps {
  title: string;
  icon?: string;
  headTitle?: string;
  headIcon?: string;
}

const Title = ({ title, icon, headTitle, headIcon }: TitleProps) => {
  const finalHeadIcon = useMemo(
    () =>
      headIcon
        ? headIcon.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)
        : undefined,
    [headIcon]
  );

  const finalIcon = useMemo(
    () => (icon ? icon.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`) : undefined),
    [icon]
  );

  return (
    <StyledContainerBox>
      {headTitle && (
        <StyledHeadContainerBox>
          {finalHeadIcon && (
            <StyledHeadIconContainerBox>
              <StyledHeadIcon>{finalHeadIcon}</StyledHeadIcon>
            </StyledHeadIconContainerBox>
          )}
          <StyledHeadTitleTypography>{headTitle}</StyledHeadTitleTypography>
        </StyledHeadContainerBox>
      )}
      <StyledTitleContainerDiv>
        {finalIcon && (
          <StyledTitleIconContainerDiv>
            <Icon fontSize='small'>{finalIcon}</Icon>
          </StyledTitleIconContainerDiv>
        )}
        <div>{title}</div>
      </StyledTitleContainerDiv>
    </StyledContainerBox>
  );
};

export default Title;
