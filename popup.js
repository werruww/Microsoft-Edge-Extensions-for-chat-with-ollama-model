document.getElementById('submitBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value;
  const responseDiv = document.getElementById('response');

  if (!prompt) {
    responseDiv.textContent = 'الرجاء كتابة سؤال!';
    return;
  }

  responseDiv.textContent = 'جاري المعالجة...';

  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-r1:7b', // أو أي نموذج متوفر لديك
        prompt: prompt,
        stream: false
      }),
    });

    const data = await response.json();
    responseDiv.textContent = data.response;
  } catch (error) {
    responseDiv.textContent = 'حدث خطأ: ' + error.message;
  }
});