"use client";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Heading from "../Heading";
import Input from "../inputs/Input";

import Modal from "./Modal";
import Button from "../Button";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal  = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

//   use react form
  const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
    defaultValues: {
        email: '',
        password: ''
    }
  })

  const onToggle = () => {
    loginModal.onClose();
    registerModal.onOpen();
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    // submit
    toast.error('Submit fail')
    setIsLoading(false)
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
        <Heading title="Welcome back" subtitle="Login to your account!" />
        <Input id='email' label="Email" disabled={isLoading} register={register} errors={errors} required  />
        <Input id='password' label="Password" type="password" disabled={isLoading} register={register} errors={errors} required  />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 ">
        <hr />
        {/* TODO: onClick not be implement */}
        <Button outline label="Continue with google" icon={FcGoogle} onClick={()=>signIn('google')}/>
        <Button outline label="Continue with github" icon={AiFillGithub} onClick={() => signIn('github')}/>
        <div className="text-center text-neutral-500 mt-4 font-light">
            <p>First time using Airbnb ?
                {/*TODO:Using Link element is more semantical */}
                <span onClick={onToggle} className="text-neutral-800 cursor-pointer">  Create an account</span>
            </p>
        </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
