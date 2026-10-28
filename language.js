// Portfolio bilingual text, with the original HTML layout preserved.
const translations = {
  "Trang chủ": "Home",
  "Giới thiệu": "About",
  "Kỹ năng": "Skills",
  "Dự án": "Projects",
  "Liên hệ": "Contact",
  "XIN CHÀO, MÌNH LÀ": "HELLO, I'M",
  "Mình là sinh viên Công nghệ thông tin tại Đại học Trà Vinh, yêu thích công nghệ và phát triển web. Mình đang từng bước xây dựng nền tảng lập trình, rèn luyện tư duy giải quyết vấn đề và tạo ra những sản phẩm hữu ích.": "I'm an Information Technology student at Tra Vinh University with a passion for technology and web development. I'm building my programming foundation, improving my problem-solving skills, and creating useful projects.",
  "Về tôi": "About me",
  "Xem dự án": "View projects",
  "Điện thoại ↗": "Phone ↗",
  "Luôn học hỏi": "Keep learning",
  "mỗi ngày ✦": "every day ✦",
  "ĐÔI ĐIỀU VỀ MÌNH": "A LITTLE ABOUT ME",
  "về tôi": "me",
  "Mình là Hoàng Lê Khoa, hiện đang theo học ngành Công nghệ thông tin tại Đại học Trà Vinh. Mình quan tâm đến phát triển web, thích tìm hiểu cách các sản phẩm số được xây dựng và vận hành.": "I'm Hoàng Lê Khoa, currently studying Information Technology at Tra Vinh University. I'm interested in web development and learning how digital products are built and operated.",
  "Trước đây, mình từng học ngành Kỹ thuật giao thông tại Đại học Bách Khoa (2014–2018). Hiện tại, mình tập trung củng cố kiến thức nền tảng, thực hành qua các dự án nhỏ và chuẩn bị cho cơ hội nghề nghiệp đầu tiên trong lĩnh vực CNTT.": "I previously studied Transportation Engineering at Ho Chi Minh City University of Technology (2014–2018). I'm now strengthening my fundamentals, building hands-on projects, and preparing for my first opportunity in IT.",
  "Đại học Trà Vinh": "Tra Vinh University",
  "Đại học Bách Khoa": "University of Technology",
  "Công nghệ thông tin · 2026–nay": "Information Technology · 2026–present",
  "Kỹ thuật giao thông · 2014–2018": "Transportation Engineering · 2014–2018",
  "Thông tin cơ bản": "Basic information",
  "Họ và tên": "Full name",
  "Định hướng": "Career goal",
  "Ngành học": "Major",
  "Công nghệ thông tin": "Information Technology",
  "Trường": "University",
  "Điện thoại": "Phone",
  "Trạng thái": "Status",
  "Đang học và thực hành": "Learning and practicing",
  "NĂNG LỰC HIỆN TẠI": "CURRENT SKILLS",
  "của mình": "my skills",
  "Các kỹ năng dưới đây là mức tự đánh giá ban đầu; hãy cập nhật theo năng lực thực tế của huynh.": "These are initial self-assessments of my current skills and learning progress.",
  "Đang rèn luyện": "Practicing",
  "Nền tảng cơ bản": "Basic foundation",
  "Lập trình C": "C Programming",
  "Đang thực hành": "Practicing",
  "Đang tìm hiểu": "Learning",
  "Cơ bản": "Basic",
  "THỰC HÀNH VÀ HỌC HỎI": "PRACTICE AND LEARNING",
  "tiêu biểu": "featured projects",
  "Website giới thiệu bản thân, kỹ năng, quá trình học tập và các dự án cá nhân.": "A personal website showcasing my background, skills, education, and projects.",
  "Xem Portfolio ↗": "View Portfolio ↗",
  "Quản lý sinh viên": "Student Management",
  "Ứng dụng quản lý danh sách sinh viên: thêm, sửa, xóa, tìm kiếm và lưu dữ liệu trên trình duyệt.": "A student management app to add, edit, delete, and search records, with browser-based storage.",
  "Mở ứng dụng ↗": "Open app ↗",
  "Thư viện kiến thức Cloud với tìm kiếm chủ đề, bài học và đánh dấu tiến độ học tập.": "A cloud computing knowledge library with topic search, lessons, and learning-progress tracking.",
  "Khám phá ghi chú ↗": "Explore notes ↗",
  "* Sản phẩm demo thực hành cá nhân, dữ liệu được lưu cục bộ trên trình duyệt; chưa có máy chủ hoặc cơ sở dữ liệu trực tuyến.": "* Personal practice demos. Data is stored locally in the browser; no online server or database is used.",
  "KẾT NỐI VỚI MÌNH": "GET IN TOUCH",
  "Cùng tạo nên điều": "Let's create something",
  "tuyệt vời": "great",
  "Mình luôn sẵn sàng học hỏi, trao đổi về công nghệ và đón nhận cơ hội phù hợp cho Fresher.": "I'm open to learning, discussing technology, and exploring opportunities as a Fresher Web Developer.",
  "Gửi email ↗": "Send email ↗",
  "Lên đầu trang ↑": "Back to top ↑"
};
const originalText = new WeakMap();
const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (!node.parentElement || ['SCRIPT','STYLE'].includes(node.parentElement.tagName)) continue;
  const value = node.nodeValue;
  if (Object.prototype.hasOwnProperty.call(translations, value.trim())) {
    originalText.set(node, value);
    textNodes.push(node);
  }
}
function setPortfolioLanguage(lang) {
  const english = lang === 'en';
  for (const node of textNodes) {
    const source = originalText.get(node);
    const trimmed = source.trim();
    node.nodeValue = english ? source.replace(trimmed, translations[trimmed]) : source;
  }
  document.documentElement.lang = english ? 'en' : 'vi';
  const toggle = document.getElementById('languageToggle');
  if (toggle) {
    toggle.textContent = english ? '🇬🇧 EN ▾' : '🇻🇳 VI ▾';
    toggle.setAttribute('aria-label', english ? 'Switch to Vietnamese' : 'Chuyển sang tiếng Anh');
    toggle.title = english ? 'Tiếng Việt' : 'English';
  }
  try { localStorage.setItem('portfolio-language', english ? 'en' : 'vi'); } catch (_) {}
}
document.getElementById('languageToggle')?.addEventListener('click', () => {
  setPortfolioLanguage(document.documentElement.lang === 'en' ? 'vi' : 'en');
});
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'en'; } catch (_) {}
setPortfolioLanguage(savedLanguage);
