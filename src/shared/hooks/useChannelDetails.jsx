import { useState } from "react";
import {toast} from "react-hot-toast";
import { getChannelsDetails as getChannelDetailsRequest } from "../../services";

export const useChannelDetails = () =>{
    const [channelDetails, setChannelDetails] = useState()

    const getChannelsDetails = async (id)=>{
        const responseData = await getChannelDetailsRequest(id)

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data ||
                'error al cargar la informacion del canal'
            )

    } setChannelDetails(responseData)

    }
    return{
        channelDetails,
        isFetching: !channelDetails,
        getChannelsDetails
    }
}