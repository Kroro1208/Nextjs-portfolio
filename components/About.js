import React from 'react'
import { AiFillBulb } from 'react-icons/ai'

function About() {
  return (
    <section>
      <div>
        {/* タイトル */}
        <div>
          <p>
            <span>
              <AiFillBulb />
            </span>
            自己紹介
          </p>
        </div>
        {/* メイン分 */}
        <div>
          <p>
            個人のライフスタイルのマネジメント。
            東京消防庁で学んできた独自のトレーニング法、料理をレクチャー。<br/>
            また20歳からレスキュー隊、ハイパーレスキュー隊で学んだ災害対策知識や、バイスタンダーの処置要領などを一般の方向けに講義を実施。<br/>
            「もしいまあなたの大切なひとが傍で倒れたらあなたは救えますか？」<br/>
            というテーマでバイスタンダーの重要性や適切な処置要領を、実際の災害現場で学んできた経験を元にアドバイス。
          </p>
        </div>
        {/* 軽い実績 */}
        <div>
          <div>
            <ul>
              <li>
                <div>
                  <h3>900+</h3>
                  <span>YOUTUBE</span>
                </div>
              </li>
              <li>
                <div>
                  <h3>30+</h3>
                  <span>PROJECTS</span>
                </div>
              </li>
              <li>
                <div>
                  <h3>5+</h3>
                  <span>YEAR</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About