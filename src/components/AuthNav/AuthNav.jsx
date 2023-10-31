import { AuthLink, Singin } from "./AuthNav.styled"

export const AuthNav = () => {
    return (
        <>
            <AuthLink to='/singup'>Sing Up</AuthLink>
            <Singin to='/singin'>Sing In</Singin>
        </>
    )
}