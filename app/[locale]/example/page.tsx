import {useTranslations} from 'next-intl';
import Link from "next-intl/link";

export default function Home() {
  const t = useTranslations('Index');
  console.log('Hello world!')
  return (
    <div>
      <div className='flex flex-row justify-center mt-5 underline'>
        <Link className='mr-6 ' href="/example" locale="en">
          In English
        </Link>
        <Link href="/example" locale="bl">
          In Belarussina
        </Link>
      </div>
       <div>{t('title')}</div>
    </div>
   
  )
}