import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const chapters = [
  ["/", "Trang chủ", "00"], ["/thien-ha", "Thiên hạ", "01"],
  ["/the-luc", "Thế lực", "02"], ["/nhan-vat", "Nhân vật", "03"],
  ["/dia-do", "Địa đồ", "04"], ["/bien-nien", "Biên niên", "05"],
] as const;

export function ChronicleShell({ children, glyph = "半星洲" }: { children: ReactNode; glyph?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <main className="chronicle-page">
      <div className="codex-frame">
        <div className="corner corner-nw" /><div className="corner corner-se" />
        <aside className={`codex-nav ${open ? "is-open" : ""}`}>
          <div className="flex items-center justify-between lg:block">
            <Link to="/" onClick={() => setOpen(false)} className="font-serif text-xl">Bán Tinh Châu</Link>
            <Button variant="ghost" size="icon" aria-label="Đóng mục lục" onClick={() => setOpen(false)} className="lg:hidden"><X /></Button>
          </div>
          <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Quyển I · Tinh Môn</p>
          <nav aria-label="Mục lục" className="mt-12 flex flex-col gap-6">
            {chapters.map(([to, label, number]) => {
              const active = pathname === to;
              return <Link key={to} to={to} onClick={() => setOpen(false)} className={`chapter-link ${active ? "is-active" : ""}`}><span>{number}</span><i />{label}</Link>;
            })}
          </nav>
          <p className="mt-auto hidden max-w-40 text-[10px] uppercase leading-5 tracking-[0.18em] text-muted-foreground lg:block">Biên niên của vùng đất nằm giữa tinh không và phàm thế.</p>
        </aside>

        <div className="codex-content">
          <header className="mobile-bar">
            <Link to="/" className="font-serif text-lg">Bán Tinh Châu</Link>
            <Button variant="ghost" size="icon" aria-label="Mở mục lục" onClick={() => setOpen(true)}><Menu /></Button>
          </header>
          <div className="vertical-glyph" aria-hidden="true">{glyph}</div>
          {children}
        </div>
      </div>
    </main>
  );
}

export function ChapterHeading({ number, title, description }: { number: string; title: string; description: string }) {
  return <header className="chapter-heading"><div className="sigil" aria-hidden="true">✦</div><p>Chương {number}</p><h1>{title}</h1><span className="seal" aria-hidden="true">録</span><p className="chapter-description">{description}</p></header>;
}

export function PageLink({ to, children }: { to: "/" | "/thien-ha" | "/the-luc" | "/nhan-vat" | "/dia-do" | "/bien-nien"; children: ReactNode }) {
  return <Button asChild variant="outline" className="codex-button"><Link to={to}>{children}</Link></Button>;
}