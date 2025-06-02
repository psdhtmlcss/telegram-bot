import TelegramBot from 'node-telegram-bot-api';

const token = '7725550885:AAHQCaNz9x4P2StAw2lkw_8eVOp9pbpjBGw';
const chatId = 526726695; // Замените на ваш реальный chat_id

// Создаем бота с базовыми настройками
const bot = new TelegramBot(token, {polling: true});

function yourAction() {
  // Здесь ваш код действия, например, логика проекта
  console.log('Действие выполнено');

  // Отправляем сообщение в Telegram
  bot.sendMessage(chatId, 'Действие в проекте выполнено успешно!');
}

yourAction()

// Оставляем обработчик сообщений для отладки
bot.on('message', (msg) => {
    console.log('msg:', msg);
    bot.sendMessage(msg.chat.id, 'Привет! Ваш chat_id: ' + msg.chat.id);
});

// Добавляем обработчик для корректного завершения работы
process.on('SIGINT', () => {
    console.log('Завершение работы бота...');
    bot.stopPolling();
    process.exit(0);
});

