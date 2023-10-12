import Head from "next/head";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import styles from '../../styles/Burst.module.css'

export default function SamuraiEnergyBurst(){
    const settings = {
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
        breakpoint: 1040,
        settings: {
          slidesToShow: 1,
        }
      }],
    }

    return(
        <>
            <Head>
                <title>サムライエナジー｜メイド・イン・ジャパン・エナジードリンク</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="サムライエナジー｜メイド・イン・ジャパン・エナジードリンク" />
                <meta property="og:site_name" content="サムライエナジー｜メイド・イン・ジャパン・エナジードリンク" />
                <meta name="twitter:title" content="サムライエナジー｜メイド・イン・ジャパン・エナジードリンク" />
            </Head>

            <main className={`${styles.burst} burst`}>
            <h1 className={styles.FV}>
      <div className={`${styles.FV__inner} ${styles.inner}`}></div>
    </h1>

    <div className={`${styles.main}`}>
      <div className={`${styles.desc}`}>
        <div className={`${styles.inner}`}>
          <p className={`${styles.desc__text}`}>
            2022年12月に発売されるとまたたく間に<br />
            SNSを中心に話題沸騰の<br className={`${styles.s_only}`} />「SAMURAI ENERGY」と同じく、<br />
            糖類ゼロ、脂質ゼロ、カロリーゼロの<br className={`${styles.s_only}`} />トリプルゼロを実現した<br />
            新商品【SAMURAI ENERGY Burst】<br />
            圧倒的な爽快感に、カフェイン・アルギニンを<br className={`${styles.s_only}`} />主軸とし<br className={`${styles.s_none}`} />
            「SAMURAI ENERGY」とは<br className={`${styles.s_only}`} />また違う刺激的なフレーバー！
          </p>
          <div className={`${styles.desc__cta}`}>
            <a href="https://amzn.asia/d/446XdEB" className={styles.cta} target="_blank" rel="noopener noreferrer">
              <picture>
                <source srcSet="/images/product/cta-sp.png" media="(max-width:767px)" />
                <img src="/images/product/cta.png" alt="Burst of Energy! 爆発的な活力を手に入れたい方はコチラ!" width="4377" height="293" loading="lazy" />
              </picture>
            </a>
          </div>
        </div>
      </div>

      <section className={styles.product}>
        <div className={styles.inner}>
          <h2 className={`${styles.product__title} ${styles.section_title}`}><img src="/images/product/product-title.png" alt="product" width="535" height="111" loading="lazy" /></h2>
          <div className={`${styles.product__img}`}>
            <img src="/images/product/product.webp" alt="Samurai Energy Burstのエナジードリンクの缶" width="609" height="1575" loading="lazy" />
          </div>
          <div className={`${styles.product__desc}`}>
            <h3 className={`${styles.product__desc_name}`}>SAMURAI ENERGY Burst / 210<span>円</span><span>(税込)</span></h3>
            <div className={`${styles.product__desc_box}`}>
              <h4 className={`${styles.product__desc_title}`}>
                「あと少し足りない• • •」<br className={`${styles.s_only}`} />そんな瞬間に<br className={`${styles.s_none}`} />
                ”爆発的な活力”でサポートする<br className={`${styles.s_only}`} />エナジードリンク。
              </h4>
              <p className={styles.product__desc_ingredient}>●原材料名：オタネニンジン抽出物(国内製造)、L-カルニチンフマル酸塩、塩化Na、ガラナエキス / クエン酸、炭酸、クエン酸Na、香料、L-アルギニン、甘味料(スクラロース、アセスルファムK)、カフェイン、カラメル色素、ナイアシン、イノシトール、ビタミンB6、ビタミンB2、ビタミンB12●内容量:250ml</p>
              <p className={styles.product__desc_ingredient}>エネルギー0kcal、たんぱく質0g、脂質0g、炭水化物0.8g(糖類0g)、食塩相当量0.1g、ビタミンB2 0.7mg、ナイアシン 8.5mg、ビタミンB6 0.8mg、ビタミンB121.0～7.0μg、L-アルギニン125mg、高麗人参 85mg、L-カルニチン 29mg、カフェイン 50mg</p>
              <p className={styles.product__desc_note}>エナジードリンクは清涼飲料水ですが、カフェインが含まれていますので、お子様や妊娠中の方、カフェインに敏感な方は飲用をお控え振らずにお開けください。中身がふき出すことがあります。</p>
            </div>
          </div>
          <ul className={`${styles.product__risks}`}>
            <li className={`${styles.product_risk} ${styles.js_animate_item}`}>
              <h3 className={`${styles.product_risk__kinds}`}>
                <picture>
                  <source srcSet="/images/product/risk1-sp.png" media="(max-width:767px)" />
                  <img src="/images/product/risk1.png" alt="糖類のリスク" width="1750" height="1750" loading="lazy" />
                </picture>
              </h3>
              <p className={styles.product_risk__desc}>糖類(単糖類、二糖類、多価アルコール、遊離糖、添加糖)の過剰な摂取は、一般的に健康にとって益よりも害が大きく、とくに体重増加、異所性脂肪蓄積、心血管疾患などの心代謝疾患のリスク増大に寄与していると言う研究結果がでています。</p>
            </li>
            <li className={`${styles.product_risk} ${styles.js_animate_item}`}>
              <h3 className={`${styles.product_risk__kinds}`}>
                <picture>
                  <source srcSet="/images/product/risk2-sp.png" media="(max-width:767px)" />
                  <img src="/images/product/risk2.png" alt="脂質のリスク" width="1750" height="1750" loading="lazy" />
                </picture>
              </h3>
              <p className={styles.product_risk__desc}>脂質をとりすぎると、肥満、心筋梗塞をはじめとする循環器疾患のリスクを高める可能性があります。また、脂質が多い食品を中心とする食生活は、結果として飽和脂肪酸やトランス脂肪酸の摂取量を増やすこととなります。これらは血液中のLDLコレステロールを増加させ、このことも循環器疾患のリスクを高めます。</p>
            </li>
            <li className={`${styles.product_risk} ${styles.js_animate_item}`}>
              <h3 className={`${styles.product_risk__kinds}`}>
                <picture>
                  <source srcSet="/images/product/risk3-sp.png" media="(max-width:767px)" />
                  <img src="/images/product/risk3.png" alt="カロリーのリスク" width="1750" height="1750" loading="lazy" />
                </picture>
              </h3>
              <p className={styles.product_risk__desc}>高カロリーの清涼飲料や炭酸飲料の飲み過ぎが、肥満、2型糖尿病、心血管疾患、がんなどの発症リスクを高めているという。この研究は、米国心臓学会(AHA)が発行する医学誌「サーキュレーション」に発表されており食事に加えて高カロリー飲料でエネルギーを過剰に摂取すると、肥満になりやすくなる。</p>
            </li>
          </ul>
          <div className={styles.product__arrow}></div>
        </div>
        <div className={styles.product__inner}>
          <div className={`${styles.product__point}`}>
            <span className={`${styles.product__point__l}`}>SAMURAI ENERGY Burst</span><span className={`${styles.product__point__s}`}>は</span><br />
            <span className={styles.product__dot}>糖類</span><span className={styles.product__dot}>脂質</span><span className={styles.product__katakana1}>カロリー</span>0<span className={`${styles.product__point__s} ${styles.product__point__no}`}>の</span><span className={styles.product__katakana2}>トリプルゼロ</span>!<br />
            <span className={styles.product__point__s}>しかも</span>国内生産<span className={styles.product__point__s}>なので</span><span className={styles.product__dot}>安心</span>安全で健康的!
          </div>
        </div>
        <div className={styles.inner}>
          <div className={`${styles.product__cta}`}>
            <a href="https://amzn.asia/d/446XdEB" className="cta" target="_blank" rel="noopener noreferrer">
              <picture>
                <source srcSet="/images/product/cta-sp.png" media="(max-width:767px)" />
                <img src="/images/product/cta.png" alt="Burst of Energy! 爆発的な活力を手に入れたい方はコチラ!" width="4377" height="293" loading="lazy" />
              </picture>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.situation}>
        <div className={styles.inner}>
          <h2 className={`${styles.situation__title} ${styles.section_title}`}><img src="/images/product/situation-title.png" alt="situation" width="1168" height="222" loading="lazy" /></h2>
        </div>
        <div className={styles.situation__inner}>
          <Slider className={`${styles.situation__slider} ${styles.slider1}`} {...settings}>
            <li>
              <div className={styles.situation__slide}>
                <div className={styles.situation__slide_img}>
                  <img src="/images/product/situation1.webp" alt="伸びをしている女性" width="467" height="361" />
                </div>
                <h3 className={styles.situation__slide_title}>朝の目覚め</h3>
                <p className={styles.situation__slide_text}>朝、まだ眠い目を覚ます瞬間。新しい一日のスタートに、SAMURAI ENERGY BURSTをチョイスして、パワフルなエネルギーを補給しましょう。</p>
              </div>
            </li>
            <li>
              <div className={styles.situation__slide}>
                <div className={styles.situation__slide_img}>
                  <img src="/images/product/situation2.webp" alt="パソコンの前で仕事をしている様子" width="468" height="361" />
                </div>
                <h3 className={styles.situation__slide_title}>仕事や勉強</h3>
                <p className={styles.situation__slide_text}>仕事や勉強のサポートに!集中力が試される仕事や勉強の時間。SAMURAI ENERGY BURSTが、長時間の集中を支え、アシストします。</p>
              </div>
            </li>
            <li>
              <div className={styles.situation__slide}>
                <div className={styles.situation__slide_img}>
                  <img src="/images/product/situation3.webp" alt="ランニングをしている様子" width="467" height="361" />
                </div>
                <h3 className={styles.situation__slide_title}>運動前</h3>
                <p className={styles.situation__slide_text}>ワークアウト前のエネルギーチャージ!エクササイズやトレーニングの直前に摂取してトレーニングの成果を最大限に引き出しましょう。</p>
              </div>
            </li>
            <li>
              <div className={styles.situation__slide}>
                <div className={styles.situation__slide_img}>
                  <img src="/images/product/situation4.webp" alt="クラブではしゃいでいる様子" width="467" height="361" />
                </div>
                <h3 className={styles.situation__slide_title}>夜間のアクティビティ</h3>
                <p className={styles.situation__slide_text}>夜のアクティブなイベントや楽しいパーティー。SAMURAI ENERGY BURSTで、疲れを感じずに夜を駆け抜けましょう。</p>
              </div>
            </li>
            <li>
              <div className={styles.situation__slide}>
                <div className={styles.situation__slide_img}>
                  <img src="/images/product/situation5.webp" alt="車を運転している様子" width="467" height="361" />
                </div>
                <h3 className={styles.situation__slide_title}>長距離運転</h3>
                <p className={styles.situation__slide_text}>遠距離の運転中、眠気が襲ってきたら。SAMURAI ENERGY BURSTでリフレッシュし、安全運転をキープ、。ただし、運転中の摂取には注意！</p>
              </div>
            </li>
            <li>
              <div className={styles.situation__slide}>
                <div className={styles.situation__slide_img}>
                  <img src="/images/product/situation6.webp" alt="モニターでゲームをしている様子" width="467" height="361" />
                </div>
                <h3 className={styles.situation__slide_title}>ゲーム・eスポーツ</h3>
                <p className={styles.situation__slide_text}>一瞬の判断が必要になるゲーム・eスポーツ。最大の集中力・パフォーマンスを発揮したいときにSAMURAIENERGY Burstは最高のパートナー。</p>
              </div>
            </li>
            <li>
              <div className={styles.situation__slide}>
                <div className={styles.situation__slide_img}>
                  <img src="/images/product/situation7.webp" alt="ライブの様子" width="467" height="361" />
                </div>
                <h3 className={styles.situation__slide_title}>ライブやフェス</h3>
                <p className={styles.situation__slide_text}>コンサートやフェスティバルなどのエンターテイメントイベント。SAMURAIENERGY BURSTで一日中、ノンストップのエネルギーを保ちましょう。</p>
              </div>
            </li>
          </Slider>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.inner}>
          <h2 className={`${styles.about__title} ${styles.section_title}`}><img src="/images/product/about-title.png" alt="about samurai energy" width="2374" height="222" loading="lazy" /></h2>
        </div>
        <div className={styles.about__inner}>
          <div className={`${styles.about__container}`}>
            <div className={styles.about__img}>
              <img src="/images/product/about.webp" alt="2種類のサムライエナジーの缶詰" width="877" height="1040" loading="lazy" />
            </div>
            <div className={styles.about__content}>
              <h3 className={styles.about__content_title}>国産<span className={styles.about__katakana}>ノンカロリー</span><br className={styles.s_none} /><span className={styles.about__katakana}>エナジードリンク</span></h3>
              <p className={styles.about__text}>ノンカロリーにも関わらずしっかりした</p>
              <p className={styles.about__text}>飲みごたえのエナジードリンク、日本人の</p>
              <p className={styles.about__text}>好みに合わせた2種類のフレーバー。</p>
              <div className={styles.about__price}>
                <p className={styles.about__price_desc}>SAMURAI ENERGY / 210円(税込)</p>
                <p className={styles.about__price_desc}>SAMURAI ENERGY Burst / 210円(税込)</p>
              </div>
            </div>
          </div>
          <div className={styles.about__cta}>
            <a href="https://amzn.asia/d/446XdEB" className="cta"  target="_blank" rel="noopener noreferrer">
              <picture>
                <source srcSet="/images/product/cta-sp.png" media="(max-width:767px)" />
                <img src="/images/product/cta.png" alt="Burst of Energy! 爆発的な活力を手に入れたい方はコチラ!" width="4377" height="293" loading="lazy" />
              </picture>
            </a>
          </div>
        </div>
      </section>
      <div className={styles.copyright}>&copy; 2023 Samurai Energy</div>
    </div>
            </main>
        </>
    )
}