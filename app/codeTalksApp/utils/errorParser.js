export default function (err) {
    switch (err) {
        case "auth/user-not-found":
            return "Böyle bir kullanıcı bulunamadı!"
        case "auth/wrong-password":
            return "Hatalı şifre. Lütfen tekrar deneyin."
        case "auth/email-already-in-use":
            return "Bu e-posta adresi ile kayıt yapılmış. Başka bir e-posta adresi deneyin"
        case "auth/weak-password":
            return "Şifre en az 6 karakterden oluşmalı"

        default:
            err;
    }
}