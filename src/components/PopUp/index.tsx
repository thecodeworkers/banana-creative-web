import React, { ReactComponentElement, useState } from "react";
import styles from "./styles.module.scss";
import { FormikConfig } from "./formik";
import GeneralInput from "../GeneralInput";
import GeneralButton from "../GeneralButton";
import useTranslation from "next-translate/useTranslation";
import { CircleCross } from "../../../public/resources/svg";
import { Icon } from "@iconify/react";
import { useMutation, gql } from '@apollo/client';

type Info = {
  title: string;
  text: string[];
  checkboxDisclaimer: string[];
  buttonText: string;
  requiredEmail: string,
  invalidEmail: string,
};

const SUBMIT_FORM = gql`
  mutation SubmitForm($email: String!) {
    submitForm(input: { formId: 1, data: [{id: 2, value: $email},] }) {
      errors {
        fieldId
        message
        slug
      }
      message
      success
    }
  }
`;

const PopUp = (info: Info) => {
  const { t } = useTranslation("common");
  const [show, setShow] = useState(true);
  const [check, setCheck] = useState(false)
  const [submitForm, { data, loading, error }] = useMutation(SUBMIT_FORM);

  const handleSubmit = () => {
    if (Object.keys(errors).length < 1 && values?.email && check) {
      submitForm({ variables: { email: values.email } })
        .then(() => setShow(!show))
        .catch((error) => console.log(error));
    }
  };

  const messages = {
    required: t(info?.requiredEmail),
    invalid: t(info?.invalidEmail)
  }

  const {
    values,
    handleSubmit: formikSubmit,
    handleChange,
    errors,
    resetForm,
    touched,
    setTouched,
  } = FormikConfig(handleSubmit, messages);

  const handleOnTouched = (key: string) => {
    setTouched({ ...touched, [key]: true });
  };

  type FormType = {
    key: "email";
    name: string;
  };

  return (
    <>
      <div className={show ? styles._show : styles._hidden}>
        <div className={styles._popup}>
          <button className={styles._close} onClick={() => setShow(!show)}>
            <CircleCross />
          </button>
          <h1 className={styles._title}>{t(info?.title)}</h1>
          <div className={styles._text}>
            <h3>
              {t(info?.text[0])}
              <br className={styles._lineBreak} />
              {t(info?.text[1])}
              <br className={styles._lineBreak} />
              {t(info?.text[2])}
            </h3>
          </div>
          <div className={styles._formContainer}>
            <form className={styles._form} onSubmit={formikSubmit}>
              <div className={styles._input}>
                <GeneralInput
                  name="email"
                  id="email"
                  value={values["email"]}
                  onChange={handleChange}
                  onFocus={() => handleOnTouched("email")}
                  placeholder={"Email*"}
                  error={errors["email"] && touched["email"] ? true : false}
                  errorMessage={errors["email"]}
                  addStyle={styles._inputText}
                />
              </div>

              <div className={styles._checkboxLine}>
                <input
                  type="checkbox"
                  name="checkbox"
                  onClick={()=>{setCheck(!check)}}
                  className={styles._checkbox}
                />
                <div className={styles._checkboxText}>
                  <p>
                    {t(info?.checkboxDisclaimer[0])}
                    <br className={styles._lineBreak} />
                    {t(info?.checkboxDisclaimer[1])}
                  </p>
                </div>
              </div>

              <button type="submit" className={styles._button} onClick={handleSubmit}>
                {t(info?.buttonText)}
                <Icon
                  icon="mdi:arrow-right"
                  width={22}
                  className={styles._arrow}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
