import { styled } from "styled-components"
import iconEllipse from "../../assets/iconFooter/iconEllipse.svg"

const DivStyled = styled.div`
    position: relative;
    .logoSocial{
        position: absolute;
        top: ${props => `${props.top}px`};
        left: ${props => `${props.left}px`};
    }
`;
const IconLogo = ({logoSocial, top, left}) => {
    return(
        <DivStyled logoSocial={logoSocial} top={top} left={left}>
            <div className="logo">
                <img src={iconEllipse} alt="" />
                <img className="logoSocial" src={logoSocial} alt="" />
            </div>
        </DivStyled>
    )
}
export { IconLogo }