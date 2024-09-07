import { useState } from "react";
import { useForm } from "react-hook-form";

export const useFeedBack = () => { 

  const [selectedOpnion, setSelectedOpnion] = useState(0);
  const [selectSatisfy, setSelectSatisfy] = useState(0);

  const {handleSubmit, register, reset } = useForm({ mode: "onBlur" });

  const selectOpnion = (number: number) => {
    switch (number) {
      case 1:
        setSelectedOpnion(1);
        break;
      case 2:
        setSelectedOpnion(2);
        break;
      case 3:
        setSelectedOpnion(3);
        break;
      case 4:
        setSelectedOpnion(4);
        break;
      case 5:
        setSelectedOpnion(5);
        break;
      default:
        break;
    }
  };

  const selectSatisfyOption = (number: number) => { 
    switch (number) {
      case 1:
        setSelectSatisfy(1);
        break;
      case 2:
        setSelectSatisfy(2);
        break;
      case 3:
        setSelectSatisfy(3);
        break;
      case 4:
        setSelectSatisfy(4);
        break;
      case 5:
        setSelectSatisfy(5);
        break;
      default:
        break;
    }
  }

  const onSubmitForm = (data: object) => {
    const userFeedBack = {
      selectOpnion,
      selectSatisfy,
      ...data
    }
    reset()
    return userFeedBack;
  }
  
  return {
    selectOpnion,
    selectedOpnion,
    selectSatisfy,
    selectSatisfyOption,
    handleSubmit,
    register,
    onSubmitForm
  };
}