import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, telegramNickname, planName, planId } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 },
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 },
      );
    }

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Change text later to your liking
    const text = `
🆕 Нова заявка!

👤 Ім'я: ${name || 'Не вказано'}
📧 Email: ${email}
💬 Telegram: ${telegramNickname ? `@${telegramNickname}` : 'Не вказано'}
План: ${planName || 'Не вказано'} 
ID плану (для БД): ${planId || 'Не вказано'} 
    `.trim();

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: Number(chatId),
        text: text,
      }),
    });

    const data = await response.json();

    if (data.ok) {
      return NextResponse.json(
        { success: true, message: 'Message sent successfully!' },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: `Telegram error: ${data.description || 'Unknown error'}`,
        },
        { status: 500 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Internal server error: ${error}` },
      { status: 500 },
    );
  }
}
