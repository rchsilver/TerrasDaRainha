import styled from "styled-components";

const SectionChoiceBox = styled.section`
li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    padding: 3px;
    border-radius: 50%;
    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
}
`
    
export {SectionChoiceBox}