import React, { useCallback } from "react";
import useSWR from "swr";

type Props = {
  children?: React.ReactNode;
};

export const ButtonReload: React.FC<Props> = ({ children }) => {
  const { data } = useSWR(
    "getWebAppUrl",
    (functionName) =>
      new Promise<string>((resolve, reject) => {
        google.script.run
          .withSuccessHandler(resolve)
          .withFailureHandler(reject)
          [functionName]();
      })
  );

  const reload = useCallback(() => {
    if (data) {
      window.open(data, "_top");
    }
  }, [data]);

  console.log(data);

  return (
    <button type="button" onClick={reload}>
      {children}
    </button>
  );
};
