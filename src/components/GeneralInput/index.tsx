import React from 'react';
import styles from './styles.module.scss';

const GeneralInput = ({ name, value, placeholder, onChange, id, error, errorMessage, onFocus }: any) => {
  return (
    <>
      <div className={styles._inputContainer}>
        <input
          className={styles._input}
          name={name}
          id={id}
          autoComplete={'off'}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          value={value}
        />
      </div>
      {error && errorMessage && <p className={styles?._validates}>{errorMessage}</p>}
    </>
  );
};

export default GeneralInput;
