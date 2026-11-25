document.querySelectorAll('form[data-demo]').forEach(form=>{form.addEventListener('submit',event=>{event.preventDefault();const out=form.querySelector('.form-result');out.textContent='Заявка принята в демонстрационном режиме. В реальном проекте здесь подключается CRM или таблица.';form.reset();});});
const area=document.querySelector('[data-area]'),rooms=document.querySelector('[data-rooms]'),total=document.querySelector('[data-total]');
function calc(){if(!area||!total)return;const value=Math.max(20,Number(area.value)||20);const roomFactor=rooms?Number(rooms.value)||1:1;total.textContent=new Intl.NumberFormat('ru-RU').format(Math.round(value*85+roomFactor*650))+' ₽';}
[area,rooms].filter(Boolean).forEach(el=>el.addEventListener('input',calc));calc();
