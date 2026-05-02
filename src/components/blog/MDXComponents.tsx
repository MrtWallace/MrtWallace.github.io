import Link from "next/link";
import { CopyButton } from "@/components/blog/CopyButton";

// pre 组件：包裹代码块，右上角注入复制按钮
function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  // 提取代码文本用于复制
  const codeText =
    typeof children === "object" &&
    children !== null &&
    "props" in (children as React.ReactElement)
      ? ((children as React.ReactElement).props?.children ?? "")
      : String(children ?? "");

  return (
    <div className="relative group my-4">
      <CopyButton text={String(codeText)} />
      <pre {...props}>{children}</pre>
    </div>
  );
}

// a 组件：外链新标签，内链用 Next.js Link
function Anchor({
  href = "",
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

export const MDXComponents = {
  pre: Pre,
  a: Anchor,
};
