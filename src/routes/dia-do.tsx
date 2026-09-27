import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChapterHeading, ChronicleShell, PageLink } from "@/components/chronicle-shell";
import { places, worldMap } from "@/lib/chronicle-data";

export const Route = createFileRoute("/dia-do")({ head: () => ({ meta: [
  { title: "Địa Đồ — Bán Tinh Châu" }, { name: "description", content: "Lần theo các thành trì, sơn mạch, dòng sông và bí cảnh của Bán Tinh Châu." },
  { property: "og:title", content: "Địa Đồ — Bán Tinh Châu" }, { property: "og:description", content: "Năm địa danh đang được ghi dấu trên cổ đồ." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: MapPage });

function MapPage() {
  const [active, setActive] = useState(0);
  return <ChronicleShell glyph="地圖"><article className="chapter-page"><ChapterHeading number="IV" title="Địa Đồ" description="Mỗi dấu mực là một nơi đã được biết. Những khoảng tối còn lại chưa chắc là đất trống." />
    <div className="map-sheet"><img src={worldMap} alt="Địa đồ Bán Tinh Châu" width={1440} height={912} />{places.map(([name,left,top],i) => <button key={name} onClick={() => setActive(i)} style={{left,top}} className={`map-pin ${active === i ? "is-active" : ""}`} aria-label={name}><i /><span>{name}</span></button>)}</div>
    <div className="place-caption"><span>0{active+1}</span><div><p>Địa danh đã ghi nhận</p><h2>{places[active]?.[0] ?? ""}</h2></div></div>
    <div className="next-chapter"><PageLink to="/bien-nien">Chương kế · Biên niên</PageLink></div>
  </article></ChronicleShell>;
}
