import { AuthNav } from "../../components/AuthNav/AuthNav"
import { WelcomeBox, WelcomeText } from "./WelcomePage.styled"

export default function WelcomePage() {
    return (
        <WelcomeBox>
            <WelcomeText>This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.</WelcomeText>
            <AuthNav/>
        </WelcomeBox>  
    )
}