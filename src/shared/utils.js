export function capitalize(str) {
    try {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } catch (e) {
        throw e;
    }
}