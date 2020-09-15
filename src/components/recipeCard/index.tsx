import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Container from "./styled";
import { CardHeader, CardContent, CardFooter } from "../../components";
import { useEntryCalls } from "../../redux/dispatchers";
import { useSingleRecipe, useEntries } from "../../redux/selectors";
import messages from "../../i18n";
import { RECIPES } from "../../config/routes";

const RecipeCard = () => {
    //Hooks
    const { recipe } = useSingleRecipe();
    const history = useHistory();
    const { getEntry } = useEntryCalls();
    const { entry } = useEntries();
    const [tagList, setTagList] = useState<Array<string>>([]);

    const { chef, tags } = recipe;

    //functions
    const onClickBack = useCallback(() => {
        history.push(RECIPES);
    }, [history]);

    //Effects
    useEffect(() => {
        if(chef?.sys?.id) {
            getEntry(chef?.sys?.id);
        }
        if(tags && Array.isArray(tags)) {
            tags.forEach(({ sys }) => {
                if (sys?.id) {
                    getEntry(sys.id);
                }
            });
        }
    }, [chef, tags]);

    useEffect(() => {
        let tagNames : Array<string> = [];
        if(tags && Array.isArray(tags)){
            tags.forEach(() => {
                tags.forEach(({ sys }) => {
                    if (sys?.id && entry) {
                        tagNames.push(entry[sys.id]?.fields?.name);
                    }
                });
            })
        }
        const tagsFiltered = tagNames.filter((item, index) => tagNames.indexOf(item) === index);
        setTagList(tagsFiltered);
    }, [entry, tags]);

    return (
        <Container>
            <CardHeader title={recipe?.title}/>
            <CardContent description={recipe?.description} calories={recipe?.calories} chef={(entry && entry[chef?.sys?.id]?.fields?.name )|| null} tags={tagList}/>
            <CardFooter click={onClickBack} title={messages.recipe.goBackButton} id="back-to-recipes"/>
        </Container>
    );
}

export default RecipeCard;
