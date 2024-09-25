"use client"

import FormInput from "@/components/form-input";
import { useFormState } from "react-dom";
import login from "./action";
import { EnvelopeIcon,  UserIcon, KeyIcon } from "@heroicons/react/24/solid";
import Button from "@/components/button";

export default function Home() {
  const [state, dispatch] = useFormState(login, {test:2} as any)
  return (
    <div className="flex flex-col gap-10 py-8 px-40">
        <div className="flex flex-col gap-2  items-center *:font-medium">
          <span className="text-5xl">🌺</span>
        </div>
        <form action={dispatch} className="flex flex-col gap-3">
          <FormInput name="email"
            type="email"
            placeholder="Email"
            required
            icon={<EnvelopeIcon class="size-4" />}
            errors={state?.email}
            />
          <FormInput name="user_name"
            type="text"
            placeholder="Username"
            required
            icon={<UserIcon class="size-4"/>}
            errors={state?.password}
            />
          <FormInput name="password"
            type="password"
            placeholder="Password"
            required
            icon={<KeyIcon class="size-4"/>}
            errors={state?.password}
            />
          <Button  text="Log in"  />
        </form>
    </div>
  );
}
