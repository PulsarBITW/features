import React from 'react';

import {Root, Content, LoaderWrapper} from './styled';
import {Spinner} from '../Spinner';

interface Props {
    className?: string;
    isLoading: boolean;
    children: React.ReactNode;
    loaderSize?: number;
    loaderColor?: 'current' | 'primary';
    containerHeight?: number;
}

export const WithLoader = ({
    className,
    isLoading,
    loaderSize,
    loaderColor,
    containerHeight,
    children,
}: Props) => {
    return (
        <Root className={className} height={containerHeight}>
            {isLoading ? (
                <LoaderWrapper>
                    <Spinner size={loaderSize} color={loaderColor} />
                </LoaderWrapper>
            ) : (
                <Content>{children}</Content>
            )}
        </Root>
    );
};
