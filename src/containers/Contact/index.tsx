import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
import { FormikConfig } from './formik';
import { Footer, GeneralButton, GeneralInput } from '@/components';
import { useAnimate } from 'framer-motion';
import { Icon } from '@iconify/react';

const Contact = forwardRef<HTMLDivElement>((props: any, ref) => {
  const handleSubmit = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${props?.phone}&text=${props?.contactMessage} Company: ${values?.company} , Email: ${values?.email} , Subject: ${values?.subject}`,
    );
    resetForm();
  };

  const bookACall = () => {
    window.open(`https://api.whatsapp.com/send?phone=${props?.phone}&text=${props?.haveProjectMessage}`);
  };

  const [form, animateForm] = useAnimate();
  const [haveProject, animateProject] = useAnimate();

  const {
    values,
    handleSubmit: formikSubmit,
    handleChange,
    errors,
    resetForm,
    touched,
    setTouched,
  } = FormikConfig(handleSubmit);

  const handleOnTouched = (key: string) => {
    setTouched({ ...touched, [key]: true });
  };

  const toForm = () => {
    animateForm(form.current, { left: 0 }, { duration: 0.75, ease: 'linear', type: 'spring' });
    animateProject(haveProject.current, { left: '-100vw' }, { duration: 0.75, ease: 'linear', type: 'spring' });
  };

  const toHaveProject = () => {
    animateForm(form.current, { left: '100vw' }, { duration: 0.75, ease: 'linear', type: 'spring' });
    animateProject(haveProject.current, { left: 0 }, { duration: 0.75, ease: 'linear', type: 'spring' });
  };

  type FormType = {
    key: 'company' | 'email' | 'subject';
    name: string;
  };

  return (
    <div ref={ref} className={styles._main}>
      <div className={styles._content}>
        {/* Have a Project */}
        <div ref={haveProject} className={styles._animationHaveProjectWrapper}>
          <div className={styles._haveProjectWrapper}>
            <div className={styles._haveProject}>
              <p className={styles._haveProjectText}>{props?.gotTitle}</p>
              <div className={styles._haveProjectButtons}>
                <div className={styles._button}>
                  <GeneralButton text={props?.touchButton} ignoreTheme method={toForm} />
                </div>
                <div className={styles._button}>
                  <GeneralButton method={() => bookACall()} ignoreTheme text={props?.callButton} />
                </div>
              </div>
            </div>

            <Footer
              media={props?.media}
              phone={props?.phone}
              copyright={props?.copyright}
              mediaText={props?.mediaText}
              message={props?.haveProjectMessage}
              mail={props?.email}
            />
          </div>
        </div>
        {/* Form */}
        <div ref={form} className={styles._animationFormWrapper}>
          <div className={styles._formWrapper}>
            <div className={styles._textBox}>
              <p className={styles._goBack} onClick={toHaveProject}>
                <Icon icon='mdi:arrow-left' width={22} />
                {props?.goBackText}
              </p>
              <p className={styles._title}>{props?.contactTitle}</p>
              <div className={styles._textContainer}>
                {props?.address?.map((address: any, index: number | string) => (
                  <p key={index} className={styles._text}>
                    {address}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles._formContainer}>
              <form className={styles._form} onSubmit={formikSubmit}>
                {props?.form?.map((field: FormType, index: number | string) => (
                  <div key={index} className={styles._input}>
                    <GeneralInput
                      name={field?.key}
                      id={field?.key}
                      value={values[field.key]}
                      onChange={handleChange}
                      onFocus={() => handleOnTouched(field?.key)}
                      placeholder={field?.name}
                      error={errors[field.key] && touched[field.key] ? true : false}
                      errorMessage={errors[field.key]}
                    />
                  </div>
                ))}

                <div className={styles._buttonContainer}>
                  <GeneralButton method={handleSubmit} ignoreTheme text={props?.sendButton} />
                </div>
              </form>
              <div>
                {props?.address?.map((address: any, index: number | string) => (
                  <p key={index} className={styles._textResponsive}>
                    {address}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;
