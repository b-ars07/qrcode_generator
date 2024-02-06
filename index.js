const express = require('express')
const QRCode = require('qrcode')

const app = express()
const PORT = 3000

app.get('/generate', async (req, res) => {
  const url = req.query.url

  if (!url) {
    return res.status(400).send('URL не указан!')
  }

  try {
    const qr = await QRCode.toDataURL(url)

    res.send(`<img src="${qr}"  alt="qr code: ${url} "/>`)
  } catch (e) {
    res.status(500).send('Ошибка при генерации QR-кода')
  }
})

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу http://localhost:${PORT}`)
})
