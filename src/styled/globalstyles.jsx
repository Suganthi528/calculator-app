import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background-color: ${({ theme }) => theme.colors.background };
    color: ${({ theme }) => theme.colors.keyText };
}

header {
    color: ${({ theme }) => theme.colors.headerText };
}
.keypad{
    background-color: ${({ theme }) => theme.colors.keypad };
    padding: 1.6rem;
    border-radius: 12px;
    display:flex;
    justify-content:center;
}
.keypad-grid{
    display:grid;
    grid-template-columns: repeat(4, 72px);
    grid-auto-rows: 64px;
    gap: 18px;
    width: 100%;
    max-width: 360px;
}
.key, .operator {
    border-radius: 8px;
    background-color: ${({theme})=> theme.colors.key};
    box-shadow: 0 6px 0 0 ${({theme}) => theme.colors.keyShadow};
    color: ${({theme}) => theme.colors.keyText};
    font-weight: 700;
    font-size: 1.05rem;
    cursor: pointer;
    border: none;
    &:hover {
        background-color: ${({theme})=> theme.colors.numberKeyHover};
    }
}
.screen{
    border-radius: 8px;
    background-color: ${({theme})=>theme.colors.screen};
    color: ${({theme})=> theme.colors.screenText};
    padding: 1.2rem;
}
.screen p{
    margin:0;
    text-align:right;
    font-size:2.4rem;
    font-weight:800;
    color: ${({theme})=> theme.colors.screenText};
}
.del, .reset{
    border-radius: 8px;
    background-color: ${({theme})=>theme.colors.actionKey};
    box-shadow: 0 6px 0 0 ${({theme})=> theme.colors.actionkeyShadow};
    color: ${({theme})=> theme.colors.actionKeyText};
    font-weight: 700;
    border: none;
    &:hover {
        background-color: ${({theme})=>theme.colors.actionkeyHover};
    }
}
.reset{
    grid-column: span 2;
}
.equals-key{
    grid-column: span 2;
    border-radius: 8px;
    background-color: ${({theme})=>theme.colors.equalsKey};
    box-shadow: 0 6px 0 0 ${({theme})=>theme.colors.equalsKeyShadow};
    color: ${({theme})=> theme.colors.equalsKeyText};
    font-weight: 700;
    border: none;
    &:hover {
        background-color: ${({theme})=>theme.colors.equalKeyHover};
    }
}
.theme-value {
    background-color: ${({theme})=>theme.colors.keypad};
}
.theme-btn.active{
    background-color: ${({theme})=>theme.colors.equalsKey};
    &:hover {
        background-color: ${({theme})=>theme.colors.equalKeyHover};
    }
}
`;