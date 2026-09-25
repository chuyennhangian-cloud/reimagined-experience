import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ChapterHeading, ChronicleShell, PageLink } from "@/components/chronicle-shell";
import { heroImage, worldMap, characters } from "@/lib/chronicle-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Bán Tinh Châu — Cổ thư Tinh Môn" },
    { name: "description", content: "Mở cổ thư Bán Tinh Châu và bước vào thiên hạ của tiên môn, thế lực, nhân vật và những bí ẩn chưa được viết." },
    { property: "og:title", content: "Bán Tinh Châu — Cổ thư Tinh Môn" },
    { property: "og:description", content: "Một thiên hạ được ghi lại qua năm chương của cổ thư Tinh Môn." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

const gateways = [
  ["01", "Thiên hạ", "Năm vực, một thiên hạ.", "/thien-ha"],
  ["02", "Thế lực", "Những bàn tay đang xoay chuyển càn khôn.", "/the-luc"],
  ["03", "Nhân vật", "Những người viết tiếp số mệnh.", "/nhan-vat"],
  ["04", "Địa đồ", "Lần theo những địa danh đã thức tỉnh.", "/dia-do"],
  ["05", "Biên niên", "Những vết mực còn sót lại của lịch sử.", "/bien-nien"],
] as const;

function Home() {
  return <ChronicleShell>
    <section className="cover-spread">
      <div className="cover-copy">
        <ChapterHeading number="Mở đầu" title="Bán Tinh Châu" description="Nơi một bước có thể thành tiên, một bước cũng có thể vạn kiếp bất phục." />
        <p className="opening-copy">Giữa giao giới Trung Châu và Đông Hoang, một vùng đất bị lịch sử bỏ quên đang tỉnh giấc. Tinh Môn đã mở — thiên hạ không còn người đứng ngoài cuộc.</p>
        <PageLink to="/thien-ha">Mở chương thứ nhất <ArrowRight /></PageLink>
      </div>
      <figure className="cover-art"><img src={heroImage} alt="Tinh Môn trên núi non Bán Tinh Châu" width={1088} height={1360} /><figcaption><span>Tinh Môn</span>Cổng trời · Sương khởi lúc nửa đêm</figcaption></figure>
    </section>
    <div className="cloud-divider"><span>☁</span><i /><span>✦</span><i /><span>☁</span></div>
    <section className="gateway-section">
      <div className="gateway-intro"><p className="eyebrow">Mục lục</p><h2>Năm chương<br/>của thiên hạ</h2><p>Mỗi chương mở ra một lát cắt riêng của Bán Tinh Châu.</p></div>
      <div className="gateway-list">{gateways.map(([number,title,desc,to], i) => <PageLink key={to} to={to}><span className="gateway-number">{number}</span><span><strong>{title}</strong><small>{desc}</small></span>{i === 2 && <img src={characters[1].image} alt="" />}{i === 3 && <img src={worldMap} alt="" />}</PageLink>)}</div>
    </section>
  </ChronicleShell>;
}
