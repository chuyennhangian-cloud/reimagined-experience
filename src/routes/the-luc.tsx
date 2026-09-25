import { createFileRoute } from "@tanstack/react-router";
import { ChapterHeading, ChronicleShell, PageLink } from "@/components/chronicle-shell";
import { factions } from "@/lib/chronicle-data";

export const Route = createFileRoute("/the-luc")({ head: () => ({ meta: [
  { title: "Thế Lực — Bán Tinh Châu" }, { name: "description", content: "Hồ sơ sáu thế lực đang tranh đoạt cơ duyên tại Bán Tinh Châu." },
  { property: "og:title", content: "Thế Lực — Bán Tinh Châu" }, { property: "og:description", content: "Tiên môn, hoàng triều và yêu tộc giữa cơn biến động." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: FactionsPage });

function FactionsPage() { return <ChronicleShell glyph="勢力"><article className="chapter-page"><ChapterHeading number="II" title="Thế Lực" description="Thiên hạ không có một con đường duy nhất, cũng chưa từng chỉ có một người muốn chạm đến đỉnh cao." />
  <div className="faction-ledger">{factions.map(([seal,name,place,desc],i) => <section key={name}><span className="faction-seal">{seal}</span><div><p>Hồ sơ 0{i+1} · {place}</p><h2>{name}</h2><small>{desc}</small></div></section>)}</div>
  <div className="next-chapter"><PageLink to="/nhan-vat">Chương kế · Nhân vật</PageLink></div>
</article></ChronicleShell>; }
