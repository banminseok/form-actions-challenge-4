"use server";
import { EMAIL_REGEX, PASSWORD_MIN_LENGTH, PASSWORD_REGEX, USERNAME_MIN_LENGTH } from "@/lib/constants";
import {z} from "zod";

interface ActionState{
  result: boolean;
  password:string[];
  email:string[];
  userName:string[];
}

const formSchema = z.object({
  email: z.string()
    .email()
    .regex(
      EMAIL_REGEX,
      "Only @zod.com emails are allowed"
    )
    .toLowerCase(),
  username: z.string()
    .min(USERNAME_MIN_LENGTH,"Username should be at least 5 characters long."),
  password: z.string()
    .min(PASSWORD_MIN_LENGTH,"Password should be as least 10 characters logn.")
    .regex(
      PASSWORD_REGEX,
      "Password should contain at least one number (0123456789)."
    )
    .refine((val)=>(val==='1234512345'),{
      message: "Wrong password."
    })
});

export async function formLogin(preState:ActionState, formData:FormData)
:Promise<ActionState> {
  const data = {
    username : formData.get("user_name"),
    email : formData.get("email"),
    password : formData.get("password"),
  }

  const result = await formSchema.safeParseAsync(data);
  const resultError = result.error?.flatten();
  if(!result.success){
    return  {
      result: false,
      password:resultError?.fieldErrors.password ?? [],
      email:resultError?.fieldErrors.email ?? [],
      userName:resultError?.fieldErrors.username ?? [],
    }
  }
  return  {
    result: true,
    password:resultError?.fieldErrors.password ?? [],
    email:resultError?.fieldErrors.email ?? [],
    userName:resultError?.fieldErrors.username ?? [],
  }
}