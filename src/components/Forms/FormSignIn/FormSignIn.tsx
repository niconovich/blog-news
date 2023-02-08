import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {NavLink, useNavigate} from 'react-router-dom'

import {signin} from '../../../redux/actionCreators/userActionCreators'

import {Button} from '../../Button/Button'
import {Input} from '../../Input/Input'
import './FormSignIn.scss'

export const FormSignIn = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const [password, setPassword] = useState('')
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const [error, setError] = useState(false)
    const onSubmit = (event: { preventDefault: () => any; target: any }) => {
        event.preventDefault()
        if (email.length < 0) {
            setError(!error)
        }
        if (password.length < 0) {
            setError(!error)
        }
        dispatch(signin({
            email: event.target[1].value,
            password: event.target[3].value,
        }, navigate))
    }

    return (
        <form className='form-sign-in'
              onSubmit={onSubmit}>
            <Input className='form__input'
                   label='E-mail'
                   placeholder='Your e-mail'
                   type='email'
                   error={error}
                   onChange={handleEmail}
                   value={email}/>
            <Input className='form__input'
                   label='Password'
                   type='password'
                   placeholder='Your password'
                   error={error}
                   onChange={handlePassword}
                   value={password}
            />

            <div className='form__submit'>
                <Button className='form__btn'
                        type='submit'
                        children='Sign In'/>
                <p className='submit__text'>
                    <span>Don`t have an account?</span>
                    <NavLink  to='/sign_up'>  Sign Up  </NavLink>
                </p>
            </div>
        </form>
    )
}

