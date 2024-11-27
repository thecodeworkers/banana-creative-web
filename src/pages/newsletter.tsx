import { useState } from "react";
import { useRouter } from "next/router";
import { GeneralInput } from "@/components";
import { FormikConfig } from "@/components/NewsletterForm/formik";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import styles from "./styles.module.scss";
import data from "../content/data";

const URL = "http://localhost:5002/api/users/subscribe";

export default function Newsletter() {
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation("common");

  const handleOnTouched = (key: string) => {
    setTouched({ ...touched, [key]: true });
  };

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      if (values.firstName && values.lastName && values.email) {
        setIsLoading(true);
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.status > 201) throw new Error("error");

        const json = await response.json();
        if (json) {
          toast.success("Registrado exitosamente");
          setIsLoading(false);
          resetForm()
        }
      }
    } catch (e) {
      setIsLoading(false);
      toast.error(
        "Ocurrió un error al registrarse, valida que el correo electrónico ingresado sea válido"
      );
    }
  };

  const messages = {
    required: "Campo requerido",
    invalid: "Ingrese un formato válido, por ejemplo email@gmail.com",
  };

  const {
    values,
    handleSubmit: formikSubmit,
    resetForm,
    handleChange,
    errors,
    touched,
    setTouched,
  } = FormikConfig(handleSubmit, messages);

  return (
    <>
      <Toaster />
      <Head>
        <title>{t(data?.metadata?.title)}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
        <meta
          name="description"
          content={t(data?.metadata?.description)}
          key="desc"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta property="og:title" content={t(data?.metadata?.title)} />
        <meta property="og:description" content={t(data?.metadata?.title)} />
        <meta property="og:image" content={data?.metadata.ogImage} />
        <meta property="og:url" content={`${router.route}`} />
      </Head>

      <main className={styles._mainNewsletter}>
        <div className={styles._formContainer}>
          <h1 className={styles._title}>{`Let's build impact together.`}</h1>
          <h2 className={styles._subtitle}>
            Suscríbete a nuestro Newsletter y se parte del cambio.
          </h2>

          <form className={styles._form} onSubmit={formikSubmit}>
            <div className={styles._input}>
              <GeneralInput
                name="firstName"
                id="firstName"
                value={values["firstName"]}
                onChange={handleChange}
                onFocus={() => handleOnTouched("firstName")}
                placeholder={"Nombre"}
                error={
                  errors["firstName"] && touched["firstName"] ? true : false
                }
                errorMessage={errors["firstName"]}
                addStyle={styles._inputText}
              />

              <GeneralInput
                name="lastName"
                id="lastName"
                value={values["lastName"]}
                onChange={handleChange}
                onFocus={() => handleOnTouched("lastName")}
                placeholder={"Apellido"}
                error={errors["lastName"] && touched["lastName"] ? true : false}
                errorMessage={errors["lastName"]}
                addStyle={styles._inputText}
              />

              <GeneralInput
                name="email"
                id="email"
                value={values["email"]}
                onChange={handleChange}
                onFocus={() => handleOnTouched("email")}
                placeholder={"Email"}
                error={errors["email"] && touched["email"] ? true : false}
                errorMessage={errors["email"]}
                addStyle={styles._inputText}
              />
            </div>

            <button
              type="submit"
              className={styles._button}
              // onClick={handleSubmit}
            >
              {isLoading ? (
                <span className={styles._loader}></span>
              ) : (
                "Subscribe Now"
              )}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
