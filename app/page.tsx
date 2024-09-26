"use client"

import FormInput from "@/components/form-input";
import { useFormState } from "react-dom";
import login from "./action";
import { EnvelopeIcon,  UserIcon, KeyIcon } from "@heroicons/react/24/solid";
import Button from "@/components/button";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { FireIcon } from "@heroicons/react/24/solid";
import ToastMessage from "@/components/toast-message";

export default function Home() {
  const [state, dispatch] = useFormState(login, null)
  return (
    <div className="flex flex-col gap-10 py-8 px-40">
        <div className="flex flex-col gap-2  items-center *:font-medium">
          <FireIcon className="size-12 text-red-500" />
        </div>
        <form action={dispatch} className="flex flex-col gap-3">
          <FormInput name="email"
            type="email"
            placeholder="Email"
            required
            icon={<EnvelopeIcon className="size-4" />}
            errors={state?.email}
            />
          <FormInput name="user_name"
            type="text"
            placeholder="Username"
            required
            icon={<UserIcon className="size-4"/>}
            errors={state?.userName}
            />
          <FormInput name="password"
            type="password"
            placeholder="Password"
            required
            icon={<KeyIcon className="size-4"/>}
            errors={state?.password}
            />
          <Button  text="Log in"  />
          {(state?.result) ? (
            <ToastMessage 
              message={'Welcome back!'}
              icon={<CheckBadgeIcon className="size-5" />}
            />):("")}
          
        </form>
    </div>
  );
}
