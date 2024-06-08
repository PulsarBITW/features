import styled, {keyframes} from 'styled-components';

export const Root = styled.div<{height?: number}>`
    position: relative;
    width: 100%;
    min-height: ${({height}) => (height ? `${height}px` : '100%')};
`;

const spinnerOpen = keyframes`
  100% { opacity: 1;}
`;

export const LoaderWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    animation: ${spinnerOpen} 1s forwards;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
`;

export const Content = styled.div`
    transition: all 0.3s ease-in-out;
`;
