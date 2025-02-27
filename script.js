document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const blurToggle = document.getElementById("blur-toggle");
    const root = document.documentElement;
    const headerBg = document.querySelector(".header-background");

    // ปิด transition ตอนโหลดหน้า
    document.body.classList.add("no-transition");
    setTimeout(() => {
        document.body.classList.remove("no-transition");
    }, 100);

    if (!headerBg) {
        console.error("❌ ไม่พบ .header-background ในหน้านี้");
        return;
    }

    function setTheme(isDark) {
        console.log("Theme Change:", isDark ? "Dark Mode" : "Light Mode");

        document.body.classList.add("no-transition"); // ป้องกันกระพริบตอนเปลี่ยนธีม
        setTimeout(() => {
            if (isDark) {
                root.style.setProperty("--body-bg", "url('mac.webp')");
                headerBg.style.backgroundImage = "url('sunset.webp')";
                document.body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark");
            } else {
                root.style.setProperty("--body-bg", "url('sky.webp')");
                headerBg.style.backgroundImage = "url('sea2.webp')";
                document.body.classList.remove("dark-mode");
                localStorage.setItem("theme", "light");
            }
            document.body.classList.remove("no-transition");
        }, 100); // หน่วงเวลาสั้น ๆ ให้ transition ทำงานได้
    }

    function setBlur(isBlurred) {
        if (isBlurred) {
            document.body.classList.add("blur-transition");
            setTimeout(() => document.body.classList.add("blur"), 10);
        } else {
            document.body.classList.remove("blur");
            setTimeout(() => document.body.classList.remove("blur-transition"), 500);
        }
        localStorage.setItem("blurState", isBlurred ? "on" : "off");
    }

    // โหลดค่าเริ่มต้นจาก Local Storage
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme === "dark");

    if (themeToggle) {
        themeToggle.checked = savedTheme === "dark"; // ✅ เพิ่มโค้ดนี้เพื่อให้ switch อยู่ในสถานะที่ถูกต้อง
    }

    const savedBlur = localStorage.getItem("blurState") === "on";
    if (blurToggle) {
        blurToggle.checked = savedBlur;
        setBlur(savedBlur);
    }

    // Event Listeners
    if (themeToggle) {
        themeToggle.addEventListener("change", function () {
            setTheme(this.checked);
        });
    }

    if (blurToggle) {
        blurToggle.addEventListener("change", function () {
            setBlur(this.checked);
        });
    }
});

/*------------------------------------------------------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    const tocList = document.getElementById("toc-list");
    const sections = document.querySelectorAll("section h2");
    const detailsElements = document.querySelectorAll("details");

    if (!tocList) {
        console.error("❌ ไม่พบ <ul id='toc-list'> ใน HTML");
        return;
    }

    if (sections.length === 0) {
        console.error("❌ ไม่พบ <h2> ใน <section>");
        return;
    }

    const tocLinks = [];
    sections.forEach((heading, index) => {
        const tocItem = document.createElement("li");
        const tocLink = document.createElement("a");

        // ตั้งค่าลิงก์ TOC
        tocLink.href = `#section-${index}`;
        tocLink.textContent = heading.textContent;

        // กำหนด ID ให้ <h2> เพื่อให้สามารถเลื่อนหาได้
        heading.id = `section-${index}`;

        tocItem.appendChild(tocLink);
        tocList.appendChild(tocItem);

        tocLinks.push(tocLink); // เก็บลิงก์ทั้งหมด

        // เพิ่ม Smooth Scroll
        tocLink.addEventListener("click", function (event) {
            event.preventDefault();
            document.getElementById(`section-${index}`).scrollIntoView({
                behavior: "smooth",
                block: "center" // จัดให้ section อยู่กลางหน้าจอ
            });

            // เปลี่ยนการ highlight สีพื้นหลังของ TOC เมื่อคลิก
            tocLinks.forEach((link) => link.classList.remove("highlighted"));
            tocLink.classList.add("highlighted");
        });
    });

    // อัปเดตตำแหน่งของ TOC เมื่อเลื่อนหน้า
    const toc = document.getElementById("table-of-contents");
    const initialTop = 255; // ตำแหน่งเริ่มต้นของ TOC

    function updateTOCHighlight() {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;
        let newTop = initialTop + scrollPosition; // คำนวณตำแหน่งใหม่ของ TOC

        // อัปเดตตำแหน่งของ TOC
        toc.style.top = newTop + "px";

        // เพิ่มการ highlight ให้กับ TOC ตามการเลื่อนหน้า
        let currentSection = -1;

        sections.forEach((section, index) => {
            const parentSection = section.closest("section"); // ดึง parent <section>
            if (!parentSection) return;

            const sectionOffset = parentSection.offsetTop;
            const sectionHeight = parentSection.offsetHeight;

            // ตรวจสอบว่าอยู่ในตำแหน่งที่ควร highlight
            if (scrollPosition >= sectionOffset - window.innerHeight * 0.55 && scrollPosition < sectionOffset + sectionHeight) {
                currentSection = index;
            }
        });

        tocLinks.forEach((link, index) => {
            if (index === currentSection) {
                link.classList.add("highlighted");
            } else {
                link.classList.remove("highlighted");
            }
        });
    }

    // ตรวจจับการเปิด/ปิด <details> แล้วอัปเดต highlight
    detailsElements.forEach((details) => {
        details.addEventListener("toggle", updateTOCHighlight);
    });

    // เรียกใช้ฟังก์ชัน highlight TOC เมื่อโหลดหน้าเว็บเสร็จ โดยหน่วงเวลาเล็กน้อย
    setTimeout(updateTOCHighlight, 50);

    // ตรวจจับการเลื่อนหน้าจอ
    window.addEventListener("scroll", updateTOCHighlight);
});

document.addEventListener("DOMContentLoaded", function () {
    const toc = document.getElementById("table-of-contents");
    const toggleBtn = document.getElementById("toggle-toc-btn");

    // ฟังก์ชันซ่อน/แสดง TOC
    toggleBtn.addEventListener("click", function () {
        toc.classList.toggle("hidden");
    });

    // ให้ปุ่มเลื่อนตามผู้ใช้
    window.addEventListener("scroll", function () {
        toggleBtn.style.top = window.scrollY + 200 + "px";
    });
});


/*------------------------------------------------------------------------------------------------------------------------- */
// Get all the navigation links

document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

const navLinks = document.querySelectorAll('nav ul li a');

// Add an event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Prevent default behavior of the anchor tag (page jumping)
        e.preventDefault();
        
        // Get the target section's ID from the href attribute
        const targetSection = document.querySelector(link.getAttribute('href'));
        
        // Scroll to the target section with smooth scrolling
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'center' // This ensures that the section is centered vertically in the viewport
        });
    });
});

/*------------------------------------------------------------------------------------------------------------------------- */

// คลิก Home tab แล้วไป home.html
function navigateToIndex() {
    event.preventDefault();  // ป้องกันการโหลดซ้ำ
    window.location.href = "index.html";
}

// คลิก Home tab แล้วไป home.html
function navigateToHome() {
    event.preventDefault();  // ป้องกันการโหลดซ้ำ
    window.location.href = "home.html";
}

// คลิก About Me section แล้วไป about.html
function navigateToAbout() {
    window.location.href = "about.html";
}

// คลิก Certificate แล้วไป certificate.html
function navigateToCertificate() {
    window.location.href = "certificate.html";
}

// คลิก Contact แล้วไป contact.html
function navigateToContact() {
    window.location.href = "contact.html";
}

// คลิก Project_DB แล้วไป Project_DB.html
function navigateToProject_DB() {
    window.location.href = "project_DB.html";
}

// คลิก Project section แล้วไป project.html
function navigateToProject() {
    window.location.href = "project.html";
}

// สร้างฟังก์ชันคลิก tab ปัจจุบันแล้วเลื่อนไปด้านบน
function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// เลื่อนไปข้างบนสุดของ Tab นั้นๆ
document.querySelector('nav ul li a[href="home.html"]').addEventListener('click', scrollToTop);
document.querySelector('nav ul li a[href="about.html"]').addEventListener('click', scrollToTop);
document.querySelector('nav ul li a[href="certificate.html"]').addEventListener('click', scrollToTop);
document.querySelector('nav ul li a[href="contact.html"]').addEventListener('click', scrollToTop);

/*------------------------------------------------------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
/*------------------------------------------------------------------------------------------------------------------------- */

// ป้องกัน dropdown menu หายไปเมื่อคลิก
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function () {
        this.querySelector('.dropdown-menu').style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function () {
        this.querySelector('.dropdown-menu').style.display = 'none';
    });
});

function navigateToSection(event, sectionId) {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
/*------------------------------------------------------------------------------------------------------------------------- */

function navigateToProject_DB1() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "project_DB.html";
}


/*------------------------------------------------------------------------------------------------------------------------- */
