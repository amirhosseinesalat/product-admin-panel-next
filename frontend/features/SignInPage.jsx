import styles from "../components/signPage.module.css";
import Image from "next/image";
import Input from "../inputs/Input";
import { validateSchema } from "../validation/validateSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../api/auth";
import Link from "next/Link";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

function SignInPage() {
  const router = useRouter();
  async function submitHandler(data) {
    async function submitHandler(data) {
      console.log("DATA SENT →", data);
    }

    try {
      const res = await login(data);

      localStorage.setItem("token", res.data.token);

      toast.success("ورود موفقیت آمیز!");
      router.push("/products");
    } catch (err) {
      toast.error("نام کاربری یا رمز اشتباه است");
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateSchema),
  });

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
          <h4>فرم ورود</h4>
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
            <button type="submit">ورود</button>
          </div>
          <Link href="/signup" className={styles.span}>
            <span>ایجاد حساب کاربری!</span>
          </Link>
        </div>
      </form>
    </>
  );
}

export default SignInPage;
