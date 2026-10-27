'use strict';

const cases = [
  {id:'logistics-analysis',number:'01',phase:'改善を実施',category:'物流・見える化',topics:['logistics','digital'],title:'構内物流のムダを見つけ、フォークリフト台数を削減。',sector:'電気機械器具製造業',summary:'カメラ映像をAIで分析。フォークリフトの動きから、構内物流の改善につなげました。',result:'フォークリフトの台数削減を実現',problem:'構内物流のムダを見つけ、設備台数の適正化につなげること。',action:'カメラ映像をAIで分析する現場生産性分析ツールを導入。フォークリフトの動きを分析し、構内物流のムダを抽出しました。',outcome:'分析結果を基に改善を進め、フォークリフト台数の削減を実現しました。',note:'削減台数・削減率は非掲載です。'},
  {id:'leader-development',number:'02',phase:'育成を実施',category:'現場改善・人材育成',topics:['people'],title:'海外製造現場で、改善キーパーソン3名を育成。',sector:'生産用機械器具製造業',summary:'講義と現場での実践指導を組み合わせ、現場の改善を担うリーダーを育てました。',result:'改善キーパーソン3名を育成',problem:'海外製造現場で、改善活動を担うリーダーを育成すること。',action:'製造現場のリーダー候補者を対象に、トヨタ生産方式・5Sの講義と、現場での実践指導を行いました。',outcome:'改善キーパーソン3名を育成しました。',note:'企業名・実施年は非掲載です。'},
  {"id": "production-planning", "number": "03", "category": "生産計画・需要予測", "topics": ["planning", "digital"], "phase": "分析・運用設計", "title": "内示と受注のずれを分析し、生産量・在庫の判断基準へ。", "sector": "電子部品関連製造業", "summary": "過去の内示・受注実績と品種別の出荷傾向を分析。予測値を見直しながら運用する仕組みを検討しました。", "result": "受注確定率の算出・必要在庫の概算を実施", "problem": "顧客の内示より実際の受注が少なく、内示通りに生産すると在庫過多になる状況でした。また、生産管理に用いるExcelの計算が重く、日々の計画作成にも負荷がかかっていました。", "action": "内示に対する実際の受注の比率から受注確定率を算出し、生産量を予測する方式を検討。季節変動や市況の変化を考慮し、予測と実績のずれを監視して見直す運用を助言しました。品種別の月内出荷傾向から必要在庫を概算し、Excelについてはデータの流れの整理、VBA化・Power Query活用の方針を提案しました。", "outcome": "過去データに基づく受注確定率の算出と、月初に必要となる在庫量の概算を実施。生産量・在庫水準の判断と、Excel処理の見直しに向けた方針を具体化しました。", "deliverables": ["受注確定率と実績の比較方法", "品種別の出荷傾向・必要在庫の概算", "Excel処理を見直すためのデータフロー"], "note": "支援終了時点でVBA化は未実施です。在庫削減や処理時間短縮の実績値としては掲載していません。"},
  {"id": "smart-factory", "number": "04", "category": "業務改革・ローコード", "topics": ["digital", "people"], "phase": "構想・試作", "title": "既存システムの活用方針を描き、現場入力アプリの試作へ。", "sector": "電気機械器具製造業", "summary": "生産管理・図面管理と部門ごとのExcel業務を整理。目指す姿を共有し、小さく試して進める計画へ落とし込みました。", "result": "部門間で方針を共有し、Power Appsの試作に着手", "problem": "生産管理・図面管理システムを導入していた一方、十分に活用しきれず、営業・設計・製造で個別のExcel業務が残っていました。何をつなぎ、どこから改善するかを共有する必要がありました。", "action": "現状のヒアリングから課題リストを作成し、受注・設計・生産情報をつなぐ将来像と実施スケジュールを整理。Power Appsによる現場の着手・完了入力、Power Queryによるデータ抽出・加工を提案し、実務を題材に操作を指導しました。部門を越えて学ぶキーパーソンの育成も助言しました。", "outcome": "目指す姿と取り組む課題の認識をそろえ、実施計画を具体化。現場入力アプリは、企業側で動作する試作品を作る段階まで進みました。", "deliverables": ["システム活用の将来像・課題リスト", "段階的な実施スケジュール", "現場入力アプリの試作・データ加工の実践指導"], "note": "試作段階の事例です。納品リストの自動生成や全社への本格展開は、支援終了時点で未完了です。"},
  {"id": "inventory-design", "number": "05", "category": "在庫管理・ERP活用", "topics": ["planning", "logistics", "digital"], "phase": "運用の試行", "title": "既存ERPで在庫管理を試行し、帳簿と現物の一致を確認。", "sector": "電気機械器具製造業", "summary": "新規システムの費用と運用負荷を比較し、既存ERPを活用。重点管理品から、入出庫と棚卸の運用を見直しました。", "result": "試行対象で、棚卸時の在庫差異がないことを確認", "problem": "調達リードタイムが長期化し、部品の見込み発注に対応する必要がありました。在庫データと現物のずれは、組立の遅れや余分な発注につながっていました。", "action": "重点管理する部品を選び、マスターデータ、入出庫の登録方法、倉庫の現品管理、担当部門の役割を整理。追加システムの導入費・維持費も比較し、既存ERPの在庫管理機能で始める方法を選択しました。入出庫リストや部品表を用いた運用を試行し、継続できる手順を検討しました。", "outcome": "約2週間の試行範囲では、棚卸でデータと現物の在庫差異がないことを確認。重点管理品の数量を把握する運用を開始し、納期回答にも活用する流れを整えました。", "deliverables": ["重点管理品の選定・マスター整備", "入出庫登録と現品管理の運用手順", "試行後の棚卸確認・今後の改善方針"], "note": "差異がなかったのは試行対象・試行期間の範囲です。バーコード活用と対象品種の拡大は、今後の改善として提案しました。"},
  {"id": "automation-investment", "number": "06", "category": "工程自動化・投資判断", "topics": ["investment"], "phase": "対象選定・投資計画", "title": "自動化する工程を絞り、効果額と投資予算を具体化。", "sector": "電子部品関連製造業", "summary": "人手不足に対し、工程全体を一度に自動化するのではなく、生産量・作業時間・扱いやすさから対象を選びました。", "result": "対象工程・導入候補装置・投資判断の道筋を整理", "problem": "製造人材の確保が難しい中で、自動化を進めたいものの、どの工程から始めるか、いくら投資できるかを判断しにくい状況でした。柔軟な材料の取り扱いなど、技術面の制約もありました。", "action": "品種別の生産量と作業工数を把握し、改善効果の大きい対象工程を選定。手作業を残す部分も含めて実現しやすい自動化範囲を検討しました。作業標準時間と時間当たり費用から効果額を算出し、回収期間を使って投資可能額を見積もる方法を助言。装置メーカーとの検討・品質確認・発注までの進め方を整理しました。", "outcome": "自動化の対象と導入候補装置を選定し、効果額を算出。社内で予算規模を判断し、メーカーとの詳細検討へ進むための計画を具体化しました。", "deliverables": ["品種・工程別の自動化候補の整理", "標準時間に基づく効果額・投資判断方法", "装置導入に向けた実施スケジュール"], "note": "CASE 03と同じ支援先で扱った別テーマです。装置導入後の省人化・投資回収の実績を示す事例ではありません。"},
  {"id": "cutting-investment", "number": "07", "category": "設備投資・事業計画", "topics": ["investment"], "phase": "計画策定・採択", "title": "手作業のボトルネックを、設備投資の事業計画へ。", "sector": "サイン製作・施工関連業", "summary": "加工工程の制約を整理し、NCカッティング設備による生産性・安全性・加工範囲の改善を計画としてまとめました。", "result": "設備投資の計画策定を支援／ものづくり補助金に採択", "problem": "印刷に比べて手作業のカッティング工程の能力が低く、生産のボトルネックとなっていました。厚みのある素材や複雑な形状への対応、作業負荷・安全面の改善も課題でした。", "action": "工程ごとの処理時間と加工上の制約を整理し、NC設備の機能と課題の対応関係を明確化。既存製品の生産性改善に加え、加工できる素材・形状の拡大、新製品開発、技術習得と量産化までを事業計画として整理する支援を行いました。", "outcome": "設備導入の必要性、期待効果、実施体制、取り組みの順序をまとめ、ものづくり補助金の採択につながりました。", "deliverables": ["現状工程とボトルネックの整理", "設備機能と改善効果の対応づけ", "設備投資・技術習得・事業化の計画"], "note": "採択実績は記録で確認しています。計画書の生産性向上目標を、導入後の達成実績としては掲載していません。"},
  {"id": "integrated-production", "number": "08", "category": "生産体制・事業計画", "topics": ["investment", "planning"], "phase": "計画策定", "title": "金型から成形まで、一貫生産に向けた計画を策定。", "sector": "金型製造業", "summary": "顧客側で行っていた成形テストを自社で担う構想を整理。開発の待ち時間と、新たな量産需要の両面から投資を検討しました。", "result": "設備・技術習得・試作・量産をつなぐ計画を整理", "problem": "金型の製造後、顧客の設備でテストするため、輸送や日程調整による待ち時間が発生していました。成形品の納入要望に応えるには、設備だけでなく成形技術と量産体制も必要でした。", "action": "自社に成形機を導入する構想について、金型設計から試作・量産までの工程を整理。設備の役割、技術習得、顧客・設備メーカーとの連携、立ち上げのスケジュールを事業計画にまとめる支援を行いました。", "outcome": "金型開発のリードタイム短縮と成形品の供給を目指し、必要設備・実施体制・段階的な進め方を計画として具体化しました。", "deliverables": ["一貫生産に向けた工程・設備構成", "成形技術の習得と外部連携の体制", "試作から量産への移行スケジュール"], "note": "計画策定支援の事例です。補助金採択、設備導入完了、リードタイム短縮の達成実績としては掲載していません。"},
  {"id": "new-product-production", "number": "09", "category": "新製品・量産化計画", "topics": ["investment"], "phase": "計画策定・採択", "title": "加工技術を新市場へつなぐ、量産化の事業計画を支援。", "sector": "金属加工業", "summary": "新製品の加工上の課題と顧客ニーズを結びつけ、設備投資から技術開発、試作、量産までの段取りを整理しました。", "result": "新分野展開の計画策定を支援／事業再構築補助金に採択", "problem": "新たな用途に向けた製品を事業化するため、加工品質を安定させる設備と技術を確立し、試作から量産供給へ移る道筋を示す必要がありました。", "action": "加工設備の導入目的と顧客の要求を整理。設備メーカー・商社との技術開発、顧客向け試作、量産体制の構築、その後の販路展開を段階的な取り組みとしてまとめ、収益計画と整合する事業計画の策定を支援しました。", "outcome": "技術開発と事業化をつなぐ実施体制・工程・収益計画を整理し、事業再構築補助金の採択につながりました。", "deliverables": ["設備投資と製品・市場ニーズの整理", "技術開発・試作・量産化の段階計画", "販路展開と収益計画の整理"], "note": "採択実績は記録で確認しています。計画書に記載された売上目標や量産化後の効果を、達成済みの実績としては掲載していません。"}
];

const solutions = {
  planning:{problem:'計画づくりに追われ、<br>在庫も納期も見通せない。',items:['生産計画の作成・修正に時間がかかる','過剰在庫と欠品が同時に起きている','調達リードタイムの変化に対応したい'],support:'業務とデータを整理し、<br>使い続けられる計画・管理へ。',description:'生産計画ロジックの構築支援、在庫配置・発注方法の見直し、ERP・MESの活用を組み合わせ、現場に合う運用を設計します。',tags:['生産計画','在庫管理','ERP・MES']},
  logistics:{problem:'物流のどこにムダがあるか、<br>実態をつかみきれない。',items:['人・設備・モノの動きを把握したい','倉庫や構内物流の運用を見直したい','稼働実態を基に設備台数を検討したい'],support:'流れを見える化し、<br>改善の着眼点を具体的に。',description:'人・機械・モノの流れを分析し、物流改善を支援します。IoTやAIを使った定量分析と現場の確認を組み合わせ、運用や設備の見直しにつなげます。',tags:['構内物流','稼働分析','IoT・AI']},
  people:{problem:'改善が一部の人に頼り、<br>現場の活動として続かない。',items:['5Sを導入しても定着しない','改善を担う現場リーダーを育てたい','海外拠点でも改善活動を進めたい'],support:'実際の課題に取り組み、<br>自ら改善できる人を育てる。',description:'5S・IE・リーンの考え方を使い、現場の実務を題材に実践指導を行います。キーパーソンの育成と、改善の進め方・ノウハウの定着を支援します。',tags:['5S・IE','改善リーダー育成','海外現場指導']},
  digital:{problem:'ITを活用したいけれど、<br>何から変えるべきかわからない。',items:['Excelの集計・資料作成に時間がかかる','導入済みのシステムを活用しきれない','現場が使い続けられるツールをつくりたい'],support:'現場に合う技術を選び、<br>日々の仕事に使える形へ。',description:'現場ヒアリングで課題を整理し、Excel・クラウド・ローコード・生成AI等を活用。ツールの試作、業務設計、設備・IT投資の計画策定から運用の定着まで支援します。',tags:['Excel・クラウド','ローコード・生成AI','業務設計']}
};

const grid = document.querySelector('#case-grid');
const dialog = document.querySelector('#case-dialog');
let selectedTopic = 'planning';
let caseTrigger = null;

function renderCases(filter='all') {
  const shown = cases.filter(item => filter==='all'||item.topics.includes(filter));
  grid.replaceChildren(...shown.map(item => {
    const article = document.createElement('article');
    article.className = 'case-card';
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-haspopup','dialog');
    button.setAttribute('aria-label',`${item.title} 詳細を見る`);
    button.innerHTML = `<div class="case-card-top"><span class="case-number">${item.number}</span><span class="case-label">${item.category}</span></div><p class="case-phase">${item.phase}</p><h3>${item.title}</h3><p>${item.summary}</p><p class="case-result">${item.result}</p><div class="case-bottom"><span>${item.sector}</span><span aria-hidden="true">↗</span></div>`;
    button.addEventListener('click',()=>openCase(item,button));
    article.append(button);
    return article;
  }));
  document.querySelector('#case-count').textContent=shown.length;
  document.querySelectorAll('[data-filter]').forEach(button=>{
    const active=button.dataset.filter===filter;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
}

function selectTopic(topic,focus=false) {
  if(!solutions[topic]) return;
  selectedTopic=topic;
  document.querySelectorAll('[data-topic]').forEach(button=>{
    const active=button.dataset.topic===topic;
    button.setAttribute('aria-selected',String(active));
    button.tabIndex=active?0:-1;
    if(active&&focus) button.focus();
  });
  const item=solutions[topic];
  document.querySelector('#solution-panel').setAttribute('aria-labelledby',`tab-${topic}`);
  document.querySelector('#problem-title').innerHTML=item.problem;
  document.querySelector('#problem-list').replaceChildren(...item.items.map(text=>{
    const li=document.createElement('li');li.textContent=text;return li;
  }));
  document.querySelector('#support-title').innerHTML=item.support;
  document.querySelector('#support-description').textContent=item.description;
  document.querySelector('#support-tags').replaceChildren(...item.tags.map(text=>{
    const span=document.createElement('span');span.textContent=text;return span;
  }));
}

function openCase(item,trigger) {
  caseTrigger=trigger;
  document.querySelector('#dialog-category').textContent=`CASE ${item.number} / ${item.category}`;
  document.querySelector('#dialog-title').textContent=item.title;
  document.querySelector('#dialog-sector').textContent=item.sector;
  const content=document.querySelector('#dialog-content');
  content.replaceChildren();
  [['取り組んだ課題',item.problem],['支援・実務の内容',item.action],['成果・支援した範囲',item.outcome]].forEach(([heading,text])=>{
    const h=document.createElement('h3');h.textContent=heading;
    const p=document.createElement('p');p.textContent=text;
    content.append(h,p);
  });
  if(item.deliverables?.length){
    const heading=document.createElement('h3');heading.textContent='具体化したこと';
    const list=document.createElement('ul');
    item.deliverables.forEach(text=>{const li=document.createElement('li');li.textContent=text;list.append(li);});
    content.append(heading,list);
  }
  const note=document.createElement('p');note.className='dialog-note';note.textContent=item.note;content.append(note);
  dialog.showModal();document.body.classList.add('modal-open');dialog.scrollTop=0;
  document.querySelector('.dialog-close').focus();
}

function closeCase(){if(dialog.open) dialog.close();}
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');caseTrigger?.focus();});
dialog.querySelector('.dialog-close').addEventListener('click',closeCase);
dialog.addEventListener('click',event=>{
  if(event.target!==dialog)return;
  const r=dialog.getBoundingClientRect();
  if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeCase();
});
dialog.querySelector('.dialog-contact').addEventListener('click',()=>{closeCase();document.querySelector('#show-contact').focus({preventScroll:true});});

document.querySelectorAll('[data-topic]').forEach(button=>{
  button.addEventListener('click',()=>selectTopic(button.dataset.topic));
  button.addEventListener('keydown',event=>{
    const keys=['ArrowLeft','ArrowRight','Home','End'];if(!keys.includes(event.key))return;
    event.preventDefault();
    const tabs=[...document.querySelectorAll('[data-topic]')];let index=tabs.indexOf(button);
    if(event.key==='Home')index=0;else if(event.key==='End')index=tabs.length-1;else index=(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
    selectTopic(tabs[index].dataset.topic,true);
  });
});
document.querySelectorAll('[data-topic-link]').forEach(link=>link.addEventListener('click',()=>selectTopic(link.dataset.topicLink)));
document.querySelector('.related-link').addEventListener('click',()=>renderCases(selectedTopic));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>renderCases(button.dataset.filter)));

const menuToggle=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
function closeMenu(){menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','メニューを開く');navigation.classList.remove('is-open');}
menuToggle.addEventListener('click',()=>{
  const open=menuToggle.getAttribute('aria-expanded')!=='true';
  menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');navigation.classList.toggle('is-open',open);
});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuToggle.getAttribute('aria-expanded')==='true'){closeMenu();menuToggle.focus();}});
window.addEventListener('resize',()=>{if(window.innerWidth>800)closeMenu();});

const showContact=document.querySelector('#show-contact');
showContact.addEventListener('click',()=>{
  const form=document.querySelector('#contact-form');
  const open=showContact.getAttribute('aria-expanded')!=='true';
  form.hidden=!open;showContact.setAttribute('aria-expanded',String(open));
  showContact.innerHTML=open?'フォームを閉じる <span aria-hidden="true">−</span>':'お問い合わせフォームを開く <span aria-hidden="true">↗</span>';
  const iframe=document.querySelector('#google-form');
  if(open&&!iframe.hasAttribute('src'))iframe.src=iframe.dataset.src;
  if(open)form.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
});
document.querySelector('#copyright-year').textContent=new Date().getFullYear();
renderCases();
