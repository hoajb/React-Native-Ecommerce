import { MutableRefObject } from "react";
import { CustomModalProps } from "./CustomModal";

export type CustomModalRef = {
    show: (props: CustomModalProps) => void
    hide: () => void
}

export default class ModalController {
    static modalRef: MutableRefObject<CustomModalRef>;
    static setModalRef = (ref: any) => {
        this.modalRef = ref
    }

    static showLogoutModal = () => {
        this.modalRef.current?.show({
            title: 'E-Commerce App',
            message: 'Are you sure you want to log out?',
            positiveButton: 'Ok',
            negativeButton: 'Cancel',
            icon: 'warning',
        });
    };

    static showImageCameraGalleryModal = (
        { message,
            onCamera,
            onGallery
        }: {
            message: string,
            onCamera: () => void,
            onGallery: () => void,
        }
    ) => {
        this.modalRef.current?.show({
            title: 'E-Commerce App',
            message: message,
            positiveButton: 'Select Camera',
            negativeButton: 'Select Gallery',
            icon: 'check-circle',
            positiveButtonPressed: onCamera,
            negativeButtonPressed: onGallery,
        });
    };

    static showModal = (props: CustomModalProps) => {
        this.modalRef.current?.show(props);
    };

    static hideModal = () => {
        this.modalRef.current?.hide();
    };
}