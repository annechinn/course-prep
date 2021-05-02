
import styled from "styled-components";
import topics from "../data/topics";

const StyledCategory = styled.div`
    display: inline-block;
    color: #fff;
    font-size: 9px;
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 10px;
`

const Category = ({topicKey}) => {
    const topic = topics[topicKey];
    const color = topic.color;
    const label = topic.label;
    return (
        <>
        <StyledCategory style={{backgroundColor:`${color}`}}>
            {label}
        </StyledCategory>
        </>
    )
}

export default Category;
