// 公開中 / 準備中の件数を自動集計し、絞り込みボタンを動かす
const cards = [...document.querySelectorAll('#works .card')];
const pad = (n) => String(n).padStart(2, '0');
const count = (s) => cards.filter((c) => c.dataset.status === s).length;

document.getElementById('count-live').textContent = pad(count('live'));
document.getElementById('count-soon').textContent = pad(count('soon'));

const chips = document.querySelectorAll('.chip');
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const f = chip.dataset.filter;
    chips.forEach((c) => c.classList.toggle('is-active', c === chip));
    cards.forEach((card) => {
      card.hidden = f !== 'all' && card.dataset.status !== f;
    });
  });
});
