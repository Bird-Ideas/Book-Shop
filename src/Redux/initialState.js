const initialState = {
  basket_open: false,
  catalog: [
    {
      id: 0,

      title: "Енеїда",
      autor: "Котляревський Іван Петрович",
      img: "https://i.lb.ua/066/35/5996efb55456a.jpeg",
      price: "300",
      currency: "$",
      raiting: "4/5",
      publish_date: "1842",
      publisher: "Alcove Press",
      pages: "352",
      language: "Ukrainian",
      type: "Paperback",
      UPC: "9781643858241",
      descriptions:
        "«Енеї́да» — українська бурлескно-травестійна поема, написана українським письменником Іваном Котляревським, заснована на сюжеті однойменної класичної поеми римського поета Вергілія. Складається з шести частин, на відміну від дванадцяти частин Вергілія. Написана чотиристопним ямбом. Поема написана в добу становлення романтизму і націоналізму в Європі, на тлі ностальгії частини української еліти за козацькою державою, ліквідованою Росією в 1775–1786 роках. «Енеїда» — перша масштабна пам'ятка українського письменства, укладена розмовною українською мовою. Поема започаткувала становлення новочасної української літератури. Перші три частини поеми були видані в 1798 році, в Санкт-Петербурзі, без відома автора, під назвою: «Енеида. На малороссійскій языкъ перелиціованная И. Котляревскимъ». Повністю «Енеїда» вийшла в світ після смерті Котляревського, в 1842 році. Цей твір є першокласним джерелом з українознавства, українського побуту та культури XVIII століття. Як і оригінал, сюжет описує пригоди троянського отамана Енея, проте у викладі Котляревського вони подаються в антуражі тогочасної української культури. Після зруйнування батьківщини ворогами, Еней разом зі своїм козацьким військом шукає місця, де зміг би заснувати майбутню імперію. В його поневіряння втручаються боги, намагаючись хто допомогти, а хто завадити його подорожі.",
    },
    {
      id: 1,

      title: "Кобзар",
      autor: " Шевченко Т.Г.",
      img: "https://detmir.com.ua/wa-data/public/shop/products/95/62/476295/images/136072/x136072.745.jpg.pagespeed.ic.IamePnmvYZ.webp",
      price: "1092",
      currency: "UAH",
      raiting: "5/5",
      publish_date: "1878",
      publisher: "Школа",
      pages: "576",
      language: "Ukrainian",
      type: "Paperback",
      UPC: "9123851",
      descriptions:
        "Видання є насправді максимально повним зібранням поетового спадку, яке поєднало всі твори, що потрапляли під цензурування як за царату, так і за радянщини. До того ж чимало творів подано з авторовими варіантами, практично невідомими широкому загалові. Зануритись у Шевченкову добу допоможуть чимало унікальних прижиттєвих документів, поетових автографів віршів, листів, світлин й автопортретів. Усе видання унормовано згідно з правилами українського правопису 1928 р.(т.зв. Харківського, або Скрипниківського правопису), який є історично й фонетично найближчим до мови, якою промовляв до нас ПоетКнига видана за підтримки Українського інституту книги в межах програми надання Грантів інституційної підтримки згідно з «Порядком про надання інституційної підтримки у формі грантів суб’єктам видавничої справи від 20.10.2020 року №2203».",
    },
    {
      id: 2,

      title: " Хіба ревуть воли, як ясла повні?",
      autor: "Панас Мирний",
      img: "https://images.zakupka.com/i3/firms/27/5321/5321345/kniga-hiba-revut-voli-yak-yasla-povni-avtor-panas-mirniy-svitovid-tv_e6596fbc06d1cfb_1024x3000.webp",
      price: "130",
      currency: "UAH",
      raiting: "4.2/5",
      publish_date: "2020",
      publisher: "Alcove Press",
      pages: "416",
      language: "Ukrainian",
      type: "Paperback",
      UPC: "978-966-10-5325-9",
      descriptions:
        "Роман «Хіба ревуть воли, як ясла повні?» належить перу двох авторів — Панаса Мирного (первісний задум, ідейно-тематична концепція) та його брата Івана Білика (поглиблення проблематики твору, удосконалення композиції та стилю). Твір став першою в українському письменстві монументальною селянською епопеєю, усебічним змалюванням життя українського села. Автори сміливо утверджують важливу в усі віки ідею — народ жив би мирно, якби не нестерпне гноблення, і лише за допомогою насильства можливо змінити світ. Сучасні літературознавці визначають тему роману як зображений на широкому суспільному тлі життєпис злочинця Чіпки від його народження до ув’язнення на каторгу. Цікаво, що в радянських підручниках і посібниках дещо інакше формулювали тему цього твору: Источник: https://book.kiev.ua/p/1300474435-kniga-hiba-revut-voli-yak-yasla-povni-avtor-panas-mirniy-svitovid-tv/?gclid=CjwKCAjwur-SBhB6EiwA5sKtjhoHVpf713hS-35E5rGsqCdmG55FQd2BM8snKTT_g48c62aSgz0UkBoCkYIQAvD_BwE",
    },
    {
      id: 3,

      title: "Зачарована Десна",
      autor: "Олександр Довженко",
      img: "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/c/o/cover_176_651.jpg",
      price: "80",
      currency: "UAH",
      raiting: "3/5",
      publish_date: "2019",
      publisher: "Фоліо",
      pages: "603",
      language: "Ukrainian",
      type: "Paperback",
      UPC: "97810-6438582-41",
      descriptions:
        "«До цього видання увійшли кіноповісті О. П. Довженка (1894—1956) «Зачарована Десна», «Україна в огні», які стали шедеврами української літератури, деякі оповідання, а також вражаючий документ доби — «Щоденник. 1941—1956», де описані історичні події, свідком яких був О. Довженко. Автор також розповідає про зустрічі зі своїми сучасниками, розмірковує про минуле і майбутнє. Саме сторінкам щоденника митець довіряв свої найпотаємніші творчі плани й розробки сценаріїв.Енеї́да» — українська бурлескно-травестійна поема, написана українським письменником Іваном Котляревським, заснована на сюжеті однойменної класичної поеми римського поета Вергілія. Складається з шести частин, на відміну від дванадцяти частин Вергілія. Написана чотиристопним ямбом. Поема написана в добу становлення романтизму і націоналізму в Європі, на тлі ностальгії частини української еліти за козацькою державою, ліквідованою Росією в 1775–1786 роках. «Енеїда» — перша масштабна пам'ятка українського письменства, укладена розмовною українською мовою. Поема започаткувала становлення новочасної української літератури. Перші три частини поеми були видані в 1798 році, в Санкт-Петербурзі, без відома автора, під назвою: «Енеида. На малороссійскій языкъ перелиціованная И. Котляревскимъ». Повністю «Енеїда» вийшла в світ після смерті Котляревського, в 1842 році. Цей твір є першокласним джерелом з українознавства, українського побуту та культури XVIII століття. Як і оригінал, сюжет описує пригоди троянського отамана Енея, проте у викладі Котляревського вони подаються в антуражі тогочасної української культури. Після зруйнування батьківщини ворогами, Еней разом зі своїм козацьким військом шукає місця, де зміг би заснувати майбутню імперію. В його поневіряння втручаються боги, намагаючись хто допомогти, а хто завадити його подорожі.",
    },
    {
      id: 4,

      title: "Тигролови",
      autor: "Багряний І.",
      img: "https://thebooks.com.ua/image/catalog/2021/05/b/5/28073_15971395903732376.png",
      price: "73",
      currency: "UAH",
      raiting: "4/5",
      publish_date: "2015",
      publisher: "Апріорі",
      pages: "480",
      language: "Ukrainian",
      type: "Paperback",
      UPC: "3123-858-241",
      descriptions:
        "У романі з екзотичною назвою Тигролови і справді йдеться про неймовірне – як люди ловлять голими руками цього сильного і агресивного хижака. Ще неймовірнішою може здатися жорстокість тоталітарно-репресивних сталінських жорен, в які потрапив нащадок славного козацького роду Григорій Мнгогорішний. Він, катований, мордований, голодний, розчавлений, в свої 25 літ на стільки ж літ засланий по етапу на каторгу до Сибіру, все ж таки не здався на милість невблаганної долі.",
    },
    {
      id: 5,

      title: "Кайдашева сім’я",
      autor: "Іван Нечуй-Левицький",
      img: "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/c/o/cover_185_1.jpg",
      price: "50",
      currency: "UAH",
      raiting: "5/5",
      publish_date: "2020",
      publisher: "Фоліо",
      pages: "605",
      language: "Ukrainian",
      type: "Paperback",
      UPC: "380-385-8241",
      descriptions:
        "Іван Нечуй-Левицький (1838—1918) — видатний український письменник-реаліст, який за півстоліття написав понад п’ятдесят романів, повістей, оповідань, казок, п’єс з народного життя. Майстер слова мав на меті якомога глибше розробити «непочаті рудники» українського життя і створити правдиві образи людей з усіх верств суспільства. Колоритні постаті героїв, соковитий гумор та сміливе поєднання серйозного і навіть трагічного з комічним зробили твори Нечуя-Левицького справжніми перлинами української прози. За словами Івана Франка, повість «Кайдашева сім’я» належить до «найкращих оздоб українського письменства». Митець показує життя однієї селянської родини — Омелька Кайдаша, дорослі сини якого створюють власні сім’ї й влаштовують свій побут після реформи 1861 року.",
    },
  ],
  basket_item: [],
};

export default initialState;
