"use client"

import Input from "@/components/input";
import { useFormState } from "react-dom";
import { formLogin} from "./action";
import { EnvelopeIcon,  UserIcon, KeyIcon } from "@heroicons/react/24/solid";
import Button from "@/components/button";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { FireIcon } from "@heroicons/react/24/solid";
import ToastMessage from "@/components/toast-message";

interface ActionState{
  result: boolean;
  password:string[];
  email:string[];
  userName:string[];
}

const initialState: ActionState = { 
  result: false,
  password:[],
  email:[],
  userName:[],
};

export default function Home() {
  const [state,dispatch]= useFormState(formLogin,initialState);
  return (
    <div className="flex flex-col gap-10 py-8 px-40">
        <div className="flex flex-col gap-2  items-center *:font-medium">
          <FireIcon className="size-12 text-red-500" />
        </div>
        <form action={dispatch} className="flex flex-col gap-3">
          <Input name="email"
            type="email"
            placeholder="Email"
            required
            icon={<EnvelopeIcon className="size-4" />}
            errors={state?.email}
            />
          <Input name="user_name"
            type="text"
            placeholder="Username"
            required
            icon={<UserIcon className="size-4"/>}
            errors={state?.userName}
            />
          <Input name="password"
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
