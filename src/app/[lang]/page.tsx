import { ModeToggle } from '@/components/theme-toggler/theme-toggler'
import { getDictionary } from './dictionaries'
 
export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fa' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang) // en
  return <button>{dict.developerInfo.fullName}<ModeToggle/></button> // Add to Cart
}