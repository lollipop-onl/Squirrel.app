import React from "react";
import { ButtonReload } from "~/components/ButtonReload";

type Props = {};

export const AppStatusBar: React.FC<Props> = () => {
  return (
    <div className="flex h-12 w-full items-center bg-black px-4">
      <ButtonReload>
        <span className="text-white">reload</span>
      </ButtonReload>
    </div>
  );
};
