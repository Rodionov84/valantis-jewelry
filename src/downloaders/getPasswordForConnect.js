export function getPasswordForConnect() {
    const password = 'Valantis';
    const presentDay = new Date();
    const salt = '_'
        + String(presentDay.getUTCFullYear())
        + (presentDay.getUTCMonth() > 9 ? String(presentDay.getUTCMonth() + 1) : (0 + String(presentDay.getUTCMonth() + 1)))
        + (presentDay.getUTCDate() > 9 ? String(presentDay.getUTCDate()) : (0 + String(presentDay.getUTCDate())));
    return password + salt;
}
