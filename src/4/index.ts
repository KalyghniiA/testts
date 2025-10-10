enum Gender {
    MALE = "male",
    FEMALE = "female",
}

enum CryptoCoin {
    BITCOIN = "Bitcoin"
}

interface Address {
    "address":string,
    "city": string,
    "state": string,
    "stateCode": string,
    "postalCode": string,
    "coordinates": {
        "lat": number,
        "lng": number
    },
    "country": string
}

interface Bank {
    "cardExpire": string,
    "cardNumber": string,
    "cardType": string,
    "currency": string,
    "iban": string,
}

interface Company {
    "department": string,
    "name": string,
    "title": string,
    "address": Address,
}

interface CryptoWallet {
    "coin": CryptoCoin,
    "wallet": string,
    "network": string
}

interface User {
    "id": number,
    "firstName": string,
    "lastName": string,
    "maidenName": string,
    "age": number,
    "gender": Gender,
    "email": string,
    "phone": string,
    "username": string,
    "password": string,
    "birthDate": string,
    "image": string,
    "bloodGroup": string,
    "height": number,
    "weight": number,
    "eyeColor": string,
    "hair": {
        "color": string,
        "type": string,
    },
    "ip": string,
    "address": Address,
    "macAddress": string,
    "university": string,
    "bank": Bank,
    "company": Company,
    "ein": string,
    "ssn": string,
    "userAgent": string,
    "crypto": CryptoWallet
    "role": string,
}

const getUsers = async (): Promise<void> => {
    try {
        const res: Response = await fetch("https://dummyjson.com/users");
        console.log(res.json());
    } catch (e: unknown) {
        if (e as Error) {
            console.log(e);
        }
    }
}

