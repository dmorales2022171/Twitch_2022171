const imageUrl = 'https://banner2.cleanpng.com/20180630/jkk/kisspng-computer-icons-avatar-business-user-profile-5b37c7f6045724.2020068615303823260178.jpg'

const ChannelAvatar = ({url}) => {
    return(
        <div className="channels-avatar-container">
            <img src={url ? url  : imageUrl} width="100%" height="100%"  alt="userImage" />
        </div>
    )
}

export const ChannelCard = ({
    title,
    id, 
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
}) => {
    const handleNavigate = () => {
         navigateToChannelHandler(id)
    }

    return(
        <div className="channels-card" onClick={handleNavigate} >
            <ChannelAvatar url={avatarUrl} />
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{color: isOnline ? 'green' : 'red'}}>
                {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>
    )
}