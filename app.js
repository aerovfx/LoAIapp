const root = document.documentElement;
const sidebar = document.querySelector('#sidebar');
const scrim = document.querySelector('.scrim');
const menuButton = document.querySelector('[data-open-sidebar]');
const textarea = document.querySelector('#message');
const composer = document.querySelector('[data-composer]');
const sendButton = document.querySelector('.send-button');
const welcome = document.querySelector('[data-welcome]');
const conversation = document.querySelector('[data-conversation]');
const chat = document.querySelector('.chat');

const storedTheme = localStorage.getItem('loai-theme');
const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.dataset.theme = storedTheme || (preferredDark ? 'dark' : 'light');

function setSidebar(open) {
  sidebar.classList.toggle('is-open', open);
  scrim.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
}

function resizeTextarea() {
  textarea.style.height = 'auto';
  textarea.style.height = `${Math.min(textarea.scrollHeight, 140)}px`;
  sendButton.disabled = textarea.value.trim().length === 0;
}

function escapeHtml(value) {
  const node = document.createElement('div');
  node.textContent = value;
  return node.innerHTML;
}

function appendMessage(role, content) {
  const item = document.createElement('article');
  item.className = `message ${role}`;
  if (role === 'assistant') {
    item.innerHTML = `<span class="assistant-avatar" aria-hidden="true">L</span><div class="message-bubble"><p>${content}</p></div>`;
  } else {
    item.innerHTML = `<div class="message-bubble">${escapeHtml(content)}</div>`;
  }
  conversation.append(item);
  chat.scrollTo({ top: chat.scrollHeight, behavior: 'smooth' });
  return item;
}

function demoResponse(prompt) {
  if (/kế hoạch|ra mắt/i.test(prompt)) {
    return 'Hay đấy. Mình sẽ chia kế hoạch thành 4 tuần: <strong>xác định thông điệp</strong>, chuẩn bị nội dung, mở thử nghiệm sớm và ra mắt công khai. Bạn muốn ưu tiên tăng người dùng hay xây nhận diện thương hiệu?';
  }
  if (/viết|giới thiệu|nội dung/i.test(prompt)) {
    return 'Đây là một hướng mở đầu: <strong>“LoAI không chỉ trả lời — LoAI cùng bạn biến suy nghĩ thành hành động.”</strong> Mình có thể phát triển tiếp thành landing page, bài mạng xã hội hoặc email ra mắt.';
  }
  if (/phân tích|xu hướng|dữ liệu/i.test(prompt)) {
    return 'Mình có thể giúp bạn nhóm dữ liệu, nhận diện tín hiệu quan trọng và biến kết quả thành quyết định rõ ràng. Hãy gửi bảng dữ liệu hoặc mô tả câu hỏi bạn đang muốn trả lời.';
  }
  return 'Mình đã hiểu. LoAI có thể cùng bạn phân tích vấn đề, đề xuất hướng đi và biến nó thành các bước cụ thể. Bạn muốn kết quả ngắn gọn hay một kế hoạch chi tiết?';
}

function submitPrompt(rawPrompt) {
  const prompt = rawPrompt.trim();
  if (!prompt) return;
  welcome.hidden = true;
  conversation.hidden = false;
  appendMessage('user', prompt);
  textarea.value = '';
  resizeTextarea();

  const typing = appendMessage('assistant', '<span class="typing" aria-label="LoAI đang trả lời"><i></i><i></i><i></i></span>');
  window.setTimeout(() => {
    typing.remove();
    appendMessage('assistant', demoResponse(prompt));
  }, 720);
}

document.querySelector('[data-theme-toggle]').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('loai-theme', next);
});

menuButton.addEventListener('click', () => setSidebar(true));
document.querySelectorAll('[data-close-sidebar]').forEach((button) => button.addEventListener('click', () => setSidebar(false)));
textarea.addEventListener('input', resizeTextarea);
textarea.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    submitPrompt(textarea.value);
  }
});
composer.addEventListener('submit', (event) => {
  event.preventDefault();
  submitPrompt(textarea.value);
});

document.querySelectorAll('[data-prompt]').forEach((button) => {
  button.addEventListener('click', () => submitPrompt(button.dataset.prompt));
});

document.querySelectorAll('[data-new-chat]').forEach((button) => {
  button.addEventListener('click', () => {
    conversation.replaceChildren();
    conversation.hidden = true;
    welcome.hidden = false;
    setSidebar(false);
    textarea.focus();
  });
});

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    document.querySelector('[data-new-chat]').click();
  }
  if (event.key === 'Escape') setSidebar(false);
});

resizeTextarea();
