import {Breadcrumbs, Link,Typography} from "@mui/material";

import { Button } from '../Button/Button'
import { FormSuccess } from '../Forms/FormSuccess/FormSuccess'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from "react-router-dom";

export const Success = ({ onClickHome }:any) => {
    return (
        <>
            <PageWrapper title={'Success'}
                button={
                    <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumbs>
                    <NavLink   to="/">Home</NavLink>
                    {/*<Link underline="hover" color="inherit" href='/'>Home</Link>*/}
                    <Typography color="text.primary">Success</Typography>
                </Breadcrumbs>}>
                <FormSuccess/>
            </PageWrapper>
        </>
    )
}
