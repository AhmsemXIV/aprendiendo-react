import { useState } from "react";

export function TwitterFollowCard ({formatUserName, userName, name}) {
    
    const [isFollowing, setIsFollowing] = useState(false);

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const butonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' 
            alt='El avatar de muestra' 
            src={`https://unavatar.io/${userName}`} />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-infoUserName'>
                {formatUserName(userName)}
                </span>
            </div>
        </header>

        <aside>
            <button className={butonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>
    );
}
