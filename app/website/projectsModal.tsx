import { Dialog } from "radix-ui";
import css from "./projectsModal.module.scss";

export default function ProjectsModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`${css.Button} violet`}>Edit profile</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={css.Overlay} />
        <Dialog.Content className={css.Content}>
          <Dialog.Title className={css.Title}>Edit profile</Dialog.Title>
          <Dialog.Description className={css.Description}>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <fieldset className={css.Fieldset}>
            <label className={css.Label} htmlFor="name">
              Name
            </label>
            <input
              className={css.Input}
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className={css.Fieldset}>
            <label className={css.Label} htmlFor="username">
              Username
            </label>
            <input
              className={css.Input}
              id="username"
              defaultValue="@peduarte"
            />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className={`${css.Button} green`}>Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className={css.IconButton} aria-label="Close">
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
