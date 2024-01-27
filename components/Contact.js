"use client";
import React from 'react';
<AiFillFacebook />
import { AiFillBulb, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube, } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_mnlw8oi", "template_x4nfmrw", form.current, "r48m0uYsCIYJ_ye1q").then((result) => {
      form.current.reset();
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <section className='w-full h-fit px-[40px] md:py-20 lg:pb-40 lg:pt-10 py-10 max-xs:px-[20] relative bg-whitesmoke' id="contact">
      <div className='max-w-7xl mx-auto'>
        {/* セクションタイトル */}
        <div className='inline-block'>
          <p className='bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-1 mb-10'>
            <span>
              <AiFillBulb />
            </span>
            Contact
          </p>
        </div>
        {/* 左 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div>
            <p className='font-medium text-lg'>モダンなスキルを活用した開発をしています。<br />
              また、UIUXを最大限に考慮してフロントエンドから<br />バックエンドまでフルスタックで開発させていただきます。<br />
              <br />アプリケーション開発やWeb開発全般のご相談は気軽に問い合わせください。
            </p>
            <div className='mt-8'>
              <div className='flex flex-col gap-2'>
                <h5>My SNS accounts</h5>
                <div className='flex gap-5'>
                  <a href='' className='text-3xl text-darkblue'>
                    <AiFillInstagram />
                  </a>
                  <a href='' className='text-3xl text-darkblue'>
                    <AiFillTwitterSquare />
                  </a>
                  <a href='' className='text-3xl text-darkblue'>
                    <AiFillFacebook />
                  </a>
                  <a href='' className='text-3xl text-darkblue'>
                    <AiFillYoutube />
                  </a>
                </div>
              </div>
            </div>
            <p className='mt-5'>連絡先はこちらになります</p>
            <h4 className='text-lg font-medium text-darkblue'>yamagata_7580@yahoo.co.jp</h4>
            {/* SNS表示 */}
          </div>
          {/* 右 */}
          <div>
            <h2 className='py-3 '>お問い合わせフォーム</h2>
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <input type="text" id='name' name="name" placeholder='お名前' className='w-full text-gray-700 border border-slate-300 rounded-xl py-3 px-4 mb-4 leading-tight focus:outline-cadetblue' />
              <input type="email" id='email' name="email" placeholder='メールアドレス' className='w-full text-gray-700 border border-slate-300 rounded-xl py-3 px-4 mb-4 leading-tight focus:outline-cadetblue' />
              <input type="text" id='subject' name="subject" placeholder='タイトル' className='w-full text-gray-700 border border-slate-300 rounded-xl py-3 px-4 mb-4 leading-tight focus:outline-cadetblue' />
              <textarea name="message" id="message" rows={"7"} placeholder="内容" className='w-full text-gray-700 border border-slate-300 rounded-xl py-3 px-4 mb-4 leading-tight focus:outline-cadetblue' />
              <div className='flex justify-end'>
                <button type='submit' className='bg-darkblue text-white font-medium py-3 px-6 rounded-xl hover:shadow-xl hover:bg-gray'>送信</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact