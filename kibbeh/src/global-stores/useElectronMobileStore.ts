import isElectron from "is-electron";
import { useScreenType } from "../shared-hooks/useScreenType";
import { useHostStore } from "./useHostStore";

export const isElectronMobile = () => {
    const screenType = useScreenType();
    return (
        screenType === "fullscreen" &&
        isElectron() &&
        !useHostStore.getState().isLinux
    );
};
