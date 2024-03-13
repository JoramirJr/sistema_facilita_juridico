
import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';

export default function Modal({
  trigger,
  children,
  onOpenChange,
  title,
  fixedHeight,
  fixedWidth,
}) {
  return (
    <Dialog.Root open={true} onOpenChange={onOpenChange}>
      {trigger && (
        <Dialog.Trigger asChild>
          {trigger}
        </Dialog.Trigger>
      )}
      <Dialog.Portal>
        <Dialog.Overlay
          className={clsx("bg-blackOverlay inset-0 fixed animate-modalOverlay")}
        />
        <Dialog.Content
          className={clsx(`
          bg-white shadow-card box-border rounded-card
           fixed top-[50%] left-[50%] animate-modalContent
            -translate-x-1/2 -translate-y-1/2
          `)}
        >
          {title && (
            <div className={clsx(
              "flex flex-row justify-start items-center",
              "pt-3 pb-3 pl-3 pr-3 rounded-t-card",
            )}>
              <h2>{title}</h2>
              {onOpenChange && (
                <Dialog.Close asChild>
                  <button
                    className="w-[30px] h-[50px] flex flex-row justify-center items-center ml-2 outline-none"
                    aria-label="Close"
                  >
                    Fechar
                  </button>
                </Dialog.Close>
              )}
            </div>
          )}
          <div className={clsx(
            "max-sm:w-[90vw] sm:min-w-[500px] p-5 ",
            {
              "min-h-[200px] max-h-[80vh]": !fixedHeight,
              "h-[20vh]": fixedHeight === 20,
              "h-[40vh]": fixedHeight === 40,
              "h-[60vh]": fixedHeight === 60,
              "h-[80vh]": fixedHeight === 80,
              "h-screen": fixedHeight === 100,
              "w-[20vw]": fixedWidth === 20,
              "w-[40vw]": fixedWidth === 40,
              "w-[60vw]": fixedWidth === 60,
              "w-[80vw]": fixedWidth === 80,
              "w-screen": fixedWidth === 100,
            }
          )}>
            {children}
          </div>
          {!title && !!onOpenChange && (
            <Dialog.Close asChild>
              <button
                className="absolute top-[16px] right-[16px]"
                aria-label="Close"
              >
                Fechar
              </button>
            </Dialog.Close>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root >
  )
}