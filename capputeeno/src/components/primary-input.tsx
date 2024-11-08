import styled from "styled-components"

export const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;
    
    background: var(--bg-secundary);

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

`
const InputContainer = styled.div`
    position: relative;
    width : 352px; 

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

export function PrimarInputSearchIcon() {
    return (
        <div></div>
    )
}