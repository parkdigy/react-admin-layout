import { ReactNode } from 'react';
import { CardProps } from '@mui/material';
export interface CardLayoutProps extends Partial<CardProps> {
    children?: ReactNode;
    backgroundColor?: string;
}
