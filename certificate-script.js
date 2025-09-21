// สมมุติว่า certificates มีข้อมูลภาพ
const certificates = [
    
    // 1. DSB10 by DataRockie
    {
        id: 1,
        image: "certificate-dsb10-datarockie.webp",
        title: "Data Science Bootcamp Batch 10",
        school: "DataRockie",
        schoolLink: "https://bootcamp.datarockie.com/",
        description: "สอบผ่านหลักสูตร Data Science Bootcamp (หลักสูตร 6 เดือน 100 ชั่วโมง) โดย DataRockie สำเร็จ ! ข้อสอบประกอบด้วยคำถามแบบเลือกตอบ 240 ข้อ เพื่อจะผ่านการทดสอบ นักเรียนจะต้องได้คะแนนขั้นต่ำ 192/240 คะแนน(me 224/240 คะแนน) Solid foundations on these topics: Spreadsheets, SQL databases, R, Python, Data Transformation, Data Visualization, Statistics, Intro to Machine Learning, Dashboard with Looker Studio and Tableau Public. อ่านต่อเพื่มได้ที่ notion นะครับ",
        notionLink: "https://second-brain-phubordin.notion.site/Data-Science-Bootcamp-10-1a82ea218a1580a68f47e000b12e9b0a?pvs=4",
        cost: "฿4,900 ($143)",
        costlink: "https://datarockie.com/data-science-bootcamp/",
        certificateLink: "https://api.badgr.io/public/assertions/99CX-fsTQ02SPkihaDTINQ?identity__email=poorider02%40gmail.com"
    },
    
    // 2. Intro to Data Science
    {
        id: 2,
        image: "certificate-Intro-to-data-science-skoodio.webp",
        title: "Intro to Data Science",
        school: "Skooldio",
        schoolLink: "https://www.skooldio.com/",
        description: "โลกของ Data Science, ศึกษากรณีตัวอย่างเพื่อใช้ข้อมูลขับเคลื่อนธุรกิจ, ศึกษา metric framework tools ต่างๆเพื่อใช้วัดผลเชิงธุรกิจ (Click-through Rate, Conversion Rate, AARRR!, A/B Testing), กระบวนการทำงาน Data Science(7 steps), การทำ Data Product อ่านต่อเพื่มได้ที่ notion นะครับ",
        notionLink: "https://second-brain-phubordin.notion.site/Intro-to-Data-Science-1aa2ea218a15805fa846c84d26145085?pvs=4",
        cost: "฿1,490 ($44)",
        costlink: "https://www.skooldio.com/courses/data-science-01",
        certificateLink: "https://www.skooldio.com/certificate/b2d8f435-7e96-46e9-a85f-6dc066d83f0e"
    },
    
    // 12. Data Analytics Program by W3School
    {
        id: 12,
        image: "certificate-w3-basic-python.webp",
        title: "Data Analytics Program",
        school: "W3School",
        schoolLink: "https://www.w3schools.com/",
        description: "เมื่อจบหลักสูตร Excel, SQL, R, Python, Statistics, Numpy, Pandas แล้ว จะได้รับประกาศนียบัตร Data Analyst",
        notionLink: "https://second-brain-phubordin.notion.site/W3Schools-Data-Analytics-Bootcamp-1932ea218a1580fb8c0dfcc2bd1ad1fc?source=copy_link",
        cost: "฿7,900 ($230) Scholarship",
        costlink: "https://campus.w3schools.com/products/data-analytics-program",
        certificateLink: "https://verify.w3schools.com/1PW0RVAM0B"
    },

    // 3. Excel Practitioner
    {
        id: 3,
        image: "certificate-w3schools-excel.webp",
        title: "Excel Practitioner",
        school: "W3School",
        schoolLink: "https://www.w3schools.com/",
        description: "Excel Data Analysis(Table Pivot, การใช้ Conditional Formating แต่ละรูปแบบ bar, icon, highlight, color scale), ฟังก์ชันการคำนวณต่างๆ=AND, =AVERAGEIFS, =CONCAT, =COUNT, =COUNTA, =COUNTBLANK, =COUNTIF, =COUNTIFS, =IFS, =LOWER, =MAX, =MEDIAN, =MIN, =MODE, =NPV, =OR, =RAND, =RIGHT, =STDEV.P, =STDEV.S, =SUM, =SUMIF, =SUMIFS, =TRIM, =VLOOKUP, =XOR อ่านต่อเพื่มได้ที่ notion นะครับ",
        notionLink: "https://second-brain-phubordin.notion.site/W3Schools-Data-Analytics-Bootcamp-1932ea218a1580fb8c0dfcc2bd1ad1fc?pvs=4",
        cost: "฿3,300 ($95) Scholarship",
        costlink: "https://campus.w3schools.com/products/excel-certificate?_pos=1&_sid=5eea90fd2&_ss=r",
        certificateLink: "https://verify.w3schools.com/1PNV4D3H6E"
    },

    // 4. SQL Crash Course
    {
        id: 4,
        image: "certificate-sql-crash-course.webp",
        title: "SQL Crash Course",
        school: "DataRockie",
        schoolLink: "https://bootcamp.datarockie.com/",
        description: "Connect database (SQLite), Select Columns, Rename Columns, Filter Rows → WHERE, Aggregate Function → Sum, Avg, Min, Max, Count, Group By, ORDER, Limit, Create and Drop Table, Import and Export Data",
        notionLink: "https://second-brain-phubordin.notion.site/SQL-Crash-Course-1aa2ea218a158005b346c1b0375cf93d?pvs=4",
        cost: "Free! ($0)",
        costlink: "https://bootcamp.datarockie.com/p/sql-cc",
        certificateLink: "https://data-science-bootcamp1.teachable.com/courses/enrolled/1877587"
    },
    
    // 5. DSB11 by DataRockie
    {
        id: 5,
        image: "certificate-dsb11-datarockie.webp",
        title: "Data Science Bootcamp Batch 11",
        school: "DataRockie",
        schoolLink: "https://bootcamp.datarockie.com/",
        description: "สอบผ่านหลักสูตร Data Science Bootcamp (หลักสูตร 6 เดือน 100 ชั่วโมง) โดย DataRockie สำเร็จ ! ข้อสอบประกอบด้วยคำถามแบบเลือกตอบ 240 ข้อ เพื่อจะผ่านการทดสอบ นักเรียนจะต้องได้คะแนนขั้นต่ำ 192/240 คะแนน(me 223/240 คะแนน) Solid foundations on these topics: Spreadsheets, SQL databases, R, Python, Data Transformation, Data Visualization, Statistics, Intro to Machine Learning, Dashboard with Looker Studio and Tableau Public. อ่านต่อเพื่มได้ที่ notion นะครับ",
        notionLink: "https://www.notion.so/second-brain-phubordin/Data-Science-Bootcamp-11-1dd2ea218a1580eca268c44d2e25f40b?source=copy_link",
        cost: "฿4,900 ($143) Scholarship",
        costlink: "https://datarockie.com/data-science-bootcamp/",
        certificateLink: "https://badgr.com/public/assertions/eT01MdhOTkqB70L1NYBkVw?identity__email=phubordin.phanyosri%40gmail.com"
    },
    
    // 6. SQL Developer
    {
        id: 6,
        image: "certificate-w3-sql.webp",
        title: "SQL Developer",
        school: "W3School",
        schoolLink: "https://www.w3schools.com/",
        description: "พื้นฐาน Syntax และ Operator เช่น Select, Where, And, Or, Like, Order By, AS, Betweeen, Join Table, Having, ALL, Any อื่นๆ เป็นต้น และการใช้ Aggregate Function เช่น Count, Sum, Avg, Min, Max เป็นต้น อ่านต่อเพื่มได้ที่ notion นะครับ",
        notionLink: "https://second-brain-phubordin.notion.site/SQL-1982ea218a15806ba442e23c9d6b907d?source=copy_link",
        cost: "฿3,300 ($95) Scholarship",
        costlink: "https://campus.w3schools.com/collections/certifications/products/sql-certificate",
        certificateLink: "https://verify.w3schools.com/1PRGZRSIM9"
    },
    
    // 7. R Developer
    {
        id: 7,
        image: "certificate-w3-r.webp",
        title: "R Developer",
        school: "W3School",
        schoolLink: "https://www.w3schools.com/",
        description: "Data Types, Vectors, Matrices, Lists, Data Frames, Factors, Date & Time, Operators, Control Structures (if-else, switch, for loop, while loop), Functions (user-defined functions, apply family functions), Basic Stats, Basic Plot อ่านต่อเพื่มได้ที่ notion นะครับ",
        notionLink: "https://second-brain-phubordin.notion.site/R-Programing-1982ea218a158094a14dd70c63359fd7?source=copy_link",
        cost: "฿3,300 ($95) Scholarship",
        costlink: "https://campus.w3schools.com/collections/course-catalog/products/r-course",
        certificateLink: "https://verify.w3schools.com/1PV590VMUV"
    },
    
    // 8. Statistical Data Analyst
    {
        id: 8,
        image: "certificate-w3-stats.webp",
        title: "Statistical Data Analyst",
        school: "W3School",
        schoolLink: "https://www.w3schools.com/",
        description: "Normal Distribution, Standard Normal Distribution, Z-Score, การวัดค่ากลาง อื่นๆ อ่านต่อเพื่มได้ที่ notion นะครับ",
        notionLink: "https://second-brain-phubordin.notion.site/Statistics-1982ea218a158003a600fa27a978940c?source=copy_link",
        cost: "฿3,300 ($95) Scholarship",
        costlink: "https://campus.w3schools.com/products/statistics-certificate",
        certificateLink: "https://verify.w3schools.com/1PVAX9R0EB"
    },
    
    // 9. Numpy Developer
    {
        id: 9,
        image: "certificate-w3-numpy.webp",
        title: "Numpy Developer",
        school: "W3School",
        schoolLink: "https://www.w3schools.com/",
        description: "library สำหรับการคำนวณทางวิทยาศาสตร์ (Scientific Computing) ในภาษา Python, การสร้าง Array, การเข้าถึงและการปรับเปลี่ยน Array import numpy as np และอื่นๆ อ่านต่อเพื่มได้ที่ notion นะครับ",
        notionLink: "https://second-brain-phubordin.notion.site/Numpy-1982ea218a158084ad19f405f4c884a4?source=copy_link",
        cost: "฿3,300 ($95) Scholarship",
        costlink: "https://campus.w3schools.com/collections/certifications/products/numpy-certification-exam",
        certificateLink: "https://verify.w3schools.com/1PVAX9R0EB"
    },
    
    // 10. Pandas Developer
    {
        id: 10,
        image: "certificate-w3-pandas.webp",
        title: "Pandas Developer",
        school: "W3School",
        schoolLink: "https://www.w3schools.com/",
        description: "Series, DataFrame, Read CSV, Read JSON, Correlation, Sorting, Filtering, Grouping, Missing Values และอื่นๆ อ่านต่อเพื่มได้ที่ notion นะครับ",
        notionLink: "https://second-brain-phubordin.notion.site/Pandas-1982ea218a15800091cbc93ec81f2c5d?source=copy_link",
        cost: "฿3,300 ($95) Scholarship",
        costlink: "https://campus.w3schools.com/collections/certifications/products/pandas-certification-exam",
        certificateLink: "https://verify.w3schools.com/1PW3GVK5HQ"
    },
    
    // 11. Python Developer
    {
        id: 11,
        image: "certificate-w3-basic-python.webp",
        title: "Python Developer",
        school: "W3School",
        schoolLink: "https://www.w3schools.com/",
        description: "list, tuple, set, dictionary, if-else, for loop, while loop, function, lambda function, class & object และอื่นๆ อ่านต่อเพื่มได้ที่ notion นะครับ",
        notionLink: "https://second-brain-phubordin.notion.site/Basic-Python-1de2ea218a1580ba8ce8c18f27acf34f?source=copy_link",
        cost: "฿3,300 ($95) Scholarship",
        costlink: "https://campus.w3schools.com/products/python-certificate?utm_source=w3schools&utm_medium=referral&utm_campaign=python_exam&utm_content=get_your_certificate",
        certificateLink: "https://verify.w3schools.com/1PW0RVAM0B"
    }


];

// Global variables
let currentView = 'gallery';
let selectedSchool = 'all';
let currentIndex = 0;  // ใช้สำหรับการจัดการ slideshow index
let nextViewText = 'Switch to Slideshow View'; // ข้อความปุ่มเริ่มต้น

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
    // ตรวจสอบและสร้าง element สำหรับ list view หากยังไม่มี
    if (!document.getElementById('list-view')) {
        const listViewElement = document.createElement('div');
        listViewElement.id = 'list-view';
        listViewElement.classList.add('view-container');

        // แทรกลงในตำแหน่งที่เหมาะสม
        const container = document.querySelector('.container') || document.body;
        container.appendChild(listViewElement);
    }

    // Get DOM Elements
    const schoolSelector = document.getElementById('school-selector');
    const viewToggle = document.getElementById('view-toggle');

    // สร้าง dropdowns เมื่อโหลดหน้า
    populateSchoolSelector();

    // Setup event listeners
    if (viewToggle) {
        viewToggle.addEventListener('click', toggleView);
        // ตั้งค่าข้อความเริ่มต้นของปุ่ม
        const toggleText = viewToggle.querySelector('#toggleText');
        if (toggleText) {
            toggleText.textContent = nextViewText;
        }
    }

    if (schoolSelector) {
        schoolSelector.addEventListener('change', function (e) {
            selectedSchool = e.target.value;
            currentIndex = 0; // Reset the slideshow index when school changes
            renderView();
        });
    }

    // Setup theme toggle
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("change", function () {
            document.body.classList.toggle("dark-mode");

            // เรียกใช้ renderView เพื่อวาด UI ใหม่ทั้งหมดตามโหมดปัจจุบัน
            renderView();

            // และยังเรียก applyDarkModeToElements เพื่อให้แน่ใจว่าทุก element ได้รับการอัพเดท
            applyDarkModeToElements();
        });

        // ตรวจสอบสถานะเริ่มต้นของ theme toggle
        if (document.body.classList.contains('dark-mode')) {
            // เรียกใช้ทั้งสองฟังก์ชันเพื่อให้แน่ใจว่า UI แสดงผลถูกต้อง
            renderView();
            applyDarkModeToElements();
        }
    }

    // Initialize the view
    renderView();
    updateViewToggleButton();
});

// Populate school selector
function populateSchoolSelector() {
    const schoolSelector = document.getElementById('school-selector');
    if (!schoolSelector) return;

    const schools = [...new Set(certificates.map(cert => cert.school))];
    schoolSelector.innerHTML = '<option value="all">All Schools</option>';
    schools.forEach(school => {
        const option = document.createElement('option');
        option.value = school;
        option.textContent = school;
        schoolSelector.appendChild(option);
    });
}

function toggleView() {
    // กำหนด view ถัดไป
    if (currentView === 'gallery') {
        currentView = 'slideshow';
        nextViewText = 'Switch to List View';
    } else if (currentView === 'slideshow') {
        currentView = 'list';
        nextViewText = 'Switch to Gallery View';
    } else {
        currentView = 'gallery';
        nextViewText = 'Switch to Slideshow View';
    }

    currentIndex = 0; // Reset the slideshow index when switching views
    renderView();
    updateViewToggleButton();
}

function updateViewToggleButton() {
    const viewToggle = document.getElementById('view-toggle');
    if (!viewToggle) return;

    const toggleIcon = viewToggle.querySelector('.toggle-icon');
    const toggleText = document.getElementById('toggleText');

    if (!toggleIcon || !toggleText) return;

    // อัพเดทข้อความปุ่มตาม view ถัดไปที่จะเปลี่ยน
    toggleText.textContent = nextViewText;

    // อัพเดท icon ตาม view ถัดไป
    if (nextViewText.includes('Slideshow')) {
        toggleIcon.className = 'toggle-icon slideshow-icon';
    } else if (nextViewText.includes('List')) {
        toggleIcon.className = 'toggle-icon list-icon';
    } else {
        toggleIcon.className = 'toggle-icon gallery-icon';
    }
}

// Filter certificates by selected school
function getFilteredCertificates() {
    return selectedSchool === 'all'
        ? certificates
        : certificates.filter(cert => cert.school === selectedSchool);
}

// ฟังก์ชันใหม่เพื่อหาดัชนีของ certificate จาก ID
function findCertificateIndexById(certId) {
    const filteredCerts = getFilteredCertificates();
    return filteredCerts.findIndex(cert => cert.id === certId);
}

// ฟังก์ชันใหม่เพื่อเปิด slideshow จาก certificate ที่เลือก
// function openSlideshowFromCertificate(certId) {
//     const index = findCertificateIndexById(certId);
//     if (index !== -1) {
//         currentIndex = index;
//         currentView = 'slideshow';
//         nextViewText = 'Switch to List View';
//         renderView();
//         updateViewToggleButton();
//     }
// }

// ✅ ฟังก์ชันสร้าง school logo อัตโนมัติ
function getSchoolLogo(schoolName) {
  switch (schoolName) {
    case "DataRockie":
      return `<img src="logo-datarockie.png" alt="DataRockie Logo" class="school-logo">`;
    case "Skooldio":
      return `<img src="logo-skooldio.png" alt="Skooldio Logo" class="school-logo">`;
    case "W3School":
      return `<img src="logo-w3schools.png" alt="W3Schools Logo" class="school-logo">`;
    default:
      return ""; // ถ้าไม่มีโลโก้ ก็ปล่อยว่าง
  }
}


// Render certificate card
function renderCertificateCard(cert) {
    // ตรวจสอบโหมดปัจจุบันโดยตรงจาก body class
    const isDarkMode = document.body.classList.contains('dark-mode');
    const darkModeClass = isDarkMode ? 'dark-mode' : '';
    const schoolLogo = getSchoolLogo(cert.school); // ✅ ดึงโลโก้มาใช้

    return `
        <div class="certificate-card fade-in ${darkModeClass}" data-cert-id="${cert.id}">
        <img src="${cert.image}" alt="${cert.title}" class="certificate-image cursor-zoom-in" onclick="openGalleryModal('${cert.image}')">
        
        <div class="certificate-details ${darkModeClass}">
            <h3 class="certificate-title1" onclick="openGalleryModal('${cert.image}')">${cert.title}</h3>
            
            <div class="school-containner">
            <a target="_blank" href="${cert.schoolLink}" class="${darkModeClass}">
                ${schoolLogo} 
                <span class="school-name">${cert.school}</span>
            </a>
            </div>
            
            <details>
            <summary>คำอธิบาย<span class="text-description1">2x click to open just one</span></summary>
            ${cert.description}
            </details>

            <div class="certificate-links">
            <a href="${cert.notionLink}" class="certificate-link ${darkModeClass}" target="_blank">
                <span class="notes-icon">
                View Notes : <img src="notion.webp" width="20" class="notion-icon">
                Notion
                </span>
            </a>

            <a href="${cert.costlink}" class="certificate-link ${darkModeClass}" target="_blank">
                <span class="cost-icon"> Course Value : ${cert.cost}</span>
            </a>

            <a href="${cert.certificateLink}" class="certificate-link ${darkModeClass}" target="_blank">
                <span class="cost-icon">Verify Certificate</span>
            </a>
            </div>
        </div>
        </div>
  `;
}

// Render gallery view
function renderGalleryView() {
    const galleryView = document.getElementById('gallery-view');
    if (!galleryView) return;

    const filteredCerts = getFilteredCertificates();
    // ตรวจสอบโหมดปัจจุบันโดยตรงจาก body class
    const isDarkMode = document.body.classList.contains('dark-mode');
    const darkModeClass = isDarkMode ? 'dark-mode' : '';

    galleryView.innerHTML = `
        <div class="certificate-grid ${darkModeClass}">
            ${filteredCerts.map(cert => renderCertificateCard(cert)).join('')}
        </div>
    `;

    // แสดง gallery view และซ่อน views อื่น
    galleryView.style.display = 'block';

    const slideshowView = document.getElementById('slideshow-view');
    if (slideshowView) slideshowView.style.display = 'none';

    const listView = document.getElementById('list-view');
    if (listView) listView.style.display = 'none';

    // Setup details behavior ทุกครั้งที่ render view ใหม่
    setupDetailsElements();
}

// Render slideshow view
function renderSlideshowView() {
    const slideshowView = document.getElementById('slideshow-view');
    if (!slideshowView) return;

    const filteredCerts = getFilteredCertificates();
    if (filteredCerts.length > 0) {
        if (currentIndex >= filteredCerts.length) {
            currentIndex = 0;
        }

        const cert = filteredCerts[currentIndex];
        const isDarkMode = document.body.classList.contains('dark-mode');
        const darkModeClass = isDarkMode ? 'dark-mode' : '';

        // ✅ ใช้ฟังก์ชันดึงโลโก้ + ชื่อโรงเรียน
        const schoolLogo = getSchoolLogo(cert.school);

        slideshowView.innerHTML = `
            <div class="slideshow-container fade-in ${darkModeClass}">
                <div class="slideshow-image">
                    <img src="${cert.image}" alt="${cert.title}">
                    <div class="slideshow-nav">
                        <button class="nav-button prev-button" onclick="previousSlide()">
                            <span class="prev-icon"></span>
                        </button>
                        <button class="nav-button next-button" onclick="nextSlide()">
                            <span class="next-icon"></span>
                        </button>
                    </div>
                </div>
                <div class="slideshow-details ${darkModeClass}">
                    <h2 class="certificate-title1">${cert.title}</h2>
                    
                    <!-- ✅ ปรับตรงนี้ให้เป็น container แบบเดียวกับ card -->
                    <div class="school-containner">
                        <a target="_blank" href="${cert.schoolLink}" class="${darkModeClass}">
                            ${schoolLogo}
                            <span class="school-name">${cert.school}</span>
                        </a>
                    </div>

                    <p class="certificate-description link-cursor">${cert.description}</p>

                    <div class="certificate-links">
                        <a href="${cert.notionLink}" class="certificate-link ${darkModeClass}" target="_blank">
                            <span class="notes-icon">
                                View Notes : <img src="notion.webp" width="20" class="notion-icon">
                                Notion
                            </span>
                        </a>
                        
                        <a href="${cert.costlink}" class="certificate-link ${darkModeClass}"  target="_blank">
                            <span class="cost-icon"> Course Value : ${cert.cost}</span>
                        </a>
                        
                        <a href="${cert.certificateLink}" class="certificate-link ${darkModeClass}" target="_blank">
                            <span class="cost-icon">Verify Certificate</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    slideshowView.style.display = 'block';

    const galleryView = document.getElementById('gallery-view');
    if (galleryView) galleryView.style.display = 'none';

    const listView = document.getElementById('list-view');
    if (listView) listView.style.display = 'none';
}

function renderSchoolInfo(cert, darkModeClass = '') {
  return `
    <div class="school-containner">
      <a target="_blank" href="${cert.schoolLink}" class="${darkModeClass}">
        ${getSchoolLogo(cert.school)}
        <span class="school-name">${cert.school}</span>
      </a>
    </div>
  `;
}


// Render list view
function renderListView() {
    const listView = document.getElementById('list-view');
    if (!listView) return;

    const filteredCerts = getFilteredCertificates();
    const isDarkMode = document.body.classList.contains('dark-mode');
    const darkModeClass = isDarkMode ? 'dark-mode' : '';

    listView.innerHTML = `
        <div class="certificate-list fade-in">
            <div class="table-scroll-wrapper">
                <table class="list-table">
                    <thead>
                        <tr>
                            <th>Course Title</th>
                            <th>School</th>
                            <th>Value Courses</th>
                            <th>View Notion</th>
                            <th>Check</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filteredCerts.map(cert => `
                            <tr>
                                <td 
                                  onclick="openGalleryModal('${cert.image}')" 
                                  onmouseover="showPreview(event, '${cert.image}')" 
                                  onmouseout="hidePreview()"
                                  class="certificate-title3">${cert.title}</td>

                                <!-- ✅ แสดง school logo + name -->
                                <td>${renderSchoolInfo(cert, darkModeClass)}</td>

                                <td>
                                  <a target="_blank" href="${cert.costlink}" class="check">
                                    ${cert.cost}
                                  </a>
                                </td>

                                <td>
                                  <a target="_blank" href="${cert.notionLink}" class="check">
                                    <img src="notion.webp" width="20" class="notion-icon"> Notion
                                  </a>
                                </td>

                                <td>
                                  <a target="_blank" href="${cert.certificateLink}" class="check">Verify</a>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    listView.style.display = 'block';

    const galleryView = document.getElementById('gallery-view');
    if (galleryView) galleryView.style.display = 'none';

    const slideshowView = document.getElementById('slideshow-view');
    if (slideshowView) slideshowView.style.display = 'none';
}

// Function to setup details elements
function setupDetailsElements() {
    document.querySelectorAll(".certificate-card details").forEach((details) => {
        let clickTimeout = null; // ใช้ตรวจจับ Double Click
        let lastClicked = null; // ใช้เก็บอันสุดท้ายที่กด Double Click

        details.addEventListener("click", function (event) {
            event.preventDefault(); // ป้องกันพฤติกรรมเริ่มต้นของ <details>

            if (clickTimeout) {
                // 👉 Double Click: เปิดเฉพาะอันที่กด & ปิดอันอื่นทั้งหมด
                clearTimeout(clickTimeout);
                clickTimeout = null;

                document.querySelectorAll(".certificate-card details").forEach((d) => {
                    d.removeAttribute("open");
                });
                details.setAttribute("open", "true");
                lastClicked = details; // บันทึกว่าการ์ดนี้เป็นอันสุดท้ายที่เปิดจาก Double Click

            } else {
                // ตั้ง timeout เพื่อตรวจจับ Single Click
                clickTimeout = setTimeout(() => {
                    if (lastClicked === details) {
                        // ถ้าเป็นอันที่เคย Double Click มาก่อน → ปิดเฉพาะอันนี้
                        details.removeAttribute("open");
                        lastClicked = null; // รีเซ็ตค่า
                    } else {
                        // 👉 Single Click ปกติ: เปิด-ปิดทั้งหมดตามเงื่อนไข
                        const allAreOpen = [...document.querySelectorAll(".certificate-card details")]
                            .every((d) => d.hasAttribute("open"));

                        if (allAreOpen) {
                            // ถ้าทุกอันเปิดอยู่แล้ว → ปิดทั้งหมด
                            document.querySelectorAll(".certificate-card details").forEach((d) => {
                                d.removeAttribute("open");
                            });
                        } else {
                            // ถ้ามีบางอันปิดอยู่ → เปิดทั้งหมด
                            document.querySelectorAll(".certificate-card details").forEach((d) => {
                                d.setAttribute("open", "true");
                            });
                        }
                    }

                    clickTimeout = null;
                }, 300); // กำหนดเวลาระหว่างคลิกเพื่อแยก Single / Double Click
            }
        });
    });
}



// Previous slide function for slideshow
function previousSlide() {
    const filteredCerts = getFilteredCertificates();
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : filteredCerts.length - 1;
    renderSlideshowView();
}

// Next slide function for slideshow
function nextSlide() {
    const filteredCerts = getFilteredCertificates();
    currentIndex = (currentIndex < filteredCerts.length - 1) ? currentIndex + 1 : 0;
    renderSlideshowView();
}

// ปรับปรุงฟังก์ชัน renderView ให้ไม่ใช้ setTimeout
function renderView() {
    if (currentView === 'gallery') {
        renderGalleryView();
    } else if (currentView === 'slideshow') {
        renderSlideshowView();
    } else {
        renderListView();
    }

    // Update active classes for view containers
    const galleryView = document.getElementById('gallery-view');
    const slideshowView = document.getElementById('slideshow-view');
    const listView = document.getElementById('list-view');

    if (galleryView) galleryView.classList.toggle('active', currentView === 'gallery');
    if (slideshowView) slideshowView.classList.toggle('active', currentView === 'slideshow');
    if (listView) listView.classList.toggle('active', currentView === 'list');

    // เรียก applyDarkModeToElements โดยตรงหลังจาก render
    applyDarkModeToElements();
}

// ปรับปรุงฟังก์ชัน applyDarkModeToElements ให้ครอบคลุมมากขึ้น
function applyDarkModeToElements() {
    const isDarkMode = document.body.classList.contains('dark-mode');

    // สร้าง selectors รวมทุก element ที่ต้องการอัพเดทไว้ในที่เดียว
    const selectors = [
        '.certificate-card',
        '.certificate-details',
        '.slideshow-container',
        '.slideshow-details',
        '.list-item',
        '.list-table',
        '.certificate-grid',
        '.gallery-modal',
        '.modal-content',
        '.certificate-link',
        'verify-icon',
        'th',
        'td',
        '.certificate-school',
        'a.certificate-school'
    ];

    // ทำการ query selector รวมแล้วอัพเดท class
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            if (isDarkMode) {
                el.classList.add('dark-mode');
            } else {
                el.classList.remove('dark-mode');
            }
        });
    });
}

function openGalleryModal(imageSrc, event) {
    const modal = document.createElement('div');
    modal.classList.add('gallery-modal');
    
    // ตรวจสอบโหมดปัจจุบันโดยตรงจาก body class
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        modal.classList.add('dark-mode');
    }
    
    modal.innerHTML = `
        <div class="modal-content ${isDarkMode ? 'dark-mode' : ''}">
            <span class="close-modal">&times;</span>
            <img src="${imageSrc}" class="full-image">
        </div>
    `;
    document.body.appendChild(modal);
    
    // จุดกึ่งกลางของ viewport
    const viewportCenterX = window.innerWidth / 2 + window.pageXOffset;
    const viewportCenterY = window.innerHeight / 2 + window.pageYOffset;
    
    // กำหนดตำแหน่งให้แสดงตรงกึ่งกลางของ viewport ที่ผู้ใช้กำลังดูอยู่
    const modalContent = modal.querySelector('.modal-content');
    
    // เพิ่มขนาดภาพให้ใหญ่ขึ้นมาก
    modalContent.style.maxWidth = '95%'; // เพิ่มเป็น 95% จากเดิม 80%
    modalContent.style.maxHeight = '90%'; // เพิ่มเป็น 90% จากเดิม 80%
    
    // กำหนดตำแหน่งเริ่มต้นไปที่กึ่งกลาง viewport
    modalContent.style.left = `${viewportCenterX}px`;
    modalContent.style.top = `${viewportCenterY}px`;
    
    // เพิ่ม scale ในการแสดงผลเริ่มต้นเพื่อทำให้ภาพใหญ่ขึ้นอีก (ปรับตามความเหมาะสม)
    modalContent.style.transform = 'translate(-50%, -50%) scale(1.5)'; // เพิ่ม scale เป็น 1.5 เท่า
    
    // สร้าง div สำหรับไฟล์ border เรืองแสง เหมือนในภาพตัวอย่าง
    const img = modal.querySelector('.full-image');
    img.style.boxShadow = '0px 0px 10px cyan, 0px 0px 20px cyan, 0px 0px 40px cyan, 0px 0px 60px cyan';
    
    // Close modal on click
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}


// ทำให้ฟังก์ชันนี้สามารถเรียกใช้งานจาก inline HTML ได้
window.openGalleryModal = openGalleryModal;

// Make functions globally available for HTML onclick attributes
window.previousSlide = previousSlide;
window.nextSlide = nextSlide;
window.toggleView = toggleView;
// window.openSlideshowFromCertificate = openSlideshowFromCertificate;