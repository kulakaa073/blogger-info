'use client';

import { UserInfo } from '@/types/userInfo';
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from 'formik';
import React, { useId } from 'react';
import * as Yup from 'yup';

export interface SubscribeFormProps {
  onSubmit: (values: UserInfo) => void;
  onClose: () => void;
  isSubmitting: boolean;
}

const SubscribeForm = ({
  onSubmit,
  onClose,
  isSubmitting,
}: SubscribeFormProps) => {
  const nameFieldId = useId();
  const nickNameFieldId = useId();
  const emailFieldId = useId();

  const initialValues: UserInfo = {
    name: '',
    telegramNickname: '',
    email: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim(),
    telegramNickname: Yup.string().trim(),
    email: Yup.string()
      .trim()
      .email('Invalid email format')
      .required('Email is required'),
  });

  const handleSubmit = (values: UserInfo, actions: FormikHelpers<UserInfo>) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <div className="relative h-screen pt-39.25 pb-10.25 ds:w-102.5 ds:h-122.75 ds:bg-primary ds:shadow-[4px_6px_10px_4px_#A75DF333_inset] ds:rounded-xbig ds:pt-22.5 ds:pb-18.25 ds:flex ds:flex-col">
      <button
        type="button"
        onClick={() => onClose()}
        className="hidden ds:block absolute top-7 right-[28.99px] rounded-full hover:bg-white/20 transition-all ease-in-out duration-250 z-54"
      >
        <svg className="w-8 h-8 fill-white ">
          <use href="#icon-close" />
        </svg>
      </button>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col justify-between items-center w-full h-full">
          <div>
            <h2 className="font-raleway font-bold text-2xl leading-7 text-center uppercase mb-9">
              Укажіть свої дані
            </h2>
            <div className="flex flex-col gap-4.5 items-center">
              <div className="relative w-77.5 h-11.5">
                <Field
                  id={nameFieldId}
                  name="name"
                  placeholder="Ім’я"
                  className="flex items-center w-full h-full px-5 bg-white shadow-[0px_10px_78px_1px_#7979791F] font-raleway text-sm leading-4 text-primary placeholder:opacity-80 rounded-medium focus:outline-0 border-0"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="absolute top-1/2 right-3 text-red-500 -translate-y-1/2 font-raleway text-sm leading-4"
                />
              </div>
              <div className="relative w-77.5 h-11.5">
                <Field
                  id={nickNameFieldId}
                  name="telegramNickname"
                  placeholder="Нік Telegram"
                  className="flex items-center w-full h-full px-5 bg-white shadow-[0px_10px_78px_1px_#7979791F] font-raleway text-sm leading-4 text-primary placeholder:opacity-80 rounded-medium focus:outline-0 border-0"
                />
                <ErrorMessage
                  name="telegramNickname"
                  component="span"
                  className="absolute top-1/2 right-3 text-red-500 -translate-y-1/2 font-raleway text-sm leading-4"
                />
              </div>
              <div className="relative w-77.5 h-11.5">
                <Field
                  id={emailFieldId}
                  name="email"
                  placeholder="Email"
                  className="flex items-center w-full h-full px-5 bg-white shadow-[0px_10px_78px_1px_#7979791F] font-raleway text-sm leading-4 text-primary placeholder:opacity-80 rounded-medium focus:outline-0 border-0"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="absolute top-1/2 right-3 text-red-500 -translate-y-1/2 font-raleway text-sm leading-4"
                />
              </div>
            </div>
          </div>
          <div className="w-79.25 ds:w-77.5 h-12.5 [background:var(--gradient-main)] p-[1px] rounded-small">
            <button
              type="submit"
              disabled={isSubmitting}
              className="hover:opacity-80 rounded-small font-raleway font-semibold text-sm leading-5 center w-full h-full flex items-center justify-center bg-white text-primary"
            >
              Відправити
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SubscribeForm;
