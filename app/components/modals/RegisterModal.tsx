"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import axios from "axios";
import Button from "../Button";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  //   TODO:  package further
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registered!");
        registerModal.onClose();
        loginModal.onOpen();
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onToggle = () => {
    registerModal.onClose();
    loginModal.onOpen();
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
      <Input
        label="Name"
        id="name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        label="Email"
        id="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        label="Password"
        id="password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4">
      <hr />
      <Button
        outline
        icon={FcGoogle}
        label="Continue with Google"
        onClick={() => signIn("google")}
      />
      <Button
        outline
        icon={AiFillGithub}
        label="Continue with Github"
        onClick={() => signIn("github")}
      />
      <div className="text-center text-neutral-500 mt-4 font-light">
        <p>
            Already have an account? ?
          {/*TODO:Using Link element is more semantical */}
          <span onClick={onToggle} className="text-neutral-800 cursor-pointer">
            Log in
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      disabled={isLoading}
      onClose={registerModal.onClose}
      body={bodyContent}
      footer={footerContent}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModal;
