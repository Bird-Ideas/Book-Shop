import React from "react";
import s from "./Item_Single_Page.module.css";
import img from "../../../media/books_img/dsc_00786.jpg";

const Item_Single_Page = () => {
  return (
    <div className={s.page}>
      <div className={s.way}>{"home>books>..."}</div>
      <div className={s.content}>
        <div className={s.img}>
          <img src={img}></img>
        </div>
        <div className={s.info}>
          <div className={s.title}>Енеїда </div>
          <div className={s.autor}>Котляревський Іван Петрович</div>
          <div className={s.stats}>
            <div className={s.stats_item}>
              Raiting:<div className={s.stats_item_line}></div>
              <div>4/5</div>
            </div>
            <div className={s.stats_item}>
              Publisher:<div className={s.stats_item_line}></div>
              <div>Alcove Press</div>
            </div>
            <div className={s.stats_item}>
              Publish Date:<div className={s.stats_item_line}></div>
              <div>1842</div>
            </div>
            <div className={s.stats_item}>
              Pages:<div className={s.stats_item_line}></div>
              <div>352</div>
            </div>
            <div className={s.stats_item}>
              Language:<div className={s.stats_item_line}></div>
              <div>Ukrainian</div>
            </div>
            <div className={s.stats_item}>
              Type:<div className={s.stats_item_line}></div>
              <div>Paperback</div>
            </div>
            <div className={s.stats_item}>
              EAN/UPC:<div className={s.stats_item_line}></div>
              <div>9781643858241</div>
            </div>
          </div>
          <div className={s.buy_menu}>
            <div className={s.price_div}>
              <span className={s.price_span}>
                <span className={s.price_span_currency}>$</span>19,03
              </span>
            </div>
            <div className={s.btn_div}>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.descriptions}>
        <h3>Descriptions:</h3>
        <p>
          «Енеї́да» — українська бурлескно-травестійна поема, написана
          українським письменником Іваном Котляревським, заснована на сюжеті
          однойменної класичної поеми римського поета Вергілія. Складається з
          шести частин, на відміну від дванадцяти частин Вергілія. Написана
          чотиристопним ямбом. Поема написана в добу становлення романтизму і
          націоналізму в Європі, на тлі ностальгії частини української еліти за
          козацькою державою, ліквідованою Росією в 1775–1786 роках. «Енеїда» —
          перша масштабна пам'ятка українського письменства, укладена розмовною
          українською мовою. Поема започаткувала становлення новочасної
          української літератури. Перші три частини поеми були видані в 1798
          році, в Санкт-Петербурзі, без відома автора, під назвою: «Енеида. На
          малороссійскій языкъ перелиціованная И. Котляревскимъ». Повністю
          «Енеїда» вийшла в світ після смерті Котляревського, в 1842 році. Цей
          твір є першокласним джерелом з українознавства, українського побуту та
          культури XVIII століття. Як і оригінал, сюжет описує пригоди
          троянського отамана Енея, проте у викладі Котляревського вони
          подаються в антуражі тогочасної української культури. Після
          зруйнування батьківщини ворогами, Еней разом зі своїм козацьким
          військом шукає місця, де зміг би заснувати майбутню імперію. В його
          поневіряння втручаються боги, намагаючись хто допомогти, а хто
          завадити його подорожі.
        </p>
      </div>
    </div>
  );
};

export default Item_Single_Page;
