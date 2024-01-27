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
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE", form.current.reset(), "YOUR_PUBLIC_KEY").then((result) => {
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
        <div className='grid-cols-1 lg:grid-cols-2 gap-6'>
          <div>
            <p>モダンなスキルを活用した開発をしています。<br />
              また、UIUXを最大限に考慮してフロントエンドからバックエンドまでフルスタックで開発させていただきます。<br />
              アプリケーション開発やWeb開発全般のご相談は気軽に問い合わせください。
            </p>
            <p className='mt-12'>連絡先はこちらになります</p>
            <h4 className='text-lg font-medium text-darkblue'>yamagata_7580@yahoo.co.jp</h4>
            {/* SNS表示 */}
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
          </div>
        </div>
        {/* 右 */}
        <div>
          <from ref={form} onSubmit={sendEmail} className="w-full">
            <input type="text" id='name' name="name" placeholder='お名前'/>
            <input type="email" id='email' name="email" placeholder='メールアドレス'/>
            <input type="text" id='subject' name="subject" placeholder='タイトル'/>
            <textarea name="message" id="message" rows={""} placeholder="内容" />
            <div className='flex justify-end'>
              <button type='submit' >送信</button>
            </div>
          </from>
        </div>
      </div>
    </section>
  )
}

export default Contact