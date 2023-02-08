import {Breadcrumbs, Link, Typography} from "@mui/material";
import {Button} from '../Button/Button'
import {FormSignUp} from '../Forms/FormSignUp/FormSignUp'
import {PageWrapper} from '../PageWrapper/PageWrapper'


export const SignUp = ({onClickHome}: any) => {
    return (
        <>
            <PageWrapper title={'Sign Up'}
                         breadcrumb={<Breadcrumbs>
                             <Link underline="hover" color="inherit" href='/'>Home</Link>
                             <Typography color="text.primary">Sign Un</Typography>
                         </Breadcrumbs>}>
                <FormSignUp/>
            </PageWrapper>
        </>
    )
}
