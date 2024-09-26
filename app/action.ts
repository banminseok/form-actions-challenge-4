"use server";

interface ActionState{
  result: boolean;
  password:string[];
  email:string[];
  userName:string[];
}

export async function formLogin(preState:ActionState, formData?:FormData)
:Promise<ActionState> {
  const password = formData?.get("password");
  if(password==='12345'){
    return (
      {
        result: true,
        password:[],
        email:[],
        userName:[],
      }
    );
  }
  return (
    {
      result: false,
      password:["Wrong password."],
      email:[],
      userName:[],
    }
  )
}