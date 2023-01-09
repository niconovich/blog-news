import React from 'react'

interface dataCardtype {
  className?: string
  variant?: string
}

export const CardLesson = ({ className, variant }: dataCardtype) => {
    return (
        <div className={`card ${className} card--${variant}`}>
            <div className='card__header'>
                <div className='card__info'>
                    <span className='card__date'>April 20, 2021</span>
                    <h2 className='card__title'>Далеко-далеко за словесными горами.</h2>
                    <p className='card__description'>В стране гласных и согласных живут рыбные тексты. Эта одна ipsum напоивший своего продолжил. За ты знаках что несколько. Своего свой, дорогу предупредила заманивший пунктуация выйти своих скатился?</p>
                </div>
                <div className='card__image-wrapper'>
                    <img className='card__image' src='../../assets/work_7.jpg' alt='avatar' />
                </div>
            </div>
            <div className='card__footer'>
                <button>Like</button>
                <button>Dislike</button>
                <button>Mark</button>
                <button>Edit</button>
            </div>
        </div>
    )
}
