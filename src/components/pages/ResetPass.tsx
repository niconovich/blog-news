import {Breadcrumbs, Link,Typography} from "@mui/material";

import { Button } from '../Button/Button'
import { FormResetPassword } from '../Forms/FormResetPassword/FormResetPassword'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import 'bootstrap/dist/css/bootstrap.min.css'

export const ResetPass = ({ onClickHome }: any) => {
    return (
        <>
            <PageWrapper title={'Reset Password'}
                button={
                    <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumbs>
                    <Link underline="hover" color="inherit" href='/'>Home</Link>
                    <Typography color="text.primary">Reset Password</Typography>
                </Breadcrumbs>}>
                <FormResetPassword/>
            </PageWrapper>
        </>
    )
}
