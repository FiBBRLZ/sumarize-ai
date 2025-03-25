import { cookies } from "next/headers";

export default async function isLoggedIn() {
    const cookie = await cookies();
    if(cookie.get('jwt')) {
        return true;
    }
    return false;
}