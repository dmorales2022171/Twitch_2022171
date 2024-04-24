import toast from "react-hot-toast";
import { followChannel as followChannelRequest} from "../../services";

export const useFollowChannel = () => {
    const followChannel = async (channelId, onSuccess) => {
        const responseData = await followChannelRequest(channelId)

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data ||
                'Ocurrio un erro al seguir al canal'
            )
        }

        toast.success('Channel followed succesfully')
        onSuccess(true)

    }

    return{
        followChannel
    }
}