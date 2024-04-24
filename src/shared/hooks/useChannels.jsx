import { useState } from "react";
import toast from "react-hot-toast";
import { getChannels as getChannelsRequest, getFollowedChannels } from "../../services/api";

export const useChannels = () => {
    const [channels, setChannels] = useState([])

    const getChannels = async(isLogged = false) => {
        const channelsData = await getChannelsRequest()

        if(channelsData.error){
            return toast.error(
                channelsData.e?.response?.data ||
                'ocurrio un erro al buscar los canales en la base de datos'
            )
        }

        if(!isLogged){
            return setChannels({
                channels: channelsData.data.channels
            })
        }

        const followedChannelsData = await getFollowedChannels()

        if(followedChannelsData.error){
            return toast.error(
                followedChannelsData.e?.response?.data ||
                'ocurrio un erro al buscar los canales en la base de datos'
            )
        }

        setChannels({
            channels: channelsData.data.channels,
            followedChannels: channelsData.data.channels.filter(channel => 
                followedChannelsData.data.followedChannels.includes(channel.id))
        })
    }

    return{
        getChannels,
        isFectching: !Boolean(channels),
        allChannels: channels?.channels,
        followedChannels: channels?.followedChannels
    }

}