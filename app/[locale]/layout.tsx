import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import { headers } from "next/headers";

// import Footer from "@/components/shared/Footer";
import { NextIntlClientProvider } from "next-intl";
import Providers from "@/providers/providers";
import { notFound } from "next/navigation";
import { locales } from "../../navigation";
import Navbar from "@/components/navbar";
// import Navbar from "@/components/shared/Navbar";


export const metadata: Metadata = {
  title: "nutq-demo",
  description: "Your premier destination for real estate",
  
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string | any }>;
}) {
 
    
  const resolvedParams = await (params instanceof Promise
    ? params
    : Promise.resolve(params));
  const { locale: currentLocale } = resolvedParams;

  console.log("currentLocale", currentLocale);

  if (!locales.includes(currentLocale as any)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${currentLocale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider
      // locale={currentLocale || routing.defaultLocale}
      locale={currentLocale || "en"}
      messages={messages}
      
      timeZone="Asia/Dubai"
    >
      <Providers locale={currentLocale || "en"}>
        <div
          dir={currentLocale === "ar" ? "rtl" : "ltr"}
          lang={currentLocale}
          className="min-h-screen overflow-auto "
        >
          <Navbar />
          {children}
        </div>
      </Providers>
    </NextIntlClientProvider>
  );
}

// actions: (
//   <div className="flex gap-2 items-center">
//     <Link href='/patient-report' className="bg-blue-500 text-white p-2 rounded-lg">
//       Patient <span className='lg:block'>Report</span>
//     </Link>
//     <a
//       href="https://wa.me/96612312220239"
//       target="_blank"
//       rel="noopener noreferrer"
//       title="send family login information"
//     >
//       <button
//         className="bg-green-500 hover:bg-green-600 w-9 h-9 flex items-center justify-center text-white p-2 rounded-full shadow-md"
//       >
//         <FaWhatsapp size={20} />
//       </button>
//     </a>
//     <button className="bg-[#222] hover:bg-green-bg-[#000] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
//       <FaClipboardUser size={16} />
//     </button>
//     <button className="bg-[#0d6efd] hover:bg-blue-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
//       <FaMessage size={16} />
//     </button>
//     <button className="bg-[#555] hover:bg-[#444] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
//       <FaFileInvoiceDollar size={16} />
//     </button>
//     <button className="bg-[#8e44ad]  w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
//       <IoEye size={20} />
//     </button>
//     <button className="bg-[#333] hover:bg-[#444] w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
//       <GoClockFill size={20} />
//     </button>
//     <button className="bg-[#ffc107]  w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
//       <GoClockFill size={20} />
//     </button>
//     <button className="bg-[#0d6efd] hover:bg-blue-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px] shadow-md">
//       <BiTransfer size={20} />
//     </button>
//     <button className="bg-transparent border border-gray-700  hover:bg-gray-700 w-9 h-9 flex items-center justify-center text-white p-2 rounded-[10px]">
//       <BsThreeDotsVertical size={20} className='text-black hover:text-white' />
//     </button>
//   </div>
// ),