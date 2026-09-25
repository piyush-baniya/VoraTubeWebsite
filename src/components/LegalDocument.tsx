import type { ReactNode } from "react";

type DocumentBlock =
  | { kind: "heading"; level: number; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; rows: string[][] }
  | { kind: "divider" };

function splitTableRow(line: string): string[] {
  return line
    .slice(1, -1)
    .split("|")
    .map((cell) => cell.trim());
}

function isTableSeparator(row: string[]): boolean {
  return row.length > 0 && row.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function parseBlocks(markdown: string): DocumentBlock[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: DocumentBlock[] = [];
  let paragraph: string[] = [];
  let bullets: string[] = [];
  let table: string[][] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    blocks.push({ kind: "paragraph", text: paragraph.join(" ").trim() });
    paragraph = [];
  };

  const flushBullets = () => {
    if (bullets.length === 0) return;
    blocks.push({ kind: "list", items: bullets });
    bullets = [];
  };

  const flushTable = () => {
    if (table.length === 0) return;
    const rows = table.filter((row) => !isTableSeparator(row));
    if (rows.length > 0) blocks.push({ kind: "table", rows });
    table = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line.startsWith("|") && line.endsWith("|")) {
      flushParagraph();
      flushBullets();
      table.push(splitTableRow(line));
      continue;
    }

    flushTable();

    if (line.length === 0) {
      flushParagraph();
      flushBullets();
      continue;
    }

    if (line === "---" || line === "***") {
      flushParagraph();
      flushBullets();
      blocks.push({ kind: "divider" });
      continue;
    }

    if (line.startsWith("#")) {
      flushParagraph();
      flushBullets();
      let level = 0;
      while (level < line.length && line[level] === "#") level += 1;
      blocks.push({
        kind: "heading",
        level,
        text: line.slice(level).trim(),
      });
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      flushParagraph();
      bullets.push(line.slice(2));
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushBullets();
  flushTable();
  return blocks;
}

function renderLink(href: string, label: ReactNode, key: string): ReactNode {
  if (/^https?:\/\//i.test(href)) {
    return (
      <a key={key} href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return <a key={key} href={href}>{label}</a>;
}

function renderCode(value: string, key: string): ReactNode {
  if (/^https?:\/\//i.test(value)) {
    return (
      <a key={key} href={value} target="_blank" rel="noreferrer">
        <code>{value}</code>
      </a>
    );
  }

  return <code key={key}>{value}</code>;
}

function renderPlainText(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(https?:\/\/[^\s<>"']+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;
  let cursor = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }

    const token = match[0];
    const key = `${keyPrefix}-${index}`;
    if (token.toLowerCase().startsWith("http")) {
      let href = token;
      let suffix = "";
      while (href.length > 0 && /[.,!?;:]/.test(href.charAt(href.length - 1))) {
        suffix = href.charAt(href.length - 1) + suffix;
        href = href.slice(0, -1);
      }
      if (href.length > 0) {
        nodes.push(renderLink(href, href, key));
      }
      if (suffix.length > 0) nodes.push(suffix);
    } else {
      nodes.push(renderLink(`mailto:${token}`, token, key));
    }

    cursor = match.index + token.length;
    index += 1;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+?\*\*|`[^`]+`|\*[^*]+?\*|\[[^\]]+\]\([^)]+\))/g;
  let cursor = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(
        ...renderPlainText(text.slice(cursor, match.index), `${keyPrefix}-text-${index}`),
      );
    }

    const token = match[0];
    const key = `${keyPrefix}-${index}`;

    if (token.startsWith("**")) {
      nodes.push(
        <strong key={key}>
          {renderInline(token.slice(2, -2), `${key}-strong`)}
        </strong>,
      );
    } else if (token.startsWith("`")) {
      nodes.push(renderCode(token.slice(1, -1), key));
    } else if (token.startsWith("[")) {
      const link = token.match(/^\[([\s\S]+)\]\(([^)]+)\)$/);
      if (link) {
        nodes.push(renderLink(link[2], renderInline(link[1], `${key}-label`), key));
      } else {
        nodes.push(token);
      }
    } else {
      nodes.push(
        <em key={key}>{renderInline(token.slice(1, -1), `${key}-em`)}</em>,
      );
    }

    cursor = match.index + token.length;
    index += 1;
  }

  if (cursor < text.length) {
    nodes.push(...renderPlainText(text.slice(cursor), `${keyPrefix}-text-${index}`));
  }

  return nodes;
}

function renderBlock(block: DocumentBlock, index: number): ReactNode {
  const key = `block-${index}`;

  if (block.kind === "heading") {
    const content = renderInline(block.text, `${key}-heading`);
    if (block.level === 1) return <h1 key={key}>{content}</h1>;
    if (block.level === 2) return <h2 key={key}>{content}</h2>;
    if (block.level === 3) return <h3 key={key}>{content}</h3>;
    return <h4 key={key}>{content}</h4>;
  }

  if (block.kind === "paragraph") {
    return <p key={key}>{renderInline(block.text, `${key}-paragraph`)}</p>;
  }

  if (block.kind === "list") {
    return (
      <ul key={key}>
        {block.items.map((item, itemIndex) => (
          <li key={`${key}-item-${itemIndex}`}>
            {renderInline(item, `${key}-item-${itemIndex}`)}
          </li>
        ))}
      </ul>
    );
  }

  if (block.kind === "divider") {
    return <hr key={key} />;
  }

  const [header, ...rows] = block.rows;
  return (
    <div className="policy__table-wrap" key={key}>
      <table>
        <thead>
          <tr>
            {header.map((cell, cellIndex) => (
              <th key={`${key}-header-${cellIndex}`} scope="col">
                {renderInline(cell, `${key}-header-${cellIndex}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${key}-row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${key}-row-${rowIndex}-cell-${cellIndex}`}>
                  {renderInline(cell, `${key}-row-${rowIndex}-cell-${cellIndex}`)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LegalDocument({ markdown }: { markdown: string }) {
  return <>{parseBlocks(markdown).map(renderBlock)}</>;
}
