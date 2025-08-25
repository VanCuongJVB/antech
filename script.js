// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // --- Language Switcher ---
    const translations = {
        ja: {
            nav_company: '会社概要',
            nav_faq: 'FAQ',
            nav_contact: 'お問い合わせ',
            hero_title: 'デジタルイノベーションで未来を創造',
            hero_desc: '最先端技術とクリエイティブなアプローチで、ビジネスの可能性を最大化するソリューションを提供します。',
            hero_contact: 'お問い合わせ',
            expertise_title: '専門技術領域',
            expertise_subtitle: '多様な技術スタックと豊富な経験で、お客様のビジネス課題を解決します。',
            expertise_web_title: 'Web開発',
            expertise_web_desc: 'モダンなフレームワークを活用し、パフォーマンスと拡張性を重視したWebアプリケーションを開発します。PHP、React、Vue.js、Node.jsなどの最新技術を駆使。',
            expertise_lowcode_title: 'Pleasanterローコード開発',
            expertise_lowcode_desc: 'ローコード開発とは、プログラミングの知識が少なくても、比較的容易にWebアプリケーションを開発できる手法のことです。プリザンターは、特に日本製のオープンソースのローコード開発ツールとして知られています。',
            expertise_dx_title: 'デジタルトランスフォーメーション',
            expertise_dx_desc: '既存のビジネスプロセスをデジタル化し、効率性と生産性を向上。',
            team_title: 'エキスパートチーム',
            team_subtitle: '多様な専門性を持つプロフェッショナルが、お客様のプロジェクトを成功に導きます。',
            team_exec_title: 'エグゼクティブ',
            team_exec_desc: '戦略立案と事業推進のリーダーシップ',
            team_dev_title: '開発エンジニア',
            team_dev_desc: '最新技術に精通したフルスタック開発者',
            team_lowcode_title: 'Pleasanterローコード開発',
            team_lowcode_desc: 'お客様との対面で、要望をヒアリングしながら、ドラッグ＆ドロップなどの操作でアプリケーションを開発',
            company_title: '会社概要',
            company_subtitle: 'デジタルイノベーションを推進するAntech-QTの企業理念と沿革をご紹介します。',
            company_philosophy_title: '企業理念',
            company_philosophy_desc: '「技術で人々の生活を豊かにする」をミッションに、最先端のデジタル技術を活用して、お客様のビジネス課題を解決し、社会の発展に貢献します。',
            company_contact_title: 'お問い合わせ情報',
            company_address_label: '住所:',
            company_address: 'ベトナム国クアンチー省Gio Linh社Truc Lam村',
            company_phone_label: '電話:',
            company_phone: '+84-886-160-515',
            company_email_label: 'メール:',
            company_email: 'info@antech-qt.com',
            company_hours_label: '営業時間:',
            company_hours: '平日 9:00-18:00 (JST)',
            faq_title: 'よくあるご質問',
            faq_q1: 'プロジェクトの開発期間はどの程度ですか？',
            faq_a1: 'プロジェクトの規模と複雑さによって異なりますが、小規模なWebサイトで2-4週間、中規模なWebアプリケーションで2-4ヶ月、大規模なエンタープライズシステムで6-12ヶ月程度が目安となります。詳細なスケジュールは初回コンサルテーションで提示いたします。',
            faq_q2: 'プロジェクト完了後のサポートは提供されますか？',
            faq_a2: 'はい、プロジェクト完了後も継続的な保守・運用サポートを提供しています。技術サポート、セキュリティアップデート、機能追加など、お客様のニーズに応じたサポートプランをご用意しております。',
            faq_q3: '料金体系について教えてください',
            faq_a3: 'プロジェクトの要件、規模、期間に基づいてカスタム見積もりを提供しています。固定価格、時間単価、継続契約など、お客様の予算とニーズに最適な料金プランをご提案いたします。',
            faq_q4: 'どのような技術スタックを使用していますか？',
            faq_a4: 'ローコード：Pleasanter | フロントエンド：React、Vue.js、Angular | バックエンド：PHP、Python、 | データベース：PostgreSQL、MySQL,　SQLServer | クラウド：AWS、Azure、Google など、プロジェクトに最適な技術を選択します。',
            contact_title: 'お気軽にご相談ください',
            contact_subtitle: 'プロジェクトのご相談から技術的な質問まで、専門チームがサポートいたします。',
            contact_name_label: 'お名前 *',
            contact_email_label: 'メールアドレス *',
            contact_company_label: '会社名',
            contact_message_label: 'お問い合わせ内容 *',
            contact_message_placeholder: 'プロジェクトの詳細やご質問をお聞かせください...',
            contact_submit: 'お問い合わせを送信',
            footer: '&copy; 2025 Antech-QT. All rights reserved. | プライバシーポリシー | 利用規約',
        },
        vi: {
            nav_company: 'Giới thiệu',
            nav_faq: 'FAQ',
            nav_contact: 'Liên hệ',
            hero_title: 'Tạo dựng tương lai với đổi mới số',
            hero_desc: 'Cung cấp giải pháp tối ưu hóa tiềm năng kinh doanh với công nghệ tiên tiến và cách tiếp cận sáng tạo.',
            hero_contact: 'Liên hệ',
            expertise_title: 'Lĩnh vực chuyên môn',
            expertise_subtitle: 'Giải quyết bài toán kinh doanh với kinh nghiệm và công nghệ đa dạng.',
            expertise_web_title: 'Phát triển Web',
            expertise_web_desc: 'Phát triển ứng dụng web hiện đại với hiệu suất và khả năng mở rộng cao. Sử dụng React, Vue.js, Node.js và các công nghệ mới nhất.',
            expertise_lowcode_title: 'Phát triển Low-code Pleasanter',
            expertise_lowcode_desc: 'Low-code là phương pháp phát triển ứng dụng web dễ dàng mà không cần nhiều kiến thức lập trình. Pleasanter là công cụ mã nguồn mở nổi tiếng của Nhật Bản.',
            expertise_dx_title: 'Chuyển đổi số',
            expertise_dx_desc: 'Số hóa quy trình kinh doanh, nâng cao hiệu quả và năng suất. Hỗ trợ ứng dụng AI và Machine Learning.',
            team_title: 'Đội ngũ chuyên gia',
            team_subtitle: 'Chuyên gia đa lĩnh vực dẫn dắt dự án của bạn đến thành công.',
            team_exec_title: 'Giám đốc',
            team_exec_desc: 'Lãnh đạo chiến lược và phát triển kinh doanh',
            team_dev_title: 'Kỹ sư phát triển',
            team_dev_desc: 'Lập trình viên fullstack thành thạo công nghệ mới',
            team_lowcode_title: 'Phát triển Low-code Pleasanter',
            team_lowcode_desc: 'Phát triển ứng dụng trực tiếp với khách hàng bằng thao tác kéo thả',
            company_title: 'Giới thiệu công ty',
            company_subtitle: 'Triết lý và lịch sử phát triển của Antech-QT.',
            company_philosophy_title: 'Triết lý doanh nghiệp',
            company_philosophy_desc: 'Sứ mệnh "Làm giàu cuộc sống bằng công nghệ". Ứng dụng công nghệ số tiên tiến để giải quyết bài toán kinh doanh và đóng góp cho xã hội.',
            company_contact_title: 'Thông tin liên hệ',
            company_address_label: 'Địa chỉ:',
            company_address: 'Thôn Trúc Lâm, xã Gio Linh, tỉnh Quảng Trị, Việt Nam',
            company_phone_label: 'Điện thoại:',
            company_phone: '+84-886-160-515',
            company_email_label: 'Email:',
            company_email: 'info@antech-qt.com',
            company_hours_label: 'Giờ làm việc:',
            company_hours: 'Thứ 2-6, 9:00-18:00 (JST)',
            faq_title: 'Câu hỏi thường gặp',
            faq_q1: 'Thời gian phát triển dự án là bao lâu?',
            faq_a1: 'Tùy vào quy mô và độ phức tạp. Website nhỏ: 2-4 tuần, ứng dụng vừa: 2-4 tháng, hệ thống lớn: 6-12 tháng. Lịch trình chi tiết sẽ trao đổi khi tư vấn.',
            faq_q2: 'Có hỗ trợ sau khi hoàn thành dự án không?',
            faq_a2: 'Có, chúng tôi cung cấp bảo trì, hỗ trợ kỹ thuật, cập nhật bảo mật và bổ sung tính năng theo nhu cầu khách hàng.',
            faq_q3: 'Vui lòng cho biết về bảng giá',
            faq_a3: 'Báo giá dựa trên yêu cầu, quy mô, thời gian dự án. Có các gói giá cố định, theo giờ hoặc hợp đồng dài hạn phù hợp ngân sách.',
            faq_q4: 'Sử dụng công nghệ nào?',
            faq_a4: 'Low-code: Pleasanter | Frontend: React, Vue.js, Angular | Backend: PHP, Python | Database: PostgreSQL, MySQL, SQLServer | Cloud: AWS, Azure, Google.',
            contact_title: 'Hãy liên hệ với chúng tôi',
            contact_subtitle: 'Đội ngũ chuyên gia sẵn sàng hỗ trợ mọi thắc mắc và dự án của bạn.',
            contact_name_label: 'Họ tên *',
            contact_email_label: 'Email *',
            contact_company_label: 'Công ty',
            contact_message_label: 'Nội dung liên hệ *',
            contact_message_placeholder: 'Vui lòng nhập chi tiết dự án hoặc câu hỏi...',
            contact_submit: 'Gửi liên hệ',
            footer: '&copy; 2025 Antech-QT. Bảo lưu mọi quyền. | Chính sách bảo mật | Điều khoản sử dụng',
        },
        en: {
            nav_company: 'Company',
            nav_faq: 'FAQ',
            nav_contact: 'Contact',
            hero_title: 'Creating the Future with Digital Innovation',
            hero_desc: 'We provide solutions to maximize your business potential with cutting-edge technology and creative approaches.',
            hero_contact: 'Contact Us',
            expertise_title: 'Expertise',
            expertise_subtitle: 'We solve your business challenges with diverse tech stacks and rich experience.',
            expertise_web_title: 'Web Development',
            expertise_web_desc: 'We develop high-performance, scalable web applications using modern frameworks like React, Vue.js, and Node.js.',
            expertise_lowcode_title: 'Pleasanter Low-code Development',
            expertise_lowcode_desc: 'Low-code development enables easy web app creation with little programming knowledge. Pleasanter is a well-known Japanese open-source low-code tool.',
            expertise_dx_title: 'Digital Transformation',
            expertise_dx_desc: 'Digitize business processes to improve efficiency and productivity. We also support AI and machine learning adoption.',
            team_title: 'Expert Team',
            team_subtitle: 'Professionals with diverse expertise lead your project to success.',
            team_exec_title: 'Executive',
            team_exec_desc: 'Leadership in strategy and business development',
            team_dev_title: 'Developer',
            team_dev_desc: 'Full-stack developer skilled in the latest technologies',
            team_lowcode_title: 'Pleasanter Low-code Development',
            team_lowcode_desc: 'Developing applications with clients via drag & drop and direct communication',
            company_title: 'Company Overview',
            company_subtitle: 'Introducing Antech-QT’s philosophy and history of digital innovation.',
            company_philosophy_title: 'Philosophy',
            company_philosophy_desc: 'Our mission is "Enriching lives through technology". We solve business challenges and contribute to society using advanced digital technology.',
            company_contact_title: 'Contact Information',
            company_address_label: 'Address:',
            company_address: 'Truc Lam village, Gio Linh, Quang Tri, Vietnam',
            company_phone_label: 'Phone:',
            company_phone: '+84-886-160-515',
            company_email_label: 'Email:',
            company_email: 'info@antech-qt.com',
            company_hours_label: 'Business Hours:',
            company_hours: 'Mon-Fri 9:00-18:00 (JST)',
            faq_title: 'Frequently Asked Questions',
            faq_q1: 'How long does project development take?',
            faq_a1: 'It depends on scale and complexity. Small website: 2-4 weeks, medium web app: 2-4 months, large enterprise system: 6-12 months. A detailed schedule is provided during consultation.',
            faq_q2: 'Is there support after project completion?',
            faq_a2: 'Yes, we provide ongoing maintenance, technical support, security updates, and feature additions as needed.',
            faq_q3: 'Tell me about your pricing',
            faq_a3: 'Pricing is custom based on requirements, scale, and duration. We offer fixed price, hourly, and long-term contract plans to fit your budget.',
            faq_q4: 'What technology stack do you use?',
            faq_a4: 'Low-code: Pleasanter | Frontend: React, Vue.js, Angular | Backend: PHP, Python | Database: PostgreSQL, MySQL, SQLServer | Cloud: AWS, Azure, Google.',
            contact_title: 'Contact Us',
            contact_subtitle: 'Our expert team supports you from project consultation to technical questions.',
            contact_name_label: 'Name *',
            contact_email_label: 'Email *',
            contact_company_label: 'Company',
            contact_message_label: 'Message *',
            contact_message_placeholder: 'Please enter project details or your questions...',
            contact_submit: 'Send Message',
            footer: '&copy; 2025 Antech-QT. All rights reserved. | Privacy Policy | Terms of Use',
        }
    };
 
    function setLanguage(lang) {
        const dict = translations[lang] || translations['ja'];
        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });
        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) {
                el.setAttribute('placeholder', dict[key]);
            }
        });
        // Update <html lang>
        document.documentElement.lang = lang;
    }
 
    // Language select event
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.addEventListener('change', function() {
            setLanguage(this.value);
        });
        // Set default language on load
        setLanguage(langSelect.value);
    }
 
    // ...existing code...
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    if (navLinks.length > 0) {
        navLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    const header = document.querySelector('.header');
                    const headerHeight = header ? header.offsetHeight : 80;
                    const targetPosition = target.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
 
    // ...existing code...
    // Fade in animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in-up');
    if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        fadeElements.forEach(el => {
            observer.observe(el);
        });
    }
 
    // ...existing code...
    // Header scroll effect
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
            // Hide/show header on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScrollY = currentScrollY;
        });
    }
 
    // ...existing code...
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simple form validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            if (!name || !email || !message || !name.value || !email.value || !message.value) {
                alert('必須項目をすべて入力してください。');
                return;
            }
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = '送信中...';
                submitBtn.disabled = true;
                setTimeout(() => {
                    alert('お問い合わせありがとうございます。3営業日以内にご連絡いたします。');
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
 
    // ...existing code...
    // Mobile menu toggle chỉ thực hiện ở mobile (<= 991px)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    function isMobile() {
        return window.innerWidth <= 400;
    }
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const spans = this.querySelectorAll('span');
            if (navMenu.style.display === 'flex') {
                if (isMobile()){
                    navMenu.style.display = 'none';
                }
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.right = '0';
                navMenu.style.background = 'white';
                navMenu.style.padding = '2rem';
                navMenu.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                navMenu.style.zIndex = '999';
                // Animate hamburger
                if (spans.length >= 3) {
                    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                }
            }
        });
        // Close mobile menu when clicking on links
        const navMenuLinks = document.querySelectorAll('.nav-menu a');
        if (navMenuLinks.length > 0) {
            navMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    const spans = mobileMenuBtn.querySelectorAll('span');
                    if (isMobile()){
                        navMenu.style.display = 'none';
                    }
                    spans.forEach(span => {
                        span.style.transform = '';
                        span.style.opacity = '';
                    });
                    if (spans.length >= 2) {
                        spans[1].style.opacity = '1';
                    }
                });
            });
        }
    }
});
 
// FAQ toggle function - Global function
function toggleFAQ(element) {
    if (!element || !element.parentElement) return;
   
    const faqItem = element.parentElement;
    const icon = element.querySelector('.faq-icon');
   
    if (!faqItem || !icon) return;
   
    // Close other FAQ items
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        if (item !== faqItem && item.classList.contains('active')) {
            item.classList.remove('active');
            const otherIcon = item.querySelector('.faq-icon');
            if (otherIcon) {
                otherIcon.textContent = '+';
            }
        }
    });
   
    faqItem.classList.toggle('active');
   
    if (faqItem.classList.contains('active')) {
        icon.textContent = '×';
    } else {
        icon.textContent = '+';
    }
}