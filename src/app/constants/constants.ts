// Assets
import online from "../../../public/assets/appThatMade/online.svg"
import sport from "../../../public/assets/appThatMade/sport.svg"
import booking from "../../../public/assets/appThatMade/booking.svg"
import ecomm from "../../../public/assets/appThatMade/ecomm.svg"
import company from "../../../public/assets/appThatMade/company.svg"
import cashier from "../../../public/assets/appThatMade/cashier.svg"
import chat from "../../../public/assets/appThatMade/chat.svg"
import construction from "../../../public/assets/appThatMade/construction.svg"
import workshop from "../../../public/assets/appThatMade/workshop.svg"

// Services
import service1 from "../../../public/assets/services/service1.webp"
import service2 from "../../../public/assets/services/service2.webp"

// Footer
import fb from "../../../public/assets/socmed/fb.svg"
import tw from "../../../public/assets/socmed/tw.svg"
import yt from "../../../public/assets/socmed/yt.svg"
import linkedin from "../../../public/assets/socmed/linkedin.svg"
import ig from "../../../public/assets/socmed/ig.svg"

// Our Works
import img1 from "../../../public/assets/ourWork/ourwork1.webp"
import img2 from "../../../public/assets/ourWork/ourwork2.webp"

export const navItems: TNavItems[] = [
    {
      id: 1,
      label: "Website",
    },
    {
      id: 1,
      label: "Mobile Apps",
    },
    {
      id: 1,
      label: "Portfolio",
    },
    {
      id: 1,
      label: "Make an App",
    },
  ];

export const dataCarousel: TDataCarousel[] = [
  {
    desc: "Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.",
    author: "Ahmad Prasetyo",
  },
  {
    desc: "Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.",
    author: "Laras Ratnadewi",
  },
  {
    desc: "Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!",
    author: "Ahmad Prasetyo",
  },
];

// Applications that can be made
export const dataAppMade: TDataAppMade[] = [
  {
    icon: online,
    header: "Online Attendance",
    desc: "With the times, your team may be able to work in the office or outside the office. Get the accuracy of your team's work hours with your own company's special online attendance feature with features such as",
    list: [
      "Clock in and Clock Out attendance",
      "Face Photo",
      "Face Recognition",
      "Accurate time stamp down to seconds",
      "GPS location of employees"
    ]
  },
  {
    icon: sport,
    header: "Sport Center",
    desc: "Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to",
    list: [
      "Choose a booking schedule",
      "Online payments",
      "Automatic scheduling system",
      "Search for Friends feature",
      "Split Payment with team members",
      "Information and announcements from you"
    ]
  },
  {
    icon: booking,
    header: "Booking",
    desc: "Offer your services in your own application to place orders to delivery directly to the client's house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:",
    list: [
      "Memilih jenis dan kategori jasa yang dikehendaki",
      "Melakukan reservasi online dan pembayaran dengan metode ",
      "Pembayaran digital",
      "Penjadwalan dengan tim lapangan",
      "Aplikasi khusus untuk tim",
      "Promosi dan Kode voucher khusus"
    ]
  },
]

export const dataAppMade2 = [
  {
    icon: ecomm,
    header: "E-commerce"
  },
  {
    icon: company,
    header: "Company Profile"
  },
  {
    icon: cashier,
    header: "Cashier"
  },
  {
    icon: chat,
    header: "Chat"
  },
  {
    icon: workshop,
    header: "Workshop"
  },
  {
    icon: construction,
    header: "Construction"
  },
]

// Services
export const servicesData = [
  {
    header: "Website",
    startPrice: "1.000.000",
    newPrice: "500.000",
    src: service1,
  },
  {
    header: "Mobile Apps",
    startPrice: "",
    newPrice: "999.000",
    src: service2,
  },
]

// Footer
export const footerItems: any[] = [fb, tw, yt, linkedin, ig]

// Our Works
export const dataOurWorks = [
  {
    src: "",
    header: "Rayu Motor",
    desc: "AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales"
  },
  {
    src: "",
    header: "Rayu Motor",
    desc: "AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales"
  },
]

