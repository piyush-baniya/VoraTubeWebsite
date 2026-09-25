import LegalPage from "../components/LegalPage";
import termsMarkdown from "../content/legal/terms-of-use.md?raw";

export default function TermsOfUse() {
  return <LegalPage title="VoraTube Terms of Use" markdown={termsMarkdown} />;
}
