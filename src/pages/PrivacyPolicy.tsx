import LegalPage from "../components/LegalPage";
import privacyPolicyMarkdown from "../content/legal/privacy-policy.md?raw";

export default function PrivacyPolicy() {
  return <LegalPage title="VoraTube Privacy Policy" markdown={privacyPolicyMarkdown} />;
}
