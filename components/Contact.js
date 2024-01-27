import React from 'react'
<AiFillFacebook />
import { AiFillBulb, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, } from 'react-icons/ai'

function Contact() {
  return (
    <section>
      <div>
        {/* セクションタイトル */}
        <div>
          <p>
            <span>
              <AiFillBulb />
            </span>
            Contact
          </p>
        </div>
        {/* 左 */}
        <div>
          <div>
            <p>モダンなスキルを活用した開発をしています。<br />
              また、UIUXを最大限に考慮してフロントエンドからバックエンドまでフルスタックで開発させていただきます。<br />
              アプリケーション開発やWeb開発全般のご相談は気軽に問い合わせください。
            </p>
            <p>連絡先はこちらになります</p>
            <h4>yamagata_7580@yahoo.co.jp</h4>
            {/* SNS表示 */}
            <div>
              <div>
                <h5>My SNS accounts</h5>
                <div>
                  <a href=''>
                    <AiFillInstagram />
                  </a>
                  <a href=''>
                    <AiFillTwitterSquare />
                  </a>
                  <a href=''>
                    <AiFillFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 右 */}
        <div>
          <from action ="">
            <input type="text" />
          </from>
        </div>
      </div>
    </section>
  )
}

export default Contact