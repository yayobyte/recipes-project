import React, { useEffect } from "react";
import { useAssetCalls } from "../../redux/dispatchers";
import { useAssets } from "../../redux/selectors";

type Props = {
    id: string,
}

const ImgPreview = ({ id }: Props) => {
    // Hooks
    const { getAssets } = useAssetCalls();
    const { images } = useAssets();
    const { fields } = (images && images[id]) || {};

    //Effects
    useEffect(() => {
        if(id) {
            getAssets(id);
        }
    }, [id]);

    return (
        <div>
            {fields?.file?.url && 
                <img src={fields?.file?.url} />
            }
        </div>
    )
};

export default ImgPreview;
