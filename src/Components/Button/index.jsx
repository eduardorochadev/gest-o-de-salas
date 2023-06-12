import styled from "styled-components";

const Button = (props) => {
    return (

            <>
                <Container 
                     className={props.classes}
                     onClick={props.click}>
                     {props.title} 
                </Container>
            </>

    )
}

const Container = styled.button`
    height: 46px ;
    background-color: blueviolet;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    padding: 0 26px;
    border: 2px solid transparent;
    transition-duration: 200ms;
    cursor: pointer;
    &.outlined{
        border-color: blueviolet;
        background-color: transparent;
        color:blueviolet;        
    }
    &.pilled{
        border-radius: 25px ;
    }
    &.circle{
        width: 40px;
        height: 40px;
        padding: 0;
    }
    &.w100{
        width: 100%;
    }
    &:hover{
        background-color: #641da7;
    }
`;

export default Button;