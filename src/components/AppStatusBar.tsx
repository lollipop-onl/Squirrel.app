import React from "react";
import { ButtonReload } from "~/components/ButtonReload";
import { IonIcon } from "@ionic/react";
import { reloadOutline } from "ionicons/icons";

type Props = {};

export const AppStatusBar: React.FC<Props> = () => {
  return (
    <div className="flex h-12 w-full items-center bg-black px-4">
      <div className="text-xs font-bold text-white">Squirrel.app</div>
      <div className="ml-auto">
        <ButtonReload>
          <span className="text-white">
            <IonIcon icon={reloadOutline} />
          </span>
        </ButtonReload>
      </div>
    </div>
  );
};
