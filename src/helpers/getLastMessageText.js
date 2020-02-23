const getLastMessageText = (currentDate) => {
    const hours = currentDate.getHours();

    if (hours < 6 || (hours >= 22 && hours <= 24)) {
        return 'Доброй ночи)';
    }
    if (hours >= 6 && hours < 18) {
        return 'Хорошего дня)';
    }
    if (hours >= 18 && hours < 22) {
        return 'Приятного вечера)';
    }

    return 'Всего доброго!';
};

export default getLastMessageText;
