import {Breadcrumbs, Link,Typography} from "@mui/material";

import { Button } from '../Button/Button'
import { FormSignIn } from '../Forms/FormSignIn/FormSignIn'
import { PageWrapper } from '../PageWrapper/PageWrapper'


export const SignIn = ({ onClickHome }: any) => {
    return (
        <>
            <PageWrapper title={'Sign In'}
                // button={
                //     <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                // }
                breadcrumb={<Breadcrumbs>
                        <Link underline="hover" color="inherit" href='/'>Home</Link>
                        <Typography color="text.primary">Sign In</Typography>
                    </Breadcrumbs>  }>
                <FormSignIn/>
            </PageWrapper>
        </>
    )
}
