import styled from 'styled-components';
import {BlockWrapper, ContainerWrapper} from "../commonStyle";

export const MainWrapper = styled(BlockWrapper)`
    height: calc(100vh - 60px);
`;
export const MainContainer = styled(ContainerWrapper)`
    background-color: #61dafb;
    border: none;
    box-shadow: 0 0 25px 0 rgba(0,0,0,.04);
`;
