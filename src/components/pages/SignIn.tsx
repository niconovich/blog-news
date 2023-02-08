import {Breadcrumbs, Link, Typography} from "@mui/material";

import {Button} from '../Button/Button'
import {FormSignIn} from '../Forms/FormSignIn/FormSignIn'
import {PageWrapper} from '../PageWrapper/PageWrapper'
import {NavLink} from "react-router-dom";


export const SignIn = ({onClickHome}: any) => {
    return (
        <>
            <PageWrapper title={'Sign In'}
                         breadcrumb={<Breadcrumbs>
                             <NavLink   to="/">Home</NavLink>
                             {/*<Link underline="hover" color="inherit" href='/'>Home</Link>*/}
                             <Typography color="text.primary">Sign In</Typography>
                         </Breadcrumbs>}>
                <FormSignIn/>
            </PageWrapper>
        </>
    )
}
