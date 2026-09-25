import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChapterHeading, ChronicleShell, PageLink } from "@/components/chronicle-shell";
import { realms, worldMap } from "@/lib/chronicle-data";

export const Route = createFileRoute("/thien-ha")({ head: () => ({ meta: [
  { title: "Thiên Hạ — Bán Tinh Châu" }, { name: "description", content: "Khám phá năm vực của Bán Tinh Châu: Trung Châu, Đông Hoang, Tây Vực, Nam Cương và Bắc Hải." },
  { property: "og:title", content: "Thiên Hạ — Bán Tinh Châu" }, { property: "og:description", content: "Năm vực và những miền đất đang thức tỉnh." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: RealmPage });

function RealmPage() {
  const [active, setActive] = useState(0);
  return <ChronicleShell glyph="天下"><article className="chapter-page"><ChapterHeading number="I" title="Thiên Hạ" description="Năm vực trải dưới cùng một vòm sao, nhưng chưa từng chung một vận mệnh." />
    <div className="feature-spread"><figure className="ink-image"><img src={worldMap} alt="Bản đồ cổ của năm vực" width={1440} height={912} /></figure><div className="realm-index">{realms.map(([name, description], index) => <button key={name} onClick={() => setActive(index)} className={active === index ? "is-active" : ""}><span>0{index + 1}</span><strong>{name}</strong>{active === index && <p>{description}</p>}</button>)}</div></div>
    <blockquote>“Thiên hạ rộng lớn, nhưng mọi con đường rồi cũng dẫn về Tinh Môn.”</blockquote>
    <div className="next-chapter"><PageLink to="/the-luc">Chương kế · Thế lực</PageLink></div>
  </article></ChronicleShell>;
}
