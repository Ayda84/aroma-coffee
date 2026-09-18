import Footer from "./Footer";
import Navbar from "./Navbar";
import contactImg from "../image/Contact/IMG_2459.jpeg"


export default function Contact(){

    return(
        <>
        <Navbar/>
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-16 gap-8">
            <img src={contactImg} alt="us" className="object-cover md:h-180 h-80 md:mt-30 mt-25 rounded-2xl"/>
            <div className="flex flex-col items-start justify-start gap-4 text-primary md:text-[16px] text-[13px]">
                <p>آدرس: تهران، خیابان کریم‌خان زند، کوچه شهدا، پلاک ۱۴</p>
                <p>شماره تلفن: 22334455-021</p>
                <p>ایمیل: aromacaffee@gmail.com</p>
                <p>ساعات کاری: شنبه تا پنجشنبه، 9 صبح تا 11 شب</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}