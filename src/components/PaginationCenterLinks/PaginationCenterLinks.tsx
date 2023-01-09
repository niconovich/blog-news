import React from 'react'

import { Button } from '../Button/Button'
import '../Pagination/Pagination.scss'

export const PaginationCenterLinks = () => {
    return (
        <div className='pagination__center'>
            <Button className='pagination__btn'>1</Button>
            <Button className='pagination__btn'>2</Button>
            <Button className='pagination__btn'>3</Button>
            <Button className='pagination__btn'>4</Button>
            <Button className='pagination__btn'>...</Button>
            <Button className='pagination__btn'>6</Button>
        </div>
    )
}
