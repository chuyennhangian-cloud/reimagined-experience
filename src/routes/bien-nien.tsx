import { createFileRoute } from "@tanstack/react-router";
import { ChapterHeading, ChronicleShell, PageLink } from "@/components/chronicle-shell";
import { events } from "@/lib/chronicle-data";

export const Route = createFileRoute("/bien-nien")({ head: () => ({ meta: [
  { title: "Biên Niên — Bán Tinh Châu" }, { name: "description", content: "Những biến cố lớn từ thời đại cổ xưa đến lúc Bán Tinh Châu thức tỉnh." },
  { property: "og:title", content: "Biên Niên — Bán Tinh Châu" }, { property: "og:description", content: "Lịch sử đã được viết, nhưng tương lai chưa có người định." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ChroniclePage });

function ChroniclePage() { return <ChronicleShell glyph="紀年"><article className="chapter-page"><ChapterHeading number="V" title="Biên Niên" description="Lịch sử đã được viết. Nhưng tương lai chưa có người định." />
  <div className="timeline-ledger">{events.map(([name,desc],i) => <section key={name}><span>0{i+1}</span><i /><div><p>Kỷ nguyên {i+1}</p><h2>{name}</h2><small>{desc}</small></div></section>)}<section className="future"><span>∞</span><i/><div><p>Chưa định mệnh</p><h2>Tinh Môn mở rộng</h2><small>Trang tiếp theo vẫn còn trắng.</small></div></section></div>
  <div className="closing-note"><p>“Người đọc đến đây đã không còn đứng ngoài câu chuyện.”</p><PageLink to="/">Khép cổ thư</PageLink></div>
</article></ChronicleShell>; }
