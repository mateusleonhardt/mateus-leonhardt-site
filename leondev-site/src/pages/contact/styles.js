import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import Input from '../../components/Form/Input';
import Textarea from '../../components/Form/Textarea';

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    margin: -79px auto 0;
    max-width: 500px;
    width: 100%;
`;

export const Form = styled(Unform)`
    margin-top: 15px;
    width: 100%;
`;

export const InputForm = styled(Input)`
    color: #32333C;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
    height: 42px;
    padding: 0 15px;
    width: 100%;
    &:focus {
        border: 1px solid #F7882F;
    }
`

export const TextareaForm = styled(Textarea)`
    color: #32333C;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
    padding: 15px;
    width: 100%;
    &:focus {
        border: 1px solid #F7882F;
    }
`

export const InputBlock = styled.div