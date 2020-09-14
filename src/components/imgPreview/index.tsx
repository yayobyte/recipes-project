import React, { useEffect } from "react";
import { useAssetCalls } from "../../redux/dispatchers";
import { useAssets } from "../../redux/selectors";

type Props = {
    assetId: string,
    width: number,
}

const ImgPreview = ({ assetId, width }: Props) => {
    // Hooks
    const { getAssets } = useAssetCalls();
    const { images } = useAssets();
    const { fields } = (images && images[assetId]) || {};

    //Effects
    useEffect(() => {
        if(assetId) {
            getAssets(assetId);
        }
    }, [assetId]);

    return (
        <div>
            {fields?.file?.url && 
                <img src={fields?.file?.url} width={width}/>
            }
        </div>
    )
};

export default ImgPreview;
