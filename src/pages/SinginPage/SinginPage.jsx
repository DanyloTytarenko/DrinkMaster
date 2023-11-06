import { SinginForm } from "../../components/SinginForm/SinginForm"
import { Title } from "../SingupPage/SingupPage.styled"
import { WelcomeBox } from "../WelcomePage/WelcomePage.styled"

export default function SinginPage() {
    return (
        <WelcomeBox>
            <Title>Sign In</Title>
            <SinginForm/>
        </WelcomeBox>
    )
}