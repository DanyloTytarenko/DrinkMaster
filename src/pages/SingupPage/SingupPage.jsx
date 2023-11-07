import { SingupForm } from "../../components/SingupForm/SingupForm"
import { Title } from "./SingupPage.styled"
import { WelcomeBox } from "../WelcomePage/WelcomePage.styled"

export default function SingupPage() {
    return (
        <WelcomeBox>
            <Title>Sign Up</Title>
                <SingupForm/> 
        </WelcomeBox>
    )
}