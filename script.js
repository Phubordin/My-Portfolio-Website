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
        console.error("❌ ไม่พบ <h2> หรือ <h3> ใน <section>");
        return;
    }

    const tocLinks = [];
    sections.forEach((heading, index) => {
        const tocItem = document.createElement("li");
        const tocLink = document.createElement("a");

        // ตั้งค่าลิงก์ TOC
        tocLink.href = `#section-${index}`;
        tocLink.textContent = heading.textContent;

        // กำหนด ID ให้ <h2> และ <h3> เพื่อให้สามารถเลื่อนหาได้
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
    const tocList = document.getElementById("toc-list1");
    const sections = document.querySelectorAll("section h2, section h3, section h4");
    const detailsElements = document.querySelectorAll("details");

    if (!tocList) {
        console.error("❌ ไม่พบ <ul id='toc-list1'> ใน HTML");
        return;
    }

    if (sections.length === 0) {
        console.error("❌ ไม่พบ <h2> หรือ <h3> ใน <section>");
        return;
    }

    const tocLinks = [];
    sections.forEach((heading, index) => {
        const tocItem = document.createElement("li");
        const tocLink = document.createElement("a");

        // ตั้งค่าลิงก์ TOC
        tocLink.href = `#section-${index}`;
        tocLink.textContent = heading.textContent;

        // กำหนด ID ให้ <h2> และ <h3> เพื่อให้สามารถเลื่อนหาได้
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

    // ✅ เพิ่มบรรทัดนี้ เพื่อซ่อน TOC ตอนเปิดบนมือถือครั้งแรก
    if (window.innerWidth <= 768) {
        toc.classList.add("hidden");
    }

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

// คลิก Home tab แล้วไป index.html
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

// คลิก Project section แล้วไป experience.html
function navigateToExperience() {
    window.location.href = "experience.html";
}

// คลิก Project section แล้วไป project.html
function navigateToProject() {
    window.location.href = "project.html";
}

// คลิก Certificate แล้วไป certificate.html
function navigateToCertificate() {
    window.location.href = "certificate.html";
}

// คลิก Contact แล้วไป contact.html
function navigateToContact() {
    window.location.href = "contact.html";
}
// สร้างฟังก์ชันคลิก tab ปัจจุบันแล้วเลื่อนไปด้านบน /*------------------------------------------------------------------------------------------------------------------------- */

function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

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
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector("a");
    const menu = dropdown.querySelector(".dropdown-menu");

    // Desktop: hover
    dropdown.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768 && menu) {
        menu.style.display = "block";
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768 && menu) {
        menu.style.display = "none";
      }
    });

    // Mobile: click toggle
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768 && menu) {
        e.preventDefault();
        dropdown.classList.toggle("open");

        // ปิด dropdown อื่นๆ
        dropdowns.forEach(other => {
          if (other !== dropdown) {
            other.classList.remove("open");
            const otherMenu = other.querySelector(".dropdown-menu");
            if (otherMenu) otherMenu.style.display = "none";
          }
        });

        // toggle menu
        if (dropdown.classList.contains("open")) {
          menu.style.display = "block";
        } else {
          menu.style.display = "none";
        }
      }
    });
  });
});
/*------------------------------------------------------------------------------------------------------------------------- */

function navigateToProject_ggsheet_dsb10() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "project_ggsheet_dsb10.html";
}

function navigateToProject_cafe_r_sql_dsb10() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "project_cafe_r_sql_dsb10.html";
}

function navigateToProject_rfm_py_dsb10() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "project_rfm_py_dsb10.html";
}

function navigateToProject_pyc_r_py_dsb10() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "project_pyc_r_py_dsb10.html";
}

function navigateToProject_nycflight13_23_dsb10() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "project_nycflight13_23_dsb10.html";
}

function navigateToProject_vizdimond_dsb10() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "project_vizdimond_dsb10.html";
}

function navigateToProject_titanic_glm_dsb10() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "project_titanic_glm_dsb10.html";
}

function navigateToProject_looker_dsb10() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "project_looker_dsb10.html";
}

function navigateToProject_pizza_chatbot_dsb10() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "project_pizza_chatbot_dsb10.html";
}

function navigateToProject_atm_oop_py_dsb10() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "project_atm_oop_py_dsb10.html";
}

function navigateToProject_mini_api_py() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "project_mini_api_py.html";
}

function navigateToProject_mini_xml_cafe() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "project_mini_xml_cafe.html";
}

function navigateToExperience() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "experience.html";
}

function navigateToExperience_leowood() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "experience_leowood.html";
}

function navigateToExperience_arrow() {
    event.stopPropagation(); // ป้องกันไม่ให้ event ถูก propagate ไปยังพ่อแม่
    window.location.href = "experience_arrow.html";
}

/*------------------------------------------------------------------------------------------------------------------------- */
// เพิ่ม script เล็กน้อยเพื่อให้แน่ใจว่า tooltip แสดงผลถูกต้อง
document.addEventListener('DOMContentLoaded', function () {
    const gpaHover = document.querySelector('.gpa-hover');
    const tooltip = document.querySelector('.tooltip');

    gpaHover.addEventListener('mousemove', function (event) {
        // ดึงค่าตำแหน่งของเมาส์
        let mouseX = event.pageX;
        let mouseY = event.pageY;

        // ปรับตำแหน่ง tooltip ให้ใกล้กับเมาส์
        tooltip.style.left = mouseX - 250 + 'px';  // ขยับ tooltip ไปทางขวาของเมาส์ 10px
        tooltip.style.top = mouseY - 850 + 'px';   // ขยับ tooltip ไปทางล่างของเมาส์ 10px
    });

    gpaHover.addEventListener('mouseenter', function () {
        tooltip.style.opacity = '1';
        tooltip.style.visibility = 'visible';
    });

    gpaHover.addEventListener('mouseleave', function () {
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
    });
});

//-------------------------------------------------------------------------------------------------------------------------------------------- 
function copyEmail() {
    let email = document.getElementById("email").textContent.trim(); // ดึงเฉพาะข้อความอีเมล
    navigator.clipboard.writeText(email).then(() => {
        let toast = document.getElementById("toast-copy"); // ดึง element Toast ที่เกี่ยวข้อง
        showToast(toast); // เรียกใช้ฟังก์ชัน showToast() ที่คุณมีอยู่แล้ว
    });
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const previewImage = document.createElement("img");
previewImage.classList.add("preview");
document.body.appendChild(previewImage);

function showPreview(event, src) {
    previewImage.src = src;
    previewImage.style.display = "block";

    // ปรับตำแหน่งให้อยู่บนขวาของ cursor
    previewImage.style.left = event.pageX + 15 + "px"; // ขยับไปทางขวาของ cursor
    previewImage.style.top = event.pageY - 250 + "px";  // ขยับขึ้นไปด้านบน cursor
}

function hidePreview() {
    previewImage.style.display = "none";
}

/*------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".code-container").forEach(container => {
        const copyBtn = container.querySelector(".copy-btn");
        const codeBlock = container.querySelector("code");
        const toast = container.querySelector(".toast"); // แก้ไขให้หา Toast เฉพาะของ container นี้

        if (copyBtn && codeBlock && toast) {
            // ลบ white space ที่ไม่จำเป็น
            codeBlock.textContent = codeBlock.textContent.trim();

            copyBtn.addEventListener("click", function () {
                // คัดลอกโค้ดไปยัง clipboard
                navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                    showToast(toast); // ส่ง Toast ที่เกี่ยวข้องเข้าไป
                }).catch(err => {
                    console.error("Failed to copy: ", err);
                });
            });

            // Prism.js ทำ Highlight ใหม่ (ถ้ามี Prism.js)
            Prism.highlightElement(codeBlock);
        }
    });
});

// ฟังก์ชันแสดง Toast สำหรับแต่ละ container
function showToast(toast) {
    if (!toast) return;

    // แสดง Toast เฉพาะ container ที่เกี่ยวข้อง
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000); // Toast หายไปหลัง 2 วินาที
}

/*------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".detail1").forEach(detail => {
        detail.setAttribute("open", "true");
    });
});

/*-------------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const tocSection = document.getElementById("toc-section"); // ส่วนที่จะแสดง TOC
    const headings = document.querySelectorAll("h2, h3, h4"); // ค้นหา h2, h3, h4 ทั้งหมด
    const tocList = document.createElement("ul");

    let lastH2 = null, lastH3 = null;

    let h2Count = 0;

    headings.forEach((heading, index) => {
        if (heading.tagName === "H2") {
            h2Count++;
            if (h2Count === 1) return; // ❌ ข้าม h2 ตัวแรก
        }

        const id = heading.id || `heading-${index}`;
        heading.id = id;

        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${id}`;
        link.textContent = heading.textContent;

        listItem.appendChild(link);

        // โครงสร้าง TOC
        if (heading.tagName === "H2") {
            tocList.appendChild(listItem);
            lastH2 = listItem;
            lastH3 = null;
        } else if (heading.tagName === "H3" && lastH2) {
            let subList = lastH2.querySelector("ul") || document.createElement("ul");
            subList.appendChild(listItem);
            lastH2.appendChild(subList);
            lastH3 = listItem;
        } else if (heading.tagName === "H4" && lastH3) {
            let subList = lastH3.querySelector("ul") || document.createElement("ul");
            subList.appendChild(listItem);
            lastH3.appendChild(subList);
        }
    });


    tocSection.appendChild(tocList);

    // เพิ่ม Smooth Scroll และให้หัวข้อเลื่อนมาตรงกลางจอ
    document.querySelectorAll("#toc-section a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2),
                    behavior: "smooth"
                });
            }
        });
    });
});

/*รับ toc แค่ h2-------------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    const tocSection1 = document.getElementById("toc-section1"); // ส่วนที่จะแสดง TOC ใหม่
    const headings = document.querySelectorAll("h2"); // ค้นหาเฉพาะ h2
    const tocList = document.createElement("ul");

    headings.forEach((heading, index) => {
        if (index === 0) return; // ข้ามตัวแรก
    
        const id = heading.id || `heading-${index}`;
        heading.id = id;
    
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${id}`;
        link.textContent = heading.textContent;
    
        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });
    

    if (tocSection1) {
        tocSection1.appendChild(tocList);
    }

    // เพิ่ม Smooth Scroll และให้หัวข้อเลื่อนมาตรงกลางจอ
    document.querySelectorAll("#toc-section1 a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2),
                    behavior: "smooth"
                });
            }
        });
    });
});

/*to top-------------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        // ปรับตำแหน่งปุ่มให้อยู่ล่างสุดของหน้าจอแบบลอยตาม scroll
        scrollToTopBtn.style.top = `${scrollY + viewportHeight - 80}px`; /*80*/

        // แสดงปุ่มเมื่อ scroll ลงมาเกิน 200px
        if (scrollY > 200) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

/*-------------------------------------------------------------------------------- */
// Load and initialize Mermaid
document.addEventListener("DOMContentLoaded", function () {
  mermaid.initialize({
    startOnLoad: true,
    theme: "default", // ลองเปลี่ยนเป็น 'forest', 'dark', 'neutral' ก็ได้
    flowchart: {
      curve: "basis"
    }
  });
});
// -----------------------------------------------------------------------------------------------
// เลื่อนหน้าไปยังตำแหน่งที่มี hash ใน URL
window.addEventListener("DOMContentLoaded", function () {
const hash = window.location.hash;

// ตรวจสอบว่า hash เริ่มต้นด้วย #name-project
if (hash.startsWith("#name-project")) {
    const target = document.querySelector(hash);
    if (target) {
    setTimeout(() => {
        const yOffset = -100; // ปรับให้เลื่อนขึ้น 100px จากตำแหน่งจริง
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
    }
}
});

// -----------------------------------------------------------------------------------------------

document.querySelectorAll("table").forEach(function(table) {
// ตรวจว่า table ยังไม่ถูก wrap ซ้ำ
    if (!table.parentElement.classList.contains("table-container")) {
        const wrapper = document.createElement("div");
        wrapper.className = "table-container";
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    }
});

// -----------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------