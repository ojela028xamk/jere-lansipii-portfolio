import { Dialog } from "radix-ui";
import css from "./projectsModal.module.scss";

export default function ProjectsModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={css.modal_button}>More Info</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={css.modal_overlay} />
        <Dialog.Content className={css.modal_content}>
          <Dialog.Title className={css.modal_title}>
            Sivuston Otsikko
          </Dialog.Title>
          <Dialog.Description className={css.modal_description}>
            Kuvaus tulee tähän.
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className={css.modal_icon_button} aria-label="Close">
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
