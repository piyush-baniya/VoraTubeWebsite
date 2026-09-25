import { useEffect } from "react";
import LegalDocument from "./LegalDocument";

type LegalPageProps = {
  title: string;
  markdown: string;
};

export default function LegalPage({ title, markdown }: LegalPageProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="policy">
      <header className="policy__header">
        <a className="policy__home" href="/">
          <img src="/logo.png" alt="VoraTube logo" width={30} height={30} />
          <span>Back to VoraTube</span>
        </a>
      </header>
      <main className="policy__content container">
        <LegalDocument markdown={markdown} />
      </main>
    </div>
  );
}
