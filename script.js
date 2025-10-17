document.getElementById('removeBtn').addEventListener('click', async () => {
  const fileInput = document.getElementById('upload');
  const file = fileInput.files[0];
  if (!file) return alert('Please upload an image');

  const formData = new FormData();
  formData.append('image', file);

  const res = await fetch('/api/remove-bg', {
    method: 'POST',
    body: formData
  });

  const data = await res.json();
  if (data.output_url) {
    document.getElementById('preview').src = data.output_url;
  } else {
    alert('Error removing background');
  }
});
