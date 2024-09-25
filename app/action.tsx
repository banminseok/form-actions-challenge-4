"use server";

interface ActionState{
  token : boolean
}

export default async function login(preState:ActionState, formData:FormData) {
  console.log(preState, formData);
  const password = formData.get("password");
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