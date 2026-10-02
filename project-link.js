const project = document.querySelector('#projeler .project-copy');
if (project) {
  const link = document.createElement('a');
  link.className = 'button';
  link.href = 'https://providing-moderate-jpeg-backed.trycloudflare.com/';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Uygulamayı aç ↗';
  const note = document.createElement('p');
  note.className = 'muted';
  note.textContent = 'Şifreli erişim · Uygulama sunum sırasında açıktır. Bağlantı açılmıyorsa sunum sona ermiş olabilir.';
  const source = project.querySelector('a.textlink');
  project.insertBefore(link, source);
  project.insertBefore(note, source);
}
