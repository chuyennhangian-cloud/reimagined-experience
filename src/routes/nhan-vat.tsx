import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChapterHeading, ChronicleShell, PageLink } from "@/components/chronicle-shell";
import { characters } from "@/lib/chronicle-data";

export const Route = createFileRoute("/nhan-vat")({ head: () => ({ meta: [
  { title: "Nhân Vật — Bán Tinh Châu" }, { name: "description", content: "Chân dung sáu nhân vật đang viết nên vận mệnh Bán Tinh Châu." },
  { property: "og:title", content: "Nhân Vật — Bán Tinh Châu" }, { property: "og:description", content: "Kiếm tu, đan sư, yêu tộc và những số mệnh giao nhau." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: CharactersPage });

function CharactersPage() {
  const [selected, setSelected] = useState<(typeof characters)[number] | null>(null);
  return <ChronicleShell glyph="人物"><article className="chapter-page"><ChapterHeading number="III" title="Nhân Vật" description="Tên họ được viết bằng mực. Số mệnh lại được viết bằng kiếm, máu và lựa chọn." />
    <div className="portrait-ledger">{characters.map((person,i) => <button key={person.name} onClick={() => setSelected(person)}><img src={person.image} alt={`Chân dung ${person.name}`} width={768} height={1024} /><span>0{i+1} · {person.sect}</span><strong>{person.name}</strong><small>{person.level}</small></button>)}</div>
    <div className="next-chapter"><PageLink to="/dia-do">Chương kế · Địa đồ</PageLink></div>
  </article>{selected && <div className="dossier" role="dialog" aria-modal="true" aria-label={`Hồ sơ ${selected.name}`}><Button variant="outline" size="icon" aria-label="Đóng hồ sơ" onClick={() => setSelected(null)} className="dossier-close"><X /></Button><div className="dossier-sheet"><img src={selected.image} alt={selected.name} /><div><p className="eyebrow">Hồ sơ nhân vật</p><h2>{selected.name}</h2><p>{selected.sect} · {selected.level}</p><dl><div><dt>Tuổi</dt><dd>{selected.age}</dd></div><div><dt>Linh căn</dt><dd>{selected.root}</dd></div><div><dt>Sở trường</dt><dd>{selected.weapon}</dd></div></dl><blockquote>“{selected.quote}”</blockquote></div></div></div>}</ChronicleShell>;
}
