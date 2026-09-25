import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, LockKeyhole, Menu, Search, X } from "lucide-react";
import heroImage from "../assets/tinh-mon-hero.jpg";
import worldMap from "../assets/thien-ha-map.jpg";
import lucPortrait from "../assets/portrait-luc-tram-chu.jpg";
import vanChiPortrait from "../assets/portrait-ta-van-chi.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bán Tinh Châu — Biên niên Tinh Môn" },
      { name: "description", content: "Khám phá thế giới tiên hiệp Bán Tinh Châu, năm vực, các thế lực và những nhân vật đang viết nên thiên hạ." },
      { property: "og:title", content: "Bán Tinh Châu — Biên niên Tinh Môn" },
      { property: "og:description", content: "Tinh môn đã mở. Người trong thiên hạ, chẳng ai còn đứng ngoài cuộc." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const realms = [
  ["Trung Châu", "Trung tâm của nhân tộc, nơi tiên môn, thế gia và hoàng triều cùng tồn tại."],
  ["Đông Hoang", "Rừng núi vô tận, cổ thú hoành hành và vô số bí cảnh chưa từng được khai phá."],
  ["Tây Vực", "Biển cát chôn giấu những di tích của một nền văn minh đã biến mất."],
  ["Nam Cương", "Lãnh địa của yêu tộc, cổ trùng và những huyết mạch cổ xưa."],
  ["Bắc Hải", "Biển trời vô tận, nơi long cung và thủy phủ cổ tồn tại dưới đáy sâu."],
];

const factions = [
  ["玄", "Thái Huyền Tông", "Trung Châu", "Kiếm đạo chính thống, tọa lạc giữa những linh sơn."],
  ["法", "Vạn Pháp Môn", "Trung Châu", "Trận đạo, phù thuật và vô số pháp môn hội tụ."],
  ["丹", "Đan Dương Cốc", "Quần sơn", "Thánh địa của những luyện đan sư trong thiên hạ."],
  ["機", "Thiên Cơ Các", "Không rõ", "Không bán pháp bảo. Chỉ bán điều người khác muốn giấu."],
  ["龍", "Đại Ung Hoàng Triều", "Trung Châu", "Hoàng triều nắm giữ long mạch của phàm thế."],
  ["妖", "Vạn Yêu Sơn", "Nam Cương", "Lãnh địa của những yêu tộc mang huyết mạch cổ."],
];

const characters = [
  { name: "Lục Trầm Chu", sect: "Thái Huyền Tông", level: "Trúc Cơ hậu kỳ", age: "24", root: "Kim linh căn", weapon: "Thanh Hoài kiếm", quote: "Kiếm trong tay, đường dưới chân. Còn sống thì còn có thể đi tiếp.", image: lucPortrait },
  { name: "Tạ Vãn Chi", sect: "Tạ gia", level: "Trúc Cơ trung kỳ", age: "21", root: "Thủy Mộc song linh căn", weapon: "Luyện đan", quote: "Có những bí mật, càng biết nhiều càng không thể quay đầu.", image: vanChiPortrait },
  { name: "Mặc Kỳ", sect: "Tán tu", level: "Kim Đan sơ kỳ", age: "Không rõ", root: "Dị linh căn Lôi", weapon: "Hắc thiết trường đao", quote: "Cơ duyên hay tai họa, trước hết cứ xem thứ gì đáng giá hơn.", image: lucPortrait },
  { name: "Yêu Cửu", sect: "Yêu tộc", level: "Kim Đan hậu kỳ", age: "137", root: "Cửu Vĩ Hồ tộc", weapon: "Ngọc cổ", quote: "Nhân gian có rất nhiều thứ thú vị. Ví dụ như lời nói dối.", image: vanChiPortrait },
  { name: "Cố Hoài An", sect: "Đại Ung", level: "Trúc Cơ viên mãn", age: "28", root: "Hỏa linh căn", weapon: "Xích Long thương", quote: "Nếu long mạch đã có chủ, vậy người ngồi trên long ỷ là ai?", image: lucPortrait },
  { name: "Thẩm Tịch", sect: "Huyền Minh Cung", level: "Kim Đan sơ kỳ", age: "26", root: "Âm linh căn", weapon: "Hồn thuật", quote: "Ta không sợ ma. Ta chỉ sợ người sống.", image: vanChiPortrait },
];

const events = [
  ["Thời đại cổ xưa", "Một trận đại chiến khiến vô số bí mật bị xóa khỏi lịch sử."],
  ["Tinh Môn xuất hiện", "Một cánh cửa khổng lồ xuất hiện trên bầu trời Trung Châu."],
  ["Linh mạch suy kiệt", "Những linh mạch cổ bắt đầu lần lượt khô cạn."],
  ["Bí cảnh thức tỉnh", "Các cổ địa lần lượt mở cửa."],
  ["Bán Tinh Châu biến động", "Các thế lực đồng loạt tiến vào vùng đất này."],
];

function Index() {
  const [entered, setEntered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRealm, setActiveRealm] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState<(typeof characters)[number] | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {!entered && (
        <div className="opening fixed inset-0 z-[100] grid place-items-center bg-background px-6 text-center">
          <div className="celestial-ring absolute size-[min(74vw,38rem)] rounded-full border border-foreground/15" />
          <div className="relative z-10">
            <p className="mb-6 text-xs uppercase tracking-[0.38em] text-muted-foreground">「 半 星 洲 」</p>
            <h1 className="font-brand text-6xl uppercase sm:text-8xl">Bán Tinh Châu</h1>
            <p className="mx-auto mt-7 max-w-xl font-serif text-xl italic text-muted-foreground sm:text-2xl">“Tinh môn đã mở, thiên hạ không còn người đứng ngoài cuộc.”</p>
            <button className="mt-10 border border-foreground/35 px-7 py-3 text-xs uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background" onClick={() => setEntered(true)}>Nhập châu</button>
          </div>
        </div>
      )}

      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${scrolled ? "border-border bg-background/85 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-10">
          <button onClick={() => go("top")} className="flex min-w-0 items-center gap-3 text-left">
            <span className="grid size-8 shrink-0 place-items-center border border-foreground/30 font-serif text-lg">半</span>
            <span className="truncate font-brand text-xl">Bán Tinh Châu</span>
          </button>
          <nav className="hidden items-center gap-6 lg:flex">
            {["thiên-hạ", "thế-lực", "nhân-vật", "địa-đồ", "đại-sự-kiện"].map((id) => <button key={id} onClick={() => go(id)} className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">{id.replaceAll("-", " ")}</button>)}
            <Search className="size-4 text-muted-foreground" aria-label="Tìm kiếm" />
            <button onClick={() => go("nhap-the")} className="bg-foreground px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-background">Nhập thế</button>
          </nav>
          <button aria-label="Mở menu" onClick={() => setMenuOpen(true)} className="grid size-10 place-items-center lg:hidden"><Menu className="size-5" /></button>
        </div>
      </header>

      {menuOpen && <div className="fixed inset-0 z-[70] flex flex-col bg-background p-6"><button aria-label="Đóng menu" onClick={() => setMenuOpen(false)} className="ml-auto grid size-10 place-items-center"><X /></button><nav className="m-auto flex flex-col items-center gap-7">{["thiên-hạ", "thế-lực", "nhân-vật", "địa-đồ", "đại-sự-kiện"].map((id) => <button key={id} onClick={() => go(id)} className="font-serif text-4xl capitalize">{id.replaceAll("-", " ")}</button>)}</nav></div>}

      <section id="top" className="relative mx-auto grid min-h-[94vh] max-w-7xl items-end gap-10 px-5 pb-16 pt-28 lg:grid-cols-12 lg:px-10 lg:pb-20">
        <div className="relative z-10 lg:col-span-7 lg:pb-10">
          <p className="animate-rise mb-6 text-xs uppercase tracking-[0.35em] text-muted-foreground">Biên niên thiên văn · Tập I</p>
          <p className="mb-4 font-serif text-xl text-muted-foreground">「 半 星 洲 」</p>
          <h1 className="animate-rise font-brand text-6xl uppercase leading-[0.92] sm:text-8xl lg:text-9xl">Bán Tinh<br />Châu</h1>
          <p className="animate-rise mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-muted-foreground sm:text-2xl">“Nơi một bước có thể thành tiên, một bước cũng có thể vạn kiếp bất phục.”</p>
          <div className="mt-10 flex flex-wrap items-center gap-5"><button onClick={() => go("thiên-hạ")} className="bg-foreground px-7 py-3 text-xs uppercase tracking-[0.18em] text-background">Khám phá thiên hạ</button><button onClick={() => go("nhân-vật")} className="border-b border-foreground/30 py-2 text-xs uppercase tracking-[0.18em]">Xem nhân vật</button></div>
        </div>
        <div className="relative min-h-[30rem] overflow-hidden border border-border lg:col-span-5 lg:h-[72vh]">
          <img src={heroImage} alt="Tinh Môn lơ lửng trên núi non Bán Tinh Châu" width={1088} height={1360} className="h-full w-full object-cover transition-transform duration-[1800ms] hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="celestial-ring absolute right-5 top-5 size-24 rounded-full border border-foreground/25" />
          <div className="absolute bottom-5 left-5 right-5 border border-border bg-background/65 p-4 backdrop-blur-md"><p className="font-serif text-2xl">Tinh Môn</p><p className="mt-1 text-xs text-muted-foreground">Cổng trời · Sương khởi lúc nửa đêm</p></div>
        </div>
        <button onClick={() => go("intro")} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground lg:flex">Cuộn xuống<ChevronDown className="size-4" /></button>
      </section>

      <section id="intro" className="section-shell border-t border-border">
        <div><p className="section-kicker">(a) Biên niên</p><h2 className="section-title">Bán Tinh Châu</h2><div className="mt-9 grid size-24 place-items-center rounded-full border border-foreground/20 font-serif text-4xl text-muted-foreground">洲</div></div>
        <div className="max-w-3xl"><p className="font-serif text-2xl leading-relaxed text-muted-foreground sm:text-3xl">Bán Tinh Châu nằm giữa giao giới của Trung Châu và Đông Hoang, là nơi linh mạch cổ giao hội và cũng là vùng đất từng bị lịch sử bỏ quên.</p><p className="mt-8 leading-8 text-muted-foreground">Tiên môn tìm đến vì linh mạch, thế gia tìm đến vì truyền thừa, hoàng triều truy tìm long mạch, yêu tộc lần theo dấu vết huyết thống, còn vô số tán tu chỉ mong tìm được một cơ duyên đủ để thay đổi vận mệnh.</p><p className="mt-10 border-l border-foreground/40 pl-6 font-serif text-2xl italic">Không ai biết thứ gì đang ngủ dưới lòng đất nơi đây.</p></div>
      </section>

      <section id="thiên-hạ" className="content-shell border-t border-border">
        <div className="section-head"><div><p className="section-kicker">(b) Năm vực</p><h2 className="section-title">Thiên Hạ</h2><p className="section-subtitle">Năm vực, một thiên hạ.</p></div><span className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:block">Chọn một vùng để xem</span></div>
        <div className="grid gap-7 lg:grid-cols-12"><div className="relative overflow-hidden border border-border lg:col-span-7"><img src={worldMap} alt="Bản đồ cổ của năm vực" loading="lazy" width={1440} height={912} className="aspect-[16/10] h-full w-full object-cover" /><span className="map-pulse absolute left-1/2 top-1/2 size-3 rounded-full bg-foreground" /></div><div className="space-y-2 lg:col-span-5">{realms.map(([name, description], index) => <button key={name} onMouseEnter={() => setActiveRealm(index)} onClick={() => setActiveRealm(index)} className={`w-full border p-5 text-left transition-all ${activeRealm === index ? "border-foreground/40 bg-card" : "border-border bg-card/40"}`}><div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4"><h3 className="min-w-0 font-serif text-2xl">{name}</h3><span className="shrink-0 text-xs text-muted-foreground">0{index + 1}</span></div>{activeRealm === index && <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>}</button>)}</div></div>
      </section>

      <section id="thế-lực" className="content-shell border-t border-border"><div className="section-head"><div><p className="section-kicker">(c) Hồ sơ</p><h2 className="section-title">Thế Lực</h2><p className="section-subtitle">Thiên hạ không có một con đường duy nhất.</p></div></div><div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">{factions.map(([seal, name, place, desc]) => <article key={name} className="group bg-background p-7 transition-colors hover:bg-card"><div className="flex items-start justify-between"><span className="grid size-14 place-items-center rounded-full border border-foreground/20 font-serif text-2xl text-muted-foreground">{seal}</span><span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{place}</span></div><h3 className="mt-8 font-serif text-2xl">{name}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{desc}</p><button className="mt-7 border-b border-foreground/20 pb-1 text-[10px] uppercase tracking-[0.2em]">Xem hồ sơ</button></article>)}</div></section>

      <section id="nhân-vật" className="content-shell border-t border-border"><div className="section-head"><div><p className="section-kicker">(d) Chân dung</p><h2 className="section-title">Nhân Vật</h2><p className="section-subtitle">Những người đang viết nên thiên hạ.</p></div></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{characters.map((c, index) => <button key={c.name} onClick={() => setSelectedCharacter(c)} className="character-card group relative aspect-[3/4] overflow-hidden border border-border text-left"><img src={c.image} alt={`Chân dung ${c.name}`} loading="lazy" width={768} height={1024} className={`h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 ${index > 1 ? "opacity-70 grayscale-[35%]" : ""}`} /><div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-2"><p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.sect} · {c.level}</p><h3 className="mt-2 font-serif text-3xl">{c.name}</h3><p className="mt-3 line-clamp-2 font-serif italic text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">“{c.quote}”</p></div></button>)}</div></section>

      <section id="địa-đồ" className="content-shell border-t border-border"><div className="section-head"><div><p className="section-kicker">(e) Địa đồ</p><h2 className="section-title">Bán Tinh Châu</h2></div></div><div className="relative overflow-hidden border border-border"><img src={worldMap} alt="Địa đồ Bán Tinh Châu" loading="lazy" width={1440} height={912} className="h-[32rem] w-full object-cover opacity-70" /><div className="absolute inset-0 bg-background/25" />{[["Tinh La Thành","50%","51%"],["Vọng Nguyệt Sơn","68%","24%"],["Hắc Thủy Hà","51%","79%"],["Táng Kiếm Cốc","82%","51%"],["Vô Tận Lâm","34%","69%"]].map(([name,left,top]) => <button key={name} style={{left,top}} className="map-marker absolute -translate-x-1/2 -translate-y-1/2"><span className="block size-2 rounded-full bg-foreground" /><span className="absolute left-4 top-1/2 hidden -translate-y-1/2 whitespace-nowrap bg-background/85 px-3 py-2 text-[10px] uppercase tracking-[0.16em] backdrop-blur sm:block">{name}</span></button>)}</div></section>

      <section id="đại-sự-kiện" className="section-shell border-t border-border"><div><p className="section-kicker">(f) Đại sự kiện</p><h2 className="section-title">Dòng thời gian</h2><p className="section-subtitle">Lịch sử đã được viết. Nhưng tương lai chưa có người định.</p></div><div>{events.map(([name, desc], i) => <article key={name} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-5 border-b border-border py-6"><span className="font-serif text-2xl text-muted-foreground">0{i+1}</span><div><h3 className="font-serif text-2xl">{name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p></div></article>)}<article className="mt-6 border border-dashed border-foreground/20 p-7 blur-[1px]"><p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Chưa định mệnh</p><p className="mt-3 font-serif text-2xl">Tinh Môn mở rộng</p></article></div></section>

      <section className="content-shell border-t border-border"><div className="section-head"><div><p className="section-kicker">(g) Tin mới</p><h2 className="section-title">Tinh Môn</h2></div></div><div className="grid gap-px bg-border md:grid-cols-2">{["Đấu giá hội Tinh La Thành chính thức mở cửa.","Có người nhìn thấy ánh sáng kỳ lạ trên Vọng Nguyệt Sơn.","Một nhóm tu sĩ mất tích tại Táng Kiếm Cốc.","Thiên Cơ Các phát đi cảnh báo đầu tiên sau ba mươi năm."].map((title,i)=><article key={title} className="bg-card p-7"><p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Biên niên 0{i+1} · Tinh La</p><h3 className="mt-5 font-serif text-2xl">{title}</h3><button className="mt-8 border-b border-foreground/20 pb-1 text-[10px] uppercase tracking-[0.2em]">Đọc tiếp</button></article>)}</div></section>

      <section id="nhap-the" className="relative min-h-[70vh] overflow-hidden border-t border-border"><img src={heroImage} alt="Tinh Môn chờ người nhập thế" loading="lazy" width={1088} height={1360} className="absolute inset-0 h-full w-full object-cover object-center" /><div className="absolute inset-0 bg-background/75" /><div className="relative z-10 mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center"><p className="section-kicker">Lời mời</p><h2 className="font-serif text-5xl uppercase leading-tight sm:text-7xl">Bán Tinh Châu vẫn còn rất nhiều câu chuyện chưa được viết.</h2><p className="mt-7 font-serif text-2xl italic text-muted-foreground">Ngươi sẽ đứng ở đâu khi Tinh Môn mở?</p><button className="mt-10 bg-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] text-background">Nhập thế</button></div></section>

      <footer className="border-t border-border px-6 py-12 text-center"><span className="mx-auto grid size-12 place-items-center rounded-full border border-foreground/20 font-serif text-xl">半</span><p className="mt-5 font-serif text-xl">Bán Tinh Châu</p><p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Tinh môn đã mở · Biên niên thiên văn</p></footer>

      {selectedCharacter && <div className="fixed inset-0 z-[80] overflow-y-auto bg-background/95 p-4 backdrop-blur-xl sm:p-8"><button aria-label="Đóng hồ sơ" onClick={() => setSelectedCharacter(null)} className="fixed right-5 top-5 z-10 grid size-11 place-items-center border border-border bg-background"><X /></button><div className="mx-auto grid min-h-full max-w-5xl items-center gap-8 py-14 lg:grid-cols-2"><img src={selectedCharacter.image} alt={selectedCharacter.name} width={768} height={1024} className="max-h-[75vh] w-full border border-border object-cover" /><div><p className="section-kicker">Hồ sơ nhân vật</p><h2 className="font-serif text-5xl sm:text-6xl">{selectedCharacter.name}</h2><p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{selectedCharacter.sect} · {selectedCharacter.level}</p><dl className="mt-8 grid grid-cols-2 gap-px bg-border"><Info label="Tuổi" value={selectedCharacter.age}/><Info label="Linh căn" value={selectedCharacter.root}/><Info label="Sở trường" value={selectedCharacter.weapon}/><Info label="Cảnh giới" value={selectedCharacter.level}/></dl><p className="mt-8 font-serif text-2xl italic leading-relaxed text-muted-foreground">“{selectedCharacter.quote}”</p><div className="mt-9 flex gap-6 border-b border-border text-[10px] uppercase tracking-[0.18em]"><span className="border-b border-foreground pb-3">Hồ sơ</span><span className="pb-3 text-muted-foreground">Quan hệ</span><span className="pb-3 text-muted-foreground">Biên niên</span><span className="flex items-center gap-1 pb-3 text-muted-foreground"><LockKeyhole className="size-3"/>Bí mật</span></div></div></div></div>}
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) { return <div className="bg-background p-4"><dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</dt><dd className="mt-2 font-serif text-xl">{value}</dd></div>; }