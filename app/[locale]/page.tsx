'use client'

import {useTranslations} from 'next-intl';
import Link from "next-intl/link";
import { useForm, SubmitHandler } from "react-hook-form"

export default function Home() {
  const t = useTranslations('Index');

  const { register, handleSubmit, formState:{errors} } = useForm<{firstName:string}>()
  const onSubmit: SubmitHandler<{firstName:string}> = (data) => console.log(data)
  console.log(errors)
  return (
    <div className='ml-2'>
      <div className='flex flex-row justify-center mt-5 mb-3 underline'>
        <Link className='mr-6 ' href="/" locale="en">
          In English
        </Link>
        <Link href="/" locale="bl">
          In Belarussina
        </Link>
      </div>
       <div>{t('title')}</div>
       <form action="" onSubmit={handleSubmit(onSubmit)} >
        <input {...register("firstName", { required: t("error") })} placeholder={t('placeholder')} 
        className='border border-gray-400 mr-3' type="text" />
        <button type='submit'>{t('button')}</button>
        <p className='text-red-500'>{errors.firstName?.message}</p>
       </form>
    </div>
   
  )
}
