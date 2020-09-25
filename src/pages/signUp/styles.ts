import styled from 'styled-components';

import {shade} from 'polished';

import backgroundImage from '../../assets/sign-up-background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction:column;
    place-content: center;
    align-items:center;
    width:100%;
    max-width:700px;

    form {
        margin: 40px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #f4edeb;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#f4edeb')};
            }
        }
    
    }

    > a {
            color: #f4edeb;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            display: flex;
            align-items: center;

            svg {
                margin-right: 16px;
            }

            &:hover {
                color: ${shade(0.2, '#f4edeb')};
            }
        }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImage}) no-repeat center;
    background-size: cover;
`;