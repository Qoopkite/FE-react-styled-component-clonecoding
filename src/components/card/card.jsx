import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    background-color: #f8f9fa;
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
`
const Thumbnail = styled.div`
    width: 100%;
    height: 220px;
    background-size: cover;
    background-position: center;
    border-radius: 7px;
    background-image: url('/src/assets/Thum.jpg');
`

const Wrapper2 = styled.div`
    width: calc(33.33% - 20px);
 
    border: 1px solid gray;
    border-radius: 7px;
`

const WordWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-top: 0px;
    padding-bottom: 15px;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: none;
`
const Button = styled.button`
    background-color: #f8f9fa;
    padding: 7px;
    border: none;
    color: #565d63;
    border: 1px solid gray; 
    position: relative;
    &:hover {
        background-color: gray;
        color: white;
    }
 
`;


const Min = styled.span`
    font-size: 13px;
    color:#565d63; 
    margin-left: 5px;
    margin-top :6px;
`
const P = styled.p`
    color: black;
    padding: 1rem;
`;

const Card2 = ()=>{
    return(
        <Wrapper>
            <Card /><Card /><Card />
            <Card /><Card /><Card />
            <Card /><Card /><Card />
        </Wrapper>
    )
}


const Card = ()=>{
    return(
        <Wrapper2>
            <Thumbnail></Thumbnail>
            <P>This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.</P>
            <WordWrapper>
                <ButtonWrapper>
                    <Button>View</Button>
                    <Button>Edit</Button>
                </ButtonWrapper>
                
                <Min>9 mins</Min>
            </WordWrapper>
        </Wrapper2>
    )
}

export default Card2;