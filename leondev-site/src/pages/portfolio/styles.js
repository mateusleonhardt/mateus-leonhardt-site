import styled from 'styled-components';

export const ProjectsList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding-top: 30px;

    @media screen and (max-width: 991px) {
        grid-template-columns: 1fr;
    }
`;