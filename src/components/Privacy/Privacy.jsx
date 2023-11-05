import { PrivacyWrap, MainTitle, Title, SubTitle, PrivacyText } from './Privacy.styled';

const Privacy = () => {
  return (
    <PrivacyWrap>
      <MainTitle>Privacy Policy</MainTitle>

      <Title>
        Your privacy is important to us.  This section outlines how we collect, use, process, and protect your personal data. This Privacy Policy applies to the use of our website, applications, and services, so please take a moment to read it.
      </Title>

      <PrivacyText>
        <SubTitle>What personal data do we collect:</SubTitle>&nbsp;
        We may collect various types of personal data that you voluntarily provide when interacting with our website, registering an account or filling out forms. This may include your name, email address, phone number and more.
      </PrivacyText>

      <PrivacyText>
        <SubTitle>How we use your personal data:</SubTitle>&nbsp;
        We use the collected personal data to provide services, manage your account, provide you with information about our products and services, and to communicate with you regarding inquiries and updates.
      </PrivacyText>

      <PrivacyText>
        <SubTitle> Protection of personal data:</SubTitle>&nbsp;
        We take every effort to protect your information and use modern technologies to prevent unauthorized access, loss, or disclosure of your personal information.
      </PrivacyText>

      <PrivacyText>
        <SubTitle>Disclosure to third parties:</SubTitle>&nbsp;
        We do not disclose your personal data to third parties without your consent, except when required by law or to provide the services you requested.
      </PrivacyText>

      <PrivacyText>
        <SubTitle>Changes to the Privacy Policy:</SubTitle>&nbsp;
        We may periodically update this Privacy Policy. Please refer to this page to stay informed about any changes.
      </PrivacyText>

      <PrivacyText>
        <SubTitle>Contact us:</SubTitle>&nbsp;
        If you have any questions or concerns regarding this Privacy Policy or your information, please contact us using the contact details provided on our website.
      </PrivacyText>
    </PrivacyWrap>
  )
}

export default Privacy;
