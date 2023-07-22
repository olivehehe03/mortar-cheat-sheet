import { useEffect } from "react";
import { useFormikContext } from "formik";

interface Props {
  debounceTime?: number;
}

const Autosave = (props: Props) => {
  const { debounceTime = 500 } = props;

  const { values, submitForm } = useFormikContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      void (async () => {
        await submitForm();
      })();
    }, debounceTime);

    return () => clearTimeout(timeout);
  }, [values]);

  return <></>;
};

export default Autosave;
