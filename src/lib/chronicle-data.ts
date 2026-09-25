import heroImage from "../assets/tinh-mon-hero.jpg";
import worldMap from "../assets/thien-ha-map.jpg";
import lucPortrait from "../assets/portrait-luc-tram-chu.jpg";
import vanChiPortrait from "../assets/portrait-ta-van-chi.jpg";

export { heroImage, worldMap };

export const realms = [
  ["Trung Châu", "Trung tâm nhân tộc, nơi tiên môn, thế gia và hoàng triều cùng tồn tại."],
  ["Đông Hoang", "Rừng núi vô tận, cổ thú hoành hành và vô số bí cảnh chưa từng được khai phá."],
  ["Tây Vực", "Biển cát chôn giấu những di tích của một nền văn minh đã biến mất."],
  ["Nam Cương", "Lãnh địa của yêu tộc, cổ trùng và những huyết mạch cổ xưa."],
  ["Bắc Hải", "Biển trời vô tận, nơi long cung và thủy phủ cổ tồn tại dưới đáy sâu."],
] as const;

export const factions = [
  ["玄", "Thái Huyền Tông", "Trung Châu", "Kiếm đạo chính thống, tọa lạc giữa những linh sơn."],
  ["法", "Vạn Pháp Môn", "Trung Châu", "Trận đạo, phù thuật và vô số pháp môn hội tụ."],
  ["丹", "Đan Dương Cốc", "Quần sơn", "Thánh địa của những luyện đan sư trong thiên hạ."],
  ["機", "Thiên Cơ Các", "Không rõ", "Không bán pháp bảo. Chỉ bán điều người khác muốn giấu."],
  ["龍", "Đại Ung Hoàng Triều", "Trung Châu", "Hoàng triều nắm giữ long mạch của phàm thế."],
  ["妖", "Vạn Yêu Sơn", "Nam Cương", "Lãnh địa của những yêu tộc mang huyết mạch cổ."],
] as const;

export const characters = [
  { name: "Lục Trầm Chu", sect: "Thái Huyền Tông", level: "Trúc Cơ hậu kỳ", age: "24", root: "Kim linh căn", weapon: "Thanh Hoài kiếm", quote: "Kiếm trong tay, đường dưới chân. Còn sống thì còn có thể đi tiếp.", image: lucPortrait },
  { name: "Tạ Vãn Chi", sect: "Tạ gia", level: "Trúc Cơ trung kỳ", age: "21", root: "Thủy Mộc song linh căn", weapon: "Luyện đan", quote: "Có những bí mật, càng biết nhiều càng không thể quay đầu.", image: vanChiPortrait },
  { name: "Mặc Kỳ", sect: "Tán tu", level: "Kim Đan sơ kỳ", age: "Không rõ", root: "Dị linh căn Lôi", weapon: "Hắc thiết trường đao", quote: "Cơ duyên hay tai họa, trước hết cứ xem thứ gì đáng giá hơn.", image: lucPortrait },
  { name: "Yêu Cửu", sect: "Yêu tộc", level: "Kim Đan hậu kỳ", age: "137", root: "Cửu Vĩ Hồ tộc", weapon: "Ngọc cổ", quote: "Nhân gian có rất nhiều thứ thú vị. Ví dụ như lời nói dối.", image: vanChiPortrait },
  { name: "Cố Hoài An", sect: "Đại Ung", level: "Trúc Cơ viên mãn", age: "28", root: "Hỏa linh căn", weapon: "Xích Long thương", quote: "Nếu long mạch đã có chủ, vậy người ngồi trên long ỷ là ai?", image: lucPortrait },
  { name: "Thẩm Tịch", sect: "Huyền Minh Cung", level: "Kim Đan sơ kỳ", age: "26", root: "Âm linh căn", weapon: "Hồn thuật", quote: "Ta không sợ ma. Ta chỉ sợ người sống.", image: vanChiPortrait },
] as const;

export const events = [
  ["Thời đại cổ xưa", "Một trận đại chiến khiến vô số bí mật bị xóa khỏi lịch sử."],
  ["Tinh Môn xuất hiện", "Một cánh cửa khổng lồ xuất hiện trên bầu trời Trung Châu."],
  ["Linh mạch suy kiệt", "Những linh mạch cổ bắt đầu lần lượt khô cạn."],
  ["Bí cảnh thức tỉnh", "Các cổ địa lần lượt mở cửa."],
  ["Bán Tinh Châu biến động", "Các thế lực đồng loạt tiến vào vùng đất này."],
] as const;

export const places = [
  ["Tinh La Thành", "50%", "51%"], ["Vọng Nguyệt Sơn", "68%", "24%"],
  ["Hắc Thủy Hà", "51%", "79%"], ["Táng Kiếm Cốc", "82%", "51%"],
  ["Vô Tận Lâm", "34%", "69%"],
] as const;