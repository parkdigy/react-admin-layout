import { type ReactNode } from 'react';
import { type CardProps } from '@mui/material';

export interface CardLayoutProps extends Partial<CardProps> {
  children?: ReactNode;
  backgroundColor?: string;
}
