"use client"
import styled from "styled-components"
import { Saira_Stencil_One } from "next/font/google"
import { PrimaryInput } from "./primary-input"

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})
interface IHeaderProps {

}

const TagHeader = styled.header`
    diplay: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150px
`
export function Header(props: IHeaderProps) {
    return (
        <TagHeader>
            <Logo className={sairaStencil.className}>Capputeeno</Logo>
            <div>
                <PrimaryInput placeholder="Procurando por algo específico?" />
            </div>

        </TagHeader>
    )
}