import styles from "../components/signPage.module.css";
import Image from "next/image";
import Input from "../inputs/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../validation/signupSchema";
import Link from "next/Link";
import { toast } from "react-hot-toast";
import { registerUser } from "../api/auth";
import { useRouter } from "next/router";

function SignUpPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  async function submitHandler(data) {
    try {
      const sendData = {
        username: data.username,
        password: data.password,
      };

      await registerUser(sendData);

      toast.success("ثبت‌نام موفق! لطفاً وارد شوید");
      router.push("/products");
    } catch (err) {
      toast.error(err.response?.data?.message || "خطا در ثبت‌نام!");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.h2}>
          <h2>بوت کمپ بوتواستارت</h2>
        </div>

        <div className={styles.container}>
          <Image
            src="/images/Union.png"
            width={500}
            height={500}
            alt="Picture of the logo"
          />
          <h4>فرم ثبت نام</h4>

          <div className={styles.actives}>
            <Input
              type="text"
              placeholder="نام کاربری"
              error={errors.username?.message}
              {...register("username")}
            />

            <Input
              type="password"
              placeholder="رمز عبور"
              error={errors.password?.message}
              {...register("password")}
            />

            <Input
              type="password"
              placeholder="تکرار رمز عبور"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />

            <button type="submit">ثبت نام</button>
            <Link href="/signin" className={styles.span}>
              <span>حساب کاربری دارید؟</span>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUpPage;
