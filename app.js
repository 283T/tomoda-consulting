'use strict';

const cases = [
  {id:'logistics-analysis',number:'01',category:'物流・見える化',topics:['logistics','digital'],title:'構内物流のムダを見つけ、フォークリフト台数を削減。',sector:'電気機械器具製造業',summary:'カメラ映像をAIで分析。フォークリフトの動きから、構内物流の改善につなげました。',result:'フォークリフトの台数削減を実現',problem:'構内物流のムダを見つけ、設備台数の適正化につなげること。',action:'カメラ映像をAIで分析する現場生産性分析ツールを導入。フォークリフトの動きを分析し、構内物流のムダを抽出しました。',outcome:'分析結果を基に改善を進め、フォークリフト台数の削減を実現しました。',note:'削減台数・削減率は非掲載です。'},
  {id:'leader-development',number:'02',category:'現場改善・人材育成',topics:['people'],title:'海外製造現場で、改善キーパーソン3名を育成。',sector:'生産用機械器具製造業',summary:'講義と現場での実践指導を組み合わせ、現場の改善を担うリーダーを育てました。',result:'改善キーパーソン3名を育成',problem:'海外製造現場で、改善活動を担うリーダーを育成すること。',action:'製造現場のリーダー候補者を対象に、トヨタ生産方式・5Sの講義と、現場での実践指導を行いました。',outcome:'改善キーパーソン3名を育成しました。',note:'企業名・実施年は非掲載です。'},
  {id:'production-planning',number:'03',category:'生産計画・IT活用',topics:['planning','digital'],title:'生産計画の自動化と、Excelの計算高速化を支援。',sector:'電子部品・デバイス製造業',summary:'顧客の内示情報を活用し、過剰生産と欠品の抑制を目指す計画ロジックの構築に助言しました。',result:'計画ロジックの構築・計算高速化を支援',problem:'生産計画策定の自動化と、計算処理の効率化。',action:'顧客から提示される内示情報を活用し、過剰生産と欠品の抑制を目指す生産計画ロジックの構築に助言。Excel機能を活用した計算の高速化も支援しました。',outcome:'生産計画ロジックの構築とExcelの計算高速化について支援しました。',note:'過剰生産・欠品の削減効果を示す数値は非掲載です。'},
  {id:'smart-factory',number:'04',category:'業務改革・IT活用',topics:['digital'],title:'スマートファクトリー化を、具体的な実施計画へ。',sector:'電気機械器具製造業',summary:'現状ヒアリングから課題を整理し、システム活用に向けた方針とスケジュールづくりを支援しました。',result:'課題整理・解決方針・実施計画の策定を支援',problem:'生産管理・図面管理システムを活用し、スマートファクトリー化を進めるための戦略・計画を具体化すること。',action:'現状のヒアリングから具体的な課題リストを作成。課題の解決方針と実施スケジュールの策定を支援しました。',outcome:'システム活用に向けた課題の整理と、解決方針・実施計画の策定を支援しました。',note:'システム導入完了や導入後の数値成果を示す事例ではありません。'},
  {id:'inventory-design',number:'05',category:'在庫管理・ERP活用',topics:['planning','logistics','digital'],title:'調達リードタイムの長期化に、在庫管理の見直しで対応。',sector:'電気機械器具製造業',summary:'部品の見込み発注化に向け、ERPを使った業務設計、マスター整備、倉庫管理方法の策定を支援しました。',result:'業務設計・マスター整備・現品管理を支援',problem:'調達リードタイムが長期化する中で、部品の見込み発注化に対応すること。',action:'ERPを活用した在庫管理業務の設計、マスターデータの整備、倉庫での現品管理方法の策定を支援しました。',outcome:'見込み発注化に向け、システム上の業務と倉庫の運用を合わせて見直す支援を行いました。',note:'在庫削減率や欠品削減率などの数値成果は非掲載です。'}
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
    button.innerHTML = `<div class="case-card-top"><span class="case-number">${item.number}</span><span class="case-label">${item.category}</span></div><h3>${item.title}</h3><p>${item.summary}</p><p class="case-result">${item.result}</p><div class="case-bottom"><span>${item.sector}</span><span aria-hidden="true">↗</span></div>`;
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
