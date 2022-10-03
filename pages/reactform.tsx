import React from 'react'
import { useForm, useWatch, Control } from "react-hook-form";

type FormValues = {
    firstName: string;
    lastName: string;
  };

function IsolateReRender({ control }: { control: Control<FormValues> }) {
    console.log("hiiiiiiiiiii",control);
    
    const firstName = useWatch({
      control,
      name: "firstName",
      defaultValue: "default"
    });
  
    return <div style={{ color: "white" }}>{firstName}</div>;
}

function reactform() {
    const { register, control, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <IsolateReRender control={control} />

      <input type="submit" />
    </form>
  );
   
}

export default reactform