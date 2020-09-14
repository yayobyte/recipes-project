import React from "react";
import ReactMarkdown from "react-markdown";
import Container from "./styled";
import { Calories, Chef, TagList } from "../../components";

type Props = {
    description: string,
    calories: string,
    chef: string,
    tags?: Array<string>;
}

const CardContent = ({ description, calories, chef, tags }: Props) => {
    return (
        <Container>
            <hr />
            <div className="description">
                <ReactMarkdown source={description} />
            </div>
            {calories && <Calories amount={calories} />}
            {chef &&  <Chef name={chef} />}
            {tags && <TagList tags={tags} />}
        </Container>
    )
};

export default CardContent;