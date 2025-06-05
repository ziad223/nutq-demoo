import Link from "next/link";

interface LayoutProps {
  params: Promise<{ locale: string | any }>; 
}




export default async function Home({ params }: LayoutProps) {
  const { locale } = await params;
  
 
  
  console.log("locale", locale);

  return (
    <div className = 'm-10 flex flex-col gap-5 '>
      <Link href={`/${locale}/login`} className='text-black underline '>Go To Login</Link>
      <Link href={`/${locale}/login-family`} className='text-black underline '>Go To Family Login</Link>
      <Link href={`/${locale}/patients`} className='text-black underline '>Go To Patients</Link>
      <Link href={`/${locale}/patients/add`} className='text-black underline '>Go To Add Patients</Link>
    </div>
  );
}
