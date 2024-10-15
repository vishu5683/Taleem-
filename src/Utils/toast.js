  import toast from "react-hot-toast";
  
  export const successToast = (message = "Success") => {
    toast.dismiss();
    toast.success(message);
  };
  export const infoToast = (message = "Success") => {
    toast.dismiss();
    toast(message, {
      icon: "🛡",
      iconTheme: {
        color: "lightblue",
        primary: "#000",
        secondary: "#fff",
      },
      style: {
        border: "1px solid lightblue",
      },
    });
  };
  export const errorToast = (message = "Something went Wrong") => {
    toast.dismiss();
    toast.error(message);
  };
  export const warnToast = (message = "Something went Wrong") => {
    toast.dismiss();
    toast(message, {
      icon: "🛡",
      iconTheme: {
        color: "#37AD23",
        primary: "#000",
        secondary: "#fff",
      },
      style: {
        border: "1px solid #37AD23",
      },
    });
  };
  