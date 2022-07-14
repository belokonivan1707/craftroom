const byteArrayToLong = (byteArray: number[]) => {
    let value = BigInt(0);
    for (let i = byteArray.length - 1; i >= 0; i--) {
        value = value * BigInt(256) + BigInt(byteArray[i]);
    }

    return value;
};

const simpleUrlDecode = (url: string) => {
    url += '=';
    url = url.replaceAll('-', '+'); // 62nd char of encoding
    url = url.replaceAll('_', '/'); // 63rd char of encoding
    if (new Uint32Array(new Uint8Array([1, 2, 3, 4]).buffer)[0] === 0x04030201) {
        return url;
    }
    const splitString = url.split('');
    const reverseArray = splitString.reverse();
    return reverseArray.join('');
};

export const decodeDateCheckNumString = (value: string) => {
    const buffer = atob(simpleUrlDecode(value));
    const charCodesArray = buffer.split('').map(item => item.charCodeAt(0));
    const longRepresentation = byteArrayToLong(charCodesArray);
    const dateAsBytes = longRepresentation >> BigInt(32);
    const checkId = String(BigInt(longRepresentation) - (dateAsBytes << BigInt(32)));
    const year = dateAsBytes >> BigInt(16);
    const monthAndDay = dateAsBytes - (year << BigInt(16));
    const month = monthAndDay >> BigInt(8);
    const day = dateAsBytes - ((year << BigInt(16)) | (month << BigInt(8)));
    const date = `${year}-${month}-${day}`;
    return { checkId, date };
};

export const encodeDateCheckNumString = (checkId: string) => {
    const longToByteArray = (long: bigint) => {
        // we want to represent the input as a 8-bytes array
        const byteArray: bigint[] = [
            BigInt(0),
            BigInt(0),
            BigInt(0),
            BigInt(0),
            BigInt(0),
            BigInt(0),
            BigInt(0),
            BigInt(0)
        ];
        for (let index = 0; index < byteArray.length; index++) {
            const byte = long & BigInt(0xff);
            byteArray[index] = byte;
            long = (long - byte) / BigInt(256);
        }
        return byteArray;
    };
    const arrayBufferToBase64 = (buffer: bigint[]) => {
        let binary = '';
        const bytes = new Uint8Array(buffer.map(item => Number(item.toString())));
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    };
    const getB64 = (value: bigint) => {
        const bytes = longToByteArray(value);
        return arrayBufferToBase64(bytes);
    };
    const urlEncode = (url: string) => {
        if (url.endsWith('=')) {
            url = url.substring(0, url.length - 1);
        }
        url = url.replaceAll('+', '-'); // 62nd char of encoding
        url = url.replaceAll('/', '_'); // 63rd char of encoding
        if (new Uint32Array(new Uint8Array([1, 2, 3, 4]).buffer)[0] === 0x04030201) {
            return url;
        }
        const splitString = url.split('');
        const reverseArray = splitString.reverse();
        return reverseArray.join('');
    };
    const getCheckNum = (id: number) => (id >> 20) * 10000 + (id & 0xffff);
    const date = new Date();
    const dateAsBytes = (date.getFullYear() << 16) | ((date.getMonth() + 1) << 8) | date.getUTCDate();
    const valueToEncode = (BigInt(dateAsBytes) << BigInt(32)) | BigInt(getCheckNum(Number(checkId)));
    return urlEncode(getB64(valueToEncode));
};