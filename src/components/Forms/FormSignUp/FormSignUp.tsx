import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { signup } from '../../../redux/actionCreators/userActionCreators'

import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import '../Form.scss'

export const FormSignUp = () => {
    const [error, setError] = useState(false)
    const dispatch = useDispatch();
    const onSubmit = (event: { preventDefault: () => any; target: any }) => {
        event.preventDefault()
        if (event.target < 0) {
            setError(true)
        } else {
            setError(false)
            dispatch(signup({
                username: event.target[1].value,
                email: event.target[3].value,
                password: event.target[5].value,
            }))
        }
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <Input className='form__input' label='Name' placeholder='Your name' type='text'/>
            <Input className='form__input' label='E-mail' placeholder='Your e-mail' type='email'/>
            <Input className='form__input' label='Password' type='password' placeholder='Your password'/>
            <Input className='form__input' label='Confirm password' type='password' placeholder='Confirm password'/>
            <div className='form__submit'>
                <Button className='form__btn' type='submit' children='Sign Up'/>
                <p className='submit__text'>Already have an account?
                    <NavLink style={{textDecoration: 'none'}} to='/sign_in'>
                        <span>Sign In</span>
                    </NavLink>
                </p>
            </div>
        </form>
    )
}