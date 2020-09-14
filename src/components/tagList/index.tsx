import React from "react";
import Container from "./styled";
import Tag from "../tag";

type Props = {
    tags: Array<string>;
}

const TagList = ({ tags }: Props) => (
    <Container>
        {tags && Array.isArray(tags) && tags.map((item, index) => (
            <Tag title={item} key={index}/>
        ))}
    </Container>
);

export default TagList;
